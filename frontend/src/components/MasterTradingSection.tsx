import { Zap, ScanEye, Globe, Shield } from "lucide-react";

const MasterTradingSection = () => {
    return (
        <div className="w-full max-w-7xl mx-auto mt-24 space-y-12 animate-fade-in relative z-10 px-4">
            {/* Header Section */}
            <div className="text-center space-y-6 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white glow-text">
                    Master Trading with <span className="text-gradient">AI-Powered Analysis</span>
                </h2>
                <p className="text-lg text-muted-foreground/90 leading-relaxed">
                    Welcome to the future of trading analysis. Our advanced AI trading platform combines cutting-edge machine learning with professional trading strategies to help you make informed decisions in Forex trading, Crypto trading, and Stock trading markets.
                </p>
            </div>

            {/* Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Card 1: Real-Time Trading Signals */}
                <div className="bg-[#111624] border border-white/5 rounded-2xl p-8 flex flex-col items-start text-left hover:border-emerald-500/30 transition-all duration-300 h-full shadow-lg shadow-black/20 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                         <Zap className="w-24 h-24 text-emerald-500" />
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-[#1A2030] flex items-center justify-center mb-6 border border-white/5 group-hover:scale-105 transition-transform duration-300 group-hover:border-emerald-500/30">
                        <Zap className="w-6 h-6 text-emerald-500" />
                    </div>
                    <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-emerald-400 transition-colors">Real-Time Trading Signals</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Get instant AI trading signals with precise entry and exit points for automated trading. Our AI analyzes market patterns in real-time to identify profitable trading opportunities across all major markets including Forex, Cryptocurrency, and Stock markets.
                    </p>
                </div>

                {/* Card 2: Advanced Pattern Recognition */}
                <div className="bg-[#111624] border border-white/5 rounded-2xl p-8 flex flex-col items-start text-left hover:border-emerald-500/30 transition-all duration-300 h-full shadow-lg shadow-black/20 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                         <ScanEye className="w-24 h-24 text-emerald-500" />
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-[#1A2030] flex items-center justify-center mb-6 border border-white/5 group-hover:scale-105 transition-transform duration-300 group-hover:border-emerald-500/30">
                        <ScanEye className="w-6 h-6 text-emerald-500" />
                    </div>
                    <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-emerald-400 transition-colors">Advanced Pattern Recognition</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Our AI-powered trading platform uses deep learning to detect complex chart patterns, support and resistance levels, and trend reversals. Perfect for day trading, swing trading strategies, and long-term investment analysis.
                    </p>
                </div>

                {/* Card 3: Multi-Market Trading Support */}
                <div className="bg-[#111624] border border-white/5 rounded-2xl p-8 flex flex-col items-start text-left hover:border-emerald-500/30 transition-all duration-300 h-full shadow-lg shadow-black/20 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                         <Globe className="w-24 h-24 text-emerald-500" />
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-[#1A2030] flex items-center justify-center mb-6 border border-white/5 group-hover:scale-105 transition-transform duration-300 group-hover:border-emerald-500/30">
                        <Globe className="w-6 h-6 text-emerald-500" />
                    </div>
                    <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-emerald-400 transition-colors">Multi-Market Trading Support</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Analyze Forex pairs, Bitcoin, altcoins, stocks, commodities, and indices. Our AI trading system works across all timeframes - from 1-minute scalping to daily swing trading and position trading.
                    </p>
                </div>

                {/* Card 4: Risk Management Tools */}
                <div className="bg-[#111624] border border-white/5 rounded-2xl p-8 flex flex-col items-start text-left hover:border-emerald-500/30 transition-all duration-300 h-full shadow-lg shadow-black/20 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                         <Shield className="w-24 h-24 text-emerald-500" />
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-[#1A2030] flex items-center justify-center mb-6 border border-white/5 group-hover:scale-105 transition-transform duration-300 group-hover:border-emerald-500/30">
                        <Shield className="w-6 h-6 text-emerald-500" />
                    </div>
                    <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-emerald-400 transition-colors">Risk Management Tools</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Every trading signal includes calculated stop-loss levels, take-profit targets, and risk-reward ratios. Make smarter trading decisions with AI-calculated position sizing and risk management for Forex trading and Crypto trading.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MasterTradingSection;
