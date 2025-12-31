import { TrendingDown, TrendingUp, Clock, BarChart3, Minus, AlertTriangle } from "lucide-react";
import { AnalysisData } from "@/types";

interface SignalHeaderProps {
    data: AnalysisData;
}

export const SignalHeader = ({ data }: SignalHeaderProps) => {
    const isBullish = data.bias === "Bullish";
    const isBearish = data.bias === "Bearish";

    const getIcon = () => {
        if (isBullish) return <TrendingUp className="w-6 h-6 text-bullish" />;
        if (isBearish) return <TrendingDown className="w-6 h-6 text-bearish" />;
        return <Minus className="w-6 h-6 text-neutral" />;
    };

    const getBgClass = () => {
        if (isBullish) return "bg-bullish/20 glow-bullish";
        if (isBearish) return "bg-bearish/20 glow-bearish";
        return "bg-neutral/20";
    };

    return (
        <header className="glass-card p-6 animate-fade-in">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getBgClass()}`}>
                        {getIcon()}
                    </div>
                    <div>
                        <h1 className="text-xl lg:text-2xl font-bold text-foreground tracking-tight">
                            {data.symbol}
                        </h1>
                        <div className="flex items-center gap-3 mt-1">
                            <span className="font-mono text-sm text-muted-foreground">{data.timeframe}</span>
                            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                            <span className="text-sm text-muted-foreground">CHART</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{data.timeframe} Candles</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <BarChart3 className={`w-4 h-4 ${isBullish ? 'text-bullish' : isBearish ? 'text-bearish' : 'text-neutral'}`} />
                        <span className={`${isBullish ? 'text-bullish' : isBearish ? 'text-bearish' : 'text-neutral'} font-medium`}>
                            {data.marketPhase}
                        </span>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
                {/* We don't have live price, so we show Entry as a reference or hide */}
                <div className="price-display text-foreground">
                    Entry: {data.entry}
                </div>

                {/* Only show badge if signal is strong */}
                {(data.signal === "BUY" || data.signal === "SELL") && (
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-md border ${isBullish ? 'bg-bullish/10 border-bullish/20' : 'bg-bearish/10 border-bearish/20'}`}>
                        {isBullish ? <TrendingUp className="w-4 h-4 text-bullish" /> : <TrendingDown className="w-4 h-4 text-bearish" />}
                        <span className={`font-mono text-sm font-medium ${isBullish ? 'text-bullish' : 'text-bearish'}`}>
                            {data.signal}
                        </span>
                    </div>
                )}
            </div>
        </header>
    );
};

export default SignalHeader;
