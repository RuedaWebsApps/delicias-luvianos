import React, { useEffect } from 'react';
import { X, ShieldAlert, Phone } from 'lucide-react';
import {
  LEGAL_KINDS,
  RESTAURANT_LEGAL_INFO,
  getLegalDoc,
  getLegalLabel,
} from '../legal/legalDocs';

export default function LegalModal({ activeKind, lang = 'es', onSelectKind, onClose }) {
  useEffect(() => {
    if (!activeKind) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeKind, onClose]);

  if (!activeKind) return null;

  const doc = getLegalDoc(activeKind, lang);
  const isEs = lang !== 'en';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full max-h-[85vh] bg-stone-900 border border-amber-500/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:px-6 border-b border-stone-800 flex items-center justify-between gap-4 bg-stone-950/60">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <h2 id="legal-modal-title" className="text-base sm:text-lg font-extrabold text-amber-400 font-serif">
                {doc.title}
              </h2>
              <p className="text-[11px] text-stone-400">
                {doc.updatedLabel}: {doc.updated} • {RESTAURANT_LEGAL_INFO.address}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={isEs ? 'Cerrar ventana legal' : 'Close legal modal'}
            className="p-2 rounded-full bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Legal Document Tabs */}
        <div className="px-5 sm:px-6 py-3 bg-stone-950/40 border-b border-stone-800 flex flex-wrap gap-1.5">
          {LEGAL_KINDS.map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => onSelectKind(k)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                k === activeKind
                  ? 'bg-amber-500 text-stone-950 shadow'
                  : 'bg-stone-800/80 text-stone-300 hover:text-amber-300 border border-stone-700/70'
              }`}
            >
              {getLegalLabel(k, lang)}
            </button>
          ))}
        </div>

        {/* Scrollable Legal Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-xs sm:text-sm leading-relaxed text-stone-300">
          {doc.sections.map((sec, idx) => (
            <section key={idx} className="space-y-2">
              {sec.h && (
                <h3 className="text-sm sm:text-base font-bold text-amber-300">
                  {sec.h}
                </h3>
              )}
              {sec.p?.map((para, j) => (
                <p key={j} className="text-stone-300">
                  {para}
                </p>
              ))}
              {sec.ul && (
                <ul className="list-disc pl-5 space-y-1.5 text-stone-300">
                  {sec.ul.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-6 py-3.5 border-t border-stone-800 bg-stone-950/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={RESTAURANT_LEGAL_INFO.phoneHref}
            className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>
              {isEs ? 'Consultas o Alergias:' : 'Inquiries or Allergies:'} {RESTAURANT_LEGAL_INFO.phoneDisplay}
            </span>
          </a>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-xs uppercase tracking-wider cursor-pointer"
          >
            {isEs ? 'Entendido / Cerrar' : 'Got It / Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
