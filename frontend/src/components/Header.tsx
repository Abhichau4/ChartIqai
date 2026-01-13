import { TrendingUp, BarChart3, LogOut, User, Menu } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      <Link
        to="/learn"
        onClick={() => setIsOpen(false)}
        title="AI Trading Education & Courses - Learn algorithmic trading strategies"
        className={`${mobile ? 'text-lg py-4' : 'text-sm'} font-medium text-muted-foreground hover:text-white transition-colors`}
      >
        Learn
      </Link>
      <Link
        to="/charts"
        onClick={() => setIsOpen(false)}
        title="Live Trading Charts & Real-Time Analysis - View forex, stocks, crypto charts"
        className={`${mobile ? 'text-lg py-4' : 'text-sm'} font-medium text-muted-foreground hover:text-white transition-colors`}
      >
        Charts
      </Link>
      <button
        onClick={() => {
          setIsOpen(false);
          if (window.location.pathname === '/') {
            document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
          } else {
            navigate('/#how-it-works');
          }
        }}
        title="How AI Chart Analysis Works - Learn about our technology"
        className={`${mobile ? 'text-lg py-4 text-left' : 'text-sm'} font-medium text-muted-foreground hover:text-white transition-colors`}
      >
        How It Works
      </button>
    </>
  );

  return (
    <header className="w-full py-3 px-4 border-b border-border/50 bg-[#0A0F1C]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer" onClick={() => navigate('/')}>
          <div className="p-2 sm:p-2.5 rounded-xl bg-primary/10 border border-primary/20 glow-bullish">
            <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-foreground tracking-tight leading-tight">
              Chart Analyzer Ai
            </h1>
            <p className="hidden xs:block text-[10px] sm:text-xs text-muted-foreground">
              Institutional Trading & Analysis
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-6 text-sm">
          <nav className="hidden md:flex items-center gap-6">
            <NavLinks />
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            {!user ? (
              <Button
                variant="outline"
                className="hover:bg-primary/10 hover:text-primary transition-colors h-8 sm:h-9 text-xs sm:text-sm px-3 sm:px-4"
                onClick={() => navigate('/login')}
              >
                Log In
              </Button>
            ) : (
              <div className="flex items-center gap-2 sm:gap-4 animate-fade-in">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 font-bold overflow-hidden">
                    {user.avatar ? <img src={user.avatar} alt={user.name} /> : <User className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </div>
                  <div className="hidden lg:block">
                    <p className="font-medium text-foreground text-sm">{user.name}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => logout()} className="text-muted-foreground hover:text-foreground h-8 w-8 sm:h-9 sm:w-9">
                  <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>
            )}

            <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <TrendingUp className="w-3.5 h-3.5 sm:w-4 h-4 text-emerald-500" />
              <span className="font-mono text-emerald-500 font-medium uppercase text-[10px] sm:text-xs">Live</span>
            </div>

            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-foreground">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-[#0A0F1C] border-white/5 pt-16">
                  <div className="flex flex-col gap-2">
                    <NavLinks mobile />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
