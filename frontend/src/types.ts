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
    rawContent?: string;
}

export interface Message {
    id: number;
    type: 'user' | 'qwen' | 'llama' | 'error';
    text: string;
    chart?: string;
    timestamp: string;
}

export interface Lesson {
    id: number;
    title: string;
    icon: React.ReactNode;
    level: string;
    duration: string;
    topics: string[];
    description: string;
}
