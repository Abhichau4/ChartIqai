import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Target, StopCircle, TrendingDown, TrendingUp, Brain, Lightbulb, AlertTriangle, Minus } from "lucide-react";
import { AnalysisData } from "@/types";

interface SignalSummaryProps {
    data: AnalysisData;
}

const SignalSummary = ({ data }: SignalSummaryProps) => {
    const isBullish = data.bias === "Bullish";
    const isBearish = data.bias === "Bearish";

    const summaryData = [
        {
            icon: Target,
            label: "Signal",
            value: data.signal,
            valueClass: data.signal === "BUY" ? "text-bullish font-bold" : data.signal === "SELL" ? "text-bearish font-bold" : "text-neutral font-bold",
            sublabel: data.marketPhase
        },
        {
            icon: Target,
            label: "Entry",
            value: data.entry,
            valueClass: "font-mono text-foreground"
        },
        {
            icon: StopCircle,
            label: "Stop Loss",
            value: data.stopLoss,
            valueClass: "font-mono text-destructive font-semibold"
        },
        {
            icon: isBullish ? TrendingUp : TrendingDown,
            label: "Targets",
            value: data.targets.join(" / "),
            valueClass: isBullish ? "font-mono text-bullish" : isBearish ? "font-mono text-bearish" : "font-mono"
        },
        {
            icon: null,
            label: "Risk–Reward",
            value: data.riskReward,
            valueClass: "font-mono text-primary font-semibold"
        },
        {
            icon: Brain,
            label: "AI Confidence",
            value: `${data.confidenceScore}%`,
            valueClass: "font-mono text-primary font-bold"
        },
    ];

    return (
        <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                📊 Signal Summary
            </h2>

            <div className="rounded-lg border border-border overflow-hidden">
                <Table>
                    <TableBody>
                        {summaryData.map((row) => (
                            <TableRow key={row.label} className="hover:bg-muted/30">
                                <TableCell className="py-4">
                                    <div className="flex items-center gap-2">
                                        {row.icon && <row.icon className="w-4 h-4 text-muted-foreground" />}
                                        <span className="text-sm text-muted-foreground">{row.label}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="py-4 text-right">
                                    <span className={`text-sm ${row.valueClass}`}>{row.value}</span>
                                    {row.sublabel && (
                                        <span className="block text-xs text-muted-foreground mt-0.5">{row.sublabel}</span>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Trading Bias */}
            <div className={`mt-6 p-4 rounded-lg border flex items-center gap-4 ${isBullish ? 'bg-bullish/10 border-bullish/30' : isBearish ? 'bg-bearish/10 border-bearish/30' : 'bg-neutral/10 border-neutral/30'}`}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isBullish ? 'bg-bullish/20' : isBearish ? 'bg-bearish/20' : 'bg-neutral/20'}`}>
                    {isBullish ? <TrendingUp className={`w-5 h-5 text-bullish`} /> : isBearish ? <TrendingDown className={`w-5 h-5 text-bearish`} /> : <Minus className="w-5 h-5 text-neutral" />}
                </div>
                <div>
                    <span className="data-label">Trading Bias</span>
                    <p className="text-foreground font-medium mt-1">
                        <span className={isBullish ? 'text-bullish' : isBearish ? 'text-bearish' : 'text-neutral'}>{data.bias}</span> - {data.marketPhase}
                    </p>
                </div>
            </div>

            {/* Reasoning Summary - simplified usage of reasoning prop */}
            <div className="mt-4 p-4 rounded-lg bg-muted/30 border border-border">
                <div className="flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-neutral mt-0.5" />
                    <p className="text-sm text-muted-foreground line-clamp-3">
                        <span className="text-foreground font-medium">Analysis:</span> {data.reasoning}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignalSummary;
