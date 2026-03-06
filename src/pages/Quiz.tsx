import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const questions = [
  {
    q: "What does I call you?",
    options: ["Mannu ☀️", "Fav Airhostess 🌸", "OG Actress 🧇", "All of the above 💛"],
    answer: 3,
  },
  {
    q: "What's your comfort drink?",
    options: ["Hot chocolate ☕", "Peppermint tea 🍵", "Coffee ☕", "Water 💧"],
    answer: 1,
  },
  {
    q: "Which ST character is most like you?",
    options: ["Eleven — brave & powerful 💪", "Max — fearless & cool 🛹", "Joyce — caring & fierce 💡", "Dustin — smart & adorable 🧢"],
    answer: 0,
  },
  {
    q: "What would you do in the Upside Down?",
    options: ["Find the nearest exit 🏃‍♀️", "Make friends with a Demogorgon 🐕", "Set up a cozy corner 🛋️", "Call Me(Spiderman) for backup 📞"],
    answer: 3,
  },
  {
    q: "What's the best thing about mornings?",
    options: ["Sleeping through them 😴", "Cozy messages from someone ❤️", "Peppermint tea ritual 🍵", "All of these 🌅"],
    answer: 3,
  },
];

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleSelect = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === questions[current].answer) setScore((s) => s + 1);

    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent((c) => c + 1);
        setSelected(null);
      } else {
        setFinished(true);
      }
    }, 1200);
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    return (
      <div className="max-w-lg mx-auto px-4 py-8 text-center animate-fade-in">
        <p className="text-6xl mb-6">🎉</p>
        <h1 className="text-3xl font-bold stranger-title text-primary mb-4">
          Quiz Complete!
        </h1>
        <p className="text-lg font-sans text-foreground/80 mb-2">
          You got <span className="text-primary font-bold">{score}/{questions.length}</span>
        </p>
        <p className="text-sm text-muted-foreground font-sans mb-8">
          {score === questions.length
            ? "Perfect score! You truly know yourself, Mannu 💛"
            : score >= 3
            ? "So close! I know you better though 😉"
            : "Haha, I definitely knows you better! 🤗"}
        </p>
        <Button onClick={restart} className="rounded-full px-6 py-5 font-sans animate-pulse-glow">
          <Sparkles size={16} className="mr-2" /> Play Again
        </Button>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <div className="text-center mb-8 animate-fade-in">
        <p className="text-4xl mb-3">💡</p>
        <h1 className="text-3xl font-bold stranger-title text-primary mb-2">
          The Mannu Quiz
        </h1>
        <p className="text-sm text-muted-foreground font-sans tracking-widest uppercase">
          How well do you know yourself?
        </p>
      </div>

      {/* Progress */}
      <div className="flex gap-1.5 mb-8">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
              i < current ? "bg-primary" : i === current ? "bg-primary/60 animate-pulse" : "bg-border"
            }`}
          />
        ))}
      </div>

      <div className="animate-fade-in" key={current}>
        <p className="text-xs text-muted-foreground font-sans mb-2 tracking-wider uppercase">
          Question {current + 1} of {questions.length}
        </p>
        <h2 className="text-xl font-sans font-medium text-foreground mb-6">{q.q}</h2>

        <div className="space-y-3">
          {q.options.map((opt, i) => {
            let classes = "bg-card border-border hover:border-primary/40";
            if (selected !== null) {
              if (i === q.answer) classes = "bg-primary/10 border-primary text-primary";
              else if (i === selected) classes = "bg-destructive/10 border-destructive/50 opacity-60";
              else classes = "opacity-40 border-border";
            }
            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className={`w-full text-left p-4 rounded-xl border font-sans text-sm transition-all duration-300 ${classes}`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
