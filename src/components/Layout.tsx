import { Outlet, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Home, Heart, Lightbulb, Mail, Music } from "lucide-react";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/reasons", icon: Heart, label: "Reasons" },
  { to: "/quiz", icon: Lightbulb, label: "Quiz" },
  { to: "/letter", icon: Mail, label: "Letter" },
  { to: "/playlist", icon: Music, label: "Vibes" },
];

const FloatingParticles = () => {
  const particles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    left: `${5 + Math.random() * 90}%`,
    delay: `${Math.random() * 6}s`,
    size: 3 + Math.random() * 5,
    duration: `${4 + Math.random() * 5}s`,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-primary/40 animate-float-heart"
          style={{
            left: p.left,
            top: `${20 + Math.random() * 60}%`,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: p.size,
            height: p.size,
            boxShadow: `0 0 ${p.size * 2}px hsl(0 100% 50% / 0.3)`,
          }}
        />
      ))}
    </div>
  );
};

const Layout = () => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen pb-20">
      <FloatingParticles />
      <div className="relative z-10">
        <Outlet />
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-t border-primary/20">
        <div className="max-w-lg mx-auto flex justify-around items-center py-2">
          {navItems.map(({ to, icon: Icon, label }) => {
            const isActive = location.pathname === to;
            return (
              <NavLink
                key={to}
                to={to}
                className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-primary scale-110"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon size={20} className={isActive ? "drop-shadow-[0_0_6px_hsl(0_100%_50%/0.6)]" : ""} />
                <span className="text-[10px] font-sans tracking-wider uppercase">{label}</span>
              </NavLink>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Layout;
