import { Brain, TrendingUp, Shield, BarChart3, ExternalLink } from "lucide-react";

const WhyChooseSection = () => {
    return (
        <section className="w-full relative py-20 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl opacity-20" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl opacity-20" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-14 border border-white/5 bg-[#0A0F1C]/80 backdrop-blur-xl shadow-2xl shadow-black/40">
                    
                    {/* Badge */}
                    <div className="flex justify-center mb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
                            <Brain className="w-3.5 h-3.5" />
                            <span>Advanced Market Intelligence</span>
                        </div>
                    </div>

                    <div className="text-center space-y-6 mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                            Why Choose AI for <span className="text-gradient">Trading Analysis?</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            <strong className="text-white font-medium">AI trading</strong> has revolutionized how traders approach financial markets. Traditional manual <strong className="text-white font-medium">trading analysis</strong> can take hours, but our AI-powered platform delivers comprehensive <strong className="text-white font-medium">trading signals</strong> in seconds.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Feature 1 */}
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                                <TrendingUp className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Multi-Market Mastery</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Whether you're into <strong className="text-white">Forex trading</strong>, <strong className="text-white">Crypto trading</strong>, or <strong className="text-white">Stock market trading</strong>, our platform helps beginners and experienced traders alike maximize their potential.
                            </p>
                        </div>

                         {/* Feature 2 */}
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                                <BarChart3 className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Data-Driven Confidence</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                The AI analyzes thousands of historical patterns to identify high-probability <strong className="text-white">trading setups</strong> with precise confidence scores, removing emotional bias.
                            </p>
                        </div>
                        
                         {/* Feature 3 */}
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group">
                             <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                                <Shield className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Comprehensive Coverage</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Our <strong className="text-white">automated trading signals</strong> cover EUR/USD, Gold (XAU/USD), <strong className="text-white">Bitcoin (BTC)</strong>, Ethereum (ETH), and major indices. No complex installation required.
                            </p>
                        </div>

                        {/* Disclaimer Box */}
                        <div className="p-6 rounded-2xl bg-yellow-500/[0.03] border border-yellow-500/10 hover:bg-yellow-500/[0.05] transition-colors">
                            <h4 className="text-yellow-500 font-semibold mb-2 flex items-center gap-2">
                                <Shield className="w-4 h-4" /> Important Disclaimer
                            </h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                All <strong className="text-muted-foreground font-medium">trading signals</strong> and analysis are for educational purposes only. <strong className="text-muted-foreground font-medium">Trading</strong> involves risk. Always conduct your own research.
                            </p>
                        </div>
                    </div>

                    <div className="text-center pt-4 border-t border-white/5">
                        <a href="https://www.tradingview.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors group">
                            <span>Market Data provided by TradingView</span>
                            <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
