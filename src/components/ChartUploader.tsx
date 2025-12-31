import { useState, useCallback } from "react";
import { Upload, Image, X, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChartUploaderProps {
  onImageUpload: (imageData: string) => void;
  isAnalyzing: boolean;
}

export const ChartUploader = ({ onImageUpload, isAnalyzing }: ChartUploaderProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFile = useCallback((file: File) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setPreview(result);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, [handleFile]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  }, [handleFile]);

  const clearPreview = () => {
    setPreview(null);
  };

  const handleAnalyze = () => {
    if (preview) {
      onImageUpload(preview);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!preview ? (
        <div
          className={`relative glass-card p-8 transition-all duration-300 ${dragActive ? "border-primary glow-bullish" : "hover:border-primary/50"
            }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          />
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
              <Upload className="w-8 h-8 text-primary" />
            </div>
            <div className="text-center space-y-2">
              <p className="text-xl font-medium text-foreground">
                Drop your chart here
              </p>
              <p className="text-sm text-muted-foreground">
                or click to browse • PNG, JPG, WEBP supported
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Image className="w-4 h-4" />
              <span>Candlestick, Line, or Bar charts</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="glass-card p-6 space-y-6 animate-fade-in">
          <div className="relative group">
            <img
              src={preview}
              alt="Chart preview"
              className="w-full rounded-lg border border-border"
            />
            <button
              onClick={clearPreview}
              className="absolute top-3 right-3 p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border hover:bg-destructive/20 hover:border-destructive/50 transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <Button
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            variant="glow"
            size="xl"
            className="w-full"
          >
            {isAnalyzing ? (
              <>
                <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                Analyzing Chart...
              </>
            ) : (
              <>
                <TrendingUp className="w-5 h-5" />
                Analyze Chart
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
};
