import React, { useState } from 'react';
import { motion } from 'motion/react';

export const Architecture = () => {
  const [lang, setLang] = useState<'uk' | 'en'>('uk');

  const content = {
    uk: {
      badge: "02 // Архітектура",
      title: "Структура системи",
      desc: "Backend на Python (FastAPI) + фронтенд на JavaScript (React). Модульна архітектура для швидкого масштабування та інтеграції з військовими системами.",
      layers: [
        { name: "Mobile App", desc: "React / React Native" },
        { name: "API Gateway", desc: "FastAPI, REST" },
        { name: "Core Logic", desc: "Python, Business Rules" },
        { name: "Data Layer", desc: "PostgreSQL, Redis" }
      ]
    },
    en: {
      badge: "02 // Architecture",
      title: "System Structure",
      desc: "Backend on Python (FastAPI) + frontend on JavaScript (React). Modular architecture for fast scaling and integration with military systems.",
      layers: [
        { name: "Mobile App", desc: "React / React Native" },
        { name: "API Gateway", desc: "FastAPI, REST" },
        { name: "Core Logic", desc: "Python, Business Rules" },
        { name: "Data Layer", desc: "PostgreSQL, Redis" }
      ]
    }
  };

  const t = content[lang];

  return (
    <section className="py-32 relative border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />
      <div className="absolute top-6 right-6 z-50 flex gap-2 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
        <button onClick={() => setLang('uk')} className={`px-3 py-1 text-xs font-mono rounded-full transition-colors ${lang === 'uk' ? 'bg-amber-500 text-graphite' : 'text-white/50 hover:text-white'}`}>UK</button>
        <button onClick={() => setLang('en')} className={`px-3 py-1 text-xs font-mono rounded-full transition-colors ${lang === 'en' ? 'bg-amber-500 text-graphite' : 'text-white/50 hover:text-white'}`}>EN</button>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <div className="font-mono text-[10px] text-amber-500 uppercase tracking-widest mb-4">{t.badge}</div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              {t.title}
            </h2>
            <p className="text-white/60 font-light leading-relaxed mb-8">{t.desc}</p>
            <ul className="space-y-4 font-mono text-xs text-white/70">
              {t.layers.map((layer, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span className="font-medium text-amber-500/90">{layer.name}</span> — {layer.desc}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex-1 w-full">
            <div className="p-8 border border-white/10 bg-graphite-light rounded-xl">
              <div className="flex flex-col gap-6">
                {t.layers.map((layer, i) => (
                  <div key={i} className={`px-6 py-4 rounded-lg border ${i === 1 ? 'border-amber-500/50 bg-amber-500/10' : 'border-white/20 bg-white/5'}`}>
                    <div className="font-mono font-bold text-sm text-white">{layer.name}</div>
                    <div className="text-[10px] text-white/50 uppercase tracking-wider mt-1">{layer.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
