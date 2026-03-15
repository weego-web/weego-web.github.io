import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronRight, FileCode, Folder } from 'lucide-react';

const DOC_SECTIONS = [
  {
    id: 'arch',
    title: 'Загальна архітектура',
    content: `Додаток Army Bank складається з таких шарів:

1. Рівень API (FastAPI):
   • REST endpoints для мобільного клієнта
   • Валідація запитів (Pydantic)
   • Файли: api/main.py, api/routes/*.py

2. Рівень бізнес-логіки (Services):
   • PaymentService — перекази між рахунками
   • DonationService — донати на підрозділ/фонд
   • BankSystem — оркестрація операцій

3. Рівень моделей (Models):
   • User, Account, Transaction, SalaryPayment, SavingsGoal
   • SQLAlchemy ORM / Pydantic schemas

4. Рівень доступу до даних (DAL):
   • database.py — з'єднання з PostgreSQL
   • Інкапсуляція SQL-запитів

5. Допоміжні модулі:
   • utils/constants.py — константи
   • database_setup.py — створення таблиць
   • main.py — точка входу`
  },
  {
    id: 'structure',
    title: 'Структура каталогів',
    content: `army_bank/
├── api/
│   ├── __init__.py
│   ├── main.py
│   └── routes/
│       ├── __init__.py
│       ├── users.py
│       ├── accounts.py
│       ├── transactions.py
│       └── donations.py
├── models/
│   ├── __init__.py
│   ├── user.py
│   ├── account.py
│   ├── transaction.py
│   ├── salary_payment.py
│   └── savings_goal.py
├── services/
│   ├── __init__.py
│   ├── payment_service.py
│   ├── donation_service.py
│   └── bank_system.py
├── data_access/
│   ├── __init__.py
│   └── database.py
├── utils/
│   ├── __init__.py
│   └── constants.py
├── database_setup.py
└── main.py`
  },
  {
    id: 'constants',
    title: 'utils/constants.py',
    desc: 'Константи програми: назви таблиць, полів, повідомлення.',
    content: `# utils/constants.py
DB_NAME = "army_bank.db"
CURRENCY = "UAH"

# Таблиці
TABLE_USERS = "users"
TABLE_ACCOUNTS = "accounts"
TABLE_TRANSACTIONS = "transactions"
TABLE_SALARY_PAYMENTS = "salary_payments"
TABLE_DONATIONS = "donations"
TABLE_SAVINGS_GOALS = "savings_goals"

# Поля users
FIELD_ID = "id"
FIELD_FULL_NAME = "full_name"
FIELD_PHONE = "phone"
FIELD_EMAIL = "email"
FIELD_ROLE = "role"
FIELD_STATUS = "status"

# Типи транзакцій
TX_TYPE_TRANSFER = "transfer"
TX_TYPE_TOPUP = "topup"
TX_TYPE_SALARY = "salary"
TX_TYPE_DONATION = "donation"

# Типи виплат
SALARY_COMBAT = "combat"
SALARY_SERVICE = "service"`
  },
  {
    id: 'user',
    title: 'models/user.py',
    desc: 'Модель користувача банку.',
    content: `# models/user.py
from dataclasses import dataclass
from typing import Optional

@dataclass
class User:
    full_name: str
    phone: str
    email: Optional[str] = None
    role: str = "soldier"
    status: str = "active"
    id: Optional[int] = None

    def create_profile(self) -> dict:
        return {"full_name": self.full_name, "phone": self.phone, ...}

    def view_profile(self) -> dict:
        return self.create_profile()`
  },
  {
    id: 'account',
    title: 'models/account.py',
    desc: 'Модель банківського рахунку.',
    content: `# models/account.py
from dataclasses import dataclass
from typing import Optional

@dataclass
class Account:
    user_id: int
    account_number: str
    balance: float = 0.0
    currency: str = "UAH"
    id: Optional[int] = None

    def top_up(self, amount: float) -> None:
        self.balance += amount

    def withdraw(self, amount: float) -> bool:
        if self.balance >= amount:
            self.balance -= amount
            return True
        return False

    def get_balance(self) -> float:
        return self.balance`
  },
  {
    id: 'transaction',
    title: 'models/transaction.py',
    desc: 'Модель банківської операції.',
    content: `# models/transaction.py
from dataclasses import dataclass
from typing import Optional
from datetime import datetime

@dataclass
class Transaction:
    type: str
    amount: float
    from_account_id: Optional[int] = None
    to_account_id: Optional[int] = None
    status: str = "pending"
    id: Optional[int] = None
    created_at: Optional[datetime] = None

    def create(self) -> dict:
        return {"type": self.type, "amount": self.amount, ...}

    def update_status(self, new_status: str) -> None:
        self.status = new_status

    def get_info(self) -> dict:
        return {"id": self.id, "type": self.type, "amount": self.amount, ...}`
  },
  {
    id: 'payment_service',
    title: 'services/payment_service.py',
    desc: 'Сервіс переказів між рахунками.',
    content: `# services/payment_service.py
class PaymentService:
    def transfer(self, from_id: int, to_id: int, amount: float) -> bool:
        if not self.check_balance(from_id, amount):
            return False
        # списання з from_id, зачислення на to_id
        return self.confirm_operation(from_id, to_id, amount)

    def check_balance(self, account_id: int, amount: float) -> bool:
        balance = self.db.get_balance(account_id)
        return balance >= amount

    def confirm_operation(self, from_id: int, to_id: int, amount: float) -> bool:
        return self.db.execute_transfer(from_id, to_id, amount)`
  },
  {
    id: 'salary_payment',
    title: 'models/salary_payment.py',
    desc: 'Модель бойових/службових виплат.',
    content: `# models/salary_payment.py
from dataclasses import dataclass
from typing import Optional
from datetime import date

@dataclass
class SalaryPayment:
    user_id: int
    payment_type: str  # combat | service
    amount: float
    payment_date: date
    id: Optional[int] = None

    def credit_payment(self, account_id: int) -> bool:
        # нарахування на рахунок
        return True`
  },
  {
    id: 'donation_service',
    title: 'services/donation_service.py',
    desc: 'Сервіс донатів.',
    content: `# services/donation_service.py
class DonationService:
    def donate_to_unit(self, from_account_id: int, unit_id: int, amount: float) -> bool:
        return self._process_donation(from_account_id, "unit", unit_id, amount)

    def donate_to_fund(self, from_account_id: int, fund_id: int, amount: float) -> bool:
        return self._process_donation(from_account_id, "fund", fund_id, amount)

    def get_donation_history(self, account_id: int) -> list:
        return self.db.get_donations_by_account(account_id)`
  },
  {
    id: 'savings_goal',
    title: 'models/savings_goal.py',
    desc: 'Модель накопичення на ціль.',
    content: `# models/savings_goal.py
from dataclasses import dataclass
from typing import Optional

@dataclass
class SavingsGoal:
    user_id: int
    name: str
    target_amount: float
    current_amount: float = 0.0
    id: Optional[int] = None

    def add_funds(self, amount: float) -> None:
        self.current_amount += amount

    def check_progress(self) -> float:
        return self.current_amount / self.target_amount if self.target_amount else 0`
  },
  {
    id: 'bank_system',
    title: 'services/bank_system.py',
    desc: 'Головний клас системи.',
    content: `# services/bank_system.py
class BankSystem:
    def add_user(self, user_data: dict) -> int:
        return self.db.insert_user(user_data)

    def open_account(self, user_id: int) -> int:
        account_number = self._generate_account_number()
        return self.db.insert_account(user_id, account_number)

    def find_account(self, account_id: int) -> dict | None:
        return self.db.get_account(account_id)

    def execute_operation(self, tx_data: dict) -> bool:
        return self.payment_service.transfer(...)

    def get_history(self, account_id: int) -> list:
        return self.db.get_transactions(account_id)`
  },
  {
    id: 'database',
    title: 'data_access/database.py',
    desc: 'Рівень доступу до даних (PostgreSQL/SQLite).',
    content: `# data_access/database.py
import sqlite3
from utils import constants

class Database:
    def __init__(self, db_name=constants.DB_NAME):
        self.db_name = db_name

    def _execute(self, query: str, params: tuple = (), commit: bool = False):
        conn = sqlite3.connect(self.db_name)
        cursor = conn.cursor()
        cursor.execute(query, params)
        if commit:
            conn.commit()
            return cursor.lastrowid
        return cursor.fetchall()

    def insert_user(self, data: dict) -> int: ...
    def get_account(self, id: int) -> dict | None: ...
    def execute_transfer(self, from_id: int, to_id: int, amount: float) -> bool: ...`
  },
  {
    id: 'main',
    title: 'main.py',
    desc: 'Точка входу в програму.',
    content: `# main.py
from fastapi import FastAPI
from api.routes import users, accounts, transactions
from database_setup import create_tables

def main():
    create_tables()
    app = FastAPI(title="Army Bank API")
    app.include_router(users.router, prefix="/users", tags=["users"])
    app.include_router(accounts.router, prefix="/accounts", tags=["accounts"])
    app.include_router(transactions.router, prefix="/transactions", tags=["transactions"])
    return app`
  }
];

