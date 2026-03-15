import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Database, Server, Smartphone } from 'lucide-react';

export const TechStack = () => {
  const [lang, setLang] = useState<'uk' | 'en'>('uk');

  const stack = [
    { name: "Python", role: "Backend", icon: Server },
    { name: "FastAPI", role: "API", icon: Code2 },
    { name: "JavaScript", role: "Frontend", icon: Smartphone },
    { name: "React", role: "UI", icon: Smartphone },
    { name: "PostgreSQL", role: "Database", icon: Database }
  ];

  const t = lang === 'uk' 
    ? { badge: "04 // Стек", title: "Python + JavaScript" }
    : { badge: "04 // Tech Stack", title: "Python + JavaScript" };

  return (
    <section className="py-32 relative border-t border-white/10 bg-graphite-light/50">
      <div className="absolute top-6 right-6 z-50 flex gap-2 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
        <button onClick={() => setLang('uk')} className={`px-3 py-1 text-xs font-mono rounded-full transition-colors ${lang === 'uk' ? 'bg-amber-500 text-graphite' : 'text-white/50 hover:text-white'}`}>UK</button>
        <button onClick={() => setLang('en')} className={`px-3 py-1 text-xs font-mono rounded-full transition-colors ${lang === 'en' ? 'bg-amber-500 text-graphite' : 'text-white/50 hover:text-white'}`}>EN</button>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-[10px] text-amber-500 uppercase tracking-widest mb-4">{t.badge}</div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">{t.title}</h2>
          <p className="text-lg text-white/60 font-light">
            {lang === 'uk' 
              ? "Backend на Python (FastAPI, SQLAlchemy), фронтенд на JavaScript (React). База даних PostgreSQL. REST API з документацією OpenAPI."
              : "Backend on Python (FastAPI, SQLAlchemy), frontend on JavaScript (React). PostgreSQL database. REST API with OpenAPI documentation."}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 border border-white/10 bg-graphite rounded-xl hover:border-amber-500/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 text-amber-500 group-hover:bg-amber-500/20 transition-colors">
                <tech.icon className="w-6 h-6" />
              </div>
              <div className="font-mono font-bold text-white">{tech.name}</div>
              <div className="text-[10px] text-white/50 uppercase tracking-wider mt-1">{tech.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
