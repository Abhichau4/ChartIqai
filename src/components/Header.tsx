import { TrendingUp, BarChart3 } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full py-6 px-4 border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 glow-bullish">
            <BarChart3 className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground tracking-tight">
              NEPSE Analyzer
            </h1>
            <p className="text-xs text-muted-foreground">
              AI-Powered Chart Analysis
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="font-mono text-primary font-medium">LIVE</span>
          </div>
        </div>
      </div>
    </header>
  );
};
