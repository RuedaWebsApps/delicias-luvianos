import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Sparkles, 
  AlertTriangle, 
  Languages, 
  Menu as MenuIcon, 
  X, 
  Flame, 
  CheckCircle2, 
  UtensilsCrossed,
  ChefHat,
  Search,
  BookOpen,
  ZoomIn,
  ShieldAlert
} from 'lucide-react';
import { menuData } from './data/menuData';
import AudioPlayer from './components/AudioPlayer';
import CookieBanner from './components/CookieBanner';
import LegalModal from './components/LegalModal';
import {
  LEGAL_KINDS,
  getLegalLabel,
  getMenuAdvisoryText,
} from './legal/legalDocs';

export default function App() {
  const [lang, setLang] = useState('es');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [activeLegalKind, setActiveLegalKind] = useState(null);
  const [forceCookieBanner, setForceCookieBanner] = useState(false);

  const t = menuData[lang];
  const advisory = getMenuAdvisoryText(lang);

  const filteredItems = t.items.filter(item => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-amber-500 selection:text-stone-950">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-amber-600/10 via-amber-700/5 to-transparent blur-3xl rounded-full" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-stone-950/85 backdrop-blur-md border-b border-stone-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="Delicias Luvianos Logo" 
              className="h-14 sm:h-16 w-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-xl sm:text-2xl text-amber-400 font-serif leading-none">
                DELICIAS LUVIANOS
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-400 font-medium">
                Austin, Texas • Sabor Auténtico
              </span>
            </div>
          </a>

          {/* Desktop Nav Actions */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="#menu" 
              className="text-stone-300 hover:text-amber-400 font-medium text-sm transition-colors flex items-center gap-1.5"
            >
              <UtensilsCrossed className="w-4 h-4 text-amber-500" />
              {lang === 'es' ? 'Menú Digital' : 'Digital Menu'}
            </a>
            <a 
              href="#horarios" 
              className="text-stone-300 hover:text-amber-400 font-medium text-sm transition-colors flex items-center gap-1.5"
            >
              <Clock className="w-4 h-4 text-amber-500" />
              {lang === 'es' ? 'Horarios' : 'Hours'}
            </a>
            <a 
              href="#cartas" 
              className="text-stone-300 hover:text-amber-400 font-medium text-sm transition-colors flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4 text-amber-500" />
              {lang === 'es' ? 'Menú Físico' : 'Printed Menu'}
            </a>
            <a 
              href="#ubicacion" 
              className="text-stone-300 hover:text-amber-400 font-medium text-sm transition-colors flex items-center gap-1.5"
            >
              <MapPin className="w-4 h-4 text-amber-500" />
              {lang === 'es' ? 'Ubicación' : 'Location'}
            </a>

            {/* Language Switcher */}
            <div className="flex items-center bg-stone-900 border border-stone-700/60 rounded-full p-1 text-xs">
              <button
                onClick={() => setLang('es')}
                className={`px-3 py-1 rounded-full font-semibold transition-all ${
                  lang === 'es' ? 'bg-amber-500 text-stone-950 shadow' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full font-semibold transition-all ${
                  lang === 'en' ? 'bg-amber-500 text-stone-950 shadow' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                EN
              </button>
            </div>

            {/* Call button */}
            <a
              href="tel:5128351894"
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold px-4 py-2.5 rounded-full text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>{t.hero.callUs}</span>
            </a>
          </div>

          {/* Mobile Menu Button & Lang */}
          <div className="flex md:hidden items-center gap-3">
            <div className="flex items-center bg-stone-900 border border-stone-800 rounded-full p-0.5 text-xs">
              <button
                onClick={() => setLang('es')}
                className={`px-2.5 py-0.5 rounded-full font-bold ${
                  lang === 'es' ? 'bg-amber-500 text-stone-950' : 'text-stone-400'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-0.5 rounded-full font-bold ${
                  lang === 'en' ? 'bg-amber-500 text-stone-950' : 'text-stone-400'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-stone-900 text-stone-300 border border-stone-800 hover:text-amber-400"
              aria-label="Abrir Menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-stone-900 border-b border-stone-800 px-6 py-5 space-y-4 animate-in slide-in-from-top duration-200">
            <a 
              href="#menu" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-stone-200 hover:text-amber-400 font-semibold py-1"
            >
              {lang === 'es' ? '🍽️ Menú Digital' : '🍽️ Digital Menu'}
            </a>
            <a 
              href="#horarios" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-stone-200 hover:text-amber-400 font-semibold py-1"
            >
              {lang === 'es' ? '⏰ Horarios de Atención' : '⏰ Business Hours'}
            </a>
            <a 
              href="#cartas" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-stone-200 hover:text-amber-400 font-semibold py-1"
            >
              {lang === 'es' ? '📖 Menús Impresos Originales' : '📖 Printed Menus'}
            </a>
            <a 
              href="#ubicacion" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-stone-200 hover:text-amber-400 font-semibold py-1"
            >
              {lang === 'es' ? '📍 Ubicación' : '📍 Location'}
            </a>
            <a
              href="tel:5128351894"
              className="flex items-center justify-center gap-2 w-full bg-amber-500 text-stone-950 font-bold py-3 rounded-xl mt-3 text-sm uppercase tracking-wider"
            >
              <Phone className="w-4 h-4" />
              <span>{t.hero.callUs}: (512) 835-1894</span>
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1">
        {/* Hero Section */}
        <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Text */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide">
                  <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>{t.hero.tag}</span>
                </div>

                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-serif">
                  <span className="block text-stone-100">
                    {lang === 'es' ? 'Auténtico Sabor' : 'Authentic Flavor'}
                  </span>
                  <span className="text-gold-gradient block mt-1">Delicias Luvianos</span>
                </h1>

                <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                  {t.hero.subtitle}
                </p>

                {/* Badges / Highlights */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                  <span className="inline-flex items-center gap-1.5 bg-stone-900/80 border border-stone-800 px-3.5 py-1.5 rounded-lg text-xs font-medium text-amber-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                    {lang === 'es' ? 'Tortillas Hechas a Mano' : 'Handmade Corn Tortillas'}
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-stone-900/80 border border-stone-800 px-3.5 py-1.5 rounded-lg text-xs font-medium text-amber-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                    {lang === 'es' ? 'Porciones Generosas' : 'Generous Portions'}
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-stone-900/80 border border-stone-800 px-3.5 py-1.5 rounded-lg text-xs font-medium text-amber-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                    {lang === 'es' ? 'Terraza Techada al Aire Libre' : 'Covered Outdoor Patio'}
                  </span>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                  <a
                    href="#menu"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-extrabold uppercase tracking-wider text-xs shadow-xl shadow-amber-500/20 transition-all hover:scale-105 text-center"
                  >
                    {t.hero.viewMenu}
                  </a>
                  <a
                    href="tel:5128351894"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-stone-900/90 border border-amber-500/30 hover:border-amber-400 text-stone-200 hover:text-white font-bold uppercase tracking-wider text-xs transition-all hover:bg-stone-800 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>{t.hero.callUs}</span>
                  </a>
                </div>

                {/* Delivery Notice Alert */}
                <div className="mt-6 p-4 rounded-2xl bg-amber-950/30 border border-amber-600/30 text-left flex items-start gap-3 backdrop-blur-sm">
                  <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-stone-300 leading-snug">
                    <strong className="text-amber-300 font-semibold block mb-0.5">
                      {t.hours.noticeDeliveryTitle}
                    </strong>
                    {t.hours.noticeDeliveryText}
                  </div>
                </div>
              </div>

              {/* Right Column: Featured Visual Hero Showcase */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-amber-500/20 via-stone-900/50 to-stone-950 p-3 border border-amber-500/30 shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-radial-glow opacity-80" />
                  <img
                    src="/dishes/Mole.png"
                    alt="Pollo en Mole Tradicional Luvianos"
                    className="w-full h-full object-contain filter drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-stone-950/80 backdrop-blur-md p-3.5 rounded-xl border border-stone-800 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                        {lang === 'es' ? 'Platillo Estrella' : 'Signature Dish'}
                      </p>
                      <h3 className="text-sm font-bold text-white">
                        {lang === 'es' ? 'Pollo en Mole Casero' : 'Chicken in Homemade Mole'}
                      </h3>
                    </div>
                    <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2.5 py-1 rounded-full font-semibold">
                      {lang === 'es' ? 'Tortillas a mano' : 'Handmade tortillas'}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Schedule & Info Section */}
        <section id="horarios" className="py-14 bg-stone-900/60 border-y border-stone-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-amber-400">
                {t.hours.title}
              </h2>
              <p className="text-stone-400 text-sm mt-1">
                {t.hours.subtitle}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {t.hours.days.map((item, idx) => (
                <div 
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all ${
                    item.closed 
                      ? 'bg-stone-950/50 border-stone-800/80 opacity-75' 
                      : 'bg-stone-900/90 border-amber-500/20 shadow-lg hover:border-amber-500/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                      {item.day}
                    </span>
                    <Clock className={`w-4 h-4 ${item.closed ? 'text-stone-600' : 'text-amber-500'}`} />
                  </div>
                  <div className={`text-base font-extrabold ${item.closed ? 'text-stone-500' : 'text-stone-100'}`}>
                    {item.time}
                  </div>
                  {item.closed && (
                    <span className="inline-block mt-2 text-[10px] uppercase font-bold tracking-widest text-red-400 bg-red-950/40 border border-red-800/50 px-2 py-0.5 rounded">
                      {lang === 'es' ? 'Descanso' : 'Closed'}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Address & Quick Contact bar */}
            <div className="mt-8 p-6 rounded-2xl bg-stone-900/90 border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3 text-left">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-200">
                    601 E Rundberg Ln, Austin, TX 78753
                  </h4>
                  <p className="text-xs text-stone-400">
                    {lang === 'es'
                      ? 'Ambiente casual, estacionamiento disponible y mesas al aire libre cubiertas.'
                      : 'Casual family dining, on-site parking available, and covered outdoor patio seating.'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <a
                  href="https://maps.google.com/?q=601+E+Rundberg+Ln,+Austin,+TX+78753"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 md:flex-none text-center px-5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold uppercase tracking-wider transition-colors border border-stone-700"
                >
                  {lang === 'es' ? 'Ver en Google Maps' : 'View on Google Maps'}
                </a>
                <a
                  href="tel:5128351894"
                  className="flex-1 md:flex-none text-center px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-extrabold uppercase tracking-wider transition-colors shadow"
                >
                  (512) 835-1894
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Digital Menu Catalog */}
        <section id="menu" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">
                <ChefHat className="w-4 h-4" />
                <span>{lang === 'es' ? 'Especialidades Hechas con Amor' : 'Handcrafted Specialties Made with Love'}</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-white">
                {lang === 'es' ? 'Menú Digital' : 'Digital Menu'}
              </h2>
              <p className="text-stone-400 text-sm mt-1 max-w-xl">
                {lang === 'es'
                  ? 'Platillos preparados al instante con los ingredientes más frescos de la gastronomía mexicana.'
                  : 'Dishes prepared fresh to order with authentic traditional Mexican ingredients.'}
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder={lang === 'es' ? "Buscar platillo o ingrediente..." : "Search dish or ingredients..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-stone-900 border border-stone-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-full pl-10 pr-4 py-2.5 text-xs text-stone-200 placeholder-stone-500 outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-300 text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Categories Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none no-scrollbar">
            {t.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                    : 'bg-stone-900/80 text-stone-400 hover:text-stone-200 hover:bg-stone-800 border border-stone-800'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Dish Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((dish) => (
              <div
                key={dish.id}
                className="bg-stone-900/80 border border-stone-800/80 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-300 flex flex-col group hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-950/20"
              >
                {/* Image Container */}
                <div 
                  className="relative aspect-square w-full bg-stone-950/60 p-4 flex items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => setPreviewImage({ src: dish.image, title: dish.name, desc: dish.description })}
                >
                  <div className="absolute inset-0 bg-radial-glow opacity-30 group-hover:opacity-70 transition-opacity" />
                  <img
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                    className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-900/80 p-1.5 rounded-full text-amber-400 border border-stone-700">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                {/* Details Container */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {dish.tags?.map((tag, i) => (
                        <span 
                          key={i}
                          className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-bold text-stone-100 text-base leading-snug font-serif group-hover:text-amber-400 transition-colors">
                      {dish.name}
                    </h3>

                    <p className="text-xs text-stone-400 leading-relaxed mt-2 line-clamp-3">
                      {dish.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between">
                    <span className="text-[11px] text-amber-500/80 font-medium">
                      {lang === 'es' ? 'Tortillas a mano disponibles' : 'Handmade tortillas available'}
                    </span>
                    <button
                      onClick={() => setPreviewImage({ src: dish.image, title: dish.name, desc: dish.description })}
                      className="text-xs text-stone-400 hover:text-amber-400 underline underline-offset-4 cursor-pointer"
                    >
                      {lang === 'es' ? 'Ver detalle' : 'View details'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16 bg-stone-900/40 rounded-3xl border border-stone-800">
              <p className="text-stone-400 text-base">
                {lang === 'es'
                  ? `No encontramos ningún platillo con "${searchQuery}".`
                  : `No dishes found matching "${searchQuery}".`}
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="mt-4 px-4 py-2 bg-stone-800 hover:bg-stone-700 rounded-full text-xs font-bold text-amber-400"
              >
                {lang === 'es' ? 'Restablecer Filtros' : 'Reset Filters'}
              </button>
            </div>
          )}

          {/* Mandatory US FDA / Texas Food Establishment Rules (TFER §228.75) Consumer Advisory & Allergen Box */}
          <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-stone-900/75 border border-amber-500/25 text-xs text-stone-300 space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider text-xs">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>{advisory.badge}</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveLegalKind('allergens')}
                className="text-amber-400 hover:text-amber-300 underline font-semibold text-xs cursor-pointer"
              >
                {getLegalLabel('allergens', lang)} →
              </button>
            </div>
            <p className="leading-relaxed text-stone-300 font-medium">
              {advisory.rawAdvisory}
            </p>
            <p className="leading-relaxed text-stone-400">
              {advisory.allergenWarning}
            </p>
            <p className="leading-relaxed text-stone-400">
              {advisory.pricingDisclaimer}
            </p>
          </div>
        </section>

        {/* Physical Menu Cards Section */}
        <section id="cartas" className="py-20 bg-stone-900/40 border-t border-stone-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">
                <BookOpen className="w-4 h-4" />
                <span>{lang === 'es' ? 'Auténtico de Nuestra Cocina' : 'Authentic From Our Kitchen'}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-white">
                {t.physicalMenu.title}
              </h2>
              <p className="text-stone-400 text-sm mt-1">
                {t.physicalMenu.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {t.physicalMenu.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setPreviewImage({ src: img.src, title: img.alt, desc: lang === 'es' ? 'Menú físico original del restaurante' : 'Original printed restaurant menu' })}
                  className="group relative rounded-2xl overflow-hidden bg-stone-950 border border-stone-800 hover:border-amber-500/50 transition-all duration-300 shadow-xl cursor-pointer"
                >
                  <div className="aspect-[3/4] w-full overflow-hidden bg-stone-950">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-200">
                      {img.alt}
                    </span>
                    <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                      <ZoomIn className="w-3.5 h-3.5" /> {lang === 'es' ? 'Ampliar' : 'Zoom'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Map Section */}
        <section id="ubicacion" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                {lang === 'es' ? 'Visítanos en Austin' : 'Visit Us in Austin'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-white">
                {lang === 'es'
                  ? 'El rincón con sabor a México en Austin'
                  : 'Authentic Mexican Soul in Austin, Texas'}
              </h2>
              <p className="text-stone-300 text-sm leading-relaxed">
                {lang === 'es' ? (
                  <>
                    Ubicados en <strong className="text-amber-400">601 E Rundberg Ln</strong>. Servimos guisos caseros tradicionales, tacos con tortilla a mano, caldos y mariscos con la hospitalidad que nos distingue.
                  </>
                ) : (
                  <>
                    Located at <strong className="text-amber-400">601 E Rundberg Ln</strong>. Serving traditional homestyle stews, fresh handmade tortilla tacos, broths, and seafood with genuine hospitality.
                  </>
                )}
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-stone-200">
                      {lang === 'es' ? 'Dirección Oficial' : 'Official Address'}
                    </h4>
                    <p className="text-xs text-stone-400">601 E Rundberg Ln, Austin, TX 78753</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-stone-200">
                      {lang === 'es' ? 'Teléfono para Pedidos' : 'Order Phone Line'}
                    </h4>
                    <p className="text-xs text-stone-400">(512) 835-1894</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-stone-200">
                      {lang === 'es' ? 'Servicio' : 'Service Options'}
                    </h4>
                    <p className="text-xs text-stone-400">
                      {lang === 'es'
                        ? 'Comer en el lugar (terraza techada) o Para llevar (Takeout).'
                        : 'Dine-in (covered outdoor patio) or Takeout.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/?q=601+E+Rundberg+Ln,+Austin,+TX+78753"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold uppercase tracking-wider text-xs shadow-lg transition-transform hover:scale-105"
                >
                  {lang === 'es' ? 'Cómo Llegar (Google Maps)' : 'Get Directions (Google Maps)'}
                </a>
                <a
                  href="tel:5128351894"
                  className="px-6 py-3 rounded-full bg-stone-900 border border-stone-700 hover:border-amber-400 text-stone-200 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  {lang === 'es' ? 'Llamar al Restaurante' : 'Call Restaurant'}
                </a>
              </div>
            </div>

            {/* Embedded Interactive Map */}
            <div className="lg:col-span-7 h-96 rounded-3xl overflow-hidden border border-stone-800 shadow-2xl relative">
              <iframe
                title="Delicias Luvianos Ubicación"
                src="https://maps.google.com/maps?q=601%20E%20Rundberg%20Ln,%20Austin,%20TX%2078753&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125 invert opacity-90 hover:opacity-100 transition-opacity"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-950 border-t border-stone-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-900 text-center md:text-left">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Delicias Luvianos" className="h-12 w-auto object-contain" />
              <div>
                <h3 className="text-lg font-extrabold font-serif text-amber-400">DELICIAS LUVIANOS</h3>
                <p className="text-xs text-stone-400">Austin, Texas</p>
              </div>
            </div>

            <p className="text-xs text-stone-500 max-w-md">
              {t.footer.description}
            </p>
          </div>

          <div className="pt-6 flex flex-col gap-4 text-xs text-stone-500">
            <nav
              aria-label={lang === 'es' ? 'Enlaces legales y cumplimiento EE. UU.' : 'U.S. legal and compliance links'}
              className="flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2 pb-4 border-b border-stone-900"
            >
              {LEGAL_KINDS.map((kind) => (
                <button
                  key={kind}
                  type="button"
                  onClick={() => setActiveLegalKind(kind)}
                  className="text-stone-400 hover:text-amber-400 transition-colors font-medium cursor-pointer"
                >
                  {getLegalLabel(kind, lang)}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setForceCookieBanner(true)}
                className="text-stone-400 hover:text-amber-400 transition-colors font-medium cursor-pointer"
              >
                {advisory.manageCookiesLabel}
              </button>
            </nav>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p>© {new Date().getFullYear()} Delicias Luvianos • 601 E Rundberg Ln, Austin, TX 78753. {t.footer.rights}</p>
              <p>{lang === 'es' ? 'Diseñado con pasión para Delicias Luvianos' : 'Crafted with passion for Delicias Luvianos'}</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Audio Player (Music only, no video, no YouTube) */}
      <AudioPlayer lang={lang} />

      {/* US / Texas Cookie & Privacy Consent Banner */}
      <CookieBanner
        lang={lang}
        onOpenLegal={(kind) => setActiveLegalKind(kind)}
        forceOpen={forceCookieBanner}
        onCloseForce={() => setForceCookieBanner(false)}
      />

      {/* US / Texas Legal & FDA Allergen Modal */}
      <LegalModal
        activeKind={activeLegalKind}
        lang={lang}
        onSelectKind={(kind) => setActiveLegalKind(kind)}
        onClose={() => setActiveLegalKind(null)}
      />

      {/* Lightbox / Modal for zoomed image */}
      {previewImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setPreviewImage(null)}
        >
          <div 
            className="relative max-w-3xl w-full bg-stone-900 border border-stone-700 rounded-2xl overflow-hidden shadow-2xl p-4 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-3 right-3 p-2 bg-stone-800 text-stone-300 hover:text-white rounded-full z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[75vh] flex items-center justify-center overflow-auto p-2">
              <img 
                src={previewImage.src} 
                alt={previewImage.title} 
                className="max-h-[70vh] w-auto object-contain rounded-lg"
              />
            </div>
            <div className="mt-4 pt-3 border-t border-stone-800">
              <h3 className="text-lg font-bold text-amber-400">{previewImage.title}</h3>
              {previewImage.desc && (
                <p className="text-xs text-stone-300 mt-1">{previewImage.desc}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
