import { Brain, Zap, Shield, BarChart3 } from "lucide-react";

const FeatureSection = () => {
    return (
        <div className="w-full max-w-7xl mx-auto mt-20 space-y-12 animate-fade-in relative z-10 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Card 1: Beginner-Friendly Setup */}
                <div className="bg-[#111624] border border-white/5 rounded-2xl p-8 pt-12 flex flex-col items-center text-center hover:border-emerald-500/30 transition-all duration-300 h-full shadow-lg shadow-black/20 group">
                    <div className="w-16 h-16 rounded-full bg-[#1A2030] flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300 group-hover:border-emerald-500/30">
                        <BarChart3 className="w-7 h-7 text-emerald-500" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-3">Beginner-Friendly Setup</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Just upload your chart screenshot and let our AI suggest your next move.
                    </p>
                </div>

                {/* Card 2: AI-Powered Analysis */}
                <div className="bg-[#111624] border border-white/5 rounded-2xl p-8 pt-12 flex flex-col items-center text-center hover:border-emerald-500/30 transition-all duration-300 h-full shadow-lg shadow-black/20 group">
                    <div className="w-16 h-16 rounded-full bg-[#1A2030] flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300 group-hover:border-emerald-500/30">
                        <Brain className="w-7 h-7 text-emerald-500" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-3">AI-Powered Analysis</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Advanced pattern recognition & technical analysis
                    </p>
                </div>

                {/* Card 3: Instant Signals */}
                <div className="bg-[#111624] border border-white/5 rounded-2xl p-8 pt-12 flex flex-col items-center text-center hover:border-emerald-500/30 transition-all duration-300 h-full shadow-lg shadow-black/20 group">
                    <div className="w-16 h-16 rounded-full bg-[#1A2030] flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300 group-hover:border-emerald-500/30">
                        <Zap className="w-7 h-7 text-emerald-500" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-3">Instant Signals</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        BUY, SELL, or HOLD recommendations in seconds
                    </p>
                </div>

                {/* Card 4: Risk Management */}
                <div className="bg-[#111624] border border-white/5 rounded-2xl p-8 pt-12 flex flex-col items-center text-center hover:border-emerald-500/30 transition-all duration-300 h-full shadow-lg shadow-black/20 group">
                    <div className="w-16 h-16 rounded-full bg-[#1A2030] flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300 group-hover:border-emerald-500/30">
                        <Shield className="w-7 h-7 text-emerald-500" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-3">Risk Management</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Precise entry, stop-loss, and target levels
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
