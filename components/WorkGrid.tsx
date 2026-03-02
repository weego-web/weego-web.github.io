
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { WorkItem } from '../types';
import { X, ArrowUpRight, Crosshair, Layers, Lock } from 'lucide-react';

export const WorkGrid: React.FC = () => {
  const { t } = useLanguage();
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    if (selectedWork) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => setIsContentVisible(true), 100);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = 'unset';
      setIsContentVisible(false);
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedWork]);

  return (
    <section id="work" className="w-full py-24 md:py-32 px-6 bg-weego-white text-weego-black relative">
      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 md:mb-32 gap-6">
          <h2 className="font-display text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            {t.works.heading}
          </h2>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-gray-400">
            {t.works.subheading}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {t.works.items.map((work, index) => (
            <div 
              key={work.id} 
              className="group cursor-pointer"
              onClick={() => setSelectedWork(work)}
            >
              <div className="relative overflow-hidden aspect-[16/10] bg-gray-100 mb-8 group">
                <img 
                  src={work.image} 
                  alt={work.client} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-overlay" />
                <div className="absolute inset-0 noise-overlay opacity-20 pointer-events-none" />
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[10px] text-gray-400">0{index + 1}</span>
                    <h3 className="font-display text-3xl md:text-4xl font-black uppercase tracking-tighter group-hover:text-weego-lime transition-colors">
                      {work.client}
                    </h3>
                  </div>
                  <p className="font-mono text-[10px] uppercase text-gray-500 tracking-widest pl-8">
                    {work.category}
                  </p>
                </div>
                <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simplified Modal */}
      {selectedWork && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
            <div 
                className="absolute inset-0 bg-black/90 backdrop-blur-sm" 
                onClick={() => setSelectedWork(null)} 
            />
            
            <div className={`relative bg-weego-white w-full max-w-6xl h-full md:h-auto md:max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row transition-all duration-500 ${isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                
                <button 
                    onClick={() => setSelectedWork(null)}
                    className="absolute top-6 right-6 z-50 p-2 bg-black text-white hover:bg-weego-lime hover:text-black transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="w-full md:w-1/2 h-[40vh] md:h-auto bg-gray-100">
                    <img 
                      src={selectedWork.image} 
                      alt={selectedWork.client} 
                      className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-full md:w-1/2 p-8 md:p-16 overflow-y-auto custom-scrollbar">
                    <div className="mb-12">
                      <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-4 block">
                        {selectedWork.year} // {selectedWork.category}
                      </span>
                      <h2 className="font-display text-5xl md:text-7xl uppercase font-black tracking-tighter leading-none mb-8">
                        {selectedWork.client}
                      </h2>
                      <p className="font-sans text-lg leading-relaxed text-gray-700 mb-12">
                        {selectedWork.description}
                      </p>

                      <div className="space-y-12">
                        <div>
                          <h4 className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">Before</h4>
                          <p className="font-sans text-sm text-gray-600 italic">{selectedWork.before}</p>
                        </div>
                        <div>
                          <h4 className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">Done</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {selectedWork.done.map(item => (
                              <li key={item} className="flex items-center gap-2 font-mono text-[10px] uppercase font-bold">
                                <div className="w-1 h-1 bg-weego-lime" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">Result</h4>
                          <p className="font-sans text-sm font-bold text-black">{selectedWork.result}</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-12 mb-12">
                      <div>
                        <h4 className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">Scope</h4>
                        <ul className="space-y-1">
                          {selectedWork.capabilities.map(cap => (
                            <li key={cap} className="font-mono text-[10px] font-bold uppercase">{cap}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">Tech</h4>
                        <ul className="space-y-1">
                          {selectedWork.stack.map(tech => (
                            <li key={tech} className="font-mono text-[10px] font-bold uppercase">{tech}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {selectedWork.projectUrl && (
                      <a 
                        href={selectedWork.projectUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 font-display text-xl uppercase font-black bg-black text-weego-lime px-8 py-4 hover:bg-weego-lime hover:text-black transition-all"
                      >
                        Launch Project <ArrowUpRight size={20} />
                      </a>
                    )}
                </div>
            </div>
        </div>
      )}
    </section>
  );
};
