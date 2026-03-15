import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Circle, GitMerge, Zap } from 'lucide-react';

const FLOWS = [
  { id: 'transfer', label: 'Переказ коштів', nodes: ['Клієнт', 'API', 'PaymentService', 'DB', 'Transaction'], highlight: 2 },
  { id: 'donation', label: 'Донат', nodes: ['Клієнт', 'API', 'DonationService', 'DB', 'Donation'], highlight: 2 },
  { id: 'salary', label: 'Бойова виплата', nodes: ['Система', 'API', 'SalaryPayment', 'DB', 'Account'], highlight: 2 },
  { id: 'savings', label: 'Накопичення', nodes: ['Клієнт', 'API', 'SavingsGoal', 'DB', 'savings_goals'], highlight: 2 },
];

export const ProcessFlow = () => {
  const [lang, setLang] = useState<'uk' | 'en'>('uk');

  const t = lang === 'uk' ? {
    badge: '07 // Процеси',
    title: 'Потоки процесів.',
    subtitle: 'Візуалізація шляхів даних через систему.'
  } : {
    badge: '07 // Processes',
    title: 'Process flows.',
    subtitle: 'Visualization of data paths through the system.'
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

        <div className="space-y-12">
          {FLOWS.map((flow, fi) => (
            <motion.div
              key={flow.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-white/10 bg-graphite-light"
            >
              <div className="flex items-center gap-2 mb-6">
                <GitMerge className="w-4 h-4 text-beige-500" />
                <span className="font-mono font-bold text-beige-500">{flow.label}</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
                {flow.nodes.map((node, ni) => (
                  <React.Fragment key={ni}>
                    <div className={`px-4 py-2.5 rounded-lg border font-mono text-xs flex items-center gap-2 ${
                      ni === flow.highlight 
                        ? 'border-beige-500/50 bg-beige-500/15 text-beige-500' 
                        : 'border-white/20 bg-white/5 text-white/80'
                    }`}>
                      {ni === 0 && <Circle className="w-3 h-3" />}
                      {ni === flow.nodes.length - 1 && <Zap className="w-3 h-3" />}
                      {node}
                    </div>
                    {ni < flow.nodes.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-white/30 shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
