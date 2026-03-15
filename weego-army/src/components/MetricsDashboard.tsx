import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Users, Wallet, Zap, ArrowUpRight } from 'lucide-react';

const METRICS = [
  { id: 'users', label: 'Користувачі', value: '2,847', change: '+12%', icon: Users, color: 'beige' },
  { id: 'transactions', label: 'Операцій/день', value: '1,240', change: '+8%', icon: Zap, color: 'warm' },
  { id: 'volume', label: 'Обʼєм переказів', value: '₴4.2M', change: '+24%', icon: Wallet, color: 'beige' },
  { id: 'uptime', label: 'Uptime', value: '99.97%', change: '—', icon: TrendingUp, color: 'sand' },
];

export const MetricsDashboard = () => {
  const [hoverId, setHoverId] = useState<string | null>(null);

  return (
    <section className="py-32 relative border-t border-beige-500/20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-beige-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-[10px] text-beige-400 uppercase tracking-widest mb-4">13 // Metrics & Analytics</div>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-beige-100">
            Панель показників.
          </h2>
          <p className="text-lg text-beige-300/70">
            KPI, графіки, реальний час — візуалізація для прийняття рішень.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onMouseEnter={() => setHoverId(m.id)}
              onMouseLeave={() => setHoverId(null)}
              className={`p-6 rounded-2xl border transition-all duration-300 card-inner-glow ${
                hoverId === m.id
                  ? 'border-beige-500/40 bg-beige-500/10 shadow-[0_0_30px_rgba(168,139,92,0.12)] soft-glow'
                  : 'border-beige-500/15 bg-graphite-light hover:border-beige-500/25'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-beige-500/15 flex items-center justify-center shadow-[0_4px_12px_rgba(168,139,92,0.1)]">
                  <m.icon className="w-5 h-5 text-beige-500" />
                </div>
                {m.change !== '—' && (
                  <span className="flex items-center gap-0.5 text-[10px] font-mono text-green-500/80">
                    <ArrowUpRight className="w-3 h-3" />
                    {m.change}
                  </span>
                )}
              </div>
              <div className="font-mono text-2xl sm:text-3xl font-serif text-beige-200 mb-1">{m.value}</div>
              <div className="text-xs text-beige-500/70">{m.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Chart mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-6 rounded-2xl border border-beige-500/15 bg-graphite-light card-inner-glow"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="font-mono text-[10px] text-beige-500/70 uppercase">Операції за тиждень</div>
            <div className="flex gap-2">
              <span className="px-2 py-1 rounded text-[10px] bg-beige-500/15 text-beige-500/80">Перекази</span>
              <span className="px-2 py-1 rounded text-[10px] bg-white/5 text-beige-500/50">Донати</span>
            </div>
          </div>
          <div className="h-32 flex items-end gap-2 sm:gap-4">
            {[65, 82, 45, 90, 78, 95, 88, 72, 85, 92].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.05, duration: 0.5 }}
                className="flex-1 rounded-t bg-beige-500/25 border border-beige-500/20 min-w-[20px] hover:bg-beige-500/35 transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
              />
            ))}
          </div>
          <div className="flex justify-between mt-3 font-mono text-[9px] text-beige-500/50">
            <span>Пн</span>
            <span>Ср</span>
            <span>Пт</span>
            <span>Нд</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
