import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import LearnSection from '@/components/LearnSection';
import ChatInterface from '@/components/ChatInterface';
import { Lesson, Message } from '@/types';
import { cn } from '@/lib/utils';
import { GraduationCap, ArrowLeft } from 'lucide-react';

const Learn = () => {
    // Set page title and meta for SEO
    useEffect(() => {
        document.title = "Learn AI Trading Strategies, Technical Analysis & Chart Patterns | Free Trading Academy - ChartIQ AI";

        // Update or create meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', 'Free AI trading academy. Master AI trading strategies, automated technical analysis, chart pattern recognition, and algorithmic trading. Learn forex trading, stock market investing, cryptocurrency trading, and Bitcoin analysis with AI-powered interactive courses. Machine learning trading education for beginners to advanced traders worldwide.');
    }, []);

    const [activeTab, setActiveTab] = useState<'grid' | 'chat'>('grid');
    const [messages, setMessages] = useState<Message[]>([]);
    const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

    const learnSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "ChartIQ AI Trading Course - AI-Powered Technical Analysis & Trading Strategies",
        "description": "Comprehensive AI trading course covering automated technical analysis, chart pattern recognition, algorithmic trading strategies for Forex, Stocks, and Commodities. Learn machine learning trading and AI-powered market analysis provided by ChartIQ AI (ChartsAI).",
        "provider": {
            "@type": "Organization",
            "name": "ChartIQ AI",
            "sameAs": "https://chartiqai.vercel.app/learn"
        }
    };

    const startLesson = (lesson: Lesson) => {
        setSelectedLesson(lesson);
        setActiveTab('chat');
        setMessages([{
            id: Date.now(),
            type: 'llama',
            text: `**Welcome to: ${lesson.title}** 🎓\n\nI'm your AI instructor. I'll guide you through this lesson with clear explanations, real examples, and interactive practice.\n\n**What we'll cover:**\n${lesson.topics.map((t, i) => `${i + 1}. ${t}`).join('\n')}\n\n**Duration:** ${lesson.duration}\n**Level:** ${lesson.level}\n\nReady to begin? Ask me anything or type "start lesson" to proceed! 🚀`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
    };

    return (
        <div className="min-h-screen bg-background text-foreground dot-pattern">
            <script type="application/ld+json">
                {JSON.stringify(learnSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://chartiqai.vercel.app/"
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Learn",
                            "item": "https://chartiqai.vercel.app/learn"
                        }
                    ]
                })}
            </script>
            <Header />

            <main className={cn(
                "container px-4 py-8 animate-fade-in relative z-10",
                activeTab === 'grid' ? "pb-32" : "pb-10"
            )}>
                {/* Breadcrumb / Back button when in chat */}
                {activeTab === 'chat' && (
                    <button
                        onClick={() => setActiveTab('grid')}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Academy Library
                    </button>
                )}

                {/* Hero Section - Hidden in chat mode */}
                {activeTab === 'grid' && (
                    <div className="text-center space-y-4 max-w-3xl mx-auto pt-4 lg:pt-8 bg-black/20 pb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-fade-in">
                            <GraduationCap className="w-4 h-4" />
                            <span>Global Masterclass</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white glow-text">
                            Master <span className="text-gradient">AI Trading Strategies</span> & Technical Analysis
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Learn <strong>AI trading strategies</strong>, <strong>automated technical analysis</strong>, and <strong>chart pattern recognition</strong> with our complete AI-powered curriculum. Master <strong>algorithmic trading</strong> for forex, stocks, and crypto markets.
                        </p>
                    </div>
                )}

                <div className={cn(
                    "transition-all duration-500",
                    activeTab === 'grid' ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none hidden"
                )}>
                    <LearnSection onStartLesson={startLesson} />
                </div>

                <div className={cn(
                    "transition-all duration-500",
                    activeTab === 'chat' ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none hidden"
                )}>
                    <ChatInterface
                        selectedLesson={selectedLesson}
                        messages={messages}
                        setMessages={setMessages}
                    />
                </div>
            </main>

            <footer className="mt-10 pt-8 border-t border-white/5 text-center pb-8 bg-background/80 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-muted-foreground">
                    <p>© 2025 Chart Analyzer Ai • Educational purposes only</p>
                    <p className="font-mono">nepse-ai-signals</p>
                </div>
            </footer>
        </div>
    );
};

export default Learn;
