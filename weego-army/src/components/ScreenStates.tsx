import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Smartphone, Monitor, ChevronRight, LogIn, Wallet, Send, CheckCircle, Loader2, User, Heart, History, AlertCircle } from 'lucide-react';

type ScreenId = 'login' | 'balance' | 'transfer' | 'loading' | 'success' | 'profile' | 'donation' | 'history' | 'error';

const SCREENS: { id: ScreenId; label: string; icon: React.ElementType }[] = [
  { id: 'login', label: 'Вхід', icon: LogIn },
  { id: 'balance', label: 'Баланс', icon: Wallet },
  { id: 'transfer', label: 'Переказ', icon: Send },
  { id: 'donation', label: 'Донат', icon: Heart },
  { id: 'history', label: 'Історія', icon: History },
  { id: 'profile', label: 'Профіль', icon: User },
  { id: 'loading', label: 'Завантаження', icon: Loader2 },
  { id: 'success', label: 'Успіх', icon: CheckCircle },
  { id: 'error', label: 'Помилка', icon: AlertCircle },
];

export const ScreenStates = () => {
  const [activeScreen, setActiveScreen] = useState<ScreenId>('login');
  const [isAuto, setIsAuto] = useState(true);

  useEffect(() => {
    if (!isAuto) return;
    const seq: ScreenId[] = ['login', 'balance', 'transfer', 'donation', 'history', 'profile', 'loading', 'success', 'error', 'balance'];
    let i = 0;
    const t = setInterval(() => {
      i = (i + 1) % seq.length;
      setActiveScreen(seq[i]);
    }, 2800);
    return () => clearInterval(t);
  }, [isAuto]);

  return (
    <section className="py-32 relative border-t border-beige-500/20 overflow-hidden bg-graphite-light/50">
      <div className="absolute inset-0 bg-grid-warm pointer-events-none opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-beige-500/5 via-transparent to-beige-500/5 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-[10px] text-beige-400 uppercase tracking-widest mb-4">10 // Екрани та стани</div>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-beige-100">
            Форми. Переходи. Стани.
          </h2>
          <p className="text-lg text-beige-300/70">
            Емуляція екранів мобільного та десктопного додатку — від логіну до підтвердження операції.
          </p>
        </div>

        {/* Screen tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {SCREENS.map((s) => (
            <button
              key={s.id}
              onClick={() => { setActiveScreen(s.id); setIsAuto(false); }}
              className={`px-4 py-2 font-mono text-xs rounded-lg border transition-all flex items-center gap-2 ${
                activeScreen === s.id
                  ? 'bg-beige-500/20 border-beige-500/50 text-beige-400'
                  : 'border-beige-500/20 text-beige-300/60 hover:text-beige-300 hover:border-beige-500/30'
              }`}
            >
              <s.icon className="w-3.5 h-3.5" />
              {s.label}
            </button>
          ))}
          <button
            onClick={() => setIsAuto((a) => !a)}
            className={`px-4 py-2 font-mono text-xs rounded-lg border border-beige-500/20 ${isAuto ? 'bg-beige-500/10 text-beige-400' : 'text-beige-300/50'}`}
          >
            {isAuto ? '▶ Авто' : '▶ Запустити'}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Mobile mockup */}
          <motion.div
            layout
            className="relative w-[280px] sm:w-[300px] shrink-0"
          >
            <div className="relative aspect-[9/19] bg-[#0d0c0a] border-[3px] border-beige-500/30 rounded-[2.5rem] shadow-2xl overflow-hidden glow-beige soft-glow">
              <div className="absolute inset-[3px] rounded-[2.25rem] overflow-hidden bg-graphite-light">
                <div className="absolute top-0 inset-x-0 h-10 bg-[#0a0908] flex justify-center items-end pb-2 z-20">
                  <div className="phone-notch" />
                  <div className="absolute top-3 left-4 text-[9px] text-beige-500/50 font-mono">9:41</div>
                  <div className="absolute top-3 right-4 flex gap-1">
                    <span className="w-1 h-2 rounded-sm bg-beige-500/40" />
                    <span className="w-1 h-2.5 rounded-sm bg-beige-500/50" />
                    <span className="w-1 h-3 rounded-sm bg-beige-500/60" />
                  </div>
                </div>
                <div className="relative z-10 pt-14 px-4 pb-6 h-full">
                  <AnimatePresence mode="wait">
                    {activeScreen === 'login' && (
                      <motion.div
                        key="login"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-5"
                      >
                        <div className="text-center mb-8">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-beige-500/10 border border-beige-500/20 mb-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-beige-500/60" />
                            <span className="text-beige-400 font-mono text-[10px] uppercase">Army Bank</span>
                          </div>
                          <div className="text-beige-200 text-sm">Увійдіть до акаунту</div>
                          <div className="text-beige-500/50 text-[9px] mt-1">Безпечний вхід</div>
                        </div>
                        <div className="space-y-3">
                          <div className="h-11 rounded-xl bg-white/5 border border-beige-500/20 px-4 flex items-center text-beige-200/80 text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">+380 XX XXX XX XX</div>
                          <div className="h-11 rounded-xl bg-white/5 border border-beige-500/20 px-4 flex items-center text-beige-200/80 text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">••••••••</div>
                        </div>
                        <button className="w-full h-12 rounded-xl bg-beige-500/30 border border-beige-500/40 text-beige-300 font-medium text-sm">
                          Увійти
                        </button>
                      </motion.div>
                    )}
                    {activeScreen === 'balance' && (
                      <motion.div
                        key="balance"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <div className="bg-beige-500/10 border border-beige-500/20 rounded-2xl p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-beige-400/80 font-mono text-[10px] uppercase">Баланс</span>
                            <span className="w-2 h-2 rounded-full bg-green-500/60 animate-pulse" title="Активний" />
                          </div>
                          <div className="text-2xl font-serif text-beige-300 tracking-tight">₴12,450</div>
                          <div className="text-beige-500/60 text-[10px] mt-2 font-mono">UA1234 **** 3456</div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {['Родині', 'Донат', 'Накоп'].map((l, i) => (
                            <div key={i} className="h-14 rounded-xl bg-white/5 border border-beige-500/15 flex flex-col items-center justify-center gap-0.5 hover:bg-beige-500/5 transition-colors">
                              <div className="w-5 h-5 rounded-full bg-beige-500/20 shadow-[0_0_8px_rgba(168,139,92,0.15)]" />
                              <span className="text-[10px] text-beige-300/70">{l}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex-1 bg-white/5 rounded-xl border border-beige-500/10 p-4 min-h-[120px]">
                          <div className="text-beige-500/50 text-[9px] uppercase mb-2">Останні</div>
                          <div className="space-y-2 text-xs text-beige-200/80">
                            <div>+₴8,000 Бойові</div>
                            <div>-₴2,000 Родині</div>
                            <div>-₴500 Донат</div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    {activeScreen === 'transfer' && (
                      <motion.div
                        key="transfer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <div className="text-beige-400 font-mono text-[10px] uppercase">Переказ родині</div>
                        <div className="space-y-3">
                          <div className="h-11 rounded-xl bg-white/5 border border-beige-500/20 px-4 text-beige-200/80 text-sm">Картка отримувача</div>
                          <div className="h-11 rounded-xl bg-white/5 border border-beige-500/20 px-4 flex items-center justify-between">
                            <span className="text-beige-200/80 text-sm">Сума</span>
                            <span className="text-beige-400">₴2,000</span>
                          </div>
                          <div className="h-11 rounded-xl bg-white/5 border border-beige-500/20 px-4 text-beige-200/60 text-sm">Коментар (опційно)</div>
                        </div>
                        <button className="w-full h-12 rounded-xl bg-beige-500/30 border border-beige-500/40 text-beige-300 font-medium text-sm flex items-center justify-center gap-2">
                          Підтвердити
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </motion.div>
                    )}
                    {activeScreen === 'loading' && (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.25 }}
                        className="flex flex-col items-center justify-center py-16 gap-6"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
                          className="w-12 h-12 rounded-full border-2 border-beige-500/30 border-t-beige-500 flex items-center justify-center"
                        >
                          <Loader2 className="w-5 h-5 text-beige-500" />
                        </motion.div>
                        <div className="text-beige-300/80 text-sm">Обробка операції...</div>
                        <div className="text-beige-500/50 text-[10px]">Перевірка балансу</div>
                      </motion.div>
                    )}
                    {activeScreen === 'success' && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.25 }}
                        className="flex flex-col items-center justify-center py-16 gap-6"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                          className="w-16 h-16 rounded-full bg-beige-500/20 border border-beige-500/40 flex items-center justify-center"
                        >
                          <CheckCircle className="w-8 h-8 text-beige-500" />
                        </motion.div>
                        <div className="text-beige-300 text-sm font-medium">Операцію виконано</div>
                        <div className="text-beige-500/70 text-xs">₴2,000 переказано родині</div>
                        <button className="px-6 py-2 rounded-lg border border-beige-500/30 text-beige-300 text-xs">
                          Готово
                        </button>
                      </motion.div>
                    )}
                    {activeScreen === 'profile' && (
                      <motion.div
                        key="profile"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-beige-500/10 border border-beige-500/20">
                          <div className="w-14 h-14 rounded-full bg-beige-500/20 flex items-center justify-center">
                            <User className="w-7 h-7 text-beige-500" />
                          </div>
                          <div>
                            <div className="font-mono font-medium text-beige-200">Іван Петренко</div>
                            <div className="text-[10px] text-beige-500/70">+380 XX XXX XX XX</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {['Редагувати профіль', 'Змінити пароль', 'Налаштування'].map((l, i) => (
                            <div key={i} className="h-10 rounded-xl bg-white/5 border border-beige-500/15 px-4 flex items-center justify-between">
                              <span className="text-xs text-beige-300/80">{l}</span>
                              <ChevronRight className="w-3.5 h-3.5 text-beige-500/50" />
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                    {activeScreen === 'donation' && (
                      <motion.div
                        key="donation"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <div className="text-beige-400 font-mono text-[10px] uppercase">Донат</div>
                        <div className="space-y-2">
                          <div className="p-4 rounded-xl bg-beige-500/10 border border-beige-500/20 flex items-center gap-3">
                            <Heart className="w-5 h-5 text-beige-500" />
                            <div>
                              <div className="text-xs text-beige-200">Підрозділ</div>
                              <div className="text-[10px] text-beige-500/60">Донат на підрозділ</div>
                            </div>
                          </div>
                          <div className="p-4 rounded-xl bg-white/5 border border-beige-500/15 flex items-center gap-3">
                            <Heart className="w-5 h-5 text-beige-500/60" />
                            <div>
                              <div className="text-xs text-beige-300/80">Волонтерський фонд</div>
                              <div className="text-[10px] text-beige-500/50">Донат на фонд</div>
                            </div>
                          </div>
                        </div>
                        <div className="h-11 rounded-xl bg-white/5 border border-beige-500/20 px-4 flex items-center justify-between">
                          <span className="text-beige-200/80 text-sm">Сума</span>
                          <span className="text-beige-400">₴500</span>
                        </div>
                        <button className="w-full h-12 rounded-xl bg-beige-500/30 border border-beige-500/40 text-beige-300 font-medium text-sm">
                          Підтвердити донат
                        </button>
                      </motion.div>
                    )}
                    {activeScreen === 'history' && (
                      <motion.div
                        key="history"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3"
                      >
                        <div className="text-beige-400 font-mono text-[10px] uppercase mb-2">Історія операцій</div>
                        <div className="space-y-2">
                          {[
                            { t: '+₴8,000', d: 'Бойові виплати', time: 'Сьогодні 09:00' },
                            { t: '-₴2,000', d: 'Переказ родині', time: 'Вчора 18:32' },
                            { t: '-₴500', d: 'Донат підрозділ', time: 'Вчора 14:15' },
                            { t: '+₴5,000', d: 'Поповнення', time: '15.03 12:00' },
                          ].map((r, i) => (
                            <div key={i} className="p-3 rounded-xl bg-white/5 border border-beige-500/10 flex justify-between items-center">
                              <div>
                                <div className={`text-xs font-medium ${r.t.startsWith('+') ? 'text-beige-400' : 'text-beige-300/80'}`}>{r.t}</div>
                                <div className="text-[10px] text-beige-500/60">{r.d}</div>
                              </div>
                              <div className="text-[9px] text-beige-500/50">{r.time}</div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                    {activeScreen === 'error' && (
                      <motion.div
                        key="error"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.25 }}
                        className="flex flex-col items-center justify-center py-16 gap-6"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                          className="w-16 h-16 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center"
                        >
                          <AlertCircle className="w-8 h-8 text-red-500" />
                        </motion.div>
                        <div className="text-beige-300 text-sm font-medium text-center">Помилка з'єднання</div>
                        <div className="text-beige-500/70 text-xs text-center">Сервер тимчасово недоступний. Спробуйте пізніше.</div>
                        <button className="px-6 py-2 rounded-lg bg-beige-500/20 border border-beige-500/30 text-beige-300 text-xs">
                          Повторити
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Desktop mockup */}
          <motion.div
            layout
            className="w-full max-w-xl"
          >
            <div className="aspect-[16/10] bg-graphite-light border border-beige-500/20 rounded-xl overflow-hidden glow-beige soft-glow card-inner-glow">
              <div className="h-10 border-b border-beige-500/10 bg-[#0a0908] flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-beige-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-beige-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-beige-500/20" />
                <span className="ml-4 font-mono text-[9px] text-beige-500/60">army-bank.local</span>
              </div>
              <div className="p-4 h-[calc(100%-2.5rem)] flex gap-4">
                <div className="w-32 shrink-0 space-y-1">
                  {['Головна', 'Рахунки', 'Перекази', 'Історія'].map((item, i) => (
                    <div
                      key={i}
                      className={`h-8 rounded-lg px-3 flex items-center font-mono text-[10px] ${
                        i === 0 ? 'bg-beige-500/15 text-beige-400 border border-beige-500/20' : 'text-beige-500/50 hover:bg-white/5'
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="flex-1 min-w-0">
                  <AnimatePresence mode="wait">
                    {activeScreen === 'login' && (
                      <motion.div key="d-login" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4 p-4">
                        <div className="text-beige-400 font-mono text-[10px] uppercase">Вхід</div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="h-9 rounded-lg bg-white/5 border border-beige-500/15" />
                          <div className="h-9 rounded-lg bg-white/5 border border-beige-500/15" />
                        </div>
                        <div className="h-9 w-24 rounded-lg bg-beige-500/20 border border-beige-500/30" />
                      </motion.div>
                    )}
                    {(activeScreen === 'balance' || activeScreen === 'transfer' || activeScreen === 'donation' || activeScreen === 'history' || activeScreen === 'profile' || activeScreen === 'loading' || activeScreen === 'success' || activeScreen === 'error') && (
                      <motion.div key="d-dash" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4 p-4">
                        <div className="grid grid-cols-3 gap-3">
                          {['Баланс', 'Бойові', 'Родині'].map((l, i) => (
                            <div key={i} className="h-16 rounded-lg bg-white/5 border border-beige-500/10 p-3">
                              <div className="text-beige-500/50 text-[9px] uppercase">{l}</div>
                              <div className="text-beige-300 text-sm font-serif">₴{i === 0 ? '12,450' : i === 1 ? '8,000' : '2,000'}</div>
                            </div>
                          ))}
                        </div>
                        <div className="h-24 rounded-lg bg-white/5 border border-beige-500/10 p-3">
                          <div className="text-beige-500/50 text-[9px] uppercase mb-2">Останні операції</div>
                          <div className="space-y-1 text-[10px] text-beige-300/80">
                            <div>+₴8,000 Бойові виплати</div>
                            <div>-₴2,000 Переказ родині</div>
                          </div>
                        </div>
                        {activeScreen === 'loading' && (
                          <div className="flex items-center gap-2 text-beige-500/70 text-xs">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Обробка...
                          </div>
                        )}
                        {activeScreen === 'success' && (
                          <div className="flex items-center gap-2 text-beige-500 text-xs">
                            <CheckCircle className="w-4 h-4" />
                            Операцію виконано
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4 text-beige-500/50 text-xs font-mono">
          <Smartphone className="w-4 h-4" />
          <span>Мобільний інтерфейс</span>
          <span className="text-beige-500/30">|</span>
          <Monitor className="w-4 h-4" />
          <span>Десктоп панель</span>
        </div>
      </div>
    </section>
  );
};
