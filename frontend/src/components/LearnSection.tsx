import { DollarSign, BarChart3, TrendingUp, Brain, Target, LineChart, Layers, Shield, Gauge, Crosshair, Coins, Waves, Clock, Flame, Globe, Zap, Repeat, Activity, ArrowUpDown, BookOpen, TrendingDown, PieChart } from 'lucide-react';
import LessonCard from './LessonCard';
import { Lesson } from '@/types';

interface LearnSectionProps {
    onStartLesson: (lesson: Lesson) => void;
}

const LearnSection = ({ onStartLesson }: LearnSectionProps) => {
    const lessons: Lesson[] = [
        {
            id: 1,
            title: 'Introduction to Forex Trading',
            icon: <DollarSign className="w-6 h-6" aria-label="Forex trading course icon - Learn currency pairs and foreign exchange market fundamentals" />,
            level: 'Beginner',
            duration: '15 min',
            description: 'Start your trading journey by understanding the fundamentals of the foreign exchange market.',
            topics: ['What is Forex?', 'Currency Pairs', 'Pips & Lots', 'Market Hours']
        },
        {
            id: 2,
            title: 'Candlestick Patterns',
            icon: <BarChart3 className="w-6 h-6" aria-label="Candlestick patterns course icon - Master price action and chart patterns" />,
            level: 'Beginner',
            duration: '20 min',
            description: 'Master the art of reading price action through candlestick patterns and formations.',
            topics: ['Doji', 'Hammer', 'Engulfing', 'Shooting Star']
        },
        {
            id: 3,
            title: 'Support & Resistance',
            icon: <TrendingUp className="w-6 h-6" aria-label="Support and resistance course icon - Learn key price levels and breakout trading" />,
            level: 'Intermediate',
            duration: '25 min',
            description: 'Learn to identify key price levels where markets tend to reverse or break through.',
            topics: ['Identifying Levels', 'Role Reversal', 'Breakouts', 'Fakeouts']
        },
        {
            id: 4,
            title: 'Risk Management',
            icon: <Brain className="w-6 h-6" aria-label="Risk management course icon - Essential trading psychology and capital protection" />,
            level: 'Essential',
            duration: '30 min',
            description: 'The most important skill in trading - protect your capital and survive to trade another day.',
            topics: ['2% Rule', 'Position Sizing', 'Risk-Reward', 'Stop Loss']
        },
        {
            id: 5,
            title: 'Technical Indicators',
            icon: <LineChart className="w-6 h-6" aria-label="Technical indicators course icon - Master RSI, MACD, moving averages, Bollinger Bands" />,
            level: 'Intermediate',
            duration: '35 min',
            description: 'Understand how indicators work and when to use them for better trading decisions.',
            topics: ['Moving Averages', 'RSI', 'MACD', 'Bollinger Bands']
        },
        {
            id: 6,
            title: 'Chart Patterns',
            icon: <Layers className="w-6 h-6" aria-label="Chart patterns course icon - Learn head and shoulders, triangles, flags and pennants" />,
            level: 'Intermediate',
            duration: '30 min',
            description: 'Recognize recurring patterns that can signal future price movements.',
            topics: ['Head & Shoulders', 'Double Top/Bottom', 'Triangles', 'Flags & Pennants']
        },
        {
            id: 7,
            title: 'Trading Psychology',
            icon: <Target className="w-6 h-6" />,
            level: 'Advanced',
            duration: '40 min',
            description: 'Master your emotions and develop the mindset of a successful trader.',
            topics: ['Fear & Greed', 'Discipline', 'Trading Plan', 'Journaling']
        },
        {
            id: 8,
            title: 'Advanced Order Types',
            icon: <Crosshair className="w-6 h-6" />,
            level: 'Advanced',
            duration: '25 min',
            description: 'Go beyond market orders with limit, stop, and conditional order strategies.',
            topics: ['Limit Orders', 'Stop Orders', 'OCO Orders', 'Trailing Stops']
        },
        {
            id: 9,
            title: 'Market Analysis',
            icon: <Gauge className="w-6 h-6" />,
            level: 'Advanced',
            duration: '45 min',
            description: 'Combine technical and fundamental analysis for comprehensive market understanding.',
            topics: ['Economic Calendar', 'News Trading', 'Sentiment Analysis', 'Multi-Timeframe']
        },
        {
            id: 10,
            title: 'Portfolio Management',
            icon: <Shield className="w-6 h-6" />,
            level: 'Advanced',
            duration: '35 min',
            description: 'Learn to diversify and manage multiple positions for long-term success.',
            topics: ['Diversification', 'Correlation', 'Position Sizing', 'Rebalancing']
        },
        {
            id: 11,
            title: 'Smart Money Concepts (SMC)',
            icon: <Coins className="w-6 h-6" />,
            level: 'Advanced',
            duration: '50 min',
            description: 'Master institutional trading strategies including order blocks, liquidity, and market structure.',
            topics: ['Order Blocks', 'Fair Value Gaps', 'Liquidity Sweeps', 'Break of Structure']
        },
        {
            id: 12,
            title: 'ICT Trading Concepts',
            icon: <Target className="w-6 h-6" />,
            level: 'Advanced',
            duration: '55 min',
            description: 'Learn Inner Circle Trader methodology for precision entries and institutional order flow.',
            topics: ['Optimal Trade Entry', 'Killzones', 'Displacement', 'Inducement']
        },
        {
            id: 13,
            title: 'Elliott Wave Theory',
            icon: <Waves className="w-6 h-6" />,
            level: 'Advanced',
            duration: '45 min',
            description: 'Understand market cycles through wave patterns and Fibonacci relationships.',
            topics: ['Impulse Waves', 'Corrective Waves', 'Wave Degrees', 'Fibonacci Extensions']
        },
        {
            id: 14,
            title: 'Price Action Trading',
            icon: <Flame className="w-6 h-6" />,
            level: 'Intermediate',
            duration: '40 min',
            description: 'Trade purely based on price movement without indicators for cleaner analysis.',
            topics: ['Pin Bars', 'Inside Bars', 'Trend Trading', 'Range Trading']
        },
        {
            id: 15,
            title: 'Multi-Timeframe Analysis',
            icon: <Clock className="w-6 h-6" />,
            level: 'Intermediate',
            duration: '35 min',
            description: 'Combine multiple timeframes for higher probability trade setups.',
            topics: ['Top-Down Analysis', 'Timeframe Alignment', 'Entry Timing', 'Trend Confirmation']
        },
        {
            id: 16,
            title: 'Fundamental Analysis',
            icon: <Globe className="w-6 h-6" />,
            level: 'Intermediate',
            duration: '40 min',
            description: 'Analyze economic data and news events that drive market movements.',
            topics: ['Economic Indicators', 'Central Banks', 'News Trading', 'Correlations']
        },
        {
            id: 17,
            title: 'Scalping Strategies',
            icon: <Zap className="w-6 h-6" />,
            level: 'Advanced',
            duration: '35 min',
            description: 'Master quick in-and-out trades for small but consistent profits.',
            topics: ['1-Minute Charts', 'Spread Management', 'Quick Decisions', 'Volume Analysis']
        },
        {
            id: 18,
            title: 'Swing Trading Mastery',
            icon: <Repeat className="w-6 h-6" />,
            level: 'Intermediate',
            duration: '45 min',
            description: 'Capture multi-day price swings with proper entry and exit strategies.',
            topics: ['Swing Points', 'Trend Pullbacks', 'Overnight Holds', 'Weekly Analysis']
        },
        {
            id: 19,
            title: 'Fibonacci Trading',
            icon: <Activity className="w-6 h-6" />,
            level: 'Intermediate',
            duration: '40 min',
            description: 'Use Fibonacci retracements and extensions for precise trade entries.',
            topics: ['Golden Ratio', 'Retracement Levels', 'Extensions', 'Confluence Zones']
        },
        {
            id: 20,
            title: 'Supply & Demand Zones',
            icon: <ArrowUpDown className="w-6 h-6" />,
            level: 'Intermediate',
            duration: '35 min',
            description: 'Identify institutional buying and selling zones for high-probability trades.',
            topics: ['Zone Identification', 'Fresh vs Tested', 'Zone Strength', 'Entry Methods']
        },
        {
            id: 21,
            title: 'Breakout Trading Strategy',
            icon: <TrendingUp className="w-6 h-6" />,
            level: 'Intermediate',
            duration: '30 min',
            description: 'Trade breakouts from consolidation with momentum confirmation.',
            topics: ['Range Breakouts', 'Volume Confirmation', 'False Breakouts', 'Retest Entries']
        },
        {
            id: 22,
            title: 'Reversal Trading',
            icon: <TrendingDown className="w-6 h-6" />,
            level: 'Advanced',
            duration: '40 min',
            description: 'Catch market reversals at key levels for maximum profit potential.',
            topics: ['Divergence Signals', 'Exhaustion Patterns', 'Key Level Rejections', 'Confirmation']
        },
        {
            id: 23,
            title: 'Gap Trading Profits',
            icon: <PieChart className="w-6 h-6" />,
            level: 'Advanced',
            duration: '35 min',
            description: 'Profit from price gaps at market open with proven strategies.',
            topics: ['Gap Types', 'Gap Fill Strategy', 'Continuation Gaps', 'News Gaps']
        },
        {
            id: 24,
            title: 'Building a Trading Plan',
            icon: <BookOpen className="w-6 h-6" />,
            level: 'Essential',
            duration: '50 min',
            description: 'Create your personalized trading plan for consistent profitability.',
            topics: ['Entry Rules', 'Exit Strategies', 'Risk Parameters', 'Trading Journal']
        },
    ];

    return (
        <section className="max-w-7xl mx-auto animate-fade-in space-y-12" aria-labelledby="academy-title">
            <div className="text-center space-y-4">
                <h2 id="academy-title" className="text-3xl md:text-5xl font-bold tracking-tight text-white glow-text">
                    Master <span className="text-gradient">AI-Powered Trading Strategies</span> & Technical Analysis
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Learn <strong>algorithmic trading</strong>, <strong>chart pattern recognition</strong>, and <strong>automated technical analysis</strong> with our AI-driven education platform. From beginner fundamentals to institutional strategies.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4" role="region" aria-label="Academy Statistics">
                {[
                    { label: 'Courses', value: lessons.length, icon: '📚' },
                    { label: 'Learners', value: '1,200+', icon: '👥' },
                    { label: 'AI Tutor', value: '24/7', icon: '🤖' },
                    { label: 'Status', value: 'Live', icon: '⚡' },
                ].map((stat, idx) => (
                    <div key={idx} className="glass-card rounded-xl p-4 text-center border border-white/5 animate-slide-up" style={{ animationDelay: `${idx * 50}ms` }}>
                        <div className="text-2xl mb-1" aria-hidden="true">{stat.icon}</div>
                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{stat.label}</div>
                    </div>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6" role="list">
                {lessons.map((lesson, index) => (
                    <div key={lesson.id} role="listitem">
                        <LessonCard
                            lesson={lesson}
                            onStart={onStartLesson}
                            index={index}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LearnSection;
