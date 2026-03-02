
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="studio" className="w-full py-24 md:py-40 bg-weego-white text-weego-black relative">
      <div className="px-6 max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 border-b-4 border-weego-black pb-12">
            <div>
                <h2 className="font-display text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.8]">
                {t.about.heading} <br/>
                <span className="text-stroke-black text-transparent" style={{ WebkitTextStroke: '2px black' }}>
                    {t.about.subheading}
                </span>
                </h2>
            </div>
            <div className="mt-8 md:mt-0 max-w-lg">
                <p className="font-sans text-xl md:text-2xl font-medium leading-relaxed">
                    {t.about.description}
                </p>
            </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 relative">
                {t.about.stats.map((stat) => (
                    <div key={stat.label} className="border-t border-black pt-4 relative z-10">
                        <span className="block font-mono text-xs uppercase tracking-widest text-gray-500 mb-2">{stat.label}</span>
                        <span className="font-display text-5xl md:text-7xl font-bold">{stat.value}</span>
                    </div>
                ))}
            </div>

            {/* Manifesto */}
            <div className="bg-weego-black text-weego-white p-8 md:p-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-weego-lime blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                
                <ul className="flex flex-col gap-6">
                    {t.about.manifesto.map((item, idx) => (
                        <li key={idx} className="font-display text-xl md:text-3xl uppercase font-bold leading-tight hover:text-weego-lime transition-colors cursor-default">
                           {`0${idx + 1} — ${item}`}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};
