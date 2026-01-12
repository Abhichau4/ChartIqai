import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
    const faqs = [
        {
            question: "What is ChartIQ AI?",
            answer: "ChartIQ AI is an advanced AI-powered chart analysis platform that provides real-time trading signals and automated technical analysis for Forex, Stocks, and Cryptocurrency markets using Llama 3.2 Vision AI technology."
        },
        {
            question: "How does AI chart analysis work?",
            answer: "Our AI uses advanced computer vision (Llama 3.2 90B Vision) to analyze candlestick charts, identify patterns, detect support and resistance levels, and generate trading signals with confidence scores and risk-reward ratios."
        },
        {
            question: "How accurate is AI for chart analysis?",
            answer: "AI chart analysis accuracy depends on chart quality and market conditions. Our system provides confidence scores (0-100%) with each signal. While AI excels at pattern recognition and data analysis, all signals should be verified with your own research and risk management strategy."
        },
        {
            question: "Can AI predict forex market movements?",
            answer: "AI cannot predict markets with certainty, but it can identify high-probability patterns and trends in forex charts based on historical data and technical indicators. Our AI provides probability-based signals rather than guaranteed predictions."
        },
        {
            question: "Is ChartIQ AI free to use?",
            answer: "Yes, ChartIQ AI offers free AI-powered chart analysis and trading signals. Simply upload your chart image and receive instant AI analysis with no registration required."
        },
        {
            question: "What markets does ChartIQ AI support?",
            answer: "ChartIQ AI supports analysis for all major markets including Forex (currency pairs), Stocks (global equities), Cryptocurrencies, Commodities (Gold, Oil, etc.), and CFDs. Any candlestick chart format is supported."
        },
        {
            question: "How accurate are the AI trading signals?",
            answer: "Our AI provides confidence scores with each signal (0-100%). While our technology is highly advanced, all analysis is for educational purposes only and should not be considered financial advice. Always conduct your own research and risk management."
        },
        {
            question: "What is automated technical analysis?",
            answer: "Automated technical analysis uses machine learning algorithms to instantly identify chart patterns, calculate technical indicators (RSI, MACD, Bollinger Bands), detect support/resistance levels, and generate trading signals without manual analysis."
        }
    ];

    return (
        <section className="max-w-4xl mx-auto py-16 px-4" id="faq">
            <div className="text-center mb-12 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
                    <HelpCircle className="w-4 h-4" />
                    <span>FAQ</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                    Frequently Asked Questions
                </h2>

                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Everything you need to know about ChartIQ AI and our AI-powered trading signals
                </p>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-2xl shadow-2xl shadow-primary/5 ring-1 ring-white/10">
                <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="border border-white/5 rounded-lg px-6 py-2 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-200"
                        >
                            <AccordionTrigger className="text-left hover:no-underline">
                                <span className="text-base md:text-lg font-semibold text-white pr-4">
                                    {faq.question}
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>

            <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                    Have more questions?{" "}
                    <a
                        href="https://github.com/Abhichau4/ChartIqai/issues"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 underline transition-colors"
                    >
                        Contact us on GitHub
                    </a>
                </p>
            </div>
        </section>
    );
};

export default FAQSection;
