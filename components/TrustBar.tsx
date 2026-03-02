
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

export const TrustBar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full py-6 md:py-8 bg-weego-black border-b border-white/10 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-6 md:mb-8">
          {t.trust.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col border-l border-weego-lime/30 pl-4">
              <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-1">
                {stat.label}
              </span>
              <span className="font-display text-3xl md:text-5xl font-black text-weego-white">
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {t.trust.logos.map((logo, idx) => (
            <span key={idx} className="font-display text-xl md:text-2xl font-black text-white tracking-tighter">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
