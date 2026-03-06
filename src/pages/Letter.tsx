import { useState, useEffect } from "react";

const letterText = `Dear Mannu,

If you're reading this, you've just survived a really long travel day — and I'm so proud of you for that.

I know flights are exhausting. I know Delhi traffic is chaos. I know you probably just want to curl up with a blanket and sleep for three days. And honestly? You deserve exactly that.

But before you do, I wanted you to know something.

There's someone out here who thought about you the entire time you were in the air. Someone who checked flight trackers way too many times. Someone who couldn't stop smiling when they knew you landed safely.

You are so incredibly special, Mannu. Not just because of how strong you are, or how brave, or how kind — but because of the way you make ordinary moments feel extraordinary. The way a simple "good morning" from you can make an entire day worthwhile.

This little website? It's not much. It's just some code on a screen. But every pixel of it was placed with love, thinking about you, hoping it makes you smile even for a second.

So rest now. Drink your tea. Watch Stranger Things (obviously). And know that no matter what dimension, timeline, or universe — someone out there thinks you're the most amazing person in all of them.

Always,
Your Captain ❤️`;

const Letter = () => {
  const [revealed, setRevealed] = useState(0);
  const [started, setStarted] = useState(false);

  const lines = letterText.split("\n").filter((l) => l.trim() !== "");

  useEffect(() => {
    if (!started) return;
    if (revealed >= lines.length) return;
    const timer = setTimeout(() => setRevealed((r) => r + 1), 600);
    return () => clearTimeout(timer);
  }, [revealed, started, lines.length]);

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <div className="text-center mb-8 animate-fade-in">
        <p className="text-4xl mb-3">✉️</p>
        <h1 className="text-3xl font-bold stranger-title text-primary mb-2">
          A Letter For You
        </h1>
        <p className="text-sm text-muted-foreground font-sans tracking-widest uppercase">
          Read when you're cozy
        </p>
      </div>

      {!started ? (
        <div className="text-center animate-fade-in">
          <div className="bg-card rounded-2xl p-8 border border-primary/20 animate-pulse-glow">
            <p className="text-6xl mb-4">💌</p>
            <p className="text-sm text-foreground/70 font-sans mb-6">
              Grab your tea, get comfortable, and tap below when you're ready.
            </p>
            <button
              onClick={() => { setStarted(true); setRevealed(1); }}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-sans text-sm hover:scale-105 transition-transform"
            >
              Open the letter ✨
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-card rounded-2xl p-6 border border-primary/20">
          <div className="space-y-4 font-sans text-sm leading-relaxed text-foreground/80">
            {lines.slice(0, revealed).map((line, i) => (
              <p
                key={i}
                className="animate-fade-in"
                style={{ animationDelay: "0s", animationFillMode: "both" }}
              >
                {line}
              </p>
            ))}
          </div>
          {revealed < lines.length && (
            <div className="mt-4 flex justify-center">
              <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>
          )}
          {revealed >= lines.length && (
            <p className="text-center text-xs text-muted-foreground font-sans mt-6 animate-fade-in">
              — End of letter. You are loved, Mannu 💛 —
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Letter;
