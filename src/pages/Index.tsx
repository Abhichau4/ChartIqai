import { useState } from "react";
import { Header } from "@/components/Header";
import { ChartUploader } from "@/components/ChartUploader";
import { AnalysisResult, AnalysisData } from "@/components/AnalysisResult";
import { useToast } from "@/hooks/use-toast";
import { BarChart3, Shield, Zap, Brain } from "lucide-react";

const Index = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisData | null>(null);
  const { toast } = useToast();

  const handleImageUpload = async (imageData: string) => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis (in production, this would call an AI endpoint)
    setTimeout(() => {
      // Mock response - in production this comes from AI
      const mockResult: AnalysisData = {
        symbol: "NABIL",
        timeframe: "Daily",
        marketPhase: "Uptrend with consolidation",
        signal: "BUY",
        entry: "Rs. 1,250 - 1,265",
        stopLoss: "Rs. 1,210",
        targets: ["Rs. 1,320", "Rs. 1,380"],
        riskReward: "1:2.5",
        confidenceScore: 82,
        reasoning: "The chart shows a clear higher-high, higher-low structure indicating bullish momentum. Price has pulled back to a key support zone around Rs. 1,250 which aligns with the 50-day EMA. Volume shows accumulation pattern with decreasing selling pressure. RSI is bouncing from the 40-45 zone suggesting momentum is shifting bullish.",
        invalidation: "A daily close below Rs. 1,210 would invalidate this setup and signal a potential trend reversal. Also watch for breakdown below the ascending trendline with increased volume.",
        bias: "Bullish",
      };
      
      setAnalysisResult(mockResult);
      setIsAnalyzing(false);
      
      toast({
        title: "Analysis Complete",
        description: `${mockResult.signal} signal detected with ${mockResult.confidenceScore}% confidence`,
      });
    }, 3000);
  };

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced pattern recognition & technical analysis",
    },
    {
      icon: Zap,
      title: "Instant Signals",
      description: "BUY, SELL, or HOLD recommendations in seconds",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Precise entry, stop-loss, and target levels",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {!analysisResult ? (
          <div className="space-y-16">
            {/* Hero Section */}
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <BarChart3 className="w-4 h-4" />
                Nepal Stock Exchange Analysis
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
                Professional{" "}
                <span className="text-gradient-bullish bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  NEPSE Chart
                </span>
                <br />
                Analysis with AI
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Upload any NEPSE chart and get institutional-grade analysis with 
                confidence scoring, precise trade signals, and risk management levels.
              </p>
            </div>

            {/* Upload Section */}
            <ChartUploader 
              onImageUpload={handleImageUpload} 
              isAnalyzing={isAnalyzing} 
            />

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="glass-card p-6 space-y-3 text-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Analysis Results</h2>
              <button
                onClick={() => setAnalysisResult(null)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Analyze Another Chart
              </button>
            </div>
            <AnalysisResult data={analysisResult} />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            Disclaimer: This tool provides educational analysis only. 
            Always conduct your own research before making investment decisions.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
