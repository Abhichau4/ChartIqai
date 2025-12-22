import { useEffect, useState } from "react";
import { Brain } from "lucide-react";

interface ConfidenceScoreProps {
  score: number;
}

export const ConfidenceScore = ({ score }: ConfidenceScoreProps) => {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedScore(score);
    }, 100);
    return () => clearTimeout(timer);
  }, [score]);

  const getScoreColor = () => {
    if (score >= 90) return "bg-primary";
    if (score >= 75) return "bg-primary/80";
    if (score >= 60) return "bg-warning";
    return "bg-destructive";
  };

  const getScoreLabel = () => {
    if (score >= 90) return "Institutional Grade";
    if (score >= 75) return "Strong Setup";
    if (score >= 60) return "Moderate Confidence";
    return "Low Confidence";
  };

  const getScoreTextColor = () => {
    if (score >= 90) return "text-primary";
    if (score >= 75) return "text-primary/80";
    if (score >= 60) return "text-warning";
    return "text-destructive";
  };

  return (
    <div className="glass-card p-6 space-y-4">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
          <Brain className="w-5 h-5 text-accent" />
        </div>
        <div>
          <p className="data-label">AI Confidence Score</p>
          <p className={`text-2xl font-mono font-bold ${getScoreTextColor()}`}>
            {animatedScore}%
          </p>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="confidence-bar">
          <div
            className={`confidence-fill ${getScoreColor()}`}
            style={{ width: `${animatedScore}%` }}
          />
        </div>
        <p className={`text-sm font-medium ${getScoreTextColor()}`}>
          {getScoreLabel()}
        </p>
      </div>

      <div className="pt-2 border-t border-border">
        <p className="text-xs text-muted-foreground">
          {score >= 60 
            ? "Setup meets minimum professional standards"
            : "Setup does not meet minimum standards — wait for confirmation"}
        </p>
      </div>
    </div>
  );
};
