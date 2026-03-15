import React, { useState } from 'react';
import { motion } from 'motion/react';
import { UserPlus, Wallet, Send, Heart, PiggyBank, FileCheck, Shield, ListChecks } from 'lucide-react';

const CASES = [
  { icon: UserPlus, title: 'Реєстрація', steps: ['POST /users', 'UserService.validate', 'insert_user', 'open_account'], actor: 'Користувач' },
  { icon: Wallet, title: 'Поповнення', steps: ['POST /accounts/{id}/top-up', 'Account.top_up', 'UPDATE balance', 'INSERT transaction'], actor: 'Користувач' },
  { icon: Send, title: 'Переказ родині', steps: ['POST /transactions/transfer', 'PaymentService.check_balance', 'execute_transfer', 'INSERT + UPDATE'], actor: 'Військовий' },
  { icon: Heart, title: 'Донат підрозділу', steps: ['POST /donations/unit', 'DonationService.donate_to_unit', 'validate target', 'INSERT donation'], actor: 'Військовий' },
  { icon: PiggyBank, title: 'Накопичення', steps: ['POST /savings/add', 'SavingsGoal.add_funds', 'check_progress', 'UPDATE current_amount'], actor: 'Користувач' },
  { icon: FileCheck, title: 'Бойова виплата', steps: ['POST /salary/credit', 'SalaryPayment.credit_payment', 'INSERT salary_payments', 'UPDATE accounts'], actor: 'Система' },
  { icon: Shield, title: 'Авторизація', steps: ['POST /auth/login', 'UserService.validate', 'JWT token', 'session'], actor: 'Користувач' },
  { icon: ListChecks, title: 'Історія операцій', steps: ['GET /transactions/account/{id}', 'PaymentService.get_history', 'SELECT transactions', 'JSON response'], actor: 'Користувач' },
];

export const UseCases = () => {
  const [lang, setLang] = useState<'uk' | 'en'>('uk');

  const t = lang === 'uk' ? {
    badge: '06 // Use Cases',
    title: 'Сценарії використання.',
    subtitle: 'Крок за кроком — від запиту до результату.'
  } : {
    badge: '06 // Use Cases',
    title: 'Use case scenarios.',
    subtitle: 'Step by step — from request to result.'
  };

  return (
    <section className="py-32 relative border-t border-white/10 overflow-hidden bg-graphite-light/20">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-15" />
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CASES.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="p-5 rounded-2xl border border-white/10 bg-graphite hover:border-beige-500/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-9 h-9 rounded-lg bg-beige-500/10 flex items-center justify-center group-hover:bg-beige-500/20 transition-colors">
                  <c.icon className="w-4 h-4 text-beige-500" />
                </div>
                <span className="font-mono font-bold text-white">{c.title}</span>
              </div>
              <div className="text-[10px] font-mono text-beige-500/80 mb-4">{c.actor}</div>
              <div className="space-y-2">
                {c.steps.map((step, j) => (
                  <div key={j} className="flex items-center gap-2 font-mono text-[11px] text-white/70">
                    <span className="text-beige-500/60">{String(j + 1).padStart(2)}.</span>
                    {step}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
