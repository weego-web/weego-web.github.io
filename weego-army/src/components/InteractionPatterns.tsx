import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MousePointer, Check, X, Loader2, AlertCircle } from 'lucide-react';

const PATTERNS = [
  { id: 'primary', label: 'Primary', sample: 'Підтвердити переказ', state: 'default' },
  { id: 'secondary', label: 'Secondary', sample: 'Скасувати', state: 'default' },
  { id: 'ghost', label: 'Ghost', sample: 'Детальніше', state: 'default' },
  { id: 'input', label: 'Input', sample: 'Введіть суму', state: 'default' },
  { id: 'success', label: 'Success', sample: 'Операцію виконано', state: 'success' },
  { id: 'error', label: 'Error', sample: 'Недостатньо коштів', state: 'error' },
  { id: 'loading', label: 'Loading', sample: 'Обробка...', state: 'loading' },
];

export const InteractionPatterns = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="py-32 relative border-t border-beige-500/20 overflow-hidden bg-graphite-light/30">
      <div className="absolute inset-0 bg-grid-warm pointer-events-none opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-[10px] text-beige-400 uppercase tracking-widest mb-4">12 // Interaction Patterns</div>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-beige-100">
            Патерни взаємодії.
          </h2>
          <p className="text-lg text-beige-300/70">
            Кнопки, інпути, стани — консистентна UX-бібліотека для швидкої розробки інтерфейсів.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Buttons */}
          <div className="space-y-4">
            <div className="font-mono text-[10px] text-beige-500/70 uppercase flex items-center gap-2">
              <MousePointer className="w-3.5 h-3.5" />
              Buttons
            </div>
            <div className="space-y-3 p-6 rounded-2xl border border-beige-500/10 bg-graphite/50">
              <button className="w-full py-3 rounded-xl bg-beige-500/25 border border-beige-500/40 text-beige-200 font-medium text-sm hover:bg-beige-500/35 transition-colors">
                Primary
              </button>
              <button className="w-full py-3 rounded-xl bg-white/5 border border-beige-500/20 text-beige-300 text-sm hover:bg-white/10 transition-colors">
                Secondary
              </button>
              <button className="w-full py-3 rounded-xl text-beige-400/80 text-sm hover:text-beige-400 hover:bg-white/5 transition-colors">
                Ghost
              </button>
            </div>
          </div>

          {/* Inputs */}
          <div className="space-y-4">
            <div className="font-mono text-[10px] text-beige-500/70 uppercase flex items-center gap-2">
              <MousePointer className="w-3.5 h-3.5" />
              Inputs
            </div>
            <div className="space-y-3 p-6 rounded-2xl border border-beige-500/10 bg-graphite/50">
              <div className="relative">
                <input
                  type="text"
                  placeholder=" "
                  className="w-full py-3 px-4 rounded-xl bg-white/5 border border-beige-500/20 text-beige-200 placeholder-transparent focus:outline-none focus:border-beige-500/50 peer"
                />
                <label className="absolute left-4 top-0 -translate-y-1/2 bg-graphite px-2 text-[10px] text-beige-500/60 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px] transition-all">
                  Default
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Focused"
                  className="w-full py-3 px-4 rounded-xl bg-white/5 border-2 border-beige-500/50 text-beige-200 placeholder-transparent focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Feedback states */}
          <div className="space-y-4">
            <div className="font-mono text-[10px] text-beige-500/70 uppercase flex items-center gap-2">
              <Check className="w-3.5 h-3.5" />
              Feedback
            </div>
            <div className="space-y-3 p-6 rounded-2xl border border-beige-500/10 bg-graphite/50">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                <Check className="w-4 h-4 text-green-500/80 shrink-0" />
                <span className="text-sm text-green-400/90">Success message</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                <X className="w-4 h-4 text-red-500/80 shrink-0" />
                <span className="text-sm text-red-400/90">Error message</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-beige-500/10 border border-beige-500/20">
                <Loader2 className="w-4 h-4 text-beige-500 animate-spin shrink-0" />
                <span className="text-sm text-beige-400/90">Loading...</span>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-4">
            <div className="font-mono text-[10px] text-beige-500/70 uppercase flex items-center gap-2">
              <MousePointer className="w-3.5 h-3.5" />
              Cards
            </div>
            <div className="space-y-3 p-6 rounded-2xl border border-beige-500/10 bg-graphite/50">
              <div
                onMouseEnter={() => setActiveId('card1')}
                onMouseLeave={() => setActiveId(null)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  activeId === 'card1' ? 'border-beige-500/40 bg-beige-500/10' : 'border-beige-500/15 bg-white/5 hover:border-beige-500/25'
                }`}
              >
                <div className="text-beige-500/60 text-[9px] uppercase mb-1">Баланс</div>
                <div className="text-xl font-serif text-beige-300">₴12,450</div>
              </div>
              <div className="p-4 rounded-xl border border-beige-500/15 bg-white/5">
                <div className="flex items-center justify-between">
                  <span className="text-beige-400/80 text-sm">Остання операція</span>
                  <span className="text-beige-500/60 text-[10px]">+₴8,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          {PATTERNS.map((p) => (
            <div
              key={p.id}
              className={`px-4 py-2 rounded-lg border font-mono text-xs cursor-default transition-colors ${
                activeId === p.id ? 'border-beige-500/40 bg-beige-500/15 text-beige-400' : 'border-beige-500/15 text-beige-500/70 hover:border-beige-500/25'
              }`}
              onMouseEnter={() => setActiveId(p.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              {p.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
