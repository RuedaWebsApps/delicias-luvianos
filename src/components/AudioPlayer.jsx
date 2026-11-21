import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Pause, Play } from 'lucide-react';

export default function AudioPlayer({ lang = 'es' }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const userPausedRef = useRef(false);

  useEffect(() => {
    const audio = new Audio('/audio/luvianos-song.m4a');
    audio.loop = true;
    audio.volume = 0.55;
    audio.preload = 'auto';
    audioRef.current = audio;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    const removeInteractionListeners = () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
    };

    const handleFirstInteraction = () => {
      if (!audioRef.current || userPausedRef.current) {
        removeInteractionListeners();
        return;
      }
      if (audioRef.current.paused) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            removeInteractionListeners();
          })
          .catch(() => {
            // Keep listeners active if browser didn't count scroll as gesture
          });
      } else {
        removeInteractionListeners();
      }
    };

    // Attempt immediate autoplay on page entry
    audio
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        // Fallback: start automatically on the visitor's very first interaction
        window.addEventListener('click', handleFirstInteraction, { passive: true });
        window.addEventListener('touchstart', handleFirstInteraction, { passive: true });
        window.addEventListener('pointerdown', handleFirstInteraction, { passive: true });
        window.addEventListener('keydown', handleFirstInteraction, { passive: true });
        window.addEventListener('scroll', handleFirstInteraction, { passive: true });
      });

    return () => {
      removeInteractionListeners();
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      userPausedRef.current = true;
      audio.pause();
      setIsPlaying(false);
    } else {
      userPausedRef.current = false;
      if (isMuted) {
        audio.muted = false;
        setIsMuted(false);
      }
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error('Audio playback failed:', err));
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    const nextMuted = !isMuted;
    audio.muted = nextMuted;
    setIsMuted(nextMuted);

    // If user clicks unmute while paused, also start playing
    if (!nextMuted && audio.paused) {
      userPausedRef.current = false;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const playLabel = isPlaying
    ? lang === 'es'
      ? 'Pausar música'
      : 'Pause music'
    : lang === 'es'
    ? 'Reproducir música'
    : 'Play music';

  const muteLabel = isMuted
    ? lang === 'es'
      ? 'Activar sonido'
      : 'Unmute music'
    : lang === 'es'
    ? 'Silenciar música'
    : 'Mute music';

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none">
      <div
        className={`flex items-center gap-1.5 rounded-full border p-1.5 shadow-2xl backdrop-blur-md transition-all duration-300 ${
          isPlaying && !isMuted
            ? 'bg-stone-900/95 border-amber-400/80 shadow-amber-500/25'
            : 'bg-stone-900/90 border-amber-500/30 hover:border-amber-400/60'
        }`}
      >
        {/* Play / Pause Button */}
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playLabel}
          title={playLabel}
          className={`flex items-center gap-2.5 rounded-full px-3.5 py-2 font-medium transition-all duration-300 cursor-pointer ${
            isPlaying && !isMuted
              ? 'bg-amber-500 text-stone-950 hover:bg-amber-400'
              : 'bg-stone-800/90 text-stone-200 hover:bg-stone-800 hover:text-amber-400'
          }`}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 shrink-0 fill-current" />
          ) : (
            <Play className="w-4 h-4 shrink-0 fill-current text-amber-400" />
          )}

          {/* Animated sound bars when playing */}
          {isPlaying && !isMuted ? (
            <span className="flex items-end gap-0.5 h-3.5" aria-hidden="true">
              <span className="w-0.5 h-2 bg-stone-950 rounded-full animate-bounce [animation-delay:-0.3s]" />
              <span className="w-0.5 h-3.5 bg-stone-950 rounded-full animate-bounce [animation-delay:-0.15s]" />
              <span className="w-0.5 h-2.5 bg-stone-950 rounded-full animate-bounce" />
              <span className="w-0.5 h-3 bg-stone-950 rounded-full animate-bounce [animation-delay:-0.2s]" />
            </span>
          ) : (
            <Music className="w-4 h-4 shrink-0 text-amber-400/80" />
          )}

          <span className="text-xs uppercase tracking-wider font-bold pr-0.5">
            {isPlaying
              ? isMuted
                ? lang === 'es'
                  ? 'Silenciada'
                  : 'Muted'
                : lang === 'es'
                ? 'Pausar Música'
                : 'Pause Music'
              : lang === 'es'
              ? 'Escuchar Música'
              : 'Play Music'}
          </span>
        </button>

        {/* Independent Mute / Unmute Button */}
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muteLabel}
          title={muteLabel}
          className={`p-2.5 rounded-full transition-colors cursor-pointer ${
            isMuted
              ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30 border border-red-500/30'
              : 'bg-stone-800 text-amber-400 hover:bg-stone-700 hover:text-amber-300'
          }`}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
}
