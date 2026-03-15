import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Wallet, Heart, Target, PiggyBank } from 'lucide-react';

export const Essence = () => {
  const [lang, setLang] = useState<'uk' | 'en'>('uk');

  const content = {
    uk: {
      badge: "01 // Суть ідеї",
      title: "Не великий банк.",
      subtitle: "Спеціалізований банкінг.",
      desc: "Це не «великий банк», а спеціалізований мобільний банкінг для військових. У застосунку можна реєструвати користувачів, створювати рахунки, переглядати баланс, поповнювати та переказувати кошти, переглядати історію операцій — плюс окремі функції для захисників.",
      pillars: [
        {
          icon: Wallet,
          title: "Базові операції",
          desc: "Реєстрація користувачів, створення банківського рахунку, перегляд балансу, поповнення рахунку, перекази коштів, історія операцій.",
          tags: ["REST API", "Auth", "Transactions"]
        },
        {
          icon: Heart,
          title: "Швидкий переказ родині",
          desc: "Окремий модуль для миттєвих переказів родичам. Мінімум кліків — максимум швидкості.",
          tags: ["Quick Transfer", "Favorites", "Templates"]
        },
        {
          icon: Target,
          title: "Бойові виплати",
          desc: "Модуль для обліку та нарахування бойових виплат. Інтеграція з військовими системами.",
          tags: ["Combat Pay", "Payroll", "Audit"]
        },
        {
          icon: PiggyBank,
          title: "Донати та накопичення",
          desc: "Волонтерський донат одним кліком. Накопичення на спорядження — окремий цільовий рахунок.",
          tags: ["Donations", "Savings", "Goals"]
        }
      ]
    },
    en: {
      badge: "01 // Core Idea",
      title: "Not a big bank.",
      subtitle: "Specialized banking.",
      desc: "This is not a «big bank», but specialized mobile banking for military personnel. The app allows user registration, account creation, balance viewing, top-ups, transfers, transaction history — plus dedicated features for defenders.",
      pillars: [
        {
          icon: Wallet,
          title: "Core Operations",
          desc: "User registration, bank account creation, balance viewing, account top-up, fund transfers, transaction history.",
          tags: ["REST API", "Auth", "Transactions"]
        },
        {
          icon: Heart,
          title: "Quick Family Transfer",
          desc: "Dedicated module for instant transfers to family. Minimum clicks — maximum speed.",
          tags: ["Quick Transfer", "Favorites", "Templates"]
        },
        {
          icon: Target,
          title: "Combat Pay",
          desc: "Module for tracking and crediting combat payments. Integration with military systems.",
          tags: ["Combat Pay", "Payroll", "Audit"]
        },
        {
          icon: PiggyBank,
          title: "Donations & Savings",
          desc: "Volunteer donation in one click. Savings for equipment — dedicated goal account.",
          tags: ["Donations", "Savings", "Goals"]
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section id="features" className="py-32 relative border-t border-white/10 bg-graphite-light/50">
      <div className="absolute top-6 right-6 z-50 flex gap-2 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
        <button onClick={() => setLang('uk')} className={`px-3 py-1 text-xs font-mono rounded-full transition-colors ${lang === 'uk' ? 'bg-beige-500 text-graphite' : 'text-white/50 hover:text-white'}`}>UK</button>
        <button onClick={() => setLang('en')} className={`px-3 py-1 text-xs font-mono rounded-full transition-colors ${lang === 'en' ? 'bg-beige-500 text-graphite' : 'text-white/50 hover:text-white'}`}>EN</button>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <div className="font-mono text-[10px] text-beige-500 uppercase tracking-widest mb-4">{t.badge}</div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            {t.title} <span className="italic text-white/50">{t.subtitle}</span>
          </h2>
          <p className="text-lg text-white/60 font-light leading-relaxed">{t.desc}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.pillars.map((pillar, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-white/10 bg-graphite hover:bg-white/[0.02] transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <pillar.icon className="w-24 h-24 text-beige-500" />
              </div>
              <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center mb-6 bg-white/5 text-beige-500 relative z-10">
                <pillar.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium mb-4 relative z-10">{pillar.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8 relative z-10">{pillar.desc}</p>
              <div className="flex flex-wrap gap-2 relative z-10">
                {pillar.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 border border-white/10 bg-white/5 text-[10px] font-mono uppercase tracking-wider text-white/70">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
