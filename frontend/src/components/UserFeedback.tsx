import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

const UserFeedback = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

    return (
        <div className="w-full max-w-7xl mx-auto mt-32 mb-20 space-y-16 animate-fade-in relative z-10 px-4">
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "NEPSE AI Signals",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "bestRating": "5",
                        "worstRating": "1",
                        "ratingCount": "1200"
                    }
                })}
            </script>
            <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Traders Love Us</h2>
                <p className="text-muted-foreground text-lg">Join thousands of traders using AI to master the markets</p>
            </div>

            <div className="relative px-12">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="bg-[#111624] border border-white/5 rounded-2xl p-8 flex flex-col h-full space-y-4 hover:border-emerald-500/30 transition-all duration-300 shadow-lg shadow-black/20 group relative overflow-hidden">
                                    <Quote className="absolute top-4 right-6 w-12 h-12 text-white/5 group-hover:text-emerald-500/10 transition-colors" />

                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                        <div className="flex gap-1">
                                            {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                                            ))}
                                            {testimonial.rating % 1 !== 0 && (
                                                <Star className="w-4 h-4 text-emerald-500 fill-emerald-500/50" />
                                            )}
                                        </div>
                                        <span className="text-[10px] uppercase tracking-wider text-emerald-500/50 font-mono border border-emerald-500/10 px-2 py-0.5 rounded">
                                            {testimonial.market}
                                        </span>
                                    </div>

                                    <p className="text-muted-foreground text-sm leading-relaxed relative z-10 italic">
                                        "{testimonial.content}"
                                    </p>

                                    <div className="flex items-center gap-4 pt-4 mt-auto">
                                        <div className="w-10 h-10 rounded-full border border-emerald-500/20 overflow-hidden bg-emerald-500/5 flex items-center justify-center">
                                            {testimonial.image ? (
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    width={40}
                                                    height={40}
                                                    loading="lazy"
                                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=10b981&color=fff`;
                                                    }}
                                                />
                                            ) : (
                                                <span className="text-emerald-500 font-bold text-xs">{testimonial.avatar}</span>
                                            )}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                                            <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute -left-12 top-1/2 bg-[#0A0F1C] border-white/10 hover:border-emerald-500/30 text-emerald-500 hidden md:flex" />
                    <CarouselNext className="absolute -right-12 top-1/2 bg-[#0A0F1C] border-white/10 hover:border-emerald-500/30 text-emerald-500 hidden md:flex" />
                </Carousel>
            </div>
        </div>
    );
};

export default UserFeedback;
