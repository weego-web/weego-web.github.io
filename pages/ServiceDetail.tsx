
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Check, HelpCircle, Play } from 'lucide-react';

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();

  const detail = t.serviceDetail[id as keyof typeof t.serviceDetail];

  if (!detail) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-weego-black text-white">
        <div className="text-center">
          <h1 className="text-4xl font-display font-black mb-4">SERVICE NOT FOUND</h1>
          <Link to="/" className="text-weego-lime hover:underline font-mono uppercase text-sm">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-weego-black text-white min-h-screen pt-32 pb-24">
      <div className="px-6 max-w-[1400px] mx-auto">
        {/* Back Button */}
        <Link 
          to="/#services" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-weego-lime transition-colors font-mono text-[10px] uppercase tracking-widest mb-12 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </Link>

        {/* Hero Section */}
        <div className="mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8"
          >
            {detail.h1}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-sans text-xl md:text-2xl text-gray-400 max-w-3xl mb-12 leading-relaxed"
          >
            {detail.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              to={`/brief?route=${id}`}
              className="inline-flex items-center gap-3 px-10 py-5 bg-weego-lime text-black font-display font-black uppercase tracking-widest text-sm hover:bg-white transition-all group"
            >
              {detail.cta}
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Best For & Included */}
          <div className="lg:col-span-7 space-y-24">
            {/* Best For */}
            <section>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-8 h-[1px] bg-weego-lime" />
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-weego-lime">{detail.sections.bestFor.title}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {detail.sections.bestFor.items.map((item, idx) => (
                  <div key={idx} className="p-6 bg-white/5 border border-white/5 group hover:border-weego-lime/20 transition-colors">
                    <p className="font-sans text-gray-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Included */}
            <section>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-8 h-[1px] bg-weego-lime" />
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-weego-lime">{detail.sections.included.title}</h2>
              </div>
              
              {Array.isArray(detail.sections.included.items) ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                  {detail.sections.included.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <Check size={16} className="text-weego-lime mt-1 shrink-0" />
                      <span className="font-sans text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    {detail.sections.included.items.group1.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <Check size={16} className="text-weego-lime mt-1 shrink-0" />
                        <span className="font-sans text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-6">
                    {detail.sections.included.items.group2.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <Check size={16} className="text-weego-lime mt-1 shrink-0" />
                        <span className="font-sans text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* Packages (Optional) */}
            {detail.sections.packages && (
              <section>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-8 h-[1px] bg-weego-lime" />
                  <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-weego-lime">{detail.sections.packages.title}</h2>
                </div>
                <div className="space-y-4">
                  {detail.sections.packages.items.map((pkg, idx) => (
                    <div key={idx} className="p-8 bg-white/5 border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.07] transition-colors">
                      <div className="max-w-md">
                        <h3 className="font-display text-2xl font-black uppercase mb-2">{pkg.name}</h3>
                        <p className="font-sans text-sm text-gray-400">{pkg.includes}</p>
                      </div>
                      <div className="text-left md:text-right shrink-0">
                        <div className="font-display text-2xl text-weego-lime font-black mb-1">{pkg.price}</div>
                        <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">{pkg.timeline}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Starting From (Optional) */}
            {detail.sections.startingFrom && (
              <section>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-8 h-[1px] bg-weego-lime" />
                  <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-weego-lime">{detail.sections.startingFrom.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-8 bg-white/5 border border-white/5">
                    <span className="block font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-4">Setup</span>
                    <div className="font-display text-3xl font-black text-weego-lime">{detail.sections.startingFrom.setup}</div>
                  </div>
                  <div className="p-8 bg-white/5 border border-white/5">
                    <span className="block font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-4">Maintenance</span>
                    <div className="font-display text-3xl font-black text-weego-lime">{detail.sections.startingFrom.maintenance}</div>
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* Right Column: Process & FAQ */}
          <div className="lg:col-span-5 space-y-24">
            {/* Process */}
            <section className="bg-weego-gray/10 p-10 border border-white/5">
              <div className="flex items-center gap-4 mb-10">
                <Play size={16} className="text-weego-lime" />
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-weego-lime">{detail.sections.process.title}</h2>
              </div>
              <div className="space-y-8">
                {detail.sections.process.items.map((step, idx) => (
                  <div key={idx} className="flex gap-6 relative">
                    {idx !== detail.sections.process.items.length - 1 && (
                      <div className="absolute left-[11px] top-8 bottom-[-20px] w-[1px] bg-white/10" />
                    )}
                    <div className="w-6 h-6 rounded-full border border-weego-lime flex items-center justify-center shrink-0 bg-weego-black z-10">
                      <span className="font-mono text-[10px] text-weego-lime">{idx + 1}</span>
                    </div>
                    <p className="font-sans text-gray-300 pt-0.5">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <div className="flex items-center gap-4 mb-10">
                <HelpCircle size={16} className="text-weego-lime" />
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-weego-lime">{detail.sections.faq.title}</h2>
              </div>
              <div className="space-y-6">
                {detail.sections.faq.items.map((item, idx) => (
                  <div key={idx} className="border-b border-white/5 pb-6">
                    <h4 className="font-display text-lg font-black uppercase mb-3 text-weego-white">{item.q}</h4>
                    <p className="font-sans text-sm text-gray-400 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Industries Compact Line */}
            <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row md:items-center gap-4">
              <span className="font-mono text-[10px] text-weego-lime uppercase tracking-widest shrink-0">
                {t.serviceDetail.industriesLabel}
              </span>
              <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                HoReCa • Retail • Services • NGOs
              </span>
            </div>

            {/* Bottom CTA */}
            <div className="mt-12">
              <Link 
                to={`/brief?route=${id}`}
                className="inline-flex items-center gap-3 px-10 py-5 bg-weego-lime text-black font-display font-black uppercase tracking-widest text-sm hover:bg-white transition-all group"
              >
                {detail.cta}
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
