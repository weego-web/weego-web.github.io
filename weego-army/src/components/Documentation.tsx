import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronRight, FileCode, Folder } from 'lucide-react';

const DOC_SECTIONS = [
  {
    id: 'arch',
    title: 'Загальна архітектура',
    content: `Додаток Army Bank складається з таких шарів та допоміжних модулів:

1. Рівень API (FastAPI):
   • Відповідає за прийом запитів від мобільного клієнта.
   • REST endpoints: /users, /accounts, /transactions, /donations.
   • Валідація запитів через Pydantic schemas.
   • Файли: api/main.py, api/routes/users.py, accounts.py, transactions.py, donations.py.

2. Рівень бізнес-логіки (Services):
   • PaymentService — перекази між рахунками, перевірка балансу, підтвердження.
   • DonationService — донат на підрозділ, донат на волонтерський фонд, історія.
   • BankSystem — оркестрація: додати користувача, відкрити рахунок, провести операцію.
   • UserService — реєстрація, валідація даних користувача.

3. Рівень моделей (Models):
   • User, Account, Transaction, SalaryPayment, SavingsGoal.
   • Dataclasses з методами: create_profile, top_up, withdraw, add_funds, check_progress.

4. Рівень доступу до даних (DAL):
   • database.py — з'єднання з SQLite/PostgreSQL.
   • Інкапсуляція всіх SQL-запитів.
   • Методи: insert_user, get_account, execute_transfer, get_transactions.

5. Допоміжні модулі:
   • utils/constants.py — константи, повідомлення, назви полів.
   • database_setup.py — створення всіх таблиць при першому запуску.
   • main.py — точка входу, ініціалізація FastAPI.`
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
│   ├── user_service.py
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
    id: 'schema',
    title: 'Схема БД (CREATE TABLE)',
    desc: 'SQL для створення всіх таблиць.',
    content: `CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name TEXT NOT NULL,
    phone TEXT NOT NULL UNIQUE,
    email TEXT,
    role TEXT DEFAULT 'soldier',
    status TEXT DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE accounts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL REFERENCES users(id),
    account_number TEXT NOT NULL UNIQUE,
    balance REAL DEFAULT 0.0,
    currency TEXT DEFAULT 'UAH',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL,
    amount REAL NOT NULL,
    from_account_id INTEGER REFERENCES accounts(id),
    to_account_id INTEGER REFERENCES accounts(id),
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE salary_payments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL REFERENCES users(id),
    payment_type TEXT NOT NULL,
    amount REAL NOT NULL,
    payment_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE donations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    from_account_id INTEGER NOT NULL REFERENCES accounts(id),
    target_type TEXT NOT NULL,
    target_id INTEGER NOT NULL,
    amount REAL NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE savings_goals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL REFERENCES users(id),
    name TEXT NOT NULL,
    target_amount REAL NOT NULL,
    current_amount REAL DEFAULT 0.0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`
  },
  {
    id: 'constants',
    title: 'utils/constants.py',
    desc: 'Константи: назви таблиць, полів, повідомлення, типи операцій.',
    content: `# utils/constants.py
# Налаштування бази даних
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
FIELD_CREATED_AT = "created_at"

# Поля accounts
FIELD_USER_ID = "user_id"
FIELD_ACCOUNT_NUMBER = "account_number"
FIELD_BALANCE = "balance"
FIELD_CURRENCY = "currency"

# Поля transactions
FIELD_TYPE = "type"
FIELD_AMOUNT = "amount"
FIELD_FROM_ACCOUNT_ID = "from_account_id"
FIELD_TO_ACCOUNT_ID = "to_account_id"

# Повідомлення
MSG_USER_ADDED = "Користувача успішно додано."
MSG_ACCOUNT_OPENED = "Рахунок успішно відкрито."
MSG_TRANSFER_SUCCESS = "Переказ виконано."
MSG_INSUFFICIENT_BALANCE = "Недостатньо коштів на рахунку."
MSG_VALIDATION_ERROR = "Помилка валідації: "
MSG_PHONE_INVALID = "Некоректний формат телефону (10-12 цифр)."
MSG_EMAIL_INVALID = "Некоректний формат email."

# Типи транзакцій
TX_TYPE_TRANSFER = "transfer"
TX_TYPE_TOPUP = "topup"
TX_TYPE_SALARY = "salary"
TX_TYPE_DONATION = "donation"

# Типи виплат
SALARY_COMBAT = "combat"
SALARY_SERVICE = "service"

# Ціль донату
DONATION_TARGET_UNIT = "unit"
DONATION_TARGET_FUND = "fund"`
  },
  {
    id: 'db_setup',
    title: 'database_setup.py',
    desc: 'Скрипт створення таблиць при першому запуску.',
    content: `# database_setup.py
import sqlite3
from utils import constants

def create_tables():
    """Створює всі таблиці в БД, якщо вони ще не існують."""
    conn = sqlite3.connect(constants.DB_NAME)
    cursor = conn.cursor()
    try:
        cursor.execute(f"""
            CREATE TABLE IF NOT EXISTS {constants.TABLE_USERS} (
                {constants.FIELD_ID} INTEGER PRIMARY KEY AUTOINCREMENT,
                {constants.FIELD_FULL_NAME} TEXT NOT NULL,
                {constants.FIELD_PHONE} TEXT NOT NULL UNIQUE,
                {constants.FIELD_EMAIL} TEXT,
                {constants.FIELD_ROLE} TEXT DEFAULT 'soldier',
                {constants.FIELD_STATUS} TEXT DEFAULT 'active',
                {constants.FIELD_CREATED_AT} TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)
        cursor.execute(f"""
            CREATE TABLE IF NOT EXISTS {constants.TABLE_ACCOUNTS} (
                {constants.FIELD_ID} INTEGER PRIMARY KEY AUTOINCREMENT,
                {constants.FIELD_USER_ID} INTEGER NOT NULL,
                {constants.FIELD_ACCOUNT_NUMBER} TEXT NOT NULL UNIQUE,
                {constants.FIELD_BALANCE} REAL DEFAULT 0.0,
                {constants.FIELD_CURRENCY} TEXT DEFAULT 'UAH',
                {constants.FIELD_CREATED_AT} TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY ({constants.FIELD_USER_ID}) REFERENCES {constants.TABLE_USERS}(id)
            )
        """)
        cursor.execute(f"""
            CREATE TABLE IF NOT EXISTS {constants.TABLE_TRANSACTIONS} (
                {constants.FIELD_ID} INTEGER PRIMARY KEY AUTOINCREMENT,
                {constants.FIELD_TYPE} TEXT NOT NULL,
                {constants.FIELD_AMOUNT} REAL NOT NULL,
                {constants.FIELD_FROM_ACCOUNT_ID} INTEGER,
                {constants.FIELD_TO_ACCOUNT_ID} INTEGER,
                {constants.FIELD_STATUS} TEXT DEFAULT 'pending',
                {constants.FIELD_CREATED_AT} TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)
        conn.commit()
        print("Таблиці успішно створено.")
    except sqlite3.Error as e:
        print(f"Помилка: {e}")
    finally:
        conn.close()

if __name__ == "__main__":
    create_tables()`
  },
  {
    id: 'user',
    title: 'models/user.py',
    desc: 'Модель User: ПІБ, телефон, email, role, статус. Методи create_profile, view_profile.',
    content: `# models/user.py
from dataclasses import dataclass
from typing import Optional

@dataclass
class User:
    """Користувач банку. Військовослужбовець або адмін."""
    full_name: str
    phone: str
    email: Optional[str] = None
    role: str = "soldier"
    status: str = "active"
    id: Optional[int] = None

    def create_profile(self) -> dict:
        """Повертає дані для збереження профілю."""
        return {
            "full_name": self.full_name,
            "phone": self.phone,
            "email": self.email,
            "role": self.role,
            "status": self.status
        }

    def view_profile(self) -> dict:
        """Повертає дані профілю для відображення."""
        data = self.create_profile()
        if self.id:
            data["id"] = self.id
        return data`
  },
  {
    id: 'account',
    title: 'models/account.py',
    desc: 'Модель Account: номер рахунку, власник, баланс, валюта. Методи top_up, withdraw, get_balance.',
    content: `# models/account.py
from dataclasses import dataclass
from typing import Optional

@dataclass
class Account:
    """Банківський рахунок. Прив'язаний до User."""
    user_id: int
    account_number: str
    balance: float = 0.0
    currency: str = "UAH"
    id: Optional[int] = None

    def top_up(self, amount: float) -> None:
        """Поповнити рахунок."""
        if amount > 0:
            self.balance += amount

    def withdraw(self, amount: float) -> bool:
        """Списати кошти. Повертає True якщо успішно."""
        if amount > 0 and self.balance >= amount:
            self.balance -= amount
            return True
        return False

    def get_balance(self) -> float:
        """Показати баланс."""
        return self.balance`
  },
  {
    id: 'transaction',
    title: 'models/transaction.py',
    desc: 'Модель Transaction: тип, сума, відправник, отримувач, статус. Методи create, update_status, get_info.',
    content: `# models/transaction.py
from dataclasses import dataclass
from typing import Optional
from datetime import datetime

@dataclass
class Transaction:
    """Банківська операція."""
    type: str
    amount: float
    from_account_id: Optional[int] = None
    to_account_id: Optional[int] = None
    status: str = "pending"
    id: Optional[int] = None
    created_at: Optional[datetime] = None

    def create(self) -> dict:
        """Дані для створення запису в БД."""
        return {
            "type": self.type,
            "amount": self.amount,
            "from_account_id": self.from_account_id,
            "to_account_id": self.to_account_id,
            "status": self.status
        }

    def update_status(self, new_status: str) -> None:
        """Змінити статус (pending -> completed / failed)."""
        self.status = new_status

    def get_info(self) -> dict:
        """Показати інформацію про транзакцію."""
        return {
            "id": self.id,
            "type": self.type,
            "amount": self.amount,
            "from_account_id": self.from_account_id,
            "to_account_id": self.to_account_id,
            "status": self.status,
            "created_at": str(self.created_at) if self.created_at else None
        }`
  },
  {
    id: 'salary_payment',
    title: 'models/salary_payment.py',
    desc: 'Модель SalaryPayment: тип виплати (бойова/службова), сума, дата. Метод credit_payment.',
    content: `# models/salary_payment.py
from dataclasses import dataclass
from typing import Optional
from datetime import date

@dataclass
class SalaryPayment:
    """Бойові або службові виплати."""
    user_id: int
    payment_type: str  # "combat" | "service"
    amount: float
    payment_date: date
    id: Optional[int] = None

    def credit_payment(self, account_id: int, db) -> bool:
        """Нарахувати виплату на рахунок. Викликає db.credit_to_account()."""
        return db.credit_to_account(account_id, self.amount, self.payment_type)`
  },
  {
    id: 'savings_goal',
    title: 'models/savings_goal.py',
    desc: 'Модель SavingsGoal: назва цілі, потрібна/поточна сума. Методи add_funds, check_progress.',
    content: `# models/savings_goal.py
from dataclasses import dataclass
from typing import Optional

@dataclass
class SavingsGoal:
    """Накопичення на ціль (наприклад, спорядження)."""
    user_id: int
    name: str
    target_amount: float
    current_amount: float = 0.0
    id: Optional[int] = None

    def add_funds(self, amount: float) -> None:
        """Додати кошти до накопичення."""
        if amount > 0:
            self.current_amount += amount

    def check_progress(self) -> float:
        """Перевірити прогрес (0.0 - 1.0)."""
        if self.target_amount <= 0:
            return 0.0
        return min(1.0, self.current_amount / self.target_amount)`
  },
  {
    id: 'database',
    title: 'data_access/database.py',
    desc: 'DAL: інкапсуляція SQL. Методи insert_user, get_account, get_balance, execute_transfer, get_transactions.',
    content: `# data_access/database.py
import sqlite3
from utils import constants

class Database:
    """Клас для взаємодії з БД. Інкапсулює SQL-запити."""

    def __init__(self, db_name=constants.DB_NAME):
        self.db_name = db_name

    def _execute(self, query: str, params: tuple = (), commit: bool = False, fetch_one: bool = False):
        conn = sqlite3.connect(self.db_name)
        cursor = conn.cursor()
        cursor.execute(query, params)
        if commit:
            conn.commit()
            result = cursor.lastrowid
        elif fetch_one:
            result = cursor.fetchone()
        else:
            result = cursor.fetchall()
        conn.close()
        return result

    def insert_user(self, data: dict) -> int:
        q = f"""INSERT INTO {constants.TABLE_USERS}
            (full_name, phone, email, role, status)
            VALUES (?, ?, ?, ?, ?)"""
        return self._execute(q, (
            data["full_name"], data["phone"], data.get("email"),
            data.get("role", "soldier"), data.get("status", "active")
        ), commit=True)

    def get_account(self, account_id: int) -> dict | None:
        q = f"SELECT * FROM {constants.TABLE_ACCOUNTS} WHERE id = ?"
        row = self._execute(q, (account_id,), fetch_one=True)
        return dict(zip(["id","user_id","account_number","balance","currency","created_at"], row)) if row else None

    def get_balance(self, account_id: int) -> float:
        q = f"SELECT balance FROM {constants.TABLE_ACCOUNTS} WHERE id = ?"
        row = self._execute(q, (account_id,), fetch_one=True)
        return row[0] if row else 0.0

    def execute_transfer(self, from_id: int, to_id: int, amount: float) -> bool:
        conn = sqlite3.connect(self.db_name)
        cursor = conn.cursor()
        try:
            cursor.execute(f"UPDATE {constants.TABLE_ACCOUNTS} SET balance = balance - ? WHERE id = ?", (amount, from_id))
            cursor.execute(f"UPDATE {constants.TABLE_ACCOUNTS} SET balance = balance + ? WHERE id = ?", (amount, to_id))
            cursor.execute(f"""INSERT INTO {constants.TABLE_TRANSACTIONS}
                (type, amount, from_account_id, to_account_id, status)
                VALUES (?, ?, ?, ?, ?)""", (constants.TX_TYPE_TRANSFER, amount, from_id, to_id, "completed"))
            conn.commit()
            return True
        except:
            conn.rollback()
            return False
        finally:
            conn.close()

    def get_transactions(self, account_id: int) -> list:
        q = f"""SELECT * FROM {constants.TABLE_TRANSACTIONS}
            WHERE from_account_id = ? OR to_account_id = ?
            ORDER BY created_at DESC"""
        return self._execute(q, (account_id, account_id))`
  },
  {
    id: 'user_service',
    title: 'services/user_service.py',
    desc: 'Сервіс реєстрації. Валідація телефону, email. add_user, get_user, validate_phone.',
    content: `# services/user_service.py
import re
from typing import Tuple, Optional, List
from data_access.database import Database
from models.user import User
from utils import constants

class UserService:
    """Сервіс управління користувачами. Валідація даних."""

    def __init__(self, db: Database):
        self.db = db

    def _validate_phone(self, phone: str) -> bool:
        digits = re.sub(r"\\D", "", phone)
        return 10 <= len(digits) <= 12

    def _validate_email(self, email: str) -> bool:
        return bool(re.match(r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", email))

    def validate_user_data(self, data: dict) -> List[str]:
        """Повертає список помилок валідації."""
        errors = []
        if not data.get("full_name", "").strip():
            errors.append("ПІБ обов'язковий.")
        if not data.get("phone", "").strip():
            errors.append("Телефон обов'язковий.")
        elif not self._validate_phone(data["phone"]):
            errors.append(constants.MSG_PHONE_INVALID)
        if data.get("email") and not self._validate_email(data["email"]):
            errors.append(constants.MSG_EMAIL_INVALID)
        return errors

    def add_user(self, data: dict) -> Tuple[Optional[User], List[str]]:
        """Додати користувача. Повертає (User, [помилки])."""
        errors = self.validate_user_data(data)
        if errors:
            return None, errors
        try:
            user_id = self.db.insert_user(data)
            return User(id=user_id, **data), []
        except Exception as e:
            return None, [str(e)]`
  },
  {
    id: 'payment_service',
    title: 'services/payment_service.py',
    desc: 'Сервіс переказів. transfer, check_balance, confirm_operation.',
    content: `# services/payment_service.py
from typing import Tuple
from data_access.database import Database
from utils import constants

class PaymentService:
    """Сервіс для переказів між рахунками."""

    def __init__(self, db: Database):
        self.db = db

    def check_balance(self, account_id: int, amount: float) -> bool:
        """Перевірка балансу. Чи достатньо коштів?"""
        balance = self.db.get_balance(account_id)
        return balance >= amount

    def transfer(self, from_id: int, to_id: int, amount: float) -> Tuple[bool, str]:
        """Переказ між рахунками. Повертає (успіх, повідомлення)."""
        if amount <= 0:
            return False, "Сума має бути більше 0."
        if from_id == to_id:
            return False, "Неможливо переказати на той самий рахунок."
        if not self.check_balance(from_id, amount):
            return False, constants.MSG_INSUFFICIENT_BALANCE
        success = self.db.execute_transfer(from_id, to_id, amount)
        return success, constants.MSG_TRANSFER_SUCCESS if success else "Помилка переказу."

    def confirm_operation(self, from_id: int, to_id: int, amount: float) -> bool:
        """Підтвердження операції (викликає execute_transfer)."""
        return self.db.execute_transfer(from_id, to_id, amount)`
  },
  {
    id: 'donation_service',
    title: 'services/donation_service.py',
    desc: 'Сервіс донатів. donate_to_unit, donate_to_fund, get_donation_history.',
    content: `# services/donation_service.py
from data_access.database import Database
from utils import constants

class DonationService:
    """Сервіс донатів. Донат на підрозділ або волонтерський фонд."""

    def __init__(self, db: Database, payment_service):
        self.db = db
        self.payment_service = payment_service

    def _process_donation(self, from_account_id: int, target_type: str, target_id: int, amount: float) -> bool:
        """Списати кошти та створити запис донату."""
        if not self.payment_service.check_balance(from_account_id, amount):
            return False
        # Списание с рахунку (переказ на "віртуальний" рахунок донату)
        success = self.db.record_donation(from_account_id, target_type, target_id, amount)
        return success

    def donate_to_unit(self, from_account_id: int, unit_id: int, amount: float) -> bool:
        """Донат на підрозділ."""
        return self._process_donation(from_account_id, constants.DONATION_TARGET_UNIT, unit_id, amount)

    def donate_to_fund(self, from_account_id: int, fund_id: int, amount: float) -> bool:
        """Донат на волонтерський фонд."""
        return self._process_donation(from_account_id, constants.DONATION_TARGET_FUND, fund_id, amount)

    def get_donation_history(self, account_id: int) -> list:
        """Перегляд історії донатів."""
        return self.db.get_donations_by_account(account_id)`
  },
  {
    id: 'bank_system',
    title: 'services/bank_system.py',
    desc: 'Головний клас. add_user, open_account, find_account, execute_operation, get_history.',
    content: `# services/bank_system.py
import random
import string
from data_access.database import Database
from services.user_service import UserService
from services.payment_service import PaymentService
from services.donation_service import DonationService

class BankSystem:
    """Головний клас, що керує всією системою."""

    def __init__(self, db: Database):
        self.db = db
        self.user_service = UserService(db)
        self.payment_service = PaymentService(db)
        self.donation_service = DonationService(db, self.payment_service)

    def _generate_account_number(self) -> str:
        """Генерація номера рахунку (наприклад, UA12345678901234567890123456)."""
        prefix = "UA"
        digits = "".join(random.choices(string.digits, k=24))
        return prefix + digits

    def add_user(self, user_data: dict) -> int:
        """Додати користувача. Повертає user_id."""
        user, errors = self.user_service.add_user(user_data)
        return user.id if user else None

    def open_account(self, user_id: int) -> int:
        """Відкрити рахунок. Повертає account_id."""
        account_number = self._generate_account_number()
        return self.db.insert_account(user_id, account_number)

    def find_account(self, account_id: int) -> dict | None:
        """Знайти рахунок за ID."""
        return self.db.get_account(account_id)

    def execute_operation(self, from_id: int, to_id: int, amount: float) -> bool:
        """Провести операцію (переказ)."""
        success, _ = self.payment_service.transfer(from_id, to_id, amount)
        return success

    def get_history(self, account_id: int) -> list:
        """Показати історію операцій."""
        return self.db.get_transactions(account_id)`
  },
  {
    id: 'api_users',
    title: 'api/routes/users.py',
    desc: 'REST endpoints: POST /users (реєстрація), GET /users/{id}.',
    content: `# api/routes/users.py
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from main import get_bank_system

router = APIRouter()

class UserCreate(BaseModel):
    full_name: str
    phone: str
    email: str | None = None
    role: str = "soldier"

@router.post("/")
def create_user(data: UserCreate):
    """Реєстрація нового користувача."""
    bank = get_bank_system()
    user_id = bank.add_user(data.model_dump())
    if user_id is None:
        raise HTTPException(status_code=400, detail="Помилка реєстрації")
    return {"id": user_id, "message": "Користувача додано."}

@router.get("/{user_id}")
def get_user(user_id: int):
    """Отримати користувача за ID."""
    bank = get_bank_system()
    user = bank.db.get_user(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="Користувача не знайдено")
    return user`
  },
  {
    id: 'api_accounts',
    title: 'api/routes/accounts.py',
    desc: 'REST endpoints: POST /accounts (відкрити рахунок), GET /accounts/{id}/balance.',
    content: `# api/routes/accounts.py
from fastapi import APIRouter, HTTPException
from main import get_bank_system

router = APIRouter()

@router.post("/")
def open_account(user_id: int):
    """Відкрити рахунок для користувача."""
    bank = get_bank_system()
    account_id = bank.open_account(user_id)
    if account_id is None:
        raise HTTPException(status_code=400, detail="Помилка відкриття рахунку")
    return {"id": account_id, "message": "Рахунок відкрито."}

@router.get("/{account_id}")
def get_account(account_id: int):
    """Отримати дані рахунку."""
    bank = get_bank_system()
    account = bank.find_account(account_id)
    if not account:
        raise HTTPException(status_code=404, detail="Рахунок не знайдено")
    return account

@router.get("/{account_id}/balance")
def get_balance(account_id: int):
    """Отримати баланс."""
    bank = get_bank_system()
    account = bank.find_account(account_id)
    if not account:
        raise HTTPException(status_code=404, detail="Рахунок не знайдено")
    return {"balance": account["balance"], "currency": account["currency"]}`
  },
  {
    id: 'api_transactions',
    title: 'api/routes/transactions.py',
    desc: 'REST endpoints: POST /transactions (переказ), GET /accounts/{id}/history.',
    content: `# api/routes/transactions.py
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from main import get_bank_system

router = APIRouter()

class TransferRequest(BaseModel):
    from_account_id: int
    to_account_id: int
    amount: float

@router.post("/transfer")
def transfer(data: TransferRequest):
    """Переказ між рахунками."""
    bank = get_bank_system()
    success = bank.execute_operation(data.from_account_id, data.to_account_id, data.amount)
    if not success:
        raise HTTPException(status_code=400, detail="Помилка переказу")
    return {"message": "Переказ виконано."}

@router.get("/account/{account_id}/history")
def get_history(account_id: int):
    """Історія операцій рахунку."""
    bank = get_bank_system()
    history = bank.get_history(account_id)
    return {"transactions": history}`
  },
  {
    id: 'main',
    title: 'main.py',
    desc: 'Точка входу. Ініціалізація FastAPI, підключення routes, create_tables.',
    content: `# main.py
from fastapi import FastAPI
from contextlib import asynccontextmanager
from database_setup import create_tables
from data_access.database import Database
from services.bank_system import BankSystem

_db = Database()
_bank = BankSystem(_db)

def get_bank_system():
    return _bank

@asynccontextmanager
async def lifespan(app: FastAPI):
    create_tables()
    yield
    # cleanup if needed

app = FastAPI(title="Army Bank API", lifespan=lifespan)

from api.routes import users, accounts, transactions
app.include_router(users.router, prefix="/users", tags=["users"])
app.include_router(accounts.router, prefix="/accounts", tags=["accounts"])
app.include_router(transactions.router, prefix="/transactions", tags=["transactions"])

# uvicorn main:app --reload`
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
              <pre className="p-4 bg-graphite-light border border-white/10 rounded-lg font-mono text-[11px] leading-relaxed text-white/85 overflow-x-auto whitespace-pre-wrap max-h-[70vh] overflow-y-auto">
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
    subtitle: 'Архітектура, схема БД, повний код — як у довіднику.'
  } : {
    badge: '04 // Documentation',
    title: 'Detailed technical documentation',
    subtitle: 'Architecture, DB schema, full code — reference style.'
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
