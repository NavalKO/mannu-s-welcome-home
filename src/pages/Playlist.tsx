import { useState } from "react";
import { Music, Play, Heart } from "lucide-react";

const songs = [
  { title: "Running Up That Hill", artist: "Kate Bush", emoji: "🏃‍♀️", note: "Because Max survived and so did you 💪" },
  { title: "Heroes", artist: "Peter Gabriel", emoji: "🦸", note: "For the bravest girl I know" },
  { title: "Every Breath You Take", artist: "The Police", emoji: "🌬️", note: "Thinking of you, always" },
  { title: "Should I Stay or Should I Go", artist: "The Clash", emoji: "🚪", note: "Stay in bed today, obviously 😴" },
  { title: "Africa", artist: "Toto", emoji: "🌍", note: "For the traveler who just crossed the world" },
  { title: "Hazy Shade of Winter", artist: "The Bangles", emoji: "❄️", note: "Cozy winter morning vibes" },
  { title: "Everybody Wants to Rule the World", artist: "Tears for Fears", emoji: "🌎", note: "You already rule mine 👑" },
  { title: "Time After Time", artist: "Cyndi Lauper", emoji: "⏰", note: "I'll be waiting, time after time" },
];

const Playlist = () => {
  const [playing, setPlaying] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const toggleFav = (i: number) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <div className="text-center mb-8 animate-fade-in">
        <p className="text-4xl mb-3">🎵</p>
        <h1 className="text-3xl font-bold stranger-title text-primary mb-2">
          The Upside Down Playlist
        </h1>
        <p className="text-sm text-muted-foreground font-sans tracking-widest uppercase">
          Songs that remind me of you
        </p>
      </div>

      <div className="space-y-2">
        {songs.map((song, i) => (
          <div
            key={i}
            className="animate-fade-in"
            style={{ animationDelay: `${i * 0.06}s`, animationFillMode: "both" }}
          >
            <div
              onClick={() => setPlaying(playing === i ? null : i)}
              className={`bg-card rounded-xl p-4 border cursor-pointer transition-all duration-300 ${
                playing === i
                  ? "border-primary/50 shadow-[0_0_15px_hsl(0_85%_50%/0.12)]"
                  : "border-border hover:border-primary/20"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-300 ${
                  playing === i ? "bg-primary/20 scale-110" : "bg-secondary"
                }`}>
                  {playing === i ? <Play size={16} className="text-primary ml-0.5" /> : <span>{song.emoji}</span>}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-sans font-medium text-foreground truncate">{song.title}</h3>
                  <p className="text-xs text-muted-foreground font-sans">{song.artist}</p>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); toggleFav(i); }}
                  className="transition-transform duration-200 hover:scale-125"
                >
                  <Heart
                    size={16}
                    className={favorites.has(i) ? "fill-primary text-primary" : "text-muted-foreground"}
                  />
                </button>
              </div>
              {playing === i && (
                <div className="mt-3 pt-3 border-t border-border">
                  <p className="text-xs text-foreground/60 font-sans italic">"{song.note}"</p>
                  {/* Fake equalizer */}
                  <div className="flex items-end gap-0.5 mt-2 h-4">
                    {Array.from({ length: 20 }, (_, j) => (
                      <div
                        key={j}
                        className="flex-1 bg-primary/40 rounded-sm animate-pulse"
                        style={{
                          height: `${30 + Math.random() * 70}%`,
                          animationDelay: `${j * 0.1}s`,
                          animationDuration: `${0.5 + Math.random() * 0.5}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground font-sans">
          <Music size={14} className="inline mr-1" />
          {favorites.size} song{favorites.size !== 1 ? "s" : ""} favorited
        </p>
      </div>
    </div>
  );
};

export default Playlist;
