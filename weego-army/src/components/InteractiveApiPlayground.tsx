import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight, Send, FileJson, Terminal } from 'lucide-react';

const ENDPOINTS = [
  { id: 'transfer', method: 'POST', path: '/transactions/transfer', req: { from_account_id: 1, to_account_id: 2, amount: 2000 }, resp: { success: true, transaction_id: 42, status: 'completed' } },
  { id: 'balance', method: 'GET', path: '/accounts/1/balance', req: null, resp: { balance: 12450.00, currency: 'UAH' } },
  { id: 'donation', method: 'POST', path: '/donations/unit', req: { from_account_id: 1, unit_id: 101, amount: 500 }, resp: { success: true, donation_id: 15 } },
  { id: 'history', method: 'GET', path: '/transactions/account/1/history', req: null, resp: { transactions: [{ id: 1, type: 'transfer', amount: -2000 }, { id: 2, type: 'combat_pay', amount: 8000 }] } },
  { id: 'users', method: 'POST', path: '/users', req: { full_name: 'Іван Петренко', phone: '+380501234567', email: 'ivan@mail.ua' }, resp: { id: 3, status: 'created' } },
];

export const InteractiveApiPlayground = () => {
  const [activeEndpoint, setActiveEndpoint] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  const runRequest = () => {
    setIsAnimating(true);
    setShowResponse(false);
    setTimeout(() => {
      setShowResponse(true);
      setIsAnimating(false);
    }, 1200);
  };

  const ep = ENDPOINTS[activeEndpoint];

  return (
    <section className="py-32 relative border-t border-beige-500/20 overflow-hidden bg-graphite-light/30">
      <div className="absolute inset-0 bg-grid-warm pointer-events-none opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-[10px] text-beige-400 uppercase tracking-widest mb-4">18 // Інтерактивна візуалізація запитів</div>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-beige-100">
            API Playground.
          </h2>
          <p className="text-lg text-beige-300/70">
            Обери ендпоінт, натисни «Виконати» — побачиш Request → Response з mock-даними.
          </p>
        </div>

        {/* Endpoint selector */}
        <div className="flex flex-wrap gap-2 mb-8">
          {ENDPOINTS.map((e, i) => (
            <button
              key={e.id}
              onClick={() => { setActiveEndpoint(i); setShowResponse(false); }}
              className={`px-4 py-2 rounded-xl border font-mono text-xs flex items-center gap-2 transition-all ${
                activeEndpoint === i
                  ? 'bg-beige-500/20 border-beige-500/50 text-beige-400'
                  : 'border-beige-500/15 text-beige-500/70 hover:border-beige-500/30'
              }`}
            >
              <span className={e.method === 'POST' ? 'text-green-500/80' : 'text-blue-500/80'}>{e.method}</span>
              {e.path}
            </button>
          ))}
        </div>

        {/* Run button */}
        <div className="mb-8">
          <button
            onClick={runRequest}
            disabled={isAnimating}
            className="px-6 py-3 rounded-xl bg-beige-500/25 border border-beige-500/40 text-beige-300 font-mono text-sm flex items-center gap-2 hover:bg-beige-500/35 transition-all disabled:opacity-50"
          >
            {isAnimating ? (
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="w-4 h-4 border-2 border-beige-500/50 border-t-beige-500 rounded-full" />
            ) : (
              <Play className="w-4 h-4" />
            )}
            Виконати запит
          </button>
        </div>

        {/* Request → Response flow */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Request */}
          <motion.div
            animate={{ opacity: isAnimating ? 0.7 : 1 }}
            className="p-6 rounded-2xl border border-beige-500/20 bg-graphite"
          >
            <div className="flex items-center gap-2 mb-4 font-mono text-[10px] text-beige-500 uppercase">
              <Send className="w-3.5 h-3.5" />
              Request
            </div>
            <div className="space-y-2 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className={`px-2 py-0.5 rounded ${ep.method === 'POST' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                  {ep.method}
                </span>
                <span className="text-beige-400">https://api.army-bank.ua{ep.path}</span>
              </div>
              {ep.req && (
                <div className="mt-4 p-4 rounded-lg bg-white/5 border border-beige-500/15">
                  <div className="text-beige-500/60 mb-2">Body (JSON)</div>
                  <pre className="text-beige-300/90 text-[11px] overflow-x-auto">
                    {JSON.stringify(ep.req, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          </motion.div>

          {/* Arrow / Animation */}
          <div className="hidden md:flex items-center justify-center">
            <motion.div
              animate={isAnimating ? { x: [0, 20, 0], opacity: [0.5, 1, 0.5] } : {}}
              transition={{ repeat: isAnimating ? Infinity : 0, duration: 0.5 }}
            >
              <ArrowRight className="w-8 h-8 text-beige-500/50" />
            </motion.div>
          </div>

          {/* Response */}
          <motion.div
            initial={false}
            animate={{ opacity: showResponse ? 1 : 0.5 }}
            className="p-6 rounded-2xl border border-beige-500/20 bg-graphite"
          >
            <div className="flex items-center gap-2 mb-4 font-mono text-[10px] text-beige-500 uppercase">
              <FileJson className="w-3.5 h-3.5" />
              Response
              {showResponse && <span className="ml-2 text-green-500/80">200 OK</span>}
            </div>
            {showResponse ? (
              <div className="p-4 rounded-lg bg-beige-500/5 border border-beige-500/20">
                <pre className="font-mono text-[11px] text-beige-300/90 overflow-x-auto">
                  {JSON.stringify(ep.resp, null, 2)}
                </pre>
              </div>
            ) : (
              <div className="p-4 rounded-lg bg-white/5 border border-beige-500/10 flex items-center gap-2 text-beige-500/50 font-mono text-xs">
                <Terminal className="w-4 h-4" />
                Натисніть «Виконати запит» для отримання відповіді
              </div>
            )}
          </motion.div>
        </div>

        {/* SQL preview for selected endpoint */}
        <div className="mt-8 p-6 rounded-2xl border border-beige-500/15 bg-graphite">
          <div className="font-mono text-[10px] text-beige-500/70 uppercase mb-3">Що відбувається на сервері</div>
          <div className="font-mono text-[11px] text-beige-400/80">
            {ep.id === 'transfer' && 'PaymentService.transfer() → check_balance() → execute_transfer() → INSERT transactions, UPDATE accounts'}
            {ep.id === 'balance' && 'Database.get_account(1) → SELECT balance FROM accounts WHERE id=1'}
            {ep.id === 'donation' && 'DonationService.donate_to_unit() → INSERT donations, UPDATE accounts.balance'}
            {ep.id === 'history' && 'PaymentService.get_history(1) → SELECT * FROM transactions WHERE from_account_id=1 OR to_account_id=1'}
            {ep.id === 'users' && 'UserService.validate() → Database.insert_user() → INSERT INTO users'}
          </div>
        </div>
      </div>
    </section>
  );
};
