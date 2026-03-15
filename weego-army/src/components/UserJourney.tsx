import React, { useState } from 'react';
import { motion } from 'motion/react';
import { UserPlus, Smartphone, Wallet, Send, CheckCircle, ArrowRight, Zap } from 'lucide-react';

const STEPS = [
  { id: 1, icon: UserPlus, label: 'Реєстрація', desc: 'Телефон, email, підтвердження', time: '~2 хв', pain: 'Мінімум полів' },
  { id: 2, icon: Smartphone, label: 'Перший вхід', desc: 'Біометрія або PIN', time: '5 сек', pain: 'Швидкий доступ' },
  { id: 3, icon: Wallet, label: 'Баланс', desc: 'Головний екран — одразу видно', time: '0 сек', pain: 'Zero-click info' },
  { id: 4, icon: Send, label: 'Переказ родині', desc: '1–2 кліки до відправки', time: '~15 сек', pain: 'Favorites, шаблони' },
  { id: 5, icon: CheckCircle, label: 'Підтвердження', desc: 'Push + історія', time: 'мгновенно', pain: 'Прозорість' },
];

export const UserJourney = () => {
  const [hoverStep, setHoverStep] = useState<number | null>(null);

  return (
    <section className="py-32 relative border-t border-beige-500/20 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-30" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-beige-500/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-beige-500/5 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-[10px] text-beige-400 uppercase tracking-widest mb-4">11 // User Journey</div>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-beige-100">
            Шлях користувача.
          </h2>
          <p className="text-lg text-beige-300/70">
            UX-карта від першого дотику до підтвердження операції. Кожен крок — мінімум тертя.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-beige-500/30 to-transparent -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onMouseEnter={() => setHoverStep(step.id)}
                onMouseLeave={() => setHoverStep(null)}
                className="relative group"
              >
                <div className={`p-6 rounded-2xl border transition-all duration-300 ${
                  hoverStep === step.id
                    ? 'border-beige-500/40 bg-beige-500/10 shadow-[0_0_40px_rgba(168,139,92,0.15)]'
                    : 'border-beige-500/15 bg-graphite-light/80 hover:border-beige-500/25'
                }`}>
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      animate={{ scale: hoverStep === step.id ? 1.05 : 1 }}
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
                        hoverStep === step.id ? 'bg-beige-500/25 text-beige-400' : 'bg-beige-500/10 text-beige-500/80'
                      }`}
                    >
                      <step.icon className="w-6 h-6" />
                    </motion.div>
                    <div className="font-mono text-[10px] text-beige-500/60 mb-1">Крок {step.id}</div>
                    <div className="font-mono font-bold text-beige-200 mb-2">{step.label}</div>
                    <div className="text-xs text-beige-400/70 mb-3">{step.desc}</div>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-beige-500/80">
                      <Zap className="w-3 h-3" />
                      {step.time}
                    </div>
                    <div className="mt-2 px-2 py-1 rounded bg-beige-500/10 text-[9px] text-beige-500/70">
                      {step.pain}
                    </div>
                  </div>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-4 h-4 text-beige-500/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 p-6 rounded-2xl border border-beige-500/15 bg-graphite-light/50">
          <div className="font-mono text-[10px] text-beige-500/70 uppercase mb-3">UX-принципи</div>
          <div className="flex flex-wrap gap-4 text-sm text-beige-300/80">
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-beige-500/50" /> Progressive disclosure</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-beige-500/50" /> One-tap actions</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-beige-500/50" /> Clear feedback</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-beige-500/50" /> Offline-first mindset</span>
          </div>
        </div>
      </div>
    </section>
  );
};
