import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Wallet, Zap, Smartphone, Heart, Send, PiggyBank } from 'lucide-react';

const QUICK_ACTIONS = [
  { id: 'family', icon: Send, label: 'Родині', color: 'amber' },
  { id: 'donate', icon: Heart, label: 'Донат', color: 'white' },
  { id: 'savings', icon: PiggyBank, label: 'Накопичення', color: 'white' },
];

const TRANSACTIONS = [
  { type: 'in', text: 'Бойові виплати +₴8,000', time: 'Сьогодні 09:00' },
  { type: 'out', text: 'Переказ родині -₴2,000', time: 'Вчора 18:32' },
  { type: 'out', text: 'Донат на підрозділ -₴500', time: 'Вчора 14:15' },
  { type: 'in', text: 'Поповнення +₴5,000', time: '15.03 12:00' },
];

export const Hero = () => {
  const [activeAction, setActiveAction] = useState<string | null>(null);
  const titleText = "Digital Army ";
  const titleHighlight = "Bank";

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-amber-500/5 rounded-full blur-[60px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 font-mono text-[10px] uppercase tracking-widest mb-6 sm:mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            MVP для військовослужбовців
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight flex justify-center flex-wrap gap-x-1">
            {titleText.split('').map((char, i) => (
              <motion.span 
                key={i} 
                initial={{ opacity: 0, y: 40 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: i * 0.05, type: "spring", stiffness: 100 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <motion.span 
              initial={{ opacity: 0, filter: 'blur(20px)', scale: 0.8 }} 
              animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }} 
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }} 
              className="italic text-amber-500 text-glow"
            >
              {titleHighlight}
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed px-2"
          >
            Армійський банк — backend банківського застосунку для військовослужбовців. Не «великий банк», а спеціалізований мобільний банкінг для захисників.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <a href="#features" className="px-6 sm:px-8 py-3.5 sm:py-4 bg-amber-500 text-graphite font-medium rounded-none hover:bg-amber-400 transition-all flex items-center gap-2 w-full sm:w-auto justify-center group hover:scale-[1.02] active:scale-[0.98]">
              Детальніше
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="mailto:munister@outlook.com?subject=[Army%20Bank]%20Запит" className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 hover:border-amber-500/30 transition-all w-full sm:w-auto justify-center">
              Обговорити проєкт
            </a>
          </motion.div>
        </div>

        {/* Desktop + Mobile mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, type: "spring" }}
          className="mt-16 sm:mt-20 lg:mt-24 relative mx-auto max-w-6xl"
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
            {/* Desktop dashboard */}
            <div className="w-full max-w-4xl">
              <div className="aspect-[16/10] sm:aspect-[16/9] bg-graphite-light border border-white/10 rounded-xl overflow-hidden glow-amber relative group hover:border-amber-500/20 transition-colors duration-500">
                <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1200" alt="Banking Backend" className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-35 transition-opacity duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/60 to-transparent" />
                
                <div className="absolute top-0 inset-x-0 h-10 sm:h-12 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2 backdrop-blur-md">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="ml-4 font-mono text-[10px] text-white/40 uppercase tracking-wider">army-bank-api.local</div>
                </div>
                
                <div className="p-4 sm:p-6 md:p-8 pt-14 sm:pt-16 h-full flex flex-col relative z-10">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 h-full">
                    <div className="hidden sm:flex w-40 lg:w-48 border-r border-white/10 flex-col gap-3 pr-4 lg:pr-6 shrink-0">
                      <div className="h-9 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center px-3 gap-2 text-amber-500 font-mono text-xs"><Wallet className="w-3.5 h-3.5"/> Accounts</div>
                      <div className="h-9 rounded-lg bg-white/5 flex items-center px-3 gap-2 text-white/50 font-mono text-xs hover:bg-white/10 transition-colors cursor-pointer"><Zap className="w-3.5 h-3.5"/> Transfers</div>
                      <div className="h-9 rounded-lg bg-white/5 flex items-center px-3 gap-2 text-white/50 font-mono text-xs hover:bg-white/10 transition-colors cursor-pointer"><Shield className="w-3.5 h-3.5"/> Security</div>
                    </div>
                    <div className="flex-1 flex flex-col gap-4 sm:gap-6 min-w-0">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                        <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-3 sm:p-4 flex flex-col justify-between min-h-[72px] sm:min-h-[96px]">
                          <div className="text-white/50 font-mono text-[9px] sm:text-[10px] uppercase">Balance</div>
                          <div className="text-lg sm:text-xl md:text-2xl font-serif">₴12,450 <span className="text-amber-500 text-xs sm:text-sm font-sans ml-1">active</span></div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-3 sm:p-4 flex flex-col justify-between min-h-[72px] sm:min-h-[96px]">
                          <div className="text-white/50 font-mono text-[9px] sm:text-[10px] uppercase">Combat Pay</div>
                          <div className="text-lg sm:text-xl md:text-2xl font-serif text-amber-500">₴8,000</div>
                        </div>
                        <div className="col-span-2 sm:col-span-1 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-3 sm:p-4 flex flex-col justify-between min-h-[72px] sm:min-h-[96px]">
                          <div className="text-white/50 font-mono text-[9px] sm:text-[10px] uppercase">Family</div>
                          <div className="text-lg sm:text-xl md:text-2xl font-serif">₴2,000</div>
                        </div>
                      </div>
                      <div className="flex-1 bg-white/5 backdrop-blur-md rounded-lg border border-white/20 p-4 sm:p-6 min-h-[140px]">
                        <div className="font-mono text-[9px] sm:text-[10px] text-white/50 uppercase mb-3">Recent Transactions</div>
                        <div className="space-y-2">
                          {TRANSACTIONS.map((t, i) => (
                            <div key={i} className="h-9 sm:h-10 bg-white/5 rounded-lg flex items-center justify-between px-3 font-mono text-xs text-white/80 hover:bg-white/10 transition-colors cursor-default">
                              <span className={t.type === 'in' ? 'text-amber-500' : 'text-white/70'}>{t.text}</span>
                              <span className="text-white/40 text-[10px]">{t.time}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile mockup - visible on all screens */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="relative w-[280px] sm:w-[300px] lg:w-[320px] shrink-0"
            >
              <div className="relative aspect-[9/19] bg-graphite border-2 border-white/20 rounded-[2.5rem] shadow-2xl overflow-hidden">
                <div className="absolute inset-0 rounded-[2.25rem] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=600" alt="Mobile" className="absolute inset-0 w-full h-full object-cover opacity-40" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-b from-graphite/50 via-transparent to-graphite/80" />
                </div>
                <div className="absolute top-0 inset-x-0 h-8 bg-black/80 flex justify-center items-end pb-2 z-20">
                  <div className="w-24 h-5 bg-graphite rounded-b-2xl border border-white/10" />
                </div>
                <div className="relative z-10 p-4 pt-14 h-full flex flex-col gap-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-5 flex flex-col gap-1">
                    <div className="text-white/60 font-mono text-[10px] uppercase">Баланс</div>
                    <div className="text-2xl sm:text-3xl font-serif text-amber-500">₴12,450</div>
                    <div className="text-white/40 text-[10px]">UA1234...3456</div>
                  </div>
                  <div className="flex gap-2">
                    {QUICK_ACTIONS.map((a) => (
                      <button
                        key={a.id}
                        onMouseEnter={() => setActiveAction(a.id)}
                        onMouseLeave={() => setActiveAction(null)}
                        className={`flex-1 h-11 rounded-xl flex flex-col items-center justify-center gap-0.5 transition-all duration-300 ${
                          activeAction === a.id 
                            ? 'bg-amber-500/30 border-amber-500/50 scale-105' 
                            : a.color === 'amber' 
                              ? 'bg-amber-500/20 border border-amber-500/30' 
                              : 'bg-white/10 border border-white/20 hover:bg-white/15'
                        }`}
                      >
                        <a.icon className={`w-4 h-4 ${a.color === 'amber' || activeAction === a.id ? 'text-amber-500' : 'text-white/70'}`} />
                        <span className="text-[10px] font-mono text-white/80">{a.label}</span>
                      </button>
                    ))}
                  </div>
                  <div className="flex-1 bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 p-4 min-h-[120px]">
                    <div className="font-mono text-[9px] text-white/50 uppercase mb-2">Останні операції</div>
                    <div className="space-y-2">
                      {TRANSACTIONS.slice(0, 3).map((t, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                          <span className={`text-xs ${t.type === 'in' ? 'text-amber-500' : 'text-white/70'}`}>{t.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats row */}
        <div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 border-t border-white/10 pt-12">
          {[
            { icon: Shield, label: "Безпека", desc: "Захист даних військових" },
            { icon: Wallet, label: "Рахунки", desc: "Створення та управління" },
            { icon: Zap, label: "Швидкі перекази", desc: "Родині та волонтерам" },
            { icon: Smartphone, label: "Мобільний-first", desc: "Працює в польових умовах" }
          ].map((tech, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-3 group cursor-default"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-colors duration-300">
                <tech.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="font-mono text-xs sm:text-sm uppercase tracking-wider text-white">{tech.label}</div>
                <div className="text-xs sm:text-sm text-white/40 mt-1">{tech.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
