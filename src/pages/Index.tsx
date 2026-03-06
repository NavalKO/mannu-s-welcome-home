import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Heart, Lightbulb, Mail, Music, ArrowRight } from "lucide-react";

const pageLinks = [
  { to: "/reasons", icon: Heart, title: "11 Reasons", desc: "Why you're the most special human", color: "text-primary" },
  { to: "/quiz", icon: Lightbulb, title: "The Mannu Quiz", desc: "How well do you know yourself?", color: "text-primary" },
  { to: "/letter", icon: Mail, title: "A Letter For You", desc: "Read when you're cozy", color: "text-primary" },
  { to: "/playlist", icon: Music, title: "Upside Down Playlist", desc: "Songs that remind me of you", color: "text-primary" },
];

const Index = () => {
  const [hugOpen, setHugOpen] = useState(false);

  return (
    <div className="max-w-lg mx-auto px-4 py-8 space-y-12">
      {/* Hero */}
      <section className="text-center pt-6 animate-fade-in">
        <p className="text-5xl mb-4 animate-flicker">💡</p>
        <h1 className="text-4xl font-bold stranger-title text-primary mb-3 animate-flicker">
          Good Morning Mannu
        </h1>
        <p className="text-base text-muted-foreground font-sans mb-6 tracking-widest uppercase">
          Welcome back to Delhi
        </p>
        <p className="text-sm text-foreground/75 font-sans leading-relaxed">
          I know yesterday was a long and exhausting travel day. 
        </p>
      </section>

      {/* Sweet Note */}
      <section className="animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
        <div className="bg-card rounded-xl p-5 border border-primary/25 animate-pulse-glow">
          <p className="text-sm text-foreground/80 font-sans leading-relaxed">
            🍵 Remember to take it slow today, drink your peppermint tea, and
            get some proper rest. You deserve a calm and cozy morning.
          </p>
        </div>
      </section>

      {/* Captain's Message */}
      <section className="animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
        <div className="bg-accent/20 rounded-xl p-5 border border-primary/15">
          <p className="text-sm text-foreground/80 font-sans leading-relaxed">
            ❤️‍🔥 I'm really proud of you for handling everything and
            traveling safely. This is just a tiny corner of the internet made
            only for you — no Demogorgons allowed.
          </p>
        </div>
      </section>

      {/* Explore Pages */}
      <section className="animate-fade-in" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
        <p className="text-xs text-muted-foreground font-sans tracking-widest uppercase text-center mb-4">
          Explore your world
        </p>
        <div className="grid grid-cols-2 gap-3">
          {pageLinks.map(({ to, icon: Icon, title, desc }) => (
            <Link
              key={to}
              to={to}
              className="bg-card rounded-xl p-4 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_15px_hsl(0_85%_50%/0.1)] group"
            >
              <Icon size={20} className="text-primary mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="text-xs font-sans font-medium text-foreground mb-1">{title}</h3>
              <p className="text-[10px] text-muted-foreground font-sans">{desc}</p>
              <ArrowRight size={12} className="text-muted-foreground mt-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>
      </section>

      {/* Hug Button */}
      <section className="text-center animate-fade-in" style={{ animationDelay: "0.8s", animationFillMode: "both" }}>
        <Button
          onClick={() => setHugOpen(true)}
          className="rounded-full px-8 py-5 text-base font-sans shadow-md hover:scale-105 transition-transform animate-pulse-glow border border-primary/40"
        >
          Send a hug 🤍
        </Button>
      </section>

      {/* Footer */}
      <footer className="text-center pb-4">
        <p className="text-xs text-muted-foreground font-sans tracking-widest uppercase">
          Made with love for Mannu ❤️
        </p>
      </footer>

      <Dialog open={hugOpen} onOpenChange={setHugOpen}>
        <DialogContent className="max-w-sm text-center rounded-xl border-primary/40 bg-card">
          <p className="text-lg py-4 font-sans">
            🤗 Hug delivered.<br />
            <span className="text-muted-foreground text-sm">
              Now go get some rest, Mannu. Even Eleven needs sleep.
            </span>
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
