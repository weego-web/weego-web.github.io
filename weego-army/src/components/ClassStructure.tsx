import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Users, Wallet, ArrowRightLeft, CreditCard, Heart, PiggyBank, Building2, Database, GitBranch } from 'lucide-react';

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
  { table: 'users', cols: 'id, full_name, phone, email, role, status, created_at', fk: null },
  { table: 'accounts', cols: 'id, user_id, account_number, balance, currency, created_at', fk: 'user_id → users' },
  { table: 'transactions', cols: 'id, type, amount, from_account_id, to_account_id, status, created_at', fk: 'from/to → accounts' },
  { table: 'salary_payments', cols: 'id, user_id, payment_type, amount, payment_date, created_at', fk: 'user_id → users' },
  { table: 'donations', cols: 'id, from_account_id, target_type, target_id, amount, created_at', fk: 'from_account_id → accounts' },
  { table: 'savings_goals', cols: 'id, user_id, name, target_amount, current_amount, created_at', fk: 'user_id → users' }
];

const classTree = `BankSystem
├── UserService
│   └── User
├── PaymentService
│   ├── Account
│   └── Transaction
├── DonationService
│   └── Transaction (type=donation)
└── Database
    ├── users
    ├── accounts
    ├── transactions
    ├── salary_payments
    ├── donations
    └── savings_goals`;

const callFlowTree = `transfer(from, to, amount)
├── 1. PaymentService.check_balance(from, amount)
│   └── Database.get_account(from) → Account
├── 2. PaymentService.validate_accounts(from, to)
│   └── Database.get_account(to)
├── 3. Database.execute_transfer(from, to, amount)
│   ├── UPDATE accounts SET balance WHERE id IN (from, to)
│   └── INSERT INTO transactions
└── 4. Transaction.create(type=transfer, status=completed)`;

const layerTree = `Presentation (React)
    │
    ▼
API Gateway (FastAPI)
    ├── routes/auth      → UserService
    ├── routes/users     → UserService
    ├── routes/accounts  → BankSystem
    ├── routes/transactions → PaymentService
    └── routes/donations   → DonationService
    │
    ▼
Business Logic (Services)
    ├── BankSystem  ← orchestration
    ├── UserService, PaymentService, DonationService
    └── Models: User, Account, Transaction
    │
    ▼
Data Layer (database.py)
    └── PostgreSQL / SQLite`;

