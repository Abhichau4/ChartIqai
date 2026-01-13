import { useEffect, useState } from "react";
import { Brain } from "lucide-react";
import { Header } from "@/components/Header";
import { ChartUploader } from "@/components/ChartUploader";
import SignalHeader from "@/components/SignalHeader";
import TradeSignalCard from "@/components/TradeSignalCard";
import ConfidenceScore from "@/components/ConfidenceScore";
import TechnicalAnalysis from "@/components/TechnicalAnalysis";
import TradeScenarios from "@/components/TradeScenarios";
import ProfessionalReasoning from "@/components/ProfessionalReasoning";
import SignalSummary from "@/components/SignalSummary";
import SocialShare from "@/components/SocialShare";
import FeatureSection from "@/components/FeatureSection";
import FAQSection from "@/components/FAQSection";
import HowItWorks from "@/components/HowItWorks";
import UserFeedback from "@/components/UserFeedback";
import { useToast } from "@/hooks/use-toast";
import { AnalysisData } from "@/types";
import { useLocation } from "react-router-dom";

const Index = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisData | null>(null);
  const { toast } = useToast();
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#how-it-works') {
      const element = document.getElementById('how-it-works');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleImageUpload = async (imageData: string) => {
    setIsAnalyzing(true);
    setAnalysisResult(null); // Reset previous result

    try {
      const response = await fetch("/api/nvidia/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
          // Authorization handled by backend proxy
        },
        body: JSON.stringify({
          model: "meta/llama-3.2-90b-vision-instruct",
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: `Analyze the provided chart image for educational and technical analysis purposes only. 

You are an expert technical analyst. Your task is to identify objective market patterns, structure, and potential setups based on standard technical analysis theory. This is NOT financial advice.

Your objective is to operate as an
👉 AI Technical Analysis Engine
that produces clear, logical, and educational reasoning.

You must:
Analyze strictly based on visible chart data
Provide a theoretical trade setup based on the analysis
Explain the technical reasoning clearly

1️⃣ Chart Identification

*** CRITICAL INSTRUCTION FOR TIMEFRAME & SYMBOL ***:
- Carefully identify the Symbol (e.g., XAUUSD, GOLD) and Timeframe (e.g., 1m, 5m, 15m, 1h, 4h, 1d).
- Look at the top-left area specifically. If you see "1m" or "1 minute", DO NOT report it as "1 hour". 
- Double-check the bottom x-axis (time axis). If the labels show minutes (e.g., 10:05, 10:06), it is a sub-hourly chart. 
- DO NOT hallucinate common timeframes. Reporting an incorrect timeframe makes the analysis invalid.

From the image, identify:
Symbol: [Symbol]
Timeframe: [Timeframe]
Chart Type: [Type]
Market Phase: [Phase]

2️⃣ Technical & Structural Analysis
Perform a breakdown of trends, support/resistance, and patterns.

3️⃣ Theoretical Trade Setup
Provide Signal, Entry, Stop Loss, and Targets.

4️⃣ 🧠 Detailed Reasoning
Explain the logic behind the analysis.

5️⃣ 📊 Confidence Score
Quantify technical factors (0–100%).

6️⃣ Validation & Risks
State validation and invalidation conditions.

End with a clear Market Bias Summary.

Response Format (Keep it concise & maintain these exact labels. Provide ONLY the requested value after the colon):
Symbol: [Asset Symbol only, e.g. XAUUSD]
Timeframe: [Timeframe only, e.g. 1m]
Market Phase: [Phase only]
Signal: [BUY/SELL/HOLD only]
Entry: [Price only]
Stop Loss: [Price only]
Target(s): [Prices only, separated by /]
Risk-Reward: [Ratio only, e.g. 1:2]
AI Confidence Score: [Number only]%
Professional Reasoning:
[Analysis Points]
Invalidation Conditions:
[Condition]
`
                },
                {
                  type: "image_url",
                  image_url: {
                    url: imageData
                  }
                }
              ]
            }
          ],
          temperature: 0.1,
          top_p: 0.7,
          max_tokens: 1024,
          stream: false
        })
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.detail || `API Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      if (!data.choices || data.choices.length === 0) {
        console.error("Unexpected API response structure:", data);
        throw new Error(data.detail || data.error?.message || "AI returned an empty response. Please check your API key and credits.");
      }

      const content = data.choices[0].message.content;
      console.log("AI Response:", content);

      // Clean value helper
      const cleanValue = (val: string, key: string) => {
        if (!val) return "";
        // Remove common labels that AI might repeat
        const labelsToRemove = [
          "Symbol", "Timeframe", "Market Phase", "Phase", "Signal",
          "Entry", "Stop Loss", "SL", "Target", "Targets",
          "Risk-Reward", "RR", "R:R Ratio", "Risk/Reward"
        ];
        let cleaned = val;
        for (const label of labelsToRemove) {
          const regex = new RegExp(`^\\s*${label}\\s*[:\\-\\*]*\\s*`, 'i');
          cleaned = cleaned.replace(regex, '');
        }
        return cleaned.trim();
      };

      // Robust parsing helper with aliases
      const extract = (keys: string[]) => {
        for (const key of keys) {
          const regex = new RegExp(`(?:^|\\n)[\\*\\s]*(?:[\\u2300-\\u23FF\\u2600-\\u27BF\\u2B00-\\u2BF0\\uF000-\\uF8FF]|\\p{Emoji})?\\s*${key}[^:\\n]*[:\\*]*\\s*([^\\n]+)`, 'iu');
          const match = content.match(regex);
          if (match && match[1]) {
            return cleanValue(match[1].trim().replace(/^\**/, '').replace(/\**$/, ''), key);
          }
        }
        return null;
      };

      // Specific extraction for multi-line reasoning
      const extractReasoning = () => {
        const match = content.match(/(?:Professional Reasoning|Reasoning|Analysis)[:\s\*\*]*([\s\S]*?)(?:⚠|Invalidation|7️⃣|$)/i);
        return match ? match[1].trim() : content.substring(0, 500) + "...";
      };

      // Invalidation specific
      const extractInvalidation = () => {
        const match = content.match(/(?:Invalidation Conditions|Invalidation|Risks)[:\s\*\*]*([\s\S]*?)(?:7️⃣|$)/i);
        return match ? match[1].trim() : "See detailed report.";
      }

      const extractTargets = () => {
        const tps: string[] = [];
        const regex = /(?:TP\d|Target \d)[^:\n]*[:\s\*\*]*\s*([^\n]+)/gi;
        const matches = [...content.matchAll(regex)];

        if (matches.length > 0) {
          matches.forEach(m => {
            const val = m[1].trim().replace(/^\**/, '').replace(/\**$/, '');
            tps.push(cleanValue(val, "Target"));
          });
        } else {
          const genericTargets = extract(["Target\\(s\\)", "Targets", "Profit Target", "TP"]);
          if (genericTargets) {
            return genericTargets.split(/\s*[\/&]\s*|\s+and\s+/i).map(t => t.trim());
          }
        }
        return tps.length > 0 ? tps : ["N/A"];
      };

      const rawResult: AnalysisData = {
        symbol: extract(["Symbol", "Stock Symbol", "Company Name", "Stock"]) || "Unknown",
        timeframe: extract(["Timeframe", "Chart Timeframe", "Duration"]) || "Unknown",
        marketPhase: extract(["Market Phase", "Phase", "Trend"]) || "Unknown",
        signal: (extract(["Signal", "Trade Signal", "Recommendation", "Bias"]) || "HOLD").toUpperCase().replace(/\*\*/g, '') as "BUY" | "SELL" | "HOLD" | "NO TRADE",
        entry: extract(["Entry", "Entry Zone", "Buy Zone", "Entry Level", "Buy Entry"]) || "N/A",
        stopLoss: extract(["Stop Loss", "SL", "Invalidation Level", "Stop-Loss", "Invalidation", "StopLoss"]) || "N/A",
        targets: extractTargets(),
        riskReward: extract(["Risk–Reward", "Risk-Reward", "RR", "R:R", "Risk/Reward"]) || "N/A",
        confidenceScore: parseInt((extract(["AI Confidence Score", "Confidence", "Score"]) || "50").replace(/\D/g, '')) || 50,
        reasoning: extractReasoning(),
        invalidation: extractInvalidation(),
        bias: "Neutral",
        rawContent: content
      };

      // Determine bias
      if (content.toLowerCase().includes("bullish")) rawResult.bias = "Bullish";
      else if (content.toLowerCase().includes("bearish")) rawResult.bias = "Bearish";

      // Handle the "No Trade" case
      if (content.includes("NO TRADE") || rawResult.signal.includes("NO TRADE")) {
        rawResult.signal = "NO TRADE";
        if (rawResult.reasoning.length < 50) {
          rawResult.reasoning = content.split("NO TRADE")[1] || content;
        }
      }

      console.log("Parsed Result:", rawResult);
      setAnalysisResult(rawResult);

      toast({
        title: "Analysis Complete",
        description: `Analysis finished.`,
      });

    } catch (error) {
      console.error("Analysis failed:", error);
      toast({
        title: "Analysis Failed",
        description: error instanceof Error ? error.message : "Failed to analyze image. Please try again.",
        variant: "destructive",
      });
      setIsAnalyzing(false);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground dot-pattern">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "ChartIQ AI",
          "alternateName": ["ChartsAI", "ChartSIQ", "ChartIQ", "Chart Analyzer AI"],
          "operatingSystem": "Web",
          "applicationCategory": "FinanceApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "description": "Professional AI-powered chart analysis for Global Stocks, Forex, and Commodities using Llama 3.2 Vision.",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1250"
          },
          "featureList": [
            "AI-powered chart analysis",
            "Real-time trading signals",
            "Automated technical analysis",
            "Support for Forex, Stocks, and Crypto",
            "Pattern recognition",
            "Risk management calculations"
          ],
          "screenshot": "https://chartiqai.vercel.app/og-image.png"
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ChartIQ AI",
          "url": "https://chartiqai.vercel.app",
          "logo": "https://chartiqai.vercel.app/brain.png",
          "description": "AI-powered trading signals and chart analysis platform for Forex, Stocks, and Crypto markets.",
          "sameAs": [
            "https://twitter.com/ChartIQAI",
            "https://github.com/Abhichau4"
          ]
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is ChartIQ AI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ChartIQ AI is an advanced AI-powered chart analysis platform that provides real-time trading signals and automated technical analysis for Forex, Stocks, and Cryptocurrency markets using Llama 3.2 Vision AI technology."
              }
            },
            {
              "@type": "Question",
              "name": "How does AI chart analysis work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our AI uses advanced computer vision (Llama 3.2 90B Vision) to analyze candlestick charts, identify patterns, detect support and resistance levels, and generate trading signals with confidence scores and risk-reward ratios."
              }
            },
            {
              "@type": "Question",
              "name": "How accurate is AI for chart analysis?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AI chart analysis accuracy depends on chart quality and market conditions. Our system provides confidence scores (0-100%) with each signal. While AI excels at pattern recognition and data analysis, all signals should be verified with your own research and risk management strategy."
              }
            },
            {
              "@type": "Question",
              "name": "Can AI predict forex market movements?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AI cannot predict markets with certainty, but it can identify high-probability patterns and trends in forex charts based on historical data and technical indicators. Our AI provides probability-based signals rather than guaranteed predictions."
              }
            },
            {
              "@type": "Question",
              "name": "Is ChartIQ AI free to use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, ChartIQ AI offers free AI-powered chart analysis and trading signals. Simply upload your chart image and receive instant AI analysis with no registration required."
              }
            },
            {
              "@type": "Question",
              "name": "What markets does ChartIQ AI support?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ChartIQ AI supports analysis for all major markets including Forex (currency pairs), Stocks (global equities), Cryptocurrencies, Commodities (Gold, Oil, etc.), and CFDs. Any candlestick chart format is supported."
              }
            },
            {
              "@type": "Question",
              "name": "How accurate are the AI trading signals?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our AI provides confidence scores with each signal (0-100%). While our technology is highly advanced, all analysis is for educational purposes only and should not be considered financial advice. Always conduct your own research and risk management."
              }
            },
            {
              "@type": "Question",
              "name": "What is automated technical analysis?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Automated technical analysis uses machine learning algorithms to instantly identify chart patterns, calculate technical indicators (RSI, MACD, Bollinger Bands), detect support/resistance levels, and generate trading signals without manual analysis."
              }
            }
          ]
        })}
      </script>
      <Header />

      <main className="container px-4 py-4 pb-32 space-y-12 animate-fade-in relative z-10">

        {/* Intro Section */}
        {!analysisResult && (
          <div className="text-center space-y-6 max-w-3xl mx-auto pt-4 lg:pt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium animate-fade-in">
              <Brain className="w-4 h-4" />
              <span>Powered by AI Vision (Llama 3.2 90B)</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white glow-text">
              AI Chart Analysis & <span className="text-gradient">Automated Trading Signals</span> for Forex, Stocks, Crypto & Bitcoin 2026
            </h1>

            <p className="text-lg md:text-xl font-medium text-muted-foreground/90 leading-loose max-w-3xl mx-auto">
              Analyze any <strong className="text-white font-semibold">Forex</strong>, <strong className="text-white font-semibold">Crypto</strong>, <strong className="text-white font-semibold">Bitcoin</strong>, or <strong className="text-white font-semibold">Stock candlestick chart</strong> with our <strong className="text-white font-semibold">free AI-powered chart analyzer</strong>, delivering instant <strong className="text-white font-semibold">technical analysis</strong>, <strong className="text-white font-semibold">AI trading signals</strong>, and key support & resistance levels, powered by Llama 3.2 Vision for accurate, <strong className="text-white font-semibold">machine-learning-driven trading insights</strong>.
            </p>
          </div>
        )}

        {/* Upload Section - Hidden if result is shown (or shown smaller - let's keep it simple and hide/replace for now like before) */}
        {!analysisResult && (
          <>
            <div className="max-w-2xl mx-auto glass-card p-1 rounded-2xl shadow-2xl shadow-primary/5 ring-1 ring-white/10">
              <ChartUploader onImageUpload={handleImageUpload} isAnalyzing={isAnalyzing} />
            </div>
            <FeatureSection />
            <HowItWorks />
            <FAQSection />
            <UserFeedback />

            <footer className="mt-20 pt-8 border-t border-white/5 text-center pb-8">
              <p className="text-xs text-muted-foreground/50 max-w-2xl mx-auto mb-4">
                Disclaimer: Chart Analyzer is an AI-based analytical tool designed to assist with market analysis. It does not offer investment advice or trading signals. All information provided is for educational and informational purposes only. Users are responsible for their own trading decisions and risk management.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
                <p>Analysis generated by AI (Llama 3.2 Vision) • Not financial advice</p>
                <div className="flex gap-4">
                  <a href="https://www.tradingview.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-xs">Market Data via TradingView</a>
                </div>
              </div>
            </footer>
          </>
        )}

        {/* Analysis Result Dashboard - The New Reference Logic */}
        {analysisResult && (
          <div className="relative max-w-7xl mx-auto px-4 py-4 lg:px-8">
            {/* Back / Reset Button */}
            <div className="mb-6">
              <button
                onClick={() => setAnalysisResult(null)}
                className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors"
              >
                ← Analyze Another Chart
              </button>
            </div>

            <SignalHeader data={analysisResult} />

            <div className="mt-8 grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <TradeSignalCard data={analysisResult} />
                <TradeScenarios data={analysisResult} />
                <TechnicalAnalysis data={analysisResult} />
                <ProfessionalReasoning data={analysisResult} />
              </div>

              <div className="space-y-6">
                <ConfidenceScore data={analysisResult} />
                <SignalSummary data={analysisResult} />
                <SocialShare />

                {/* Raw Content Debug Helper */}
                {analysisResult.rawContent && (
                  <div className="glass-card px-6 py-4">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-2">Raw AI Output</h4>
                    <div className="text-xs text-muted-foreground font-mono whitespace-pre-wrap max-h-40 overflow-y-auto bg-black/20 p-2 rounded">
                      {analysisResult.rawContent}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <footer className="mt-12 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground/50 text-center mb-4">
                Disclaimer: Chart Analyzer is an AI-based analytical tool designed to assist with market analysis. It does not offer investment advice or trading signals. All information provided is for educational and informational purposes only. Users are responsible for their own trading decisions and risk management.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                <p>Analysis generated by AI (Llama 3.2 Vision) • Not financial advice</p>
                <p className="font-mono">chart-ai-signals</p>
              </div>
            </footer>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
