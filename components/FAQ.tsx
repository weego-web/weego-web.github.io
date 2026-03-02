
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-24 md:py-32 bg-weego-black">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter text-weego-white">
            {t.faq.heading}
          </h2>
        </div>

        <div className="space-y-4">
          {t.faq.items.map((item, idx) => (
            <div 
              key={idx} 
              className="border border-white/10 bg-weego-gray/10 overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-display text-xl md:text-2xl font-bold text-white uppercase tracking-tight">
                  {item.q}
                </span>
                <div className={`transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-weego-lime' : 'text-gray-500'}`}>
                  {openIndex === idx ? <Minus size={24} /> : <Plus size={24} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 md:px-8 pb-8 text-gray-400 font-sans text-lg leading-relaxed border-t border-white/5 pt-6">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
