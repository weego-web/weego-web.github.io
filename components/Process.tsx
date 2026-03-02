
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { GitCommit, Server, Layers, Package, Cpu, Zap } from 'lucide-react';

export const Process: React.FC = () => {
  const { t } = useLanguage();
  const { pipeline, modules, heading, subheading, footerQuote } = t.process;

  return (
    <section className="w-full py-24 md:py-32 bg-weego-black text-weego-white border-b border-white/10">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20 md:mb-32">
          <span className="font-mono text-xs text-weego-lime uppercase tracking-[0.3em] mb-4 block">
            {subheading}
          </span>
          <h2 className="font-display text-5xl md:text-8xl font-black uppercase tracking-tighter">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Pipeline - Simple List */}
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-12 border-b border-white/10 pb-4">
              // {pipeline.title}
            </h3>
            <div className="space-y-12">
              {pipeline.steps.map((step, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-baseline gap-6">
                    <span className="font-display text-4xl font-black text-weego-lime/30 group-hover:text-weego-lime transition-colors">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="font-display text-2xl md:text-3xl uppercase font-black mb-2">
                        {step.title}
                      </h4>
                      <p className="font-sans text-gray-400 text-sm uppercase tracking-wider">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Schematic - Clean Grid */}
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-12 border-b border-white/10 pb-4">
              // {modules.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {modules.items.map((mod, idx) => (
                <div key={idx} className="border-l border-white/10 pl-6 py-2">
                  <h4 className="font-display text-lg uppercase font-black mb-4 text-weego-lime">
                    {mod.title}
                  </h4>
                  <ul className="space-y-2">
                    {mod.content.map((item, i) => (
                      <li key={i} className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                        — {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="mt-32 pt-12 border-t border-white/10">
          <p className="font-mono text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.3em] text-center">
            {footerQuote}
          </p>
        </div>
      </div>
    </section>
  );
};
