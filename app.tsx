/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, MapPin, Instagram, Send } from 'lucide-react';

export default function App() {
  return (
    <div className="h-[100dvh] flex items-center justify-center p-2 sm:p-4 bg-black-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black-800 via-black-950 to-black-950 overflow-hidden">
      <div className="w-full max-w-md bg-black-800 rounded-3xl shadow-[0_0_40px_rgba(212,175,55,0.1)] overflow-hidden border border-gold-500/20 relative max-h-[98dvh] flex flex-col">

        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50 z-20"></div>

        {/* Header / Hero Image Area */}
        <div className="relative h-[25dvh] min-h-[120px] bg-black-900 overflow-hidden shrink-0">
          <img
            src="/restaurant-bg.jpg"
            alt="Raya Home restoran"
            className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black-800 via-black-800/60 to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="px-6 sm:px-8 pt-0 pb-4 sm:pb-6 text-center relative z-10 flex flex-col items-center flex-1 min-h-0">

          {/* Logo / Brand Mark */}
          <div className="relative -mt-16 sm:-mt-20 mb-1 mx-auto w-48 h-32 sm:w-64 sm:h-40 flex items-center justify-center shrink-0">
            {/* Glow effect behind logo */}
            <div className="absolute inset-0 bg-gold-500/20 blur-3xl rounded-full opacity-60"></div>

            <img
              src="/raya-logo.jpg"
              alt="Raya Home Logo"
              className="w-full h-full object-contain drop-shadow-2xl relative z-10"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.querySelector('.fallback-logo')!.classList.remove('hidden');
              }}
            />

            {/* Fallback Logo (Hidden by default, shows if image fails) */}
            <div className="fallback-logo hidden w-28 h-28 rounded-full bg-black-900 border-2 border-gold-500 flex flex-col items-center justify-center shadow-2xl">
              <span className="font-serif text-4xl text-gold-500">R</span>
              <span className="text-gold-400 text-xs tracking-[0.3em] mt-1 uppercase">Raya</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-serif text-gold-500 mb-1 sm:mb-2 tracking-tight drop-shadow-md shrink-0">
            Raya Home
          </h1>

          {/* Primary Action - Call */}
          <a
            href="tel:+998904303015"
            className="group relative w-full flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-black-950 py-3 sm:py-4 px-4 sm:px-6 rounded-xl hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 mb-4 sm:mb-6 overflow-hidden shrink-0"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-black-900 relative z-10" />
            <span className="font-bold text-base sm:text-lg tracking-wide relative z-10 font-serif">+998 90 430 30 15</span>
          </a>

          {/* Divider */}
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 opacity-30 w-full shrink-0">
            <div className="h-px bg-gold-500 flex-1"></div>
            <span className="font-serif italic text-gold-400 text-xs sm:text-sm">Bog'lanish</span>
            <div className="h-px bg-gold-500 flex-1"></div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-4 sm:mb-6 shrink-0">
            <a
              href="https://t.me/Chatoq_01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 group"
              title="Telegram"
            >
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black-700 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-[#229ED9] group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-lg">
                <Send className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5" />
              </div>
              <span className="text-[10px] sm:text-xs font-medium text-gold-500/50 group-hover:text-gold-400 transition-colors">Telegram</span>
            </a>

            <a
              href="https://instagram.com/raya__home_1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 group"
              title="Instagram"
            >
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black-700 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gradient-to-tr group-hover:from-[#f09433] group-hover:via-[#dc2743] group-hover:to-[#bc1888] group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-lg">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[10px] sm:text-xs font-medium text-gold-500/50 group-hover:text-gold-400 transition-colors">Instagram</span>
            </a>
          </div>

          {/* Location */}
          <a
            href="https://maps.apple.com/place?coordinate=41.562826,60.611053&name=%D0%9E%D1%82%D0%BC%D0%B5%D1%87%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%B3%D0%B5%D0%BE%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D1%8F&map=h"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-200 transition-colors py-1.5 px-5 rounded-full hover:bg-gold-500/10 border border-transparent hover:border-gold-500/30 shrink-0"
          >
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-medium tracking-wide">Manzilni ko'rish</span>
          </a>

        </div>
      </div>

    </div>
  );
}
