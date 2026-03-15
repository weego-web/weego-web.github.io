import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Send } from 'lucide-react';

const EMAIL = 'munister@outlook.com';

export const CTA = () => {
  const [lang, setLang] = useState<'uk' | 'en'>('uk');
  const [showForm, setShowForm] = useState(false);

  const content = {
    uk: {
      title: "Готові обговорити?",
      desc: "MVP Digital Army Bank — backend для банківського застосунку військовослужбовців. Python + JavaScript. Напишіть нам.",
      btnPrimary: "Написати",
      formName: "Ім'я",
      formEmail: "Email",
      formMessage: "Опис проєкту або запит",
      formSubmit: "Надіслати"
    },
    en: {
      title: "Ready to discuss?",
      desc: "MVP Digital Army Bank — backend for military banking app. Python + JavaScript. Contact us.",
      btnPrimary: "Contact",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Project description or request",
      formSubmit: "Send"
    }
  };

  const t = content[lang];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.querySelector('#army-name') as HTMLInputElement)?.value ?? '';
    const email = (form.querySelector('#army-email') as HTMLInputElement)?.value ?? '';
    const message = (form.querySelector('#army-message') as HTMLTextAreaElement)?.value ?? '';
    const subject = encodeURIComponent(`[Army Bank] ${name || 'Request'}`);
    const body = encodeURIComponent([name && `Name: ${name}`, email && `Email: ${email}`, message].filter(Boolean).join('\n\n'));
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-32 relative border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-beige-500/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-beige-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
        <h2 className="text-5xl md:text-7xl font-serif mb-8">
          {t.title}
        </h2>
        <p className="text-xl text-white/60 font-light max-w-2xl mx-auto mb-12">{t.desc}</p>
        
        {!showForm ? (
          <button 
            onClick={() => setShowForm(true)}
            className="px-8 py-4 bg-beige-500 text-graphite font-medium rounded-none hover:bg-beige-400 transition-colors flex items-center gap-2 mx-auto"
          >
            {t.btnPrimary}
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left backdrop-blur-md"
          >
            <div className="space-y-6 mb-6">
              <div className="relative">
                <input type="text" id="army-name" name="name" placeholder=" " className="w-full bg-transparent border-b border-white/20 pt-5 pb-3 text-base text-white focus:outline-none focus:border-beige-500 peer placeholder-transparent" />
                <label htmlFor="army-name" className="absolute left-0 top-0 text-[10px] font-mono uppercase tracking-widest text-white/50 transition-all pointer-events-none peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-beige-500">{t.formName}</label>
              </div>
              <div className="relative">
                <input type="email" id="army-email" name="email" placeholder=" " required className="w-full bg-transparent border-b border-white/20 pt-5 pb-3 text-base text-white focus:outline-none focus:border-beige-500 peer placeholder-transparent" />
                <label htmlFor="army-email" className="absolute left-0 top-0 text-[10px] font-mono uppercase tracking-widest text-white/50 transition-all pointer-events-none peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-beige-500">{t.formEmail}</label>
              </div>
              <div className="relative">
                <textarea id="army-message" name="message" placeholder=" " rows={4} className="w-full bg-transparent border-b border-white/20 pt-5 pb-3 text-base text-white focus:outline-none focus:border-beige-500 peer placeholder-transparent resize-y min-h-[100px]" />
                <label htmlFor="army-message" className="absolute left-0 top-0 text-[10px] font-mono uppercase tracking-widest text-white/50 transition-all pointer-events-none peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-beige-500">{t.formMessage}</label>
              </div>
            </div>
            <div className="flex gap-4">
              <button type="submit" className="flex-1 px-8 py-4 bg-beige-500 text-graphite font-medium rounded-none hover:bg-beige-400 transition-colors flex items-center justify-center gap-2">
                {t.formSubmit}
                <Send className="w-4 h-4" />
              </button>
              <button type="button" onClick={() => setShowForm(false)} className="px-6 py-4 text-white/60 font-mono text-sm hover:text-white transition-colors">←</button>
            </div>
          </motion.form>
        )}
        
        <div className="mt-16 font-mono text-[10px] text-white/40 uppercase tracking-widest">
          © {new Date().getFullYear()} WeeGo Digital Studio
        </div>
      </div>
    </section>
  );
};
