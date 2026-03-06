import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const FloatingParticles = () => {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${5 + Math.random() * 90}%`,
    delay: `${Math.random() * 6}s`,
    size: 4 + Math.random() * 6,
    duration: `${4 + Math.random() * 5}s`,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-primary/50 animate-float-heart"
          style={{
            left: p.left,
            top: `${20 + Math.random() * 60}%`,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: p.size,
            height: p.size,
            boxShadow: `0 0 ${p.size * 2}px hsl(0 100% 50% / 0.4)`,
          }}
        />
      ))}
    </div>
  );
};

const Index = () => {
  const [hugOpen, setHugOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <FloatingParticles />

      <div className="relative z-10 max-w-lg mx-auto px-6 py-12 space-y-16">
        {/* Hero */}
        <section className="text-center pt-8 animate-fade-in">
          <p className="text-5xl mb-6 animate-flicker">💡</p>
          <h1 className="text-4xl font-bold stranger-title text-primary mb-3 animate-flicker">
            Good Morning Mannu
          </h1>
          <p className="text-lg text-muted-foreground font-sans mb-6 tracking-widest uppercase">
            Welcome back to Delhi
          </p>
          <p className="text-base text-foreground/80 font-sans leading-relaxed">
            I know yesterday was a long and exhausting travel day. I just wanted
            you to wake up knowing someone is really happy you reached safely.
          </p>
        </section>

        {/* Sweet Note */}
        <section className="animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
          <div className="bg-card rounded-lg p-6 border border-primary/30 animate-pulse-glow">
            <p className="text-base text-foreground/85 font-sans leading-relaxed">
              🍵 Remember to take it slow today, drink your peppermint tea, and
              get some proper rest. You deserve a calm and cozy morning.
            </p>
          </div>
        </section>

        {/* Upside Down Message */}
        <section className="animate-fade-in" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
          <div className="bg-accent/30 rounded-lg p-6 border border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
            <p className="relative text-base text-foreground/85 font-sans leading-relaxed">
              ❤️‍🔥 Your Captain is really proud of you for handling everything and
              traveling safely. This is just a tiny corner of the internet made
              only for you — no Demogorgons allowed.
            </p>
          </div>
        </section>

        {/* Hug Button */}
        <section className="text-center animate-fade-in" style={{ animationDelay: "0.9s", animationFillMode: "both" }}>
          <Button
            onClick={() => setHugOpen(true)}
            className="rounded-full px-8 py-6 text-lg font-sans shadow-md hover:scale-105 transition-transform animate-pulse-glow border border-primary/50"
          >
            Send a hug 🤍
          </Button>
        </section>

        {/* Footer */}
        <footer className="text-center pb-8">
          <p className="text-sm text-muted-foreground font-sans tracking-widest uppercase">
            Made with love for Mannu ❤️
          </p>
        </footer>
      </div>

      <Dialog open={hugOpen} onOpenChange={setHugOpen}>
        <DialogContent className="max-w-sm text-center rounded-lg border-primary/40 bg-card">
          <p className="text-xl py-4 font-sans">
            🤗 Hug delivered.<br />
            <span className="text-muted-foreground text-base">
              Now go get some rest, Mannu. Even Eleven needs sleep.
            </span>
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
