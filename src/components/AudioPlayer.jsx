import React, { useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative group">
        <button
          onClick={toggleMusic}
          aria-label={isPlaying ? "Pausar música tradicional" : "Escuchar música tradicional"}
          className={`flex items-center gap-2.5 px-4 py-3 rounded-full font-medium shadow-2xl transition-all duration-300 backdrop-blur-md border ${
            isPlaying
              ? 'bg-amber-500/90 text-stone-950 border-amber-400 shadow-amber-500/30 scale-105'
              : 'bg-stone-900/90 text-stone-200 border-amber-500/30 hover:border-amber-400/70 hover:bg-stone-800'
          }`}
        >
          {isPlaying ? (
            <>
              <Volume2 className="w-5 h-5 animate-pulse text-stone-950" />
              <span className="text-xs uppercase tracking-wider font-bold">Música Activa</span>
            </>
          ) : (
            <>
              <Music className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform" />
              <span className="text-xs uppercase tracking-wider font-semibold">Tierra Caliente Radio</span>
            </>
          )}
        </button>

        {/* Embedded YouTube Player hidden or visible */}
        {isPlaying && (
          <div className="fixed bottom-20 right-6 w-80 bg-stone-900/95 border border-amber-500/40 rounded-2xl shadow-2xl overflow-hidden p-3 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-300">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-800">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold">
                <Music className="w-4 h-4 animate-spin text-amber-400" />
                <span>Música de Luvianos en vivo</span>
              </div>
              <button 
                onClick={() => setIsPlaying(false)}
                className="text-stone-400 hover:text-white text-xs px-2 py-0.5 rounded bg-stone-800"
              >
                Cerrar
              </button>
            </div>
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-black">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/LIxSIlXltI0?autoplay=1&enablejsapi=1"
                title="Música Tradicional Delicias Luvianos"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              ></iframe>
            </div>
            <p className="text-[11px] text-stone-400 mt-2 text-center">
              Sonidos rancheros y tradicionales de la región.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
