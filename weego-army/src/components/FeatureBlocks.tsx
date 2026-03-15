import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Wallet, Send, Heart, PiggyBank, Shield, Zap, FileCheck, BarChart3 } from 'lucide-react';

const BLOCKS = [
  { icon: Wallet, title: 'Рахунки', desc: 'Створення, поповнення, баланс', stat: '1:1 User', color: 'beige' },
  { icon: Send, title: 'Перекази', desc: 'Родині, між рахунками', stat: 'PaymentService', color: 'white' },
  { icon: Heart, title: 'Донати', desc: 'Підрозділ, волонтерський фонд', stat: 'DonationService', color: 'white' },
  { icon: PiggyBank, title: 'Накопичення', desc: 'Цільові рахунки на спорядження', stat: 'SavingsGoal', color: 'white' },
  { icon: FileCheck, title: 'Бойові виплати', desc: 'Нарахування combat/service', stat: 'SalaryPayment', color: 'white' },
  { icon: Shield, title: 'Безпека', desc: 'Валідація, авторизація', stat: 'UserService', color: 'white' },
  { icon: BarChart3, title: 'Історія', desc: 'Транзакції, аудит', stat: 'Transaction', color: 'white' },
  { icon: Zap, title: 'API', desc: 'REST, FastAPI, Pydantic', stat: 'routes/*', color: 'beige' },
];

export const FeatureBlocks = () => {
  const [lang, setLang] = useState<'uk' | 'en'>('uk');

  const t = lang === 'uk' ? {
    badge: '02 // Модулі',
    title: 'Функціональні блоки.',
    subtitle: 'Кожен модуль — окрема відповідальність.'
  } : {
    badge: '02 // Modules',
    title: 'Feature blocks.',
    subtitle: 'Each module — separate responsibility.'
  };

  return (
    <section className="py-32 relative border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-20" />
      <div className="absolute top-6 right-6 z-50 flex gap-2 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
        <button onClick={() => setLang('uk')} className={`px-3 py-1 text-xs font-mono rounded-full transition-colors ${lang === 'uk' ? 'bg-beige-500 text-graphite' : 'text-white/50 hover:text-white'}`}>UK</button>
        <button onClick={() => setLang('en')} className={`px-3 py-1 text-xs font-mono rounded-full transition-colors ${lang === 'en' ? 'bg-beige-500 text-graphite' : 'text-white/50 hover:text-white'}`}>EN</button>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-[10px] text-beige-500 uppercase tracking-widest mb-4">{t.badge}</div>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">{t.title}</h2>
          <p className="text-lg text-white/50">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {BLOCKS.map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] card-lift ${
                block.color === 'beige' 
                  ? 'border-beige-500/30 bg-beige-500/5 hover:border-beige-500/50' 
                  : 'border-white/10 bg-graphite-light hover:border-white/20'
              }`}
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 ${
                block.color === 'beige' ? 'bg-beige-500/20 text-beige-500' : 'bg-white/10 text-white/80'
              }`}>
                <block.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="font-mono font-bold text-sm text-white mb-1">{block.title}</div>
              <div className="text-xs text-white/50 mb-3">{block.desc}</div>
              <div className="text-[10px] font-mono text-beige-500/80">{block.stat}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
