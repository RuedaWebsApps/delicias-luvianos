import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cookie } from 'lucide-react';
import { getLegalLabel } from '../legal/legalDocs';

const STORAGE_KEY = 'delicias_luvianos_cookie_consent_v1';

export default function CookieBanner({ lang = 'es', onOpenLegal, forceOpen = false, onCloseForce }) {
  const [visible, setVisible] = useState(false);
  const isEs = lang !== 'en';

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        setVisible(true);
      }
    } catch {
      // Ignore storage restriction
    }
  }, []);

  useEffect(() => {
    if (forceOpen) {
      setVisible(true);
    }
  }, [forceOpen]);

  const handleChoice = (choice) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // Ignore storage error
    }
    setVisible(false);
    if (onCloseForce) onCloseForce();
  };

  if (!visible) return null;

  return (
    <aside
      role="region"
      aria-label={isEs ? 'Aviso de privacidad, cookies y alérgenos' : 'Privacy, cookies, and allergen notice'}
      className="fixed bottom-6 left-4 right-4 sm:right-auto sm:left-6 z-40 sm:max-w-md bg-stone-900/95 text-stone-200 border border-amber-500/40 rounded-2xl p-4 shadow-2xl backdrop-blur-xl"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 shrink-0 mt-0.5">
          <Cookie className="w-4 h-4" />
        </div>
        <div className="text-xs leading-relaxed text-stone-300 space-y-2">
          <p className="font-bold text-amber-400 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>
              {isEs ? 'Privacidad, Cookies y Normativa EE. UU.' : 'U.S. Privacy, Cookies & Legal Notice'}
            </span>
          </p>
          <p>
            {isEs ? (
              <>
                Usamos almacenamiento técnico esencial (idioma y audio local sin rastreadores de YouTube) y mapa de ubicación. Al navegar aceptas nuestros{' '}
                <button
                  type="button"
                  onClick={() => onOpenLegal('terms')}
                  className="text-amber-400 underline hover:text-amber-300 font-semibold cursor-pointer"
                >
                  {getLegalLabel('terms', lang)}
                </button>
                ,{' '}
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacy')}
                  className="text-amber-400 underline hover:text-amber-300 font-semibold cursor-pointer"
                >
                  {getLegalLabel('privacy', lang)}
                </button>
                ,{' '}
                <button
                  type="button"
                  onClick={() => onOpenLegal('cookies')}
                  className="text-amber-400 underline hover:text-amber-300 font-semibold cursor-pointer"
                >
                  {getLegalLabel('cookies', lang)}
                </button>{' '}
                y{' '}
                <button
                  type="button"
                  onClick={() => onOpenLegal('allergens')}
                  className="text-amber-400 underline hover:text-amber-300 font-semibold cursor-pointer"
                >
                  {getLegalLabel('allergens', lang)}
                </button>
                .
              </>
            ) : (
              <>
                We use essential technical storage (language & self-hosted audio with zero YouTube trackers) and an embedded location map. Review our{' '}
                <button
                  type="button"
                  onClick={() => onOpenLegal('terms')}
                  className="text-amber-400 underline hover:text-amber-300 font-semibold cursor-pointer"
                >
                  {getLegalLabel('terms', lang)}
                </button>
                ,{' '}
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacy')}
                  className="text-amber-400 underline hover:text-amber-300 font-semibold cursor-pointer"
                >
                  {getLegalLabel('privacy', lang)}
                </button>
                ,{' '}
                <button
                  type="button"
                  onClick={() => onOpenLegal('cookies')}
                  className="text-amber-400 underline hover:text-amber-300 font-semibold cursor-pointer"
                >
                  {getLegalLabel('cookies', lang)}
                </button>
                , and{' '}
                <button
                  type="button"
                  onClick={() => onOpenLegal('allergens')}
                  className="text-amber-400 underline hover:text-amber-300 font-semibold cursor-pointer"
                >
                  {getLegalLabel('allergens', lang)}
                </button>
                .
              </>
            )}
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              type="button"
              onClick={() => handleChoice('accepted_all')}
              className="px-3.5 py-1.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-xs transition-colors cursor-pointer"
            >
              {isEs ? 'Aceptar Todo' : 'Accept All'}
            </button>
            <button
              type="button"
              onClick={() => handleChoice('essential_only')}
              className="px-3.5 py-1.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 font-semibold text-xs transition-colors cursor-pointer"
            >
              {isEs ? 'Solo Esenciales' : 'Essential Only'}
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
