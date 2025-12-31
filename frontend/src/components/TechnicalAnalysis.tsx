import { TrendingDown, TrendingUp, ArrowDown, ArrowUp, Minus } from "lucide-react";
import { AnalysisData } from "@/types";

interface TechnicalAnalysisProps {
    data: AnalysisData;
}

const TechnicalAnalysis = ({ data }: TechnicalAnalysisProps) => {
    const isBullish = data.bias === "Bullish";
    // We extract some technical bits if possible, otherwise use generic placeholders or reasoning chunks
    // This is a "best effort" component given the unstructured data

    return (
        <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-6">
                {isBullish ? <TrendingUp className="w-5 h-5 text-bullish" /> : <TrendingDown className="w-5 h-5 text-bearish" />}
                Technical Analysis
            </h2>

            <div className="space-y-6">
                {/* Market Structure */}
                <div>
                    <h3 className="data-label mb-3">Market Structure</h3>
                    <div className="space-y-2 text-sm text-secondary-foreground">
                        <div className="flex items-start gap-2">
                            <Minus className="w-4 h-4 text-neutral mt-0.5 flex-shrink-0" />
                            <span>{data.marketPhase}</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <Minus className="w-4 h-4 text-neutral mt-0.5 flex-shrink-0" />
                            <span>{data.timeframe} Chart Analysis</span>
                        </div>
                    </div>
                </div>

                {/* Support & Resistance - Mapped from Entry/SL/Target as proxies */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-bullish/5 border border-bullish/20">
                        <span className="data-label flex items-center gap-1">
                            <ArrowUp className="w-3 h-3" />
                            Support / Entry
                        </span>
                        <div className="mt-2 space-y-1">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">Zone</span>
                                <span className="font-mono text-sm font-medium text-bullish">{data.entry}</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 rounded-lg bg-bearish/5 border border-bearish/20">
                        <span className="data-label flex items-center gap-1">
                            <ArrowDown className="w-3 h-3" />
                            Resistance / Target
                        </span>
                        <div className="mt-2 space-y-1">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">Level</span>
                                <span className="font-mono text-sm font-medium text-bearish">{data.targets[0] || "N/A"}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Patterns */}
                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <h3 className="data-label mb-2">Analysis Notes</h3>
                    <p className="text-sm text-muted-foreground line-clamp-4">
                        {data.reasoning}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TechnicalAnalysis;
