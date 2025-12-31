import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Lesson } from '@/types';

interface LessonCardProps {
    lesson: Lesson;
    onStart: (lesson: Lesson) => void;
    index: number;
}

const LessonCard = ({ lesson, onStart, index }: LessonCardProps) => {
    const levelColors: Record<string, string> = {
        'Beginner': 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
        'Intermediate': 'bg-primary/10 text-primary border-primary/20',
        'Advanced': 'bg-amber-500/10 text-amber-500 border-amber-500/20',
        'Essential': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    };

    return (
        <div
            className={cn(
                "group glass-card rounded-2xl p-6 transition-all duration-500 cursor-pointer border border-white/5",
                "hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5",
                "animate-slide-up"
            )}
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => onStart(lesson)}
        >
            <div className="flex items-start gap-4">
                <div className="relative">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                        {lesson.icon}
                    </div>
                    <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors text-white">
                        {lesson.title}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                        {lesson.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        <span className={cn("px-3 py-1 rounded-full text-[10px] uppercase font-bold border", levelColors[lesson.level])}>
                            {lesson.level}
                        </span>
                        <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold bg-secondary/50 text-secondary-foreground border border-white/5">
                            {lesson.duration}
                        </span>
                    </div>

                    <div className="grid grid-cols-1 gap-1.5 pt-2">
                        {lesson.topics.slice(0, 3).map((topic, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                                <div className="w-1 h-1 rounded-full bg-primary" />
                                <span>{topic}</span>
                            </div>
                        ))}
                        {lesson.topics.length > 3 && (
                            <div className="text-[10px] text-primary/70 font-medium pl-3">
                                + {lesson.topics.length - 3} more topics
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Button
                className="w-full mt-6 bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/20 transition-all"
                onClick={(e) => {
                    e.stopPropagation();
                    onStart(lesson);
                }}
            >
                Start Learning
            </Button>
        </div>
    );
};

export default LessonCard;
