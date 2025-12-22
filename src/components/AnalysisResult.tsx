import { 
  TrendingUp, 
  TrendingDown, 
  Minus, 
  Target, 
  AlertTriangle,
  BarChart3,
  Clock,
  Shield,
  Zap
} from "lucide-react";
import { ConfidenceScore } from "./ConfidenceScore";

export interface AnalysisData {
  symbol: string;
  timeframe: string;
  marketPhase: string;
  signal: "BUY" | "SELL" | "HOLD" | "NO TRADE";
  entry: string;
  stopLoss: string;
  targets: string[];
  riskReward: string;
  confidenceScore: number;
  reasoning: string;
  invalidation: string;
  bias: "Bullish" | "Bearish" | "Neutral";
}

interface AnalysisResultProps {
  data: AnalysisData;
}

export const AnalysisResult = ({ data }: AnalysisResultProps) => {
  const getSignalStyle = () => {
    switch (data.signal) {
      case "BUY":
        return "signal-buy";
      case "SELL":
        return "signal-sell";
      case "HOLD":
        return "signal-hold";
      default:
        return "signal-neutral";
    }
  };

  const getSignalIcon = () => {
    switch (data.signal) {
      case "BUY":
        return <TrendingUp className="w-4 h-4" />;
      case "SELL":
        return <TrendingDown className="w-4 h-4" />;
      case "HOLD":
        return <Minus className="w-4 h-4" />;
      default:
        return <AlertTriangle className="w-4 h-4" />;
    }
  };

  const getBiasStyle = () => {
    switch (data.bias) {
      case "Bullish":
        return "text-primary";
      case "Bearish":
        return "text-destructive";
      default:
        return "text-accent";
    }
  };

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Header Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Symbol Card */}
        <div className="glass-card p-5 space-y-2">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-accent" />
            <span className="data-label">Symbol</span>
          </div>
          <p className="text-2xl font-mono font-bold text-foreground">{data.symbol}</p>
        </div>

        {/* Timeframe Card */}
        <div className="glass-card p-5 space-y-2">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-accent" />
            <span className="data-label">Timeframe</span>
          </div>
          <p className="text-xl font-mono font-semibold text-foreground">{data.timeframe}</p>
        </div>

        {/* Market Phase Card */}
        <div className="glass-card p-5 space-y-2">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-accent" />
            <span className="data-label">Market Phase</span>
          </div>
          <p className="text-lg font-medium text-foreground capitalize">{data.marketPhase}</p>
        </div>
      </div>

      {/* Signal and Confidence Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Signal Card */}
        <div className="glass-card p-6 space-y-4">
          <p className="data-label">Trading Signal</p>
          <div className="flex items-center gap-4">
            <div className={`signal-badge ${getSignalStyle()}`}>
              {getSignalIcon()}
              <span>{data.signal}</span>
            </div>
            <span className={`font-medium ${getBiasStyle()}`}>
              {data.bias} Bias
            </span>
          </div>
        </div>

        {/* Confidence Score */}
        <ConfidenceScore score={data.confidenceScore} />
      </div>

      {/* Trade Parameters */}
      <div className="glass-card p-6 space-y-5">
        <div className="flex items-center gap-2 pb-2 border-b border-border">
          <Target className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">Trade Parameters</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <p className="data-label">🟢 Entry Zone</p>
            <p className="data-value text-lg">{data.entry}</p>
          </div>
          <div className="space-y-1">
            <p className="data-label">🔴 Stop Loss</p>
            <p className="data-value text-lg text-destructive">{data.stopLoss}</p>
          </div>
          <div className="space-y-1">
            <p className="data-label">🟣 Target(s)</p>
            <div className="space-y-0.5">
              {data.targets.map((target, i) => (
                <p key={i} className="data-value">TP{i + 1}: {target}</p>
              ))}
            </div>
          </div>
          <div className="space-y-1">
            <p className="data-label">⚖ Risk-Reward</p>
            <p className="data-value text-lg text-primary">{data.riskReward}</p>
          </div>
        </div>
      </div>

      {/* Reasoning */}
      <div className="glass-card p-6 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-border">
          <Shield className="w-5 h-5 text-accent" />
          <h3 className="text-lg font-semibold">Professional Reasoning</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">{data.reasoning}</p>
      </div>

      {/* Invalidation */}
      <div className="glass-card p-6 space-y-4 border-warning/20">
        <div className="flex items-center gap-2 pb-2 border-b border-border">
          <AlertTriangle className="w-5 h-5 text-warning" />
          <h3 className="text-lg font-semibold text-warning">Invalidation Conditions</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">{data.invalidation}</p>
      </div>
    </div>
  );
};
