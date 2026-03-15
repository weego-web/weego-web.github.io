import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Smartphone, Server, Cpu, Database, ArrowDown } from 'lucide-react';

export const Architecture = () => {
  const [lang, setLang] = useState<'uk' | 'en'>('uk');

  const content = {
    uk: {
      badge: "03 // Архітектура",
      title: "Структура системи",
      desc: "Backend на Python (FastAPI) + фронтенд на JavaScript (React). Модульна архітектура для швидкого масштабування та інтеграції з військовими системами.",
      layers: [
        { name: "Presentation", desc: "React / React Native", icon: Smartphone, sub: "Мобільний клієнт" },
        { name: "API Gateway", desc: "FastAPI, REST, Pydantic", icon: Server, sub: "Валідація, маршрутизація" },
        { name: "Business Logic", desc: "Services, Models", icon: Cpu, sub: "PaymentService, DonationService, BankSystem" },
        { name: "Data Layer", desc: "PostgreSQL / SQLite", icon: Database, sub: "DAL, транзакції" }
      ]
    },
    en: {
      badge: "03 // Architecture",
      title: "System Structure",
      desc: "Backend on Python (FastAPI) + frontend on JavaScript (React). Modular architecture for fast scaling and integration with military systems.",
      layers: [
        { name: "Presentation", desc: "React / React Native", icon: Smartphone, sub: "Mobile client" },
        { name: "API Gateway", desc: "FastAPI, REST, Pydantic", icon: Server, sub: "Validation, routing" },
        { name: "Business Logic", desc: "Services, Models", icon: Cpu, sub: "PaymentService, DonationService, BankSystem" },
        { name: "Data Layer", desc: "PostgreSQL / SQLite", icon: Database, sub: "DAL, transactions" }
      ]
    }
  };

  const t = content[lang];

  return (
    <section className="py-32 relative border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />
      <div className="absolute top-6 right-6 z-50 flex gap-2 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
        <button onClick={() => setLang('uk')} className={`px-3 py-1 text-xs font-mono rounded-full transition-colors ${lang === 'uk' ? 'bg-beige-500 text-graphite' : 'text-white/50 hover:text-white'}`}>UK</button>
        <button onClick={() => setLang('en')} className={`px-3 py-1 text-xs font-mono rounded-full transition-colors ${lang === 'en' ? 'bg-beige-500 text-graphite' : 'text-white/50 hover:text-white'}`}>EN</button>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1 max-w-xl">
            <div className="font-mono text-[10px] text-beige-500 uppercase tracking-widest mb-4">{t.badge}</div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">{t.title}</h2>
            <p className="text-white/60 font-light leading-relaxed mb-8">{t.desc}</p>
            <ul className="space-y-5 font-mono text-sm text-white/70">
              {t.layers.map((layer, i) => (
                <li key={i} className="flex items-start gap-4 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-beige-500/20 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-beige-500/10 border border-beige-500/20 flex items-center justify-center shrink-0">
                    <layer.icon className="w-5 h-5 text-beige-500" />
                  </div>
                  <div>
                    <span className="font-medium text-beige-500/90">{layer.name}</span>
                    <span className="text-white/50"> — {layer.desc}</span>
                    <div className="text-[10px] text-white/40 mt-1">{layer.sub}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex-1 w-full max-w-2xl">
            <div className="p-6 sm:p-8 border border-white/10 bg-graphite-light rounded-2xl">
              <div className="flex flex-col gap-4">
                {t.layers.map((layer, i) => (
                  <React.Fragment key={i}>
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className={`px-6 py-4 rounded-xl border flex items-center gap-4 ${
                        i === 1 ? 'border-beige-500/50 bg-beige-500/10' : 
                        i === 2 ? 'border-beige-500/30 bg-beige-500/5' : 
                        'border-white/20 bg-white/5'
                      }`}
                    >
                      <layer.icon className={`w-6 h-6 shrink-0 ${i <= 2 ? 'text-beige-500' : 'text-white/50'}`} />
                      <div>
                        <div className="font-mono font-bold text-sm text-white">{layer.name}</div>
                        <div className="text-[10px] text-white/50 uppercase tracking-wider mt-0.5">{layer.desc}</div>
                      </div>
                    </motion.div>
                    {i < t.layers.length - 1 && (
                      <div className="flex justify-center">
                        <ArrowDown className="w-4 h-4 text-beige-500/40" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