function DocBlock({ section, isOpen, onToggle }: { section: typeof DOC_SECTIONS[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 p-4 text-left hover:bg-white/[0.02] transition-colors"
      >
        {isOpen ? <ChevronDown className="w-4 h-4 text-amber-500 shrink-0" /> : <ChevronRight className="w-4 h-4 text-amber-500 shrink-0" />}
        {section.id === 'arch' || section.id === 'structure' ? (
          <Folder className="w-4 h-4 text-amber-500/70 shrink-0" />
        ) : (
          <FileCode className="w-4 h-4 text-amber-500/70 shrink-0" />
        )}
        <span className="font-mono font-medium text-white">{section.title}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-0">
              {'desc' in section && section.desc && (
                <p className="text-sm text-white/60 mb-4">{section.desc}</p>
              )}
              <pre className="p-4 bg-graphite-light border border-white/10 rounded-lg font-mono text-xs text-white/80 overflow-x-auto whitespace-pre-wrap">
                {section.content}
              </pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export const Documentation = () => {
  const [lang, setLang] = useState<'uk' | 'en'>('uk');
  const [openId, setOpenId] = useState<string | null>('arch');

  const t = lang === 'uk' ? {
    badge: '04 // Документація',
    title: 'Детальна технічна документація',
    subtitle: 'Архітектура, структура, код — як у довіднику.'
  } : {
    badge: '04 // Documentation',
    title: 'Detailed technical documentation',
    subtitle: 'Architecture, structure, code — reference style.'
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
          <p className="text-lg text-white/60">{t.subtitle}</p>
        </div>

        <div className="max-w-4xl">
          {DOC_SECTIONS.map((section) => (
            <DocBlock
              key={section.id}
              section={section}
              isOpen={openId === section.id}
              onToggle={() => setOpenId(openId === section.id ? null : section.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
