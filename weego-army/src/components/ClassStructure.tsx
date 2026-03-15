import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FolderTree, Users, Wallet, ArrowRightLeft, CreditCard, Heart, PiggyBank, Building2 } from 'lucide-react';

const classes = [
  {
    name: 'User',
    icon: Users,
    desc: 'Користувач банку',
    fields: ['id', 'ПІБ', 'телефон', 'email', 'role / статус'],
    methods: ['створити профіль', 'переглянути профіль'],
    owner: 'vyacheslav'
  },
  {
    name: 'Account',
    icon: Wallet,
    desc: 'Банківський рахунок',
    fields: ['номер рахунку', 'власник', 'баланс', 'валюта'],
    methods: ['поповнити рахунок', 'списати кошти', 'показати баланс'],
    owner: 'vyacheslav'
  },
  {
    name: 'Transaction',
    icon: ArrowRightLeft,
    desc: 'Банківська операція',
    fields: ['id транзакції', 'тип', 'сума', 'дата', 'статус', 'відправник', 'отримувач'],
    methods: ['створити транзакцію', 'змінити статус', 'показати інформацію'],
    owner: 'vyacheslav'
  },
  {
    name: 'PaymentService',
    icon: CreditCard,
    desc: 'Сервіс для переказів',
    fields: [],
    methods: ['переказ між рахунками', 'перевірка балансу', 'підтвердження операції'],
    owner: 'vyacheslav'
  },
  {
    name: 'SalaryPayment',
    icon: CreditCard,
    desc: 'Бойові / службові виплати',
    fields: ['тип виплати', 'сума', 'дата нарахування'],
    methods: ['нарахувати виплату'],
    owner: 'igor'
  },
  {
    name: 'DonationService',
    icon: Heart,
    desc: 'Сервіс донатів',
    fields: [],
    methods: ['донат на підрозділ', 'донат на волонтерський фонд', 'перегляд історії донатів'],
    owner: 'igor'
  },
  {
    name: 'SavingsGoal',
    icon: PiggyBank,
    desc: 'Накопичення на ціль',
    fields: ['назва цілі', 'потрібна сума', 'поточна сума'],
    methods: ['додати кошти', 'перевірити прогрес'],
    owner: 'igor'
  },
  {
    name: 'BankSystem',
    icon: Building2,
    desc: 'Головний клас системи',
    fields: [],
    methods: ['додати користувача', 'відкрити рахунок', 'знайти рахунок', 'провести операцію', 'показати історію'],
    owner: 'igor'
  }
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
└── main.py`;

export const ClassStructure = () => {
  const [lang, setLang] = useState<'uk' | 'en'>('uk');
  const [filter, setFilter] = useState<'all' | 'vyacheslav' | 'igor'>('all');

  const t = lang === 'uk' ? {
    badge: '03 // Структура класів',
    title: 'Нормальна структура. Без перегруза.',
    vyacheslav: 'В\'ячеслав',
    igor: 'Ігор',
    vyacheslavZone: 'користувачі · рахунки · баланс · перекази · основна логіка',
    igorZone: 'бойові виплати · донати · накопичення · керування системою',
    projectTitle: 'Структура проєкту',
    all: 'Всі',
    models: 'models/',
    services: 'services/'
  } : {
    badge: '03 // Class Structure',
    title: 'Clean structure. No overload.',
    vyacheslav: 'Vyacheslav',
    igor: 'Igor',
    vyacheslavZone: 'users · accounts · balance · transfers · core logic',
    igorZone: 'combat pay · donations · savings · system control',
    projectTitle: 'Project Structure',
    all: 'All',
    models: 'models/',
    services: 'services/'
  };

  const filteredClasses = filter === 'all' ? classes : classes.filter(c => c.owner === filter);

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

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          <button onClick={() => setFilter('all')} className={`px-4 py-2 font-mono text-xs rounded-full border transition-colors ${filter === 'all' ? 'bg-amber-500/20 border-amber-500/50 text-amber-500' : 'border-white/20 text-white/60 hover:text-white'}`}>{t.all}</button>
          <button onClick={() => setFilter('vyacheslav')} className={`px-4 py-2 font-mono text-xs rounded-full border transition-colors ${filter === 'vyacheslav' ? 'bg-amber-500/20 border-amber-500/50 text-amber-500' : 'border-white/20 text-white/60 hover:text-white'}`}>{t.vyacheslav}</button>
          <button onClick={() => setFilter('igor')} className={`px-4 py-2 font-mono text-xs rounded-full border transition-colors ${filter === 'igor' ? 'bg-amber-500/20 border-amber-500/50 text-amber-500' : 'border-white/20 text-white/60 hover:text-white'}`}>{t.igor}</button>
        </div>

        {/* Class cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {filteredClasses.map((cls, i) => (
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
                <span className={`ml-auto text-[9px] px-2 py-0.5 rounded ${cls.owner === 'vyacheslav' ? 'bg-amber-500/10 text-amber-500' : 'bg-white/10 text-white/60'}`}>
                  {cls.owner === 'vyacheslav' ? t.vyacheslav : t.igor}
                </span>
              </div>
              <p className="text-white/50 text-xs mb-4">{cls.desc}</p>
              {cls.fields.length > 0 && (
                <div className="mb-3">
                  <div className="text-[9px] font-mono uppercase text-white/40 mb-1">Поля</div>
                  <div className="text-xs font-mono text-white/70">{cls.fields.join(', ')}</div>
                </div>
              )}
              <div>
                <div className="text-[9px] font-mono uppercase text-white/40 mb-1">Методи</div>
                <div className="text-xs font-mono text-white/70">{cls.methods.join(', ')}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Division of work */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="p-6 border border-amber-500/20 bg-amber-500/5 rounded-xl">
            <div className="font-mono font-bold text-amber-500 mb-2">{t.vyacheslav}</div>
            <p className="text-sm text-white/70 mb-4">{t.vyacheslavZone}</p>
            <div className="font-mono text-xs text-white/50">
              user.py · account.py · transaction.py · payment_service.py
            </div>
          </div>
          <div className="p-6 border border-white/10 bg-white/5 rounded-xl">
            <div className="font-mono font-bold text-white mb-2">{t.igor}</div>
            <p className="text-sm text-white/70 mb-4">{t.igorZone}</p>
            <div className="font-mono text-xs text-white/50">
              salary_payment.py · savings_goal.py · donation_service.py · bank_system.py
            </div>
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
