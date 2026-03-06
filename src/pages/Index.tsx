import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const FloatingHearts = () => {
  const hearts = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: `${10 + Math.random() * 80}%`,
    delay: `${Math.random() * 5}s`,
    size: 12 + Math.random() * 14,
    duration: `${3 + Math.random() * 4}s`,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute text-primary/40 animate-float-heart"
          style={{
            left: h.left,
            top: `${20 + Math.random() * 60}%`,
            animationDelay: h.delay,
            animationDuration: h.duration,
            fontSize: h.size,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
};

const Index = () => {
  const [hugOpen, setHugOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <FloatingHearts />

      <div className="relative z-10 max-w-lg mx-auto px-6 py-12 space-y-16">
        {/* Hero */}
        <section className="text-center pt-8 animate-fade-in">
          <p className="text-5xl mb-4">☀️</p>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Good Morning Mannu
          </h1>
          <p className="text-lg text-muted-foreground font-sans mb-6">
            Welcome back to Delhi
          </p>
          <p className="text-base text-foreground/80 font-sans leading-relaxed">
            I know yesterday was a long and exhausting travel day. I just wanted
            you to wake up knowing someone is really happy you reached safely.
          </p>
        </section>

        {/* Sweet Note */}
        <section className="animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
          <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <p className="text-base text-foreground/85 font-sans leading-relaxed">
              🍵 Remember to take it slow today, drink your peppermint tea, and
              get some proper rest. You deserve a calm and cozy morning.
            </p>
          </div>
        </section>

        {/* Personal Message */}
        <section className="animate-fade-in" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
          <div className="bg-accent/50 rounded-2xl p-6 border border-primary/20">
            <p className="text-base text-foreground/85 font-sans leading-relaxed">
              💛 Your Captain is really proud of you for handling everything and
              traveling safely. This is just a tiny corner of the internet made
              only for you.
            </p>
          </div>
        </section>

        {/* Hug Button */}
        <section className="text-center animate-fade-in" style={{ animationDelay: "0.9s", animationFillMode: "both" }}>
          <Button
            onClick={() => setHugOpen(true)}
            className="rounded-full px-8 py-6 text-lg font-sans shadow-md hover:scale-105 transition-transform"
          >
            Send a hug 🤍
          </Button>
        </section>

        {/* Footer */}
        <footer className="text-center pb-8">
          <p className="text-sm text-muted-foreground font-sans">
            Made with love for Mannu ❤️
          </p>
        </footer>
      </div>

      <Dialog open={hugOpen} onOpenChange={setHugOpen}>
        <DialogContent className="max-w-sm text-center rounded-2xl">
          <p className="text-xl py-4 font-sans">
            🤗 Hug delivered.<br />
            <span className="text-muted-foreground text-base">
              Now go get some rest, Mannu.
            </span>
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
