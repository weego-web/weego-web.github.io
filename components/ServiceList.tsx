
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ServiceList: React.FC = () => {
  const { t } = useLanguage();

  const routes = t.services.routes;
  const customRequest = t.services.customRequest;

  return (
    <section 
        id="services" 
        className="w-full py-24 md:py-40 bg-weego-black text-weego-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-weego-lime/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="px-6 max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row mb-12 items-end justify-between gap-6 border-b border-weego-gray pb-8">
          <div className="flex flex-col md:flex-row items-end gap-6">
            <h2 className="font-display text-7xl md:text-[9rem] font-black uppercase tracking-tighter leading-[0.8]">
              {t.services.heading}
            </h2>
            <div className="flex flex-col mb-2">
               <span className="font-mono text-xs uppercase text-weego-lime tracking-widest mb-1">// INDEX</span>
               <span className="text-weego-white font-mono text-sm tracking-widest">{t.services.subheading}</span>
            </div>
          </div>
        </div>

        {/* 3 Routes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {routes.map((route, idx) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-weego-gray/10 border border-white/5 p-8 md:p-10 flex flex-col hover:border-weego-lime/30 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="font-mono text-weego-lime text-[10px] tracking-widest uppercase opacity-60">
                  Route_0{idx + 1}
                </span>
                {route.priceBadge && (
                  <span className="font-mono text-weego-lime text-[10px] tracking-widest border border-weego-lime/30 px-3 py-1.5">
                    {route.priceBadge}
                  </span>
                )}
              </div>
              
              <h3 className="font-display text-3xl md:text-4xl uppercase font-black tracking-tighter leading-tight mb-4 group-hover:text-weego-lime transition-colors">
                {route.title}
              </h3>
              
              <p className="font-sans text-gray-400 text-sm leading-relaxed mb-8">
                {route.oneLiner}
              </p>

              <div className="space-y-8 mb-10 flex-grow">
                <div className="space-y-3">
                  <span className="block font-mono text-[9px] text-weego-lime uppercase tracking-widest opacity-60">Best for:</span>
                  {route.bestFor.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3 font-mono text-[11px] text-weego-white/80 leading-snug">
                      <span className="text-weego-lime shrink-0">→</span>
                      {point}
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <span className="block font-mono text-[9px] text-weego-lime uppercase tracking-widest opacity-60">Included:</span>
                  {route.included.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3 font-mono text-[11px] text-weego-white/80 leading-snug">
                      <span className="text-weego-lime shrink-0">✓</span>
                      {point}
                    </div>
                  ))}
                </div>
              </div>

              <Link 
                to={`/services/${route.id}`}
                className="w-full px-8 py-5 bg-white/5 border border-white/10 text-white font-display font-black uppercase tracking-widest text-xs hover:bg-weego-lime hover:text-black hover:border-weego-lime transition-all flex items-center justify-center gap-3 group/btn"
              >
                {route.cta}
                <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Custom Request Card - Full Width */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-weego-lime/10 to-transparent border border-weego-lime/20 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-weego-lime" />
              <span className="font-mono text-weego-lime text-[10px] tracking-widest uppercase">Special Request</span>
            </div>
            <h3 className="font-display text-4xl md:text-5xl uppercase font-black tracking-tighter leading-tight mb-6">
              {customRequest.title}
            </h3>
            <p className="font-sans text-gray-400 text-lg leading-relaxed mb-8">
              {customRequest.oneLiner}
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {customRequest.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-gray-500">
                  <div className="w-1 h-1 bg-weego-lime rounded-full" />
                  {bullet}
                </div>
              ))}
            </div>
          </div>
          <Link 
            to="/brief?route=custom"
            className="shrink-0 px-12 py-6 bg-white/5 border border-white/10 text-white font-display font-black uppercase tracking-widest text-sm hover:bg-weego-lime hover:text-black hover:border-weego-lime transition-all flex items-center justify-center gap-3 group/btn"
          >
            {customRequest.cta}
            <ArrowUpRight size={18} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
