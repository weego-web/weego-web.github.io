import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Users, Wallet, ArrowRightLeft, CreditCard, Heart, PiggyBank, Building2, Database } from 'lucide-react';

const classes = [
  { name: 'User', icon: Users, desc: 'Користувач банку', fields: ['id', 'ПІБ', 'телефон', 'email', 'role / статус'], methods: ['створити профіль', 'переглянути профіль'] },
  { name: 'Account', icon: Wallet, desc: 'Банківський рахунок', fields: ['номер рахунку', 'власник', 'баланс', 'валюта'], methods: ['поповнити рахунок', 'списати кошти', 'показати баланс'] },
  { name: 'Transaction', icon: ArrowRightLeft, desc: 'Банківська операція', fields: ['id транзакції', 'тип', 'сума', 'дата', 'статус', 'відправник', 'отримувач'], methods: ['створити транзакцію', 'змінити статус', 'показати інформацію'] },
  { name: 'PaymentService', icon: CreditCard, desc: 'Сервіс для переказів', fields: [], methods: ['переказ між рахунками', 'перевірка балансу', 'підтвердження операції'] },
  { name: 'SalaryPayment', icon: CreditCard, desc: 'Бойові / службові виплати', fields: ['тип виплати', 'сума', 'дата нарахування'], methods: ['нарахувати виплату'] },
  { name: 'DonationService', icon: Heart, desc: 'Сервіс донатів', fields: [], methods: ['донат на підрозділ', 'донат на волонтерський фонд', 'перегляд історії донатів'] },
  { name: 'SavingsGoal', icon: PiggyBank, desc: 'Накопичення на ціль', fields: ['назва цілі', 'потрібна сума', 'поточна сума'], methods: ['додати кошти', 'перевірити прогрес'] },
  { name: 'BankSystem', icon: Building2, desc: 'Головний клас системи', fields: [], methods: ['додати користувача', 'відкрити рахунок', 'знайти рахунок', 'провести операцію', 'показати історію'] }
];

const dbTables = [
  { table: 'users', cols: 'id, full_name, phone, email, role, status, created_at' },
  { table: 'accounts', cols: 'id, user_id, account_number, balance, currency, created_at' },
  { table: 'transactions', cols: 'id, type, amount, from_account_id, to_account_id, status, created_at' },
  { table: 'salary_payments', cols: 'id, user_id, payment_type, amount, payment_date, created_at' },
  { table: 'donations', cols: 'id, from_account_id, target_type, target_id, amount, created_at' },
  { table: 'savings_goals', cols: 'id, user_id, name, target_amount, current_amount, created_at' }
];

const projectStructure = `army_bank/
├── models/
│   ├── user.py
│   ├── account.py
│   ├── transaction.py
│   ├── salary_payment.py
│   └── savings_goal.py
│
├── services/
│   ├── payment_service.py
│   ├── donation_service.py
│   └── bank_system.py
│
├── api/
│   ├── routes/
│   │   ├── users.py
│   │   ├── accounts.py
│   │   └── transactions.py
│   └── main.py
│
└── main.py`;

export const ClassStructure = () => {
  const [lang, setLang] = useState<'uk' | 'en'>('uk');

  const t = lang === 'uk' ? {
    badge: '03 // Структура',
    title: 'Класи та таблиці. Без перегруза.',
    projectTitle: 'Структура проєкту',
    dbTitle: 'Таблиці БД',
    fields: 'Поля',
    methods: 'Методи'
  } : {
    badge: '03 // Structure',
    title: 'Classes and tables. No overload.',
    projectTitle: 'Project Structure',
    dbTitle: 'Database Tables',
    fields: 'Fields',
    methods: 'Methods'
  };

  return (
    <section className="py-32 relative border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-30" />
      <div className="absolute top-6 right-6 z-50 flex gap-2 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
        <button onClick={() => setLang('uk')} className={`px-3 py-1 text-xs font-mono rounded-full transition-colors ${lang === 'uk' ? 'bg-amber-500 text-graphite' : 'text-white/50 hover:text-white'}`}>UK</button>
        <button onClick={() => setLang('en')} className={`px-3 py-1 text-xs font-mono rounded-full transition-colors ${lang === 'en' ? 'bg-amber-500 text-graphite' : 'text-white/50 hover:text-white'}`}>EN</button>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-12">
          <div className="font-mono text-[10px] text-amber-500 uppercase tracking-widest mb-4">{t.badge}</div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">{t.title}</h2>
        </div>

        {/* Class cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {classes.map((cls, i) => (
            <motion.div
              key={cls.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-5 border border-white/10 bg-graphite-light rounded-xl hover:border-amber-500/20 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <cls.icon className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="font-mono font-bold text-amber-500">{cls.name}</span>
              </div>
              <p className="text-white/50 text-xs mb-4">{cls.desc}</p>
              {cls.fields.length > 0 && (
                <div className="mb-3">
                  <div className="text-[9px] font-mono uppercase text-white/40 mb-1">{t.fields}</div>
                  <div className="text-xs font-mono text-white/70">{cls.fields.join(', ')}</div>
                </div>
              )}
              <div>
                <div className="text-[9px] font-mono uppercase text-white/40 mb-1">{t.methods}</div>
                <div className="text-xs font-mono text-white/70">{cls.methods.join(', ')}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Database tables */}
        <div className="mb-24">
          <div className="flex items-center gap-2 mb-6">
            <Database className="w-4 h-4 text-amber-500" />
            <div className="font-mono text-[10px] text-amber-500 uppercase tracking-widest">{t.dbTitle}</div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-white/10 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-white/5">
                  <th className="text-left p-4 font-mono text-xs text-amber-500 border-b border-white/10">Таблиця</th>
                  <th className="text-left p-4 font-mono text-xs text-amber-500 border-b border-white/10">Колонки</th>
                </tr>
              </thead>
              <tbody>
                {dbTables.map((row, i) => (
                  <tr key={row.table} className="border-b border-white/5 hover:bg-white/[0.02]">
                    <td className="p-4 font-mono text-sm text-white">{row.table}</td>
                    <td className="p-4 font-mono text-xs text-white/70">{row.cols}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Project structure */}
        <div>
          <div className="font-mono text-[10px] text-amber-500 uppercase tracking-widest mb-4">{t.projectTitle}</div>
          <pre className="p-6 bg-graphite-light border border-white/10 rounded-xl font-mono text-xs text-white/80 overflow-x-auto">
            {projectStructure}
          </pre>
        </div>
      </div>
    </section>
  );
};
