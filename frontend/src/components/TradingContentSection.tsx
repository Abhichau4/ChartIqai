import { TrendingUp, Brain, LineChart, Shield } from "lucide-react";

const TradingContentSection = () => {
    return (
        <section className="max-w-7xl mx-auto mt-20 mb-16 px-4 space-y-12">
            {/* Main Trading Content */}
            <div className="glass-card p-8 md:p-12 rounded-2xl space-y-8">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Master Trading with AI-Powered Analysis
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Welcome to the future of <strong className="text-white">trading analysis</strong>. Our advanced AI trading platform combines cutting-edge machine learning with professional <strong className="text-white">trading strategies</strong> to help you make informed decisions in <strong className="text-white">Forex trading</strong>, <strong className="text-white">Crypto trading</strong>, and <strong className="text-white">Stock trading</strong> markets.
                    </p>
                </div>

                {/* Trading Features Grid */}
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                                <TrendingUp className="w-5 h-5 text-emerald-500" />
                            </div>
                            <h3 className="text-xl font-semibold text-white">Real-Time Trading Signals</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Get instant <strong className="text-white">AI trading signals</strong> with precise entry and exit points for <strong className="text-white">automated trading</strong>. Our AI analyzes market patterns in real-time to identify profitable <strong className="text-white">trading opportunities</strong> across all major markets including <strong className="text-white">Forex</strong>, <strong className="text-white">Cryptocurrency</strong>, and <strong className="text-white">Stock markets</strong>.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                                <Brain className="w-5 h-5 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-semibold text-white">Advanced Pattern Recognition</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Our AI-powered <strong className="text-white">trading platform</strong> uses deep learning to detect complex chart patterns, support and resistance levels, and trend reversals. Perfect for <strong className="text-white">day trading</strong>, swing <strong className="text-white">trading strategies</strong>, and long-term investment analysis.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                                <LineChart className="w-5 h-5 text-purple-500" />
                            </div>
                            <h3 className="text-xl font-semibold text-white">Multi-Market Trading Support</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Analyze <strong className="text-white">Forex pairs</strong>, <strong className="text-white">Bitcoin</strong>, altcoins, stocks, commodities, and indices. Our <strong className="text-white">AI trading system</strong> works across all timeframes - from 1-minute scalping to daily swing <strong className="text-white">trading</strong> and position <strong className="text-white">trading</strong>.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                                <Shield className="w-5 h-5 text-yellow-500" />
                            </div>
                            <h3 className="text-xl font-semibold text-white">Risk Management Tools</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Every <strong className="text-white">trading signal</strong> includes calculated stop-loss levels, take-profit targets, and risk-reward ratios. Make smarter <strong className="text-white">trading decisions</strong> with AI-calculated position sizing and risk management for <strong className="text-white">Forex trading</strong> and <strong className="text-white">Crypto trading</strong>.
                        </p>
                    </div>
                </div>
            </div>

            {/* Why Choose AI Trading Section */}
            <div className="glass-card p-8 md:p-12 rounded-2xl space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Why Choose AI for Trading Analysis?
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                        <strong className="text-white">AI trading</strong> has revolutionized how traders approach financial markets. Traditional manual <strong className="text-white">trading analysis</strong> can take hours, but our AI-powered platform delivers comprehensive <strong className="text-white">trading signals</strong> in seconds.
                    </p>
                    <p>
                        Whether you're into <strong className="text-white">Forex trading</strong>, <strong className="text-white">Crypto trading</strong>, or <strong className="text-white">Stock market trading</strong>, our platform helps beginners and experienced traders alike. The AI analyzes thousands of historical patterns to identify high-probability <strong className="text-white">trading setups</strong> with confidence scores.
                    </p>
                    <p>
                        Our <strong className="text-white">automated trading signals</strong> cover popular markets like EUR/USD, GBP/USD, Gold (XAU/USD), <strong className="text-white">Bitcoin (BTC)</strong>, Ethereum (ETH), and major stock indices. Simply upload your chart screenshot and get instant professional <strong className="text-white">trading analysis</strong> - no complex software installation required.
                    </p>
                    <p className="text-sm text-muted-foreground/70 border-l-2 border-yellow-500/30 pl-4 py-2">
                        <strong className="text-yellow-500">Disclaimer:</strong> All <strong className="text-white">trading signals</strong> and analysis are for educational purposes only. <strong className="text-white">Trading</strong> involves risk, and you should never trade with money you cannot afford to lose. Always conduct your own research and consult with licensed financial advisors.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TradingContentSection;
