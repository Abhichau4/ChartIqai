import { Target, StopCircle, TrendingDown, TrendingUp, Zap, Minus, AlertTriangle } from "lucide-react";
import { AnalysisData } from "@/types";

interface TradeSignalCardProps {
    data: AnalysisData;
}

const TradeSignalCard = ({ data }: TradeSignalCardProps) => {
    const isBullish = data.bias === "Bullish";
    const isBearish = data.bias === "Bearish";

    const getSignalBadgeClass = () => {
        if (data.signal === "BUY") return "signal-badge-bullish";
        if (data.signal === "SELL") return "signal-badge-bearish";
        return "text-sm font-bold px-3 py-1 rounded bg-neutral/20 text-neutral";
    };

    const getTargetColor = () => isBullish ? "text-bullish" : "text-bearish";
    const getStopColor = () => isBullish ? "text-bearish" : "text-bullish"; // Stop usually opposite of target logic? Or just Red/Green.. usually Stop is Red (Destructive)

    // Parse targets if array
    const tp1 = data.targets[0] || "N/A";
    const tp2 = data.targets[1] || "";

    return (
        <div className="glass-card p-6 gradient-border animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Zap className={`w-5 h-5 ${isBullish ? 'text-bullish' : isBearish ? 'text-bearish' : 'text-neutral'}`} />
                    Trade Signal
                </h2>
                <span className={getSignalBadgeClass()}>{data.signal}</span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Entry */}
                <div className="p-4 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-2 mb-2">
                        <Target className="w-4 h-4 text-primary" />
                        <span className="data-label">Entry</span>
                    </div>
                    <div className="font-mono text-lg font-semibold text-foreground break-words">
                        {data.entry}
                    </div>
                    <span className="text-xs text-muted-foreground">entry zone</span>
                </div>

                {/* Stop Loss */}
                <div className={`p-4 rounded-lg border bg-destructive/10 border-destructive/20`}>
                    <div className="flex items-center gap-2 mb-2">
                        <StopCircle className="w-4 h-4 text-destructive" />
                        <span className="data-label">Stop Loss</span>
                    </div>
                    <div className="font-mono text-lg font-semibold text-destructive break-words">
                        {data.stopLoss}
                    </div>
                    <span className="text-xs text-muted-foreground">invalidation</span>
                </div>

                {/* TP1 */}
                <div className={`p-4 rounded-lg border ${isBullish ? 'bg-bullish/10 border-bullish/20' : 'bg-bearish/10 border-bearish/20'}`}>
                    <div className="flex items-center gap-2 mb-2">
                        {isBullish ? <TrendingUp className="w-4 h-4 text-bullish" /> : <TrendingDown className="w-4 h-4 text-bearish" />}
                        <span className="data-label">Target 1</span>
                    </div>
                    <div className={`font-mono text-lg font-semibold ${isBullish ? 'text-bullish' : isBearish ? 'text-bearish' : 'text-neutral'} break-words`}>
                        {tp1}
                    </div>
                    <span className="text-xs text-muted-foreground">primary goal</span>
                </div>

                {/* TP2 (Generic or Risk Reward box if TP2 missing) */}
                {!tp2 ? (
                    <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                        <div className="flex flex-col">
                            <span className="text-sm text-muted-foreground mb-1">R:R Ratio</span>
                            <span className="font-mono text-lg font-bold text-primary">{data.riskReward}</span>
                            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Risk Reward</span>
                        </div>
                    </div>
                ) : (
                    <div className={`p-4 rounded-lg border ${isBullish ? 'bg-bullish/10 border-bullish/20' : 'bg-bearish/10 border-bearish/20'}`}>
                        <div className="flex items-center gap-2 mb-2">
                            {isBullish ? <TrendingUp className="w-4 h-4 text-bullish" /> : <TrendingDown className="w-4 h-4 text-bearish" />}
                            <span className="data-label">Target 2</span>
                        </div>
                        <div className={`font-mono text-lg font-semibold ${isBullish ? 'text-bullish' : isBearish ? 'text-bearish' : 'text-neutral'}`}>
                            {tp2}
                        </div>
                        <span className="text-xs text-muted-foreground">extended goal</span>
                    </div>
                )}
            </div>

            {/* R:R Footer if not shown above */}
            {tp2 && (
                <div className="mt-6 p-4 rounded-lg bg-secondary/50 border border-border">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Risk–Reward Ratio</span>
                        <span className="font-mono text-lg font-bold text-primary">{data.riskReward}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TradeSignalCard;
