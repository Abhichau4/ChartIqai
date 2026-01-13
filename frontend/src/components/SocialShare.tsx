
import { Twitter, Linkedin, Facebook, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialShareProps {
    title?: string;
    url?: string;
    description?: string;
}

const SocialShare = ({
    title = "Check out this AI Chart Analysis!",
    url = "https://chartiqai.vercel.app",
    description = "I just analyzed this chart using ChartIQ AI. Get free AI trading signals and technical analysis!"
}: SocialShareProps) => {

    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const encodedDesc = encodeURIComponent(description);

    const shareLinks = [
        {
            name: "Twitter",
            icon: <Twitter className="w-4 h-4" />,
            url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
            color: "hover:bg-sky-500/20 hover:text-sky-400"
        },
        {
            name: "LinkedIn",
            icon: <Linkedin className="w-4 h-4" />,
            url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDesc}`,
            color: "hover:bg-blue-600/20 hover:text-blue-500"
        },
        {
            name: "Facebook",
            icon: <Facebook className="w-4 h-4" />,
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            color: "hover:bg-blue-500/20 hover:text-blue-400"
        },
        {
            name: "Reddit",
            icon: <Share2 className="w-4 h-4" />, // Lucid doesn't have Reddit, generic share icon
            url: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
            color: "hover:bg-orange-500/20 hover:text-orange-500"
        }
    ];

    const handleShare = (shareUrl: string) => {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    };

    return (
        <div className="flex flex-col gap-3 p-4 glass-card rounded-xl border border-white/5 bg-black/40">
            <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-muted-foreground">Share Analysis & Earn Backlinks</h4>
                <span className="text-xs text-muted-foreground/50">Spread the word</span>
            </div>
            <div className="flex gap-2">
                {shareLinks.map((platform) => (
                    <Button
                        key={platform.name}
                        variant="ghost"
                        size="sm"
                        onClick={() => handleShare(platform.url)}
                        className={`flex-1 h-9 ${platform.color} transition-colors duration-300`}
                        title={`Share on ${platform.name}`}
                    >
                        {platform.icon}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default SocialShare;
