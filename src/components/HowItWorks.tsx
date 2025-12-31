import { Upload, Brain, FileText, TrendingUp } from "lucide-react";

const HowItWorks = () => {
    const steps = [
        {
            id: "01",
            icon: Upload,
            title: "Upload Your Chart",
            description: "Upload any candlestick chart image from MetaTrader, TradingView, or take a screenshot of your trading platform."
        },
        {
            id: "02",
            icon: Brain,
            title: "AI Analysis",
            description: "Our Chart Analyzer AI analyzes your chart using millions of patterns and real market data to identify key insights."
        },
        {
            id: "03",
            icon: FileText,
            title: "Get Detailed Results",
            description: "Receive comprehensive analysis including trend direction, support/resistance levels, and potential trading opportunities."
        },
        {
            id: "04",
            icon: TrendingUp,
            title: "Make Informed Trades",
            description: "Use the actionable insights to make better trading decisions with confidence and precision."
        }
    ];

    return (
        <div id="how-it-works" className="w-full max-w-7xl mx-auto mt-32 space-y-16 animate-fade-in relative z-10 px-4">
            <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">How It Works</h2>
                <p className="text-muted-foreground text-lg">Get AI-powered chart analysis in just 4 simple steps</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step) => (
                    <div key={step.id} className="relative group">
                        <div className="bg-[#111624] border border-white/5 rounded-2xl p-8 pt-12 flex flex-col items-center text-center hover:border-blue-500/30 transition-all duration-300 h-full shadow-lg shadow-black/20">

                            {/* Floating Number Badge */}
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/20 z-20 border-4 border-[#0A0F1C]">
                                {step.id}
                            </div>

                            {/* Icon Container */}
                            <div className="w-16 h-16 rounded-full bg-[#1A2030] flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300 group-hover:border-blue-500/30">
                                {step.id === "02" ? (
                                    <step.icon className="w-7 h-7 text-purple-400" />
                                ) : step.id === "04" ? (
                                    <step.icon className="w-7 h-7 text-yellow-400" />
                                ) : step.id === "03" ? (
                                    <step.icon className="w-7 h-7 text-green-400" />
                                ) : (
                                    <step.icon className="w-7 h-7 text-blue-400" />
                                )}
                            </div>

                            <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;
