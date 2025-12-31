import { Header } from "@/components/Header";
import TradingViewWidget from "@/components/TradingViewWidget";

const Charts = () => {
    return (
        <div className="min-h-screen bg-[#0A0F1C] text-foreground flex flex-col overflow-hidden">
            <Header />

            <main className="w-full h-[calc(100vh-65px)] relative z-10 flex flex-col overflow-hidden">
                <div className="w-full h-full glass-card border-none overflow-hidden transition-all duration-300">
                    <TradingViewWidget />
                </div>
            </main>

            {/* Background Elements */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
            </div>

        </div>
    );
};

export default Charts;
