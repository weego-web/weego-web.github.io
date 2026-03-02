
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowDown, Globe } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col bg-weego-black overflow-hidden border-b border-white/10">
      <div className="flex-grow flex flex-col justify-center px-6 py-20 md:py-32">
        <div className="max-w-[1600px] mx-auto w-full">
          {/* Technical Meta Line */}
          <div className="flex items-center gap-3 mb-8 opacity-40">
            <div className="w-1.5 h-1.5 bg-weego-lime rounded-full animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white">System.Active // Studio_v2.5</span>
          </div>

          {/* Main Headline - Massive but Clean */}
          <div className="mb-16 md:mb-24">
            <h1 className="font-display font-black text-[clamp(44px,12vw,180px)] leading-[0.8] tracking-[-0.05em] uppercase text-white">
              {t.hero.h1Line1}<br />
              <span className="text-weego-lime">{t.hero.h1Line2}</span>
            </h1>
          </div>

          {/* Core Statement - The "End-to-End" part they like */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <div className="flex flex-col gap-4">
                <span className="font-mono text-xs text-weego-lime uppercase tracking-[0.3em] font-bold">
                  {t.hero.subheadlineLine1}
                </span>
                <p className="font-display text-2xl md:text-4xl text-white uppercase font-black tracking-tight leading-none">
                  {t.hero.subheadlineLine2}
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-5 flex flex-col sm:flex-row gap-4 justify-end">
              <Link 
                to="/brief" 
                className="px-12 py-5 bg-weego-lime text-black font-display font-black uppercase tracking-widest text-sm hover:bg-white transition-all text-center"
              >
                {t.hero.ctaPrimary}
              </Link>
              <a 
                href="#work" 
                className="px-12 py-5 border border-white/20 text-white font-display font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all text-center"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid - Narrower (1200px) and cleaner */}
      <div className="w-full">
        <div className="max-w-[1200px] mx-auto border-t border-white/10 grid grid-cols-2 lg:grid-cols-4">
          {t.trust.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="p-8 md:p-12 border-r last:border-r-0 border-white/10 group hover:bg-white/[0.02] transition-colors text-center"
            >
              <span className="block font-mono text-[10px] text-gray-500 uppercase tracking-[0.3em] mb-4 group-hover:text-weego-lime transition-colors">
                {stat.label}
              </span>
              <span className="block font-display text-4xl md:text-6xl font-black text-white">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
