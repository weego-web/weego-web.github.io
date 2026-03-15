import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Accessibility, Eye, Smartphone, MousePointer2, Contrast } from 'lucide-react';

const A11Y_ITEMS = [
  { icon: Contrast, title: 'Контраст', desc: 'WCAG AA — мінімум 4.5:1 для тексту', value: '7.2:1' },
  { icon: MousePointer2, title: 'Touch targets', desc: 'Мінімум 44×44px для кнопок', value: '48px' },
  { icon: Eye, title: 'Розмір шрифту', desc: 'Мінімум 16px для body', value: '16–18px' },
  { icon: Smartphone, title: 'Responsive', desc: 'Breakpoints: 320–1920px', value: '4+ views' },
  { icon: Accessibility, title: 'Screen reader', desc: 'Semantic HTML, aria-labels', value: '✓' },
];

export const AccessibilityUX = () => {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section className="py-32 relative border-t border-beige-500/20 overflow-hidden bg-graphite-light/30">
      <div className="absolute inset-0 bg-grid-warm pointer-events-none opacity-15" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1 max-w-xl">
            <div className="font-mono text-[10px] text-beige-400 uppercase tracking-widest mb-4">14 // Accessibility & UX</div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-beige-100">
              Доступність і UX.
            </h2>
            <p className="text-lg text-beige-300/70 mb-8">
              Інтерфейс зроблений для всіх: контраст, великі зони натискання, читабельність, підтримка скрінрідерів.
            </p>
            <div className="space-y-3">
              {A11Y_ITEMS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    expanded === i ? 'border-beige-500/40 bg-beige-500/10' : 'border-beige-500/15 bg-white/5 hover:border-beige-500/25'
                  }`}
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-beige-500/15 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-beige-500" />
                      </div>
                      <div>
                        <div className="font-mono font-medium text-beige-200">{item.title}</div>
                        <div className="text-xs text-beige-500/70">{item.desc}</div>
                      </div>
                    </div>
                    <div className="font-mono text-sm text-beige-500">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full max-w-md">
            <div className="p-8 rounded-2xl border border-beige-500/20 bg-graphite">
              <div className="font-mono text-[10px] text-beige-500/70 uppercase mb-6">Focus states</div>
              <div className="space-y-4">
                <button className="w-full py-4 px-6 rounded-xl bg-beige-500/15 border-2 border-transparent text-beige-300 text-left font-mono text-sm focus:outline-none focus:border-beige-500 focus:ring-2 focus:ring-beige-500/30">
                  Focusable button — Tab to focus
                </button>
                <input
                  type="text"
                  placeholder="Focusable input"
                  className="w-full py-4 px-6 rounded-xl bg-white/5 border border-beige-500/20 text-beige-200 placeholder-beige-500/40 focus:outline-none focus:ring-2 focus:ring-beige-500/40 focus:border-beige-500/50"
                />
                <div className="p-4 rounded-xl border-2 border-dashed border-beige-500/20 text-center text-beige-500/60 text-xs">
                  Visible focus rings на всіх інтерактивних елементах
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
