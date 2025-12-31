import { useState, useRef, useEffect } from 'react';
import { Upload, Send, X, Bot, User as UserIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ChatMessage from './ChatMessage';
import { cn } from '@/lib/utils';
import { analyzeChartWithVision, getDeepSeekTeaching } from '@/services/aiTeachingService';
import { useToast } from '@/hooks/use-toast';
import { Message, Lesson } from '@/types';

interface ChatInterfaceProps {
    selectedLesson: Lesson | null;
    messages: Message[];
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

const ChatInterface = ({ selectedLesson, messages, setMessages }: ChatInterfaceProps) => {
    const [inputMessage, setInputMessage] = useState('');
    const [uploadedChart, setUploadedChart] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { toast } = useToast();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async () => {
        if (!inputMessage.trim() && !uploadedChart) return;

        const userMessage: Message = {
            id: Date.now(),
            type: 'user',
            text: inputMessage,
            chart: uploadedChart || undefined,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, userMessage]);
        setInputMessage('');
        setIsLoading(true);

        try {
            let aiResponse;

            if (uploadedChart) {
                aiResponse = await analyzeChartWithVision(uploadedChart, inputMessage || "Analyze this chart's technical patterns, support, and resistance levels.");
                setMessages(prev => [...prev, {
                    id: Date.now() + 1,
                    type: 'qwen',
                    text: aiResponse,
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }]);
            } else {
                const context = selectedLesson
                    ? `Lesson: ${selectedLesson.title}. Topics to cover: ${selectedLesson.topics.join(', ')}.`
                    : "";

                const history = messages.map(m => ({
                    role: m.type === 'user' ? 'user' as const : 'assistant' as const,
                    content: m.text
                })).filter(h => h.role === 'user' || h.role === 'assistant');

                aiResponse = await getDeepSeekTeaching(inputMessage, context, history);
                setMessages(prev => [...prev, {
                    id: Date.now() + 1,
                    type: 'llama',
                    text: aiResponse,
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }]);
            }
        } catch (error: any) {
            console.error('AI Error:', error);
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                type: 'error',
                text: `Error: ${error.message || 'Failed to connect to AI.'}`,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }]);
        }

        setUploadedChart(null);
        setIsLoading(false);
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedChart(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="max-w-4xl mx-auto glass-card rounded-2xl overflow-hidden h-[80vh] flex flex-col animate-fade-in border border-white/5 shadow-2xl">
            {/* Chat Header */}
            <div className="bg-black/20 border-b border-white/5 p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                            <Bot className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white tracking-tight">AI Trading Tutor</h3>
                            <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest">
                                {selectedLesson ? selectedLesson.title : 'Active Learning Session'}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-[10px] font-bold text-emerald-500 uppercase">Live</span>
                    </div>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 dot-pattern">
                {messages.map(msg => (
                    <ChatMessage key={msg.id} message={msg} />
                ))}

                {isLoading && (
                    <div className="flex gap-3 animate-fade-in">
                        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                            <Bot className="w-5 h-5 text-primary" />
                        </div>
                        <div className="glass-card rounded-2xl p-4 border border-white/5">
                            <div className="flex gap-1.5">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-black/20 border-t border-white/5">
                {uploadedChart && (
                    <div className="mb-3 relative inline-block animate-scale-in">
                        <img
                            src={uploadedChart}
                            alt="Preview"
                            className="h-24 rounded-lg border-2 border-primary/50 shadow-lg"
                        />
                        <button
                            onClick={() => setUploadedChart(null)}
                            className="absolute -top-2 -right-2 bg-destructive text-white rounded-full w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                )}
                <div className="flex gap-3">
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        accept="image/*"
                        className="hidden"
                    />
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => fileInputRef.current?.click()}
                        className="h-12 w-12 rounded-xl bg-white/5 hover:bg-white/10 hover:text-primary transition-all border border-white/5"
                    >
                        <Upload className="w-5 h-5" />
                    </Button>
                    <div className="relative flex-1">
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            placeholder="Ask your tutor anything..."
                            className={cn(
                                "w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 h-12 pr-12 text-sm",
                                "focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20",
                                "transition-all placeholder:text-muted-foreground/50"
                            )}
                        />
                        <Button
                            size="icon"
                            onClick={handleSendMessage}
                            disabled={isLoading}
                            className="absolute right-1 top-1 h-10 w-10 rounded-lg bg-primary hover:bg-primary/90 transition-all"
                        >
                            <Send className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatInterface;
