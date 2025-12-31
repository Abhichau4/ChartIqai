import { useState } from 'react';
import { Header } from '@/components/Header';
import LearnSection from '@/components/LearnSection';
import ChatInterface from '@/components/ChatInterface';
import { Lesson, Message } from '@/types';
import { cn } from '@/lib/utils';
import { GraduationCap, ArrowLeft } from 'lucide-react';

const Learn = () => {
    const [activeTab, setActiveTab] = useState<'grid' | 'chat'>('grid');
    const [messages, setMessages] = useState<Message[]>([]);
    const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

    const learnSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Global AI Trading Academy",
        "description": "Professional trading curriculum for international markets including Forex, Stocks, and Commodities.",
        "provider": {
            "@type": "Organization",
            "name": "Global AI Trading Signals",
            "sameAs": "https://nepse-ai-signals.vercel.app/learn"
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
                            Master Global <span className="text-gradient">Trade</span>
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Institutional-grade education for every market. Learn how the world's top traders move capital.
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
                    <p>© 2025 Global AI Academy • Educational purposes only</p>
                    <p className="font-mono">nepse-ai-signals</p>
                </div>
            </footer>
        </div>
    );
};

export default Learn;
