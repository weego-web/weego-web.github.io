import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Database, Table2, ChevronRight } from 'lucide-react';

const TABLES = [
  {
    name: 'users',
    create: `CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) UNIQUE NOT NULL,
  email VARCHAR(255),
  role VARCHAR(50) DEFAULT 'soldier',
  status VARCHAR(20) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW()
);`,
    sample: [
      { id: 1, full_name: 'Іван Петренко', phone: '+380501234567', role: 'soldier', status: 'active' },
      { id: 2, full_name: 'Олексій Коваль', phone: '+380672345678', role: 'officer', status: 'active' },
    ],
    cols: ['id', 'full_name', 'phone', 'email', 'role', 'status'],
  },
  {
    name: 'accounts',
    create: `CREATE TABLE accounts (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  account_number VARCHAR(20) UNIQUE NOT NULL,
  balance DECIMAL(15,2) DEFAULT 0,
  currency VARCHAR(3) DEFAULT 'UAH',
  created_at TIMESTAMP DEFAULT NOW()
);`,
    sample: [
      { id: 1, user_id: 1, account_number: 'UA12345678901234', balance: '12450.00', currency: 'UAH' },
      { id: 2, user_id: 2, account_number: 'UA12345678901235', balance: '8500.00', currency: 'UAH' },
    ],
    cols: ['id', 'user_id', 'account_number', 'balance', 'currency'],
  },
  {
    name: 'transactions',
    create: `CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  type VARCHAR(50) NOT NULL,
  amount DECIMAL(15,2) NOT NULL,
  from_account_id INT REFERENCES accounts(id),
  to_account_id INT REFERENCES accounts(id),
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);`,
    sample: [
      { id: 1, type: 'transfer', amount: '2000.00', from_account_id: 1, to_account_id: 2, status: 'completed' },
      { id: 2, type: 'combat_pay', amount: '8000.00', from_account_id: null, to_account_id: 1, status: 'completed' },
    ],
    cols: ['id', 'type', 'amount', 'from_account_id', 'to_account_id', 'status'],
  },
  {
    name: 'donations',
    create: `CREATE TABLE donations (
  id SERIAL PRIMARY KEY,
  from_account_id INT REFERENCES accounts(id),
  target_type VARCHAR(50) NOT NULL,
  target_id INT NOT NULL,
  amount DECIMAL(15,2) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);`,
    sample: [
      { id: 1, from_account_id: 1, target_type: 'unit', target_id: 101, amount: '500.00' },
    ],
    cols: ['id', 'from_account_id', 'target_type', 'target_id', 'amount'],
  },
  {
    name: 'salary_payments',
    create: `CREATE TABLE salary_payments (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  payment_type VARCHAR(50) NOT NULL,
  amount DECIMAL(15,2) NOT NULL,
  payment_date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);`,
    sample: [
      { id: 1, user_id: 1, payment_type: 'combat', amount: '8000.00', payment_date: '2025-03-15' },
    ],
    cols: ['id', 'user_id', 'payment_type', 'amount', 'payment_date'],
  },
  {
    name: 'savings_goals',
    create: `CREATE TABLE savings_goals (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  name VARCHAR(255) NOT NULL,
  target_amount DECIMAL(15,2) NOT NULL,
  current_amount DECIMAL(15,2) DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);`,
    sample: [
      { id: 1, user_id: 1, name: 'Спорядження', target_amount: '15000.00', current_amount: '3200.00' },
    ],
    cols: ['id', 'user_id', 'name', 'target_amount', 'current_amount'],
  },
];

