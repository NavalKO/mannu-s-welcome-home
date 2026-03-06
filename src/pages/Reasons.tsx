import { useState } from "react";
import { Heart, ChevronDown } from "lucide-react";

const reasons = [
  { emoji: "🌟", title: "Your laugh", text: "It's the most beautiful sound in any dimension — even the Upside Down can't compete." },
  { emoji: "☕", title: "Your peppermint tea obsession", text: "The way you hold your cup with both hands is the coziest thing ever." },
  { emoji: "🛡️", title: "Your bravery", text: "You handle everything with so much courage. Eleven would be proud." },
  { emoji: "🌸", title: "Your kindness", text: "You make everyone around you feel safe and warm." },
  { emoji: "💬", title: "Your voice notes", text: "Even a 2-second voice note from you makes my entire day." },
  { emoji: "🧸", title: "Your softness", text: "In a world full of chaos, you're the calm." },
  { emoji: "✈️", title: "Your adventurous spirit", text: "You just flew across the world and still looked cute doing it." },
  { emoji: "📖", title: "Your curiosity", text: "You ask the best questions and see beauty in everything." },
  { emoji: "🎵", title: "Your taste in music", text: "Our playlist hits different because you picked half of it." },
  { emoji: "🤗", title: "Your hugs", text: "Even imagining them makes everything better." },
  { emoji: "❤️‍🔥", title: "Everything about you", text: "You are the reason this tiny corner of the internet exists." },
];

const Reasons = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [liked, setLiked] = useState<Set<number>>(new Set());

  const toggleLike = (i: number) => {
    setLiked((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <div className="text-center mb-10 animate-fade-in">
        <p className="text-4xl mb-3">🔴</p>
        <h1 className="text-3xl font-bold stranger-title text-primary mb-2">
          11 Reasons
        </h1>
        <p className="text-sm text-muted-foreground font-sans tracking-widest uppercase">
          Why you're the most special human
        </p>
      </div>

      <div className="space-y-3">
        {reasons.map((r, i) => (
          <div
            key={i}
            className="animate-fade-in"
            style={{ animationDelay: `${i * 0.08}s`, animationFillMode: "both" }}
          >
            <div
              onClick={() => setExpanded(expanded === i ? null : i)}
              className={`bg-card rounded-xl p-4 border transition-all duration-300 cursor-pointer ${
                expanded === i
                  ? "border-primary/50 shadow-[0_0_15px_hsl(0_85%_50%/0.15)]"
                  : "border-border hover:border-primary/30"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{r.emoji}</span>
                  <div>
                    <span className="text-xs text-muted-foreground font-sans">#{i + 1}</span>
                    <h3 className="text-sm font-sans font-medium text-foreground">{r.title}</h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleLike(i); }}
                    className="transition-transform duration-200 hover:scale-125"
                  >
                    <Heart
                      size={18}
                      className={liked.has(i) ? "fill-primary text-primary" : "text-muted-foreground"}
                    />
                  </button>
                  <ChevronDown
                    size={16}
                    className={`text-muted-foreground transition-transform duration-300 ${expanded === i ? "rotate-180" : ""}`}
                  />
                </div>
              </div>
              {expanded === i && (
                <p className="mt-3 text-sm text-foreground/75 font-sans leading-relaxed border-t border-border pt-3">
                  {r.text}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground font-sans">
          You've liked <span className="text-primary font-medium">{liked.size}</span> of 11 reasons 💛
        </p>
      </div>
    </div>
  );
};

export default Reasons;
