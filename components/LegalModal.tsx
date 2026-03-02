
import React, { useEffect, useState } from 'react';
import { X, FileText, Shield, Scale } from 'lucide-react';

interface LegalModalProps {
  title: string;
  content: string[];
  isOpen: boolean;
  onClose: () => void;
  type: 'imprint' | 'privacy' | 'terms';
}

export const LegalModal: React.FC<LegalModalProps> = ({ title, content, isOpen, onClose, type }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Small delay for animation
      setTimeout(() => setIsVisible(true), 10);
    } else {
      document.body.style.overflow = 'unset';
      setIsVisible(false);
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen && !isVisible) return null;

  const Icon = type === 'privacy' ? Shield : type === 'terms' ? Scale : FileText;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-12 transition-all duration-300 ${isOpen ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent pointer-events-none'}`}>
        
        {/* Backdrop click to close */}
        <div className="absolute inset-0" onClick={onClose}></div>

        <div 
            className={`relative w-full max-w-4xl bg-weego-black border-2 border-white/20 shadow-2xl overflow-hidden flex flex-col h-full md:h-auto md:max-h-[85vh] transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}`}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-gray-900/50">
                <div className="flex items-center gap-3">
                    <Icon className="text-weego-lime" size={20} />
                    <h3 className="font-mono text-lg md:text-xl text-white uppercase tracking-widest">{title}</h3>
                </div>
                <button 
                    onClick={onClose}
                    className="group border border-white/30 p-2 hover:bg-weego-lime hover:border-weego-lime transition-colors"
                >
                    <X size={20} className="text-white group-hover:text-black transition-colors" />
                </button>
            </div>

            {/* Content Body */}
            <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar bg-black/95">
                <div className="font-mono text-xs text-gray-500 mb-8 uppercase tracking-widest">
                    // SYSTEM_FILE_READ_MODE <br/>
                    // ACCESS_LEVEL: PUBLIC
                </div>

                <div className="space-y-6">
                    {content.map((paragraph, idx) => (
                        <p key={idx} className="font-sans text-gray-300 leading-relaxed text-sm md:text-base border-l-2 border-weego-gray pl-4 hover:border-weego-lime hover:text-white transition-colors duration-300">
                            {paragraph}
                        </p>
                    ))}
                </div>

                <div className="mt-12 pt-8 border-t border-dashed border-gray-800 text-center">
                    <button 
                        onClick={onClose} 
                        className="font-mono text-xs text-weego-lime uppercase tracking-widest hover:underline"
                    >
                        [CLOSE_FILE]
                    </button>
                </div>
            </div>

            {/* Decorative Footer Bar */}
            <div className="bg-weego-lime h-2 w-full shrink-0" />
        </div>
    </div>
  );
};
