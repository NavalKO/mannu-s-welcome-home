"use client";

import { useEffect, useState, useRef } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Reasons from "./pages/Reasons";
import Quiz from "./pages/Quiz";
import Letter from "./pages/Letter";
import Playlist from "./pages/Playlist";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showPlayButton, setShowPlayButton] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/running-up-that-hill.mp3");
    audioRef.current = audio;

    const attemptPlay = () => {
      audio
        .play()
        .then(() => {
          setShowPlayButton(false);
        })
        .catch((error) => {
          console.log("Autoplay was prevented:", error);
          setShowPlayButton(true);
        });
    };

    attemptPlay();

    // if autoplay blocked, try again on first user interaction
    const userGesture = () => {
      attemptPlay();
    };
    document.addEventListener("click", userGesture, { once: true });

    return () => {
      document.removeEventListener("click", userGesture);
      audio.pause();
    };
  }, []);

  const handleManualPlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setShowPlayButton(false);
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      {showPlayButton && (
        <button
          onClick={handleManualPlay}
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded"
        >
          Play music
        </button>
      )}
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/reasons" element={<Reasons />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/letter" element={<Letter />} />
              <Route path="/playlist" element={<Playlist />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
