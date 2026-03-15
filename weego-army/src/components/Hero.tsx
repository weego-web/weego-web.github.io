import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Wallet, Zap, Smartphone } from 'lucide-react';

export const Hero = () => {
  const titleText = "Digital Army ";
  const titleHighlight = "Bank";

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 font-mono text-[10px] uppercase tracking-widest mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            MVP для військовослужбовців
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-serif mb-6 leading-tight flex justify-center flex-wrap">
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
            className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Армійський банк — backend банківського застосунку для військовослужбовців. Не «великий банк», а спеціалізований мобільний банкінг для захисників.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#features" className="px-8 py-4 bg-amber-500 text-graphite font-medium rounded-none hover:bg-amber-400 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center group">
              Детальніше
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="mailto:munister@outlook.com?subject=[Army%20Bank]%20Запит" className="px-8 py-4 bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 transition-colors w-full sm:w-auto justify-center">
              Обговорити проєкт
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, type: "spring" }}
          className="mt-24 relative mx-auto max-w-5xl"
        >
          <div className="aspect-[16/9] bg-graphite-light border border-white/10 rounded-xl overflow-hidden glow-amber relative group">
            <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1200" alt="Banking Backend" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/50 to-transparent" />
            
            <div className="absolute top-0 inset-x-0 h-8 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2 backdrop-blur-md">
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <div className="ml-4 font-mono text-[10px] text-white/40 uppercase tracking-wider">army-bank-api.local</div>
            </div>
            
            <div className="p-8 pt-16 h-full flex flex-col relative z-10">
              <div className="flex gap-6 h-full">
                <div className="w-48 border-r border-white/10 flex flex-col gap-4 pr-6">
                  <div className="h-8 rounded bg-amber-500/20 border border-amber-500/30 flex items-center px-3 gap-2 text-amber-500 font-mono text-xs"><Wallet className="w-3 h-3"/> Accounts</div>
                  <div className="h-8 rounded bg-white/5 flex items-center px-3 gap-2 text-white/50 font-mono text-xs"><Zap className="w-3 h-3"/> Transfers</div>
                  <div className="h-8 rounded bg-white/5 flex items-center px-3 gap-2 text-white/50 font-mono text-xs"><Shield className="w-3 h-3"/> Security</div>
                </div>
                <div className="flex-1 flex flex-col gap-6">
                  <div className="flex gap-4">
                    <div className="h-24 flex-1 bg-white/10 backdrop-blur-md rounded border border-white/20 p-4 flex flex-col justify-between">
                      <div className="text-white/50 font-mono text-[10px] uppercase">Balance</div>
                      <div className="text-2xl font-serif">₴12,450 <span className="text-amber-500 text-sm font-sans ml-2">active</span></div>
                    </div>
                    <div className="h-24 flex-1 bg-white/10 backdrop-blur-md rounded border border-white/20 p-4 flex flex-col justify-between">
                      <div className="text-white/50 font-mono text-[10px] uppercase">Combat Pay</div>
                      <div className="text-2xl font-serif text-amber-500">₴8,000</div>
                    </div>
                    <div className="h-24 flex-1 bg-white/10 backdrop-blur-md rounded border border-white/20 p-4 flex flex-col justify-between">
                      <div className="text-white/50 font-mono text-[10px] uppercase">Family Transfer</div>
                      <div className="text-2xl font-serif">₴2,000</div>
                    </div>
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-md rounded border border-white/20 p-6">
                    <div className="font-mono text-[10px] text-white/50 uppercase mb-4">Recent Transactions</div>
                    <div className="space-y-2">
                      {['Combat pay +₴8,000', 'Transfer to family -₴2,000', 'Donation -₴500'].map((t, i) => (
                        <div key={i} className="h-8 bg-white/5 rounded flex items-center px-3 font-mono text-xs text-white/70">{t}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -right-8 -bottom-12 w-64 h-[500px] bg-graphite border border-white/20 rounded-[2rem] shadow-2xl overflow-hidden hidden lg:block"
          >
            <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=600" alt="Mobile Banking" className="absolute inset-0 w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-b from-graphite/40 via-transparent to-graphite" />
            <div className="absolute top-0 inset-x-0 h-6 bg-black flex justify-center items-end pb-1 z-20">
              <div className="w-20 h-4 bg-graphite rounded-b-xl" />
            </div>
            <div className="p-4 pt-12 h-full flex flex-col gap-4 relative z-10">
              <div className="h-32 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 flex flex-col justify-end">
                <div className="text-white font-serif text-lg">Баланс</div>
                <div className="text-amber-500 font-mono text-xl">₴12,450</div>
              </div>
              <div className="flex gap-2">
                <div className="h-10 flex-1 bg-amber-500 text-graphite font-medium text-xs flex items-center justify-center rounded-full">Родині</div>
                <div className="h-10 flex-1 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white/50 text-xs">Донат</div>
              </div>
              <div className="flex-1 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4">
                <div className="font-mono text-[10px] text-white/50 uppercase mb-2">Останні операції</div>
                <div className="space-y-2">
                  <div className="h-6 bg-white/5 rounded" />
                  <div className="h-6 bg-white/5 rounded w-3/4" />
                  <div className="h-6 bg-white/5 rounded w-1/2" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
          {[
            { icon: Shield, label: "Безпека", desc: "Захист даних військових" },
            { icon: Wallet, label: "Рахунки", desc: "Створення та управління" },
            { icon: Zap, label: "Швидкі перекази", desc: "Родині та волонтерам" },
            { icon: Smartphone, label: "Мобільний-first", desc: "Працює в польових умовах" }
          ].map((tech, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-500">
                <tech.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-wider text-white">{tech.label}</div>
                <div className="text-sm text-white/40 mt-1">{tech.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