export const DataSchemaTables = () => {
  const [activeTable, setActiveTable] = useState(0);

  return (
    <section className="py-32 relative border-t border-beige-500/20 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-20" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-beige-500/5 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-[10px] text-beige-400 uppercase tracking-widest mb-4">17 // Таблиці схем даних</div>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-beige-100">
            SQL-схеми та приклад даних.
          </h2>
          <p className="text-lg text-beige-300/70">
            CREATE TABLE, FK, індекси. Інтерактивний перегляд таблиць з прикладом рядків.
          </p>
        </div>

        {/* Table selector */}
        <div className="flex flex-wrap gap-2 mb-8">
          {TABLES.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActiveTable(i)}
              className={`px-4 py-2 rounded-xl border font-mono text-xs flex items-center gap-2 transition-all ${
                activeTable === i
                  ? 'bg-beige-500/20 border-beige-500/50 text-beige-400'
                  : 'border-beige-500/15 text-beige-500/70 hover:border-beige-500/30 hover:text-beige-400'
              }`}
            >
              <Table2 className="w-3.5 h-3.5" />
              {t.name}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* CREATE TABLE */}
          <motion.div
            key={`create-${activeTable}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-6 rounded-2xl border border-beige-500/20 bg-graphite overflow-x-auto"
          >
            <div className="font-mono text-[10px] text-beige-500 uppercase mb-4 flex items-center gap-2">
              <Database className="w-3.5 h-3.5" />
              CREATE TABLE {TABLES[activeTable].name}
            </div>
            <pre className="font-mono text-[11px] text-beige-300/90 leading-relaxed whitespace-pre">
              {TABLES[activeTable].create}
            </pre>
          </motion.div>

          {/* Sample data */}
          <motion.div
            key={`sample-${activeTable}`}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-6 rounded-2xl border border-beige-500/20 bg-graphite overflow-x-auto"
          >
            <div className="font-mono text-[10px] text-beige-500 uppercase mb-4">Приклад даних (SELECT *)</div>
            <div className="overflow-x-auto rounded-lg border border-beige-500/15 overflow-hidden">
              <table className="w-full text-left font-mono text-[11px]">
                <thead>
                  <tr className="bg-beige-500/10 border-b border-beige-500/20">
                    {TABLES[activeTable].cols.map((c) => (
                      <th key={c} className="px-3 py-2 text-beige-500 font-medium">{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TABLES[activeTable].sample.map((row, ri) => (
                    <tr key={ri} className="border-b border-beige-500/10 hover:bg-beige-500/5 transition-colors">
                      {TABLES[activeTable].cols.map((col) => (
                        <td key={col} className="px-3 py-2 text-beige-300/90">
                          {row[col as keyof typeof row] ?? 'NULL'}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* Indexes */}
        <div className="mt-8 p-6 rounded-2xl border border-beige-500/15 bg-graphite-light">
          <div className="font-mono text-[10px] text-beige-500/70 uppercase mb-4">Індекси для {TABLES[activeTable].name}</div>
          <div className="flex flex-wrap gap-3">
            {TABLES[activeTable].name === 'users' && (
              <>
                <span className="px-3 py-1.5 rounded-lg bg-beige-500/10 border border-beige-500/20 font-mono text-xs">idx_users_phone</span>
                <span className="px-3 py-1.5 rounded-lg bg-beige-500/10 border border-beige-500/20 font-mono text-xs">idx_users_status</span>
              </>
            )}
            {TABLES[activeTable].name === 'accounts' && (
              <>
                <span className="px-3 py-1.5 rounded-lg bg-beige-500/10 border border-beige-500/20 font-mono text-xs">idx_accounts_user_id</span>
                <span className="px-3 py-1.5 rounded-lg bg-beige-500/10 border border-beige-500/20 font-mono text-xs">idx_accounts_number</span>
              </>
            )}
            {TABLES[activeTable].name === 'transactions' && (
              <>
                <span className="px-3 py-1.5 rounded-lg bg-beige-500/10 border border-beige-500/20 font-mono text-xs">idx_trans_from_to</span>
                <span className="px-3 py-1.5 rounded-lg bg-beige-500/10 border border-beige-500/20 font-mono text-xs">idx_trans_created_at</span>
              </>
            )}
            {TABLES[activeTable].name === 'donations' && (
              <span className="px-3 py-1.5 rounded-lg bg-beige-500/10 border border-beige-500/20 font-mono text-xs">idx_donations_target</span>
            )}
            {TABLES[activeTable].name === 'salary_payments' && (
              <span className="px-3 py-1.5 rounded-lg bg-beige-500/10 border border-beige-500/20 font-mono text-xs">idx_salary_user_date</span>
            )}
            {TABLES[activeTable].name === 'savings_goals' && (
              <span className="px-3 py-1.5 rounded-lg bg-beige-500/10 border border-beige-500/20 font-mono text-xs">idx_savings_user_id</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
