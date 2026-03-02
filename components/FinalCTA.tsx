
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full py-24 md:py-40 bg-weego-lime relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
        <span className="font-display text-[30vw] font-black uppercase leading-none whitespace-nowrap">
          WEEGO WEEGO WEEGO
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
        <h2 className="font-display text-6xl md:text-9xl font-black uppercase tracking-tighter text-black leading-[0.9] mb-8">
          {t.finalCta.heading}
        </h2>
        <p className="font-sans text-xl md:text-3xl text-black/70 uppercase font-medium tracking-tight mb-16 max-w-2xl mx-auto">
          {t.finalCta.subheading}
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <Link 
            to="/brief" 
            className="w-full md:w-auto px-12 py-6 bg-black text-weego-lime font-display font-black uppercase tracking-widest text-lg hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
          >
            {t.finalCta.ctaPrimary}
            <ArrowUpRight size={24} />
          </Link>
          <a 
            href="https://wa.me/380683642205" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-12 py-6 border-2 border-black text-black font-display font-black uppercase tracking-widest text-lg hover:bg-black hover:text-weego-lime transition-all hover:scale-105 active:scale-95"
          >
            {t.finalCta.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
};
