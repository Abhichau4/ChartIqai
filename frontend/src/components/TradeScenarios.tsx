import { AlertTriangle, TrendingDown, TrendingUp, Target, StopCircle } from "lucide-react";
import { AnalysisData } from "@/types";

interface TradeScenariosProps {
    data: AnalysisData;
}

const TradeScenarios = ({ data }: TradeScenariosProps) => {
    const isBullish = data.bias === "Bullish";

    return (
        <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-lg font-semibold text-foreground mb-6">Trade Scenarios</h2>

            <div className="grid lg:grid-cols-2 gap-4">
                {/* Scenario 1 - Main Setup */}
                <div className={`p-5 rounded-lg border-2 relative overflow-hidden ${isBullish ? 'bg-bullish/5 border-bullish/40' : 'bg-bearish/5 border-bearish/40'}`}>
                    <div className={`absolute top-0 right-0 px-2 py-1 text-xs font-semibold rounded-bl ${isBullish ? 'bg-bullish text-bullish-foreground' : 'bg-bearish text-bearish-foreground'}`}>
                        PREFERRED
                    </div>

                    <div className="flex items-center justify-between mb-4">
                        <span className={`text-sm font-semibold ${isBullish ? 'text-bullish' : 'text-bearish'}`}>Scenario 1</span>
                        <div className={`flex items-center gap-1 px-2 py-1 rounded ${isBullish ? 'bg-bullish/20 text-bullish' : 'bg-bearish/20 text-bearish'}`}>
                            {isBullish ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                            <span className="text-xs font-medium">Trend-Following</span>
                        </div>
                    </div>

                    <h3 className="font-medium text-foreground mb-3">{data.signal} Position</h3>
                    <p className="text-xs text-muted-foreground mb-4">Primary setup based on analysis</p>

                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground flex items-center gap-1">
                                <Target className="w-3 h-3" /> Entry
                            </span>
                            <span className="font-mono text-sm text-foreground">{data.entry}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground flex items-center gap-1">
                                <StopCircle className="w-3 h-3" /> Stop-Loss
                            </span>
                            <span className="font-mono text-sm text-destructive">{data.stopLoss}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Targets</span>
                            <span className={`font-mono text-sm ${isBullish ? 'text-bullish' : 'text-bearish'}`}>
                                {data.targets.join(" / ")}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Scenario 2 - Alternate/Invalidation logic as Scenario 2 */}
                <div className="p-5 rounded-lg bg-neutral/5 border border-neutral/30">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-neutral">Scenario 2</span>
                        <div className="flex items-center gap-1 px-2 py-1 rounded bg-neutral/20 text-neutral">
                            <AlertTriangle className="w-3 h-3" />
                            <span className="text-xs font-medium">Alternative</span>
                        </div>
                    </div>

                    <h3 className="font-medium text-foreground mb-3">Wait / Invalidation</h3>
                    <p className="text-xs text-muted-foreground mb-4">If price action invalidates primary setup</p>

                    <div className="space-y-3">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {data.invalidation}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TradeScenarios;
