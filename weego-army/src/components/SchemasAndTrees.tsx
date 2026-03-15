import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GitBranch, Database, ArrowRight, Workflow, Layers } from 'lucide-react';

export const SchemasAndTrees = () => {
  const [lang, setLang] = useState<'uk' | 'en'>('uk');
  const [activeTab, setActiveTab] = useState<'er' | 'flow' | 'api' | 'tree' | 'layers'>('er');

  const t = lang === 'uk' ? {
    badge: '04 // Схеми та дерева',
    title: 'Структура даних, потоки, дерева.',
    er: 'ER-діаграма',
    flow: 'Потік даних',
    api: 'API flow',
    tree: 'Дерево проєкту',
    layers: 'Шари даних'
  } : {
    badge: '04 // Schemas & Trees',
    title: 'Data structure, flows, trees.',
    er: 'ER Diagram',
    flow: 'Data Flow',
    api: 'API Flow',
    tree: 'Project Tree',
    layers: 'Data Layers'
  };

  return (
    <section className="py-32 relative border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-20" />
      <div className="absolute top-6 right-6 z-50 flex gap-2 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
        <button onClick={() => setLang('uk')} className={`px-3 py-1 text-xs font-mono rounded-full transition-colors ${lang === 'uk' ? 'bg-beige-500 text-graphite' : 'text-white/50 hover:text-white'}`}>UK</button>
        <button onClick={() => setLang('en')} className={`px-3 py-1 text-xs font-mono rounded-full transition-colors ${lang === 'en' ? 'bg-beige-500 text-graphite' : 'text-white/50 hover:text-white'}`}>EN</button>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-12">
          <div className="font-mono text-[10px] text-beige-500 uppercase tracking-widest mb-4">{t.badge}</div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">{t.title}</h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {(['er', 'flow', 'api', 'tree', 'layers'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-mono text-xs rounded-lg border transition-all flex items-center gap-2 ${
                activeTab === tab ? 'bg-beige-500/20 border-beige-500/50 text-beige-500' : 'border-white/20 text-white/60 hover:text-white hover:border-white/30'
              }`}
            >
              {tab === 'er' && <Database className="w-3.5 h-3.5" />}
              {tab === 'flow' && <Workflow className="w-3.5 h-3.5" />}
              {tab === 'api' && <ArrowRight className="w-3.5 h-3.5" />}
              {tab === 'tree' && <GitBranch className="w-3.5 h-3.5" />}
              {tab === 'layers' && <Layers className="w-3.5 h-3.5" />}
              {t[tab]}
            </button>
          ))}
        </div>

        {/* ER Diagram */}
        {activeTab === 'er' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'users', cols: ['id PK', 'full_name', 'phone', 'email', 'role', 'status'], color: 'beige' },
                { name: 'accounts', cols: ['id PK', 'user_id FK', 'account_number', 'balance', 'currency'], color: 'white' },
                { name: 'transactions', cols: ['id PK', 'type', 'amount', 'from_account_id FK', 'to_account_id FK', 'status'], color: 'white' },
                { name: 'salary_payments', cols: ['id PK', 'user_id FK', 'payment_type', 'amount', 'payment_date'], color: 'white' },
                { name: 'donations', cols: ['id PK', 'from_account_id FK', 'target_type', 'target_id', 'amount'], color: 'white' },
                { name: 'savings_goals', cols: ['id PK', 'user_id FK', 'name', 'target_amount', 'current_amount'], color: 'white' }
              ].map((entity, i) => (
                <motion.div
                  key={entity.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className={`p-4 rounded-xl border ${entity.color === 'beige' ? 'border-beige-500/40 bg-beige-500/5' : 'border-white/10 bg-graphite-light'}`}
                >
                  <div className="font-mono font-bold text-beige-500 text-sm mb-3">{entity.name}</div>
                  <div className="space-y-1">
                    {entity.cols.map((col) => (
                      <div key={col} className="font-mono text-[11px] text-white/70 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-beige-500/50 shrink-0" />
                        {col}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="p-6 bg-graphite-light/80 border border-white/10 rounded-xl">
              <div className="font-mono text-[10px] text-beige-500 uppercase mb-3">Зв'язки (Relations)</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs text-white/70">
                <div>users 1 ─── * accounts</div>
                <div>accounts 1 ─── * transactions</div>
                <div>users 1 ─── * salary_payments</div>
                <div>accounts 1 ─── * donations</div>
                <div>users 1 ─── * savings_goals</div>
                <div>transactions.from_account_id → accounts.id</div>
                <div>transactions.to_account_id → accounts.id</div>
                <div>donations.from_account_id → accounts.id</div>
                <div>salary_payments.user_id → users.id</div>
              </div>
              <div className="font-mono text-[10px] text-beige-500 uppercase mt-4 mb-2">Індекси (Indexes)</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-[11px] text-white/50">
                <div>idx_accounts_user_id</div>
                <div>idx_transactions_from_to</div>
                <div>idx_donations_target</div>
                <div>idx_savings_user_id</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Data Flow */}
        {activeTab === 'flow' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="p-8 bg-graphite-light border border-white/10 rounded-2xl">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                {['Mobile App', '→', 'API (FastAPI)', '→', 'Services', '→', 'Database'].map((node, i) => (
                  <React.Fragment key={i}>
                    <div className={`px-5 py-3 rounded-lg border font-mono text-sm ${
                      i === 0 ? 'border-beige-500/30 bg-beige-500/10 text-beige-500' :
                      i === 2 ? 'border-beige-500/40 bg-beige-500/15 text-beige-500' :
                      i === 4 ? 'border-beige-500/30 bg-beige-500/10 text-beige-500' :
                      'border-white/20 bg-white/5 text-white/80'
                    }`}>
                      {node}
                    </div>
                    {i % 2 === 0 && i < 6 && (
                      <ArrowRight className="w-5 h-5 text-white/30 hidden md:block" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 border border-white/10 rounded-xl bg-graphite-light">
                <div className="font-mono text-[10px] text-beige-500 uppercase mb-4">Переказ коштів</div>
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center gap-2"><span className="text-beige-500">1</span> POST /transactions/transfer</div>
                  <div className="flex items-center gap-2"><span className="text-beige-500">2</span> PaymentService.check_balance()</div>
                  <div className="flex items-center gap-2"><span className="text-beige-500">3</span> Database.execute_transfer()</div>
                  <div className="flex items-center gap-2"><span className="text-beige-500">4</span> INSERT transactions, UPDATE accounts</div>
                </div>
              </div>
              <div className="p-6 border border-white/10 rounded-xl bg-graphite-light">
                <div className="font-mono text-[10px] text-beige-500 uppercase mb-4">Реєстрація + рахунок</div>
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center gap-2"><span className="text-beige-500">1</span> POST /users (UserService.validate)</div>
                  <div className="flex items-center gap-2"><span className="text-beige-500">2</span> Database.insert_user()</div>
                  <div className="flex items-center gap-2"><span className="text-beige-500">3</span> POST /accounts (BankSystem.open_account)</div>
                  <div className="flex items-center gap-2"><span className="text-beige-500">4</span> _generate_account_number(), insert_account</div>
                </div>
              </div>
              <div className="p-6 border border-white/10 rounded-xl bg-graphite-light">
                <div className="font-mono text-[10px] text-beige-500 uppercase mb-4">Донат</div>
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center gap-2"><span className="text-beige-500">1</span> POST /donations/unit | /fund</div>
                  <div className="flex items-center gap-2"><span className="text-beige-500">2</span> DonationService.validate_target()</div>
                  <div className="flex items-center gap-2"><span className="text-beige-500">3</span> INSERT donation, UPDATE balance</div>
                  <div className="flex items-center gap-2"><span className="text-beige-500">4</span> Transaction (type=donation)</div>
                </div>
              </div>
              <div className="p-6 border border-white/10 rounded-xl bg-graphite-light">
                <div className="font-mono text-[10px] text-beige-500 uppercase mb-4">Бойова виплата</div>
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center gap-2"><span className="text-beige-500">1</span> POST /salary/credit</div>
                  <div className="flex items-center gap-2"><span className="text-beige-500">2</span> SalaryPayment.credit_payment()</div>
                  <div className="flex items-center gap-2"><span className="text-beige-500">3</span> INSERT salary_payments</div>
                  <div className="flex items-center gap-2"><span className="text-beige-500">4</span> Account.top_up(), Transaction</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* API Flow Tree */}
        {activeTab === 'api' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="p-6 bg-graphite-light border border-white/10 rounded-xl font-mono text-sm">
              <div className="text-beige-500 mb-4">/api</div>
              <div className="pl-4 space-y-2">
                <div><span className="text-beige-500">├──</span> /auth</div>
                <div className="pl-4"><span className="text-white/50">├──</span> POST /login — JWT</div>
                <div className="pl-4"><span className="text-white/50">└──</span> POST /refresh</div>
                <div><span className="text-beige-500">├──</span> /users</div>
                <div className="pl-4"><span className="text-white/50">├──</span> POST / — реєстрація</div>
                <div className="pl-4"><span className="text-white/50">├──</span> GET /{'{id}'} — профіль</div>
                <div className="pl-4"><span className="text-white/50">└──</span> PATCH /{'{id}'} — оновлення</div>
                <div><span className="text-beige-500">├──</span> /accounts</div>
                <div className="pl-4"><span className="text-white/50">├──</span> POST / — відкрити рахунок</div>
                <div className="pl-4"><span className="text-white/50">├──</span> GET /{'{id}'} — дані рахунку</div>
                <div className="pl-4"><span className="text-white/50">├──</span> GET /{'{id}'}/balance</div>
                <div className="pl-4"><span className="text-white/50">└──</span> POST /{'{id}'}/top-up</div>
                <div><span className="text-beige-500">├──</span> /transactions</div>
                <div className="pl-4"><span className="text-white/50">├──</span> POST /transfer — переказ</div>
                <div className="pl-4"><span className="text-white/50">└──</span> GET /account/{'{id}'}/history</div>
                <div><span className="text-beige-500">├──</span> /donations</div>
                <div className="pl-4"><span className="text-white/50">├──</span> POST /unit — донат підрозділу</div>
                <div className="pl-4"><span className="text-white/50">└──</span> POST /fund — донат фонду</div>
                <div><span className="text-beige-500">├──</span> /salary</div>
                <div className="pl-4"><span className="text-white/50">└──</span> POST /credit — нарахування</div>
                <div><span className="text-beige-500">└──</span> /savings</div>
                <div className="pl-4"><span className="text-white/50">├──</span> POST / — створити ціль</div>
                <div className="pl-4"><span className="text-white/50">└──</span> POST /{'{id}'}/add — додати кошти</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Project Tree (detailed) */}
        {activeTab === 'tree' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="p-6 bg-graphite-light border border-white/10 rounded-xl font-mono text-xs overflow-x-auto">
              <pre className="whitespace-pre text-white/85 leading-relaxed">{`army_bank/
├── api/
│   ├── __init__.py
│   ├── main.py              # FastAPI app, lifespan, CORS
│   ├── middleware.py       # auth, logging, rate_limit
│   └── routes/
│       ├── __init__.py
│       ├── auth.py          # POST /login, /refresh
│       ├── users.py         # POST /, GET /{id}, PATCH /{id}
│       ├── accounts.py      # POST /, GET /{id}, GET /{id}/balance, POST /{id}/top-up
│       ├── transactions.py  # POST /transfer, GET /account/{id}/history
│       ├── donations.py     # POST /unit, POST /fund
│       ├── salary.py        # POST /credit
│       └── savings.py       # POST /, POST /{id}/add
│
├── models/
│   ├── __init__.py
│   ├── user.py             # User dataclass
│   ├── account.py          # Account, top_up, withdraw
│   ├── transaction.py     # Transaction, create, update_status
│   ├── salary_payment.py   # SalaryPayment, credit_payment
│   └── savings_goal.py     # SavingsGoal, add_funds, check_progress
│
├── services/
│   ├── __init__.py
│   ├── user_service.py     # validate, add_user
│   ├── payment_service.py  # transfer, check_balance
│   ├── donation_service.py # donate_to_unit, donate_to_fund
│   └── bank_system.py      # add_user, open_account, execute_operation
│
├── data_access/
│   ├── __init__.py
│   └── database.py         # insert_user, get_account, execute_transfer
│
├── utils/
│   ├── __init__.py
│   ├── constants.py        # DB_NAME, TABLE_*, FIELD_*, MSG_*
│   └── validators.py       # phone, email, amount
│
├── database_setup.py       # create_tables(), indexes
└── main.py                 # entry point, uvicorn`}</pre>
            </div>
          </motion.div>
        )}

        {/* Data Layers */}
        {activeTab === 'layers' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-beige-500/20 rounded-xl bg-beige-500/5">
                <div className="font-mono text-[10px] text-beige-500 uppercase mb-4">Шар моделей (Models)</div>
                <div className="font-mono text-xs text-white/80 space-y-1">
                  <div>User → users</div>
                  <div>Account → accounts</div>
                  <div>Transaction → transactions</div>
                  <div>SalaryPayment → salary_payments</div>
                  <div>SavingsGoal → savings_goals</div>
                  <div className="text-white/40 mt-2">+ Donation (view/join)</div>
                </div>
              </div>
              <div className="p-6 border border-white/10 rounded-xl bg-graphite-light">
                <div className="font-mono text-[10px] text-beige-500 uppercase mb-4">Шар сервісів (Services)</div>
                <div className="font-mono text-xs text-white/80 space-y-1">
                  <div>UserService → User</div>
                  <div>PaymentService → Account, Transaction</div>
                  <div>DonationService → Transaction, Donation</div>
                  <div>BankSystem → всі сервіси</div>
                  <div className="text-white/40 mt-2">+ SalaryPayment (model+logic)</div>
                </div>
              </div>
              <div className="p-6 border border-white/10 rounded-xl bg-graphite-light">
                <div className="font-mono text-[10px] text-beige-500 uppercase mb-4">Шар API (Routes)</div>
                <div className="font-mono text-xs text-white/80 space-y-1">
                  <div>auth → UserService</div>
                  <div>users → UserService</div>
                  <div>accounts → BankSystem</div>
                  <div>transactions → PaymentService</div>
                  <div>donations → DonationService</div>
                  <div>salary → SalaryPayment</div>
                  <div>savings → BankSystem</div>
                </div>
              </div>
              <div className="p-6 border border-white/10 rounded-xl bg-graphite-light">
                <div className="font-mono text-[10px] text-beige-500 uppercase mb-4">Шар даних (DAL)</div>
                <div className="font-mono text-xs text-white/80 space-y-1">
                  <div>database.insert_user</div>
                  <div>database.get_account</div>
                  <div>database.execute_transfer</div>
                  <div>database.insert_transaction</div>
                  <div>database.insert_donation</div>
                  <div className="text-white/40 mt-2">+ connection pool, transactions</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
