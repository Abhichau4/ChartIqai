import { cn } from '@/lib/utils';
import { Message } from '@/types';

interface ChatMessageProps {
    message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
    const isUser = message.type === 'user';

    const getAvatar = () => {
        switch (message.type) {
            case 'qwen':
                return (
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-lg shadow-lg shadow-accent/20">
                        📊
                    </div>
                );
            case 'llama':
                return (
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-emerald-500 flex items-center justify-center text-lg shadow-lg shadow-primary/20">
                        🎓
                    </div>
                );
            case 'error':
                return (
                    <div className="w-9 h-9 rounded-full bg-destructive flex items-center justify-center text-lg">
                        ⚠️
                    </div>
                );
            default:
                return (
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg shadow-lg">
                        👤
                    </div>
                );
        }
    };

    const formatText = (text: string) => {
        return text
            .split('\n')
            .map((line, i) => {
                if (line.startsWith('**') && line.endsWith('**')) {
                    return (
                        <h3 key={i} className="font-bold text-primary mb-2">
                            {line.replace(/\*\*/g, '')}
                        </h3>
                    );
                }

                const parts = line.split(/(\*\*.*?\*\*)/g);
                const formattedParts = parts.map((part, j) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={j} className="text-primary font-semibold">{part.slice(2, -2)}</strong>;
                    }
                    return part;
                });

                if (line.startsWith('•') || line.startsWith('-') || line.startsWith('*')) {
                    return (
                        <div key={i} className="flex gap-2 ml-2 mb-1">
                            <span className="text-primary">•</span>
                            <span>{formattedParts}</span>
                        </div>
                    );
                }

                if (/^\d+\./.test(line)) {
                    return (
                        <div key={i} className="flex gap-2 ml-2 mb-1">
                            <span className="text-primary font-medium">{line.match(/^\d+\./)?.[0]}</span>
                            <span>{line.replace(/^\d+\./, '').trim()}</span>
                        </div>
                    );
                }

                return line ? <p key={i} className="mb-2">{formattedParts}</p> : <br key={i} />;
            });
    };

    return (
        <div
            className={cn(
                "flex gap-3 animate-fade-in",
                isUser ? "justify-end" : "justify-start"
            )}
        >
            {!isUser && <div className="flex-shrink-0">{getAvatar()}</div>}

            <div className={cn("max-w-[85%]", isUser && "order-first")}>
                <div
                    className={cn(
                        "rounded-2xl p-4",
                        isUser
                            ? "bg-primary text-primary-foreground ml-auto rounded-br-md shadow-lg shadow-primary/10"
                            : "glass rounded-bl-md border border-white/5"
                    )}
                >
                    {message.chart && (
                        <img
                            src={message.chart}
                            alt="Uploaded chart"
                            className="rounded-lg mb-3 max-w-full border border-border/50"
                        />
                    )}
                    <div className="prose-chat text-sm leading-relaxed whitespace-pre-wrap">
                        {formatText(message.text)}
                    </div>
                </div>
                <div className={cn(
                    "text-[10px] text-muted-foreground mt-1.5 px-2 uppercase tracking-tight",
                    isUser && "text-right"
                )}>
                    {message.timestamp}
                </div>
            </div>

            {isUser && <div className="flex-shrink-0">{getAvatar()}</div>}
        </div>
    );
};

export default ChatMessage;
