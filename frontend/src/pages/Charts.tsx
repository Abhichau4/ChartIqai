import { Header } from "@/components/Header";
import TradingViewWidget from "@/components/TradingViewWidget";
import { useEffect } from "react";

const Charts = () => {
    // Set page title and meta for SEO
    useEffect(() => {
        document.title = "Live Trading Charts - Real-Time Forex, Stocks & Crypto Analysis | ChartIQ AI";

        // Update or create meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', 'Professional live trading charts with AI-powered technical analysis for forex, stocks, and cryptocurrency markets. Real-time price action analysis, chart patterns, and trading signals. Free TradingView integration.');

        // Add meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.setAttribute('name', 'keywords');
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', 'live trading charts, real-time chart analysis, forex charts, crypto charts, stock charts, TradingView integration, live price action, real-time technical analysis');
    }, []);

    return (
        <div className="min-h-screen bg-[#0A0F1C] text-foreground flex flex-col overflow-hidden">
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Live Trading Charts - ChartIQ AI",
                    "description": "Professional live trading charts with real-time technical analysis for forex, stocks, and cryptocurrencies.",
                    "url": "https://chartiqai.vercel.app/charts"
                })}
            </script>
            <Header />

            <main className="w-full h-[calc(100vh-65px)] relative z-10 flex flex-col overflow-hidden">
                <h1 className="sr-only">Real-Time Trading Charts with AI-Powered Technical Analysis</h1>
                <div className="w-full h-full glass-card border-none overflow-hidden transition-all duration-300">
                    <TradingViewWidget />
                </div>
            </main>

            {/* Background Elements */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
            </div>

        </div>
    );
};

export default Charts;
