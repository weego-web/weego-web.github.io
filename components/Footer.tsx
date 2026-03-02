
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { LegalModal } from './LegalModal';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [activeLegal, setActiveLegal] = useState<'imprint' | 'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-weego-black text-weego-white border-t-2 border-weego-lime pt-20 pb-12 px-6 relative overflow-hidden">
      
      {/* Legal Modals */}
      <LegalModal 
        isOpen={activeLegal === 'imprint'} 
        onClose={() => setActiveLegal(null)} 
        title={t.legal.imprint.title}
        content={t.legal.imprint.content}
        type="imprint"
      />
      <LegalModal 
        isOpen={activeLegal === 'privacy'} 
        onClose={() => setActiveLegal(null)} 
        title={t.legal.privacy.title}
        content={t.legal.privacy.content}
        type="privacy"
      />
      <LegalModal 
        isOpen={activeLegal === 'terms'} 
        onClose={() => setActiveLegal(null)} 
        title={t.legal.terms.title}
        content={t.legal.terms.content}
        type="terms"
      />

      <div className="max-w-[1400px] mx-auto">
        
        {/* Massive Logo */}
        <div className="mb-20 text-center md:text-left">
            <h2 className="font-display font-black text-[18vw] leading-[0.7] tracking-tighter text-weego-lime opacity-90 select-none">
                WEEGO
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 border-t border-weego-gray pt-12">
            
            {/* Column 1: Info */}
            <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
                <a href="mailto:munister@outlook.com" className="font-display text-[10px] md:text-xs uppercase tracking-wide hover:text-weego-lime transition-colors whitespace-nowrap">munister@outlook.com</a>
                <p className="font-sans text-gray-400">Lviv, Ukraine <br/> Remote Worldwide</p>
            </div>

            {/* Column 2: Socials */}
            <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                <div className="flex flex-col gap-2 items-center md:items-start">
                    <a href="https://instagram.com/vmunister" target="_blank" rel="noopener noreferrer" className="font-sans text-lg uppercase hover:text-weego-lime hover:translate-x-2 transition-all duration-300">
                        Instagram
                    </a>
                    <a href="https://t.me/vyanetto1" target="_blank" rel="noopener noreferrer" className="font-sans text-lg uppercase hover:text-weego-lime hover:translate-x-2 transition-all duration-300">
                        Telegram
                    </a>
                    <a href="https://wa.me/380683642205" target="_blank" rel="noopener noreferrer" className="font-sans text-lg uppercase hover:text-weego-lime hover:translate-x-2 transition-all duration-300">
                        WhatsApp
                    </a>
                </div>
            </div>

            {/* Column 3: Legal */}
            <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                <button onClick={() => setActiveLegal('imprint')} className="text-center md:text-left font-sans text-sm uppercase hover:text-weego-lime transition-colors">Imprint</button>
                <button onClick={() => setActiveLegal('privacy')} className="text-center md:text-left font-sans text-sm uppercase hover:text-weego-lime transition-colors">Privacy Policy</button>
                <button onClick={() => setActiveLegal('terms')} className="text-center md:text-left font-sans text-sm uppercase hover:text-weego-lime transition-colors">Terms of Service</button>
            </div>

             {/* Column 4: Copyright */}
             <div className="flex flex-col justify-between h-full items-center md:items-start text-center md:text-left">
                <div>
                     <p className="font-mono text-xs uppercase tracking-widest text-gray-600">
                        © {new Date().getFullYear()} WEEGO STUDIO. <br/>
                        {t.footer.rights}
                    </p>
                    <p className="font-mono text-xs uppercase text-weego-lime mt-2">
                        {t.footer.designedBy}
                    </p>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};
