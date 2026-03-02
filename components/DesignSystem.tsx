
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Grid, Type, CheckCircle, Smartphone } from 'lucide-react';

export const DesignSystem: React.FC = () => {
  const { t } = useLanguage();
  const ds = t.designSystem;
  const [activeFont, setActiveFont] = useState<'primary' | 'secondary' | null>(null);

  return (
    <section className="w-full py-24 bg-weego-gray text-weego-white border-b border-black/30">
      <div className="max-w-[1800px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 border-l-4 border-weego-lime pl-6">
             <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-2">
                {ds.heading}
             </h2>
             <span className="font-mono text-weego-lime tracking-widest uppercase">// {ds.subheading}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            
            {/* Typography Column */}
            <div>
                <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                    <Type className="text-weego-lime" />
                    <h3 className="font-mono text-xl uppercase tracking-widest">{ds.typography.title}</h3>
                </div>

                <div className="grid gap-12">
                    {/* Primary Font */}
                    <div 
                        className="group cursor-crosshair"
                        onMouseEnter={() => setActiveFont('primary')}
                        onMouseLeave={() => setActiveFont(null)}
                    >
                        <div className="flex justify-between items-baseline mb-2">
                            <span className="font-mono text-xs text-weego-lime uppercase">{ds.typography.primary.usage}</span>
                            <span className="font-mono text-xs text-gray-500 uppercase">Weight: 100-900</span>
                        </div>
                        <div className="bg-black p-8 border border-white/10 group-hover:border-weego-lime transition-colors relative overflow-hidden">
                            <span 
                                className={`font-display text-8xl md:text-[10rem] leading-none block mb-4 transition-all duration-700 ${activeFont === 'primary' ? 'font-black tracking-widest text-weego-lime' : 'font-thin text-white'}`}
                            >
                                Aa
                            </span>
                            <h4 className="font-display text-4xl font-bold uppercase mb-2">{ds.typography.primary.name}</h4>
                            <p className="font-sans text-gray-400 text-sm">{ds.typography.primary.description}</p>
                            
                            {/* Technical Grid Overlay on Hover */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-0 group-hover:opacity-20 pointer-events-none transition-opacity" />
                        </div>
                    </div>

                    {/* Secondary Font */}
                    <div 
                        className="group cursor-crosshair"
                        onMouseEnter={() => setActiveFont('secondary')}
                        onMouseLeave={() => setActiveFont(null)}
                    >
                        <div className="flex justify-between items-baseline mb-2">
                            <span className="font-mono text-xs text-weego-lime uppercase">{ds.typography.secondary.usage}</span>
                            <span className="font-mono text-xs text-gray-500 uppercase">Weight: 300-600</span>
                        </div>
                        <div className="bg-black p-8 border border-white/10 group-hover:border-weego-lime transition-colors">
                            <span 
                                className={`font-sans text-8xl md:text-[10rem] leading-none block mb-4 transition-all duration-500 ${activeFont === 'secondary' ? 'font-bold text-weego-lime italic' : 'font-light text-white'}`}
                            >
                                Aa
                            </span>
                            <h4 className="font-sans text-4xl font-medium uppercase mb-2">{ds.typography.secondary.name}</h4>
                            <p className="font-sans text-gray-400 text-sm">{ds.typography.secondary.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Standards Column */}
            <div>
                <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                    <Grid className="text-weego-lime" />
                    <h3 className="font-mono text-xl uppercase tracking-widest">{ds.standards.title}</h3>
                </div>

                <div className="grid gap-6">
                    {ds.standards.items.map((item, idx) => (
                        <div key={idx} className="bg-black/50 p-6 border-l-2 border-white/20 hover:border-weego-lime hover:bg-black transition-all duration-300 group">
                             <div className="flex justify-between items-start mb-2">
                                <h4 className="font-display text-2xl uppercase font-bold group-hover:translate-x-2 transition-transform">{item.title}</h4>
                                <span className="font-mono text-[10px] bg-weego-lime/10 text-weego-lime px-2 py-1 rounded-none">
                                    {item.code}
                                </span>
                             </div>
                             <p className="font-sans text-gray-400 leading-relaxed">
                                {item.desc}
                             </p>
                        </div>
                    ))}
                </div>

                {/* Visual Spec Box */}
                <div className="mt-12 p-6 border border-dashed border-gray-600 rounded-none flex justify-between items-center opacity-80 hover:opacity-100 transition-opacity">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-weego-black border border-white relative group cursor-pointer hover:scale-110 transition-transform">
                             <div className="absolute -bottom-6 left-0 text-[9px] font-mono opacity-0 group-hover:opacity-100 whitespace-nowrap">#050505</div>
                        </div>
                        <div className="w-12 h-12 bg-weego-white relative group cursor-pointer hover:scale-110 transition-transform">
                             <div className="absolute -bottom-6 left-0 text-[9px] font-mono opacity-0 group-hover:opacity-100 whitespace-nowrap">#F0F0F0</div>
                        </div>
                        <div className="w-12 h-12 bg-weego-lime relative group cursor-pointer hover:scale-110 transition-transform">
                             <div className="absolute -bottom-6 left-0 text-[9px] font-mono opacity-0 group-hover:opacity-100 whitespace-nowrap">#D4FF00</div>
                        </div>
                        <div className="w-12 h-12 bg-weego-gray relative group cursor-pointer hover:scale-110 transition-transform">
                             <div className="absolute -bottom-6 left-0 text-[9px] font-mono opacity-0 group-hover:opacity-100 whitespace-nowrap">#1A1A1A</div>
                        </div>
                    </div>
                    <span className="font-mono text-xs uppercase animate-pulse">PALETTE_V1.0</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
