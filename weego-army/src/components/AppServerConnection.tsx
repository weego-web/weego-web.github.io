import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Smartphone, Server, Database, ArrowRight, Wifi, WifiOff, Zap } from 'lucide-react';

const STEPS = [
  { id: 1, from: 'App', to: 'API', req: 'POST /transactions/transfer', resp: '201 Created', ms: '~120ms' },
  { id: 2, from: 'API', to: 'Service', req: 'PaymentService.transfer()', resp: 'balance check', ms: '~15ms' },
  { id: 3, from: 'Service', to: 'DB', req: 'BEGIN; UPDATE accounts...', resp: 'COMMIT', ms: '~45ms' },
  { id: 4, from: 'DB', to: 'API', req: '—', resp: 'transaction_id, status', ms: '—' },
  { id: 5, from: 'API', to: 'App', req: '—', resp: 'JSON { success, id }', ms: '~80ms' },
];

export const AppServerConnection = () => {
  const [connectionState, setConnectionState] = useState<'online' | 'offline' | 'slow'>('online');
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-32 relative border-t border-beige-500/20 overflow-hidden bg-graphite-light/50">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-beige-500/5 via-transparent to-beige-500/5 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-[10px] text-beige-400 uppercase tracking-widest mb-4">16 // Робота додатку та сервер</div>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-beige-100">
            Зв'язок App ↔ Server.
          </h2>
          <p className="text-lg text-beige-300/70">
            Як клієнт взаємодіє з бекендом: запити, відповіді, затримки. Візуалізація повного циклу операції.
          </p>
        </div>

        {/* Connection state */}
        <div className="flex flex-wrap gap-3 mb-12">
          {[
            { id: 'online', label: 'Онлайн', icon: Wifi, color: 'green' },
            { id: 'offline', label: 'Офлайн', icon: WifiOff, color: 'red' },
            { id: 'slow', label: 'Повільно', icon: Zap, color: 'beige' },
          ].map((s) => (
            <button
              key={s.id}
              onClick={() => setConnectionState(s.id as typeof connectionState)}
              className={`px-4 py-2 rounded-xl border font-mono text-xs flex items-center gap-2 transition-all ${
                connectionState === s.id
                  ? s.color === 'green'
                    ? 'bg-green-500/20 border-green-500/40 text-green-400'
                    : s.color === 'red'
                    ? 'bg-red-500/20 border-red-500/40 text-red-400'
                    : 'bg-beige-500/20 border-beige-500/40 text-beige-400'
                  : 'border-beige-500/15 text-beige-500/60 hover:border-beige-500/25'
              }`}
            >
              <s.icon className="w-3.5 h-3.5" />
              {s.label}
            </button>
          ))}
        </div>

        {/* Visual flow: App → API → DB */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            animate={{ opacity: connectionState === 'offline' ? 0.4 : 1 }}
            className="p-6 rounded-2xl border border-beige-500/20 bg-graphite card-inner-glow hover:border-beige-500/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-beige-500/15 flex items-center justify-center shadow-[0_4px_12px_rgba(168,139,92,0.1)]">
                <Smartphone className="w-6 h-6 text-beige-500" />
              </div>
              <div>
                <div className="font-mono font-bold text-beige-200">Клієнт (App)</div>
                <div className="text-[10px] text-beige-500/70">React Native / Web</div>
              </div>
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-2 rounded-lg bg-white/5 font-mono text-beige-400/90">fetch(API_URL + '/transfer')</div>
              <div className="p-2 rounded-lg bg-white/5 font-mono text-beige-500/70">Body: from, to, amount</div>
              <div className="text-beige-500/50">→ Відправка запиту</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ opacity: connectionState === 'offline' ? 0.4 : 1 }}
            className="p-6 rounded-2xl border border-beige-500/30 bg-beige-500/5 card-inner-glow soft-glow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-beige-500/20 flex items-center justify-center">
                <Server className="w-6 h-6 text-beige-500" />
              </div>
              <div>
                <div className="font-mono font-bold text-beige-200">API (FastAPI)</div>
                <div className="text-[10px] text-beige-500/70">REST, Pydantic</div>
              </div>
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-2 rounded-lg bg-beige-500/10 font-mono text-beige-400/90">@router.post('/transfer')</div>
              <div className="p-2 rounded-lg bg-beige-500/10 font-mono text-beige-500/70">PaymentService.transfer()</div>
              <div className="text-beige-500/50">→ Валідація, маршрутизація</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ opacity: connectionState === 'offline' ? 0.4 : 1 }}
            className="p-6 rounded-2xl border border-beige-500/20 bg-graphite card-inner-glow hover:border-beige-500/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-beige-500/15 flex items-center justify-center shadow-[0_4px_12px_rgba(168,139,92,0.1)]">
                <Database className="w-6 h-6 text-beige-500" />
              </div>
              <div>
                <div className="font-mono font-bold text-beige-200">Database</div>
                <div className="text-[10px] text-beige-500/70">PostgreSQL</div>
              </div>
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-2 rounded-lg bg-white/5 font-mono text-beige-400/90">BEGIN TRANSACTION</div>
              <div className="p-2 rounded-lg bg-white/5 font-mono text-beige-500/70">UPDATE accounts, INSERT transactions</div>
              <div className="text-beige-500/50">→ ACID, FK</div>
            </div>
          </motion.div>
        </div>

        {/* Step-by-step flow */}
        <div className="p-6 rounded-2xl border border-beige-500/15 bg-graphite">
          <div className="font-mono text-[10px] text-beige-500/70 uppercase mb-6">Цикл запиту: Переказ ₴2,000</div>
          <div className="space-y-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onMouseEnter={() => setActiveStep(step.id)}
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all cursor-default ${
                  activeStep === step.id ? 'border-beige-500/40 bg-beige-500/10' : 'border-beige-500/10 hover:border-beige-500/20'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-beige-500/20 flex items-center justify-center font-mono text-xs text-beige-500 shrink-0">
                  {step.id}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-beige-500/60">{step.from}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-beige-500/40 shrink-0" />
                    <span className="text-beige-500/60">{step.to}</span>
                  </div>
                  <div className="font-mono text-[11px] text-beige-300/80 mt-1">{step.req}</div>
                  <div className="font-mono text-[10px] text-beige-500/60 mt-0.5">← {step.resp}</div>
                </div>
                <div className="font-mono text-[10px] text-beige-500/70 shrink-0">{step.ms}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-beige-500/10 flex items-center justify-between text-xs text-beige-500/60">
            <span>Загальний час: ~260ms</span>
            <span>{connectionState === 'online' ? '✓ Зʼєднано' : connectionState === 'offline' ? '✗ Відключено' : '⚠ Повільне зʼєднання'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
