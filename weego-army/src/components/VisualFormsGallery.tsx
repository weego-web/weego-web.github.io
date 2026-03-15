import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FormInput, CreditCard, FileText, ToggleLeft } from 'lucide-react';

const FORMS = [
  { id: 'login', icon: FormInput, title: 'Форма входу', fields: ['Телефон', 'Пароль', 'Біометрія'] },
  { id: 'transfer', icon: CreditCard, title: 'Переказ', fields: ['Отримувач', 'Сума', 'Коментар'] },
  { id: 'profile', icon: FileText, title: 'Профіль', fields: ['ПІБ', 'Email', 'Адреса'] },
  { id: 'settings', icon: ToggleLeft, title: 'Налаштування', fields: ['Push', 'Біометрія', 'PIN'] },
];

export const VisualFormsGallery = () => {
  const [activeForm, setActiveForm] = useState(0);

  return (
    <section className="py-32 relative border-t border-beige-500/20 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-25" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-beige-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-[10px] text-beige-400 uppercase tracking-widest mb-4">15 // Visual Forms</div>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-beige-100">
            Галерея форм.
          </h2>
          <p className="text-lg text-beige-300/70">
            Різні типи форм — від логіну до налаштувань. Валідація, placeholder, стани.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form selector */}
          <div className="space-y-4">
            {FORMS.map((form, i) => (
              <button
                key={form.id}
                onClick={() => setActiveForm(i)}
                className={`w-full p-5 rounded-2xl border text-left flex items-center gap-4 transition-all ${
                  activeForm === i
                    ? 'border-beige-500/40 bg-beige-500/10'
                    : 'border-beige-500/15 hover:border-beige-500/25 bg-graphite-light/50'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  activeForm === i ? 'bg-beige-500/25 text-beige-400' : 'bg-beige-500/10 text-beige-500/70'
                }`}>
                  <form.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono font-medium text-beige-200">{form.title}</div>
                  <div className="text-xs text-beige-500/60">{form.fields.join(' · ')}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Form preview */}
          <motion.div
            key={activeForm}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="p-8 rounded-2xl border border-beige-500/20 bg-graphite-light"
          >
            <div className="font-mono text-[10px] text-beige-500/70 uppercase mb-6">{FORMS[activeForm].title}</div>
            <div className="space-y-5">
              {FORMS[activeForm].fields.map((field, i) => (
                <div key={i} className="space-y-2">
                  <label className="text-xs text-beige-500/70 font-mono">{field}</label>
                  <div className="h-12 rounded-xl bg-white/5 border border-beige-500/20 px-4 flex items-center text-beige-300/80">
                    {i === 0 && activeForm === 1 ? 'UA1234 5678 9012 3456' : ''}
                    {i === 0 && activeForm === 2 ? 'Іван Петренко' : ''}
                    {i === 0 && activeForm === 3 ? 'Увімкнено' : ''}
                  </div>
                </div>
              ))}
              <div className="flex gap-3 pt-4">
                <button className="flex-1 py-3 rounded-xl bg-beige-500/25 border border-beige-500/40 text-beige-200 font-medium text-sm">
                  Зберегти
                </button>
                <button className="px-6 py-3 rounded-xl border border-beige-500/20 text-beige-400/80 text-sm">
                  Скасувати
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mini form states */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Default', 'Focused', 'Filled', 'Error'].map((state, i) => (
            <div key={i} className="p-4 rounded-xl border border-beige-500/15 bg-graphite-light/50">
              <div className="text-[10px] text-beige-500/60 mb-2 font-mono">{state}</div>
              <div className={`h-10 rounded-lg border px-3 flex items-center text-xs ${
                state === 'Focused' ? 'border-beige-500/50 ring-2 ring-beige-500/20' :
                state === 'Filled' ? 'border-beige-500/30 bg-beige-500/5 text-beige-300' :
                state === 'Error' ? 'border-red-500/40 bg-red-500/5 text-red-400/90' :
                'border-beige-500/20 bg-white/5 text-beige-500/50'
              }`}>
                {state === 'Filled' ? '₴2,000' : state === 'Error' ? 'Некоректна сума' : 'Placeholder'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