export const ClassStructure = () => {
  const [lang, setLang] = useState<'uk' | 'en'>('uk');

  const t = lang === 'uk' ? {
    badge: '05 // Класи та таблиці',
    title: 'Нормальна структура. Без перегруза.',
    projectTitle: 'Структура проєкту',
    dbTitle: 'Таблиці БД',
    classTreeTitle: 'Дерево залежностей',
    callFlowTitle: 'Дерево викликів (transfer)',
    layerTreeTitle: 'Шари та залежності',
    fields: 'Поля',
    methods: 'Методи',
    fk: 'FK'
  } : {
    badge: '05 // Classes & Tables',
    title: 'Clean structure. No overload.',
    projectTitle: 'Project Structure',
    dbTitle: 'Database Tables',
    classTreeTitle: 'Dependency Tree',
    callFlowTitle: 'Call flow (transfer)',
    layerTreeTitle: 'Layers & Dependencies',
    fields: 'Fields',
    methods: 'Methods',
    fk: 'FK'
  };

  return (
    <section className="py-32 relative border-t border-white/10 overflow-hidden bg-graphite-light/30">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-30" />
      <div className="absolute top-6 right-6 z-50 flex gap-2 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
        <button onClick={() => setLang('uk')} className={`px-3 py-1 text-xs font-mono rounded-full transition-colors ${lang === 'uk' ? 'bg-beige-500 text-graphite' : 'text-white/50 hover:text-white'}`}>UK</button>
        <button onClick={() => setLang('en')} className={`px-3 py-1 text-xs font-mono rounded-full transition-colors ${lang === 'en' ? 'bg-beige-500 text-graphite' : 'text-white/50 hover:text-white'}`}>EN</button>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-12">
          <div className="font-mono text-[10px] text-beige-500 uppercase tracking-widest mb-4">{t.badge}</div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">{t.title}</h2>
        </div>

        {/* Class cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {classes.map((cls, i) => (
            <motion.div
              key={cls.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-5 border border-white/10 bg-graphite rounded-xl hover:border-beige-500/20 hover:shadow-[0_0_30px_rgba(245,158,11,0.08)] transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <cls.icon className="w-4 h-4 text-beige-500 shrink-0" />
                <span className="font-mono font-bold text-beige-500">{cls.name}</span>
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

        {/* Class dependency tree */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <GitBranch className="w-4 h-4 text-beige-500" />
            <div className="font-mono text-[10px] text-beige-500 uppercase tracking-widest">{t.classTreeTitle}</div>
          </div>
          <div className="p-6 bg-graphite border border-white/10 rounded-xl">
            <pre className="font-mono text-xs sm:text-sm text-white/85 overflow-x-auto whitespace-pre">{classTree}</pre>
          </div>
        </div>

        {/* Call flow tree */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <GitBranch className="w-4 h-4 text-beige-500" />
            <div className="font-mono text-[10px] text-beige-500 uppercase tracking-widest">{t.callFlowTitle}</div>
          </div>
          <div className="p-6 bg-graphite border border-beige-500/20 rounded-xl">
            <pre className="font-mono text-[11px] sm:text-xs text-white/85 overflow-x-auto whitespace-pre leading-relaxed">{callFlowTree}</pre>
          </div>
        </div>

        {/* Layer tree */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <GitBranch className="w-4 h-4 text-beige-500" />
            <div className="font-mono text-[10px] text-beige-500 uppercase tracking-widest">{t.layerTreeTitle}</div>
          </div>
          <div className="p-6 bg-graphite border border-white/10 rounded-xl">
            <pre className="font-mono text-[11px] sm:text-xs text-white/85 overflow-x-auto whitespace-pre leading-relaxed">{layerTree}</pre>
          </div>
        </div>

        {/* Database tables - expanded */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <Database className="w-4 h-4 text-beige-500" />
            <div className="font-mono text-[10px] text-beige-500 uppercase tracking-widest">{t.dbTitle}</div>
          </div>
          <div className="overflow-x-auto rounded-xl border border-white/10 overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-white/5">
                  <th className="text-left p-4 font-mono text-xs text-beige-500 border-b border-white/10">Таблиця</th>
                  <th className="text-left p-4 font-mono text-xs text-beige-500 border-b border-white/10 hidden sm:table-cell">Колонки</th>
                  <th className="text-left p-4 font-mono text-xs text-beige-500 border-b border-white/10">FK / Зв'язки</th>
                </tr>
              </thead>
              <tbody>
                {dbTables.map((row, i) => (
                  <tr key={row.table} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-mono text-sm text-white">{row.table}</td>
                    <td className="p-4 font-mono text-xs text-white/70 hidden sm:table-cell">{row.cols}</td>
                    <td className="p-4 font-mono text-[11px] text-beige-500/80">{row.fk || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Project structure - detailed */}
        <div>
          <div className="font-mono text-[10px] text-beige-500 uppercase tracking-widest mb-4">{t.projectTitle}</div>
          <div className="p-6 bg-graphite border border-white/10 rounded-xl">
            <pre className="font-mono text-[11px] text-white/85 overflow-x-auto whitespace-pre leading-relaxed">{`army_bank/
├── models/           # Dataclasses
│   ├── user.py
│   ├── account.py
│   ├── transaction.py
│   ├── salary_payment.py
│   └── savings_goal.py
├── services/         # Business logic
│   ├── payment_service.py
│   ├── donation_service.py
│   └── bank_system.py
├── api/routes/       # REST endpoints
│   ├── users.py
│   ├── accounts.py
│   └── transactions.py
├── data_access/
│   └── database.py
├── utils/
│   └── constants.py
├── database_setup.py
└── main.py`}</pre>
          </div>
        </div>
      </div>
    </section>
  );
};
