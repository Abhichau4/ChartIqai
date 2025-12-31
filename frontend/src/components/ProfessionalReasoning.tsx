import { Lightbulb, AlertTriangle, XCircle, FileText } from "lucide-react";
import { AnalysisData } from "@/types";

interface ProfessionalReasoningProps {
    data: AnalysisData;
}

const ProfessionalReasoning = ({ data }: ProfessionalReasoningProps) => {
    // Attempt to split reasoning into sentences/bullets if possible, else just show paragraphs
    const reasoningPoints = data.reasoning
        ? data.reasoning.split('. ').filter(p => p.length > 10).slice(0, 3)
        : ["No detailed reasoning provided."];

    return (
        <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-6">
                <Lightbulb className="w-5 h-5 text-neutral" />
                Professional Reasoning
            </h2>

            <div className="space-y-4">
                {reasoningPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${index === 0 ? 'bg-primary/20 text-primary' : 'bg-neutral/20 text-neutral'}`}>
                            <span className="text-xs font-bold">{index + 1}</span>
                        </div>
                        <p className="text-sm text-secondary-foreground">
                            {point}{point.endsWith('.') ? '' : '.'}
                        </p>
                    </div>
                ))}
                {reasoningPoints.length === 0 && (
                    <p className="text-sm text-muted-foreground">{data.reasoning}</p>
                )}
            </div>

            {/* Invalidation Conditions */}
            <div className="mt-6 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                    <h3 className="font-semibold text-foreground">Invalidation Conditions</h3>
                </div>
                <div className="space-y-2">
                    <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-secondary-foreground">
                            {data.invalidation}
                        </span>
                    </div>
                </div>
            </div>

            {/* Raw Content Toggle (Optional link or just handled in main Index) */}
        </div>
    );
};

export default ProfessionalReasoning;
