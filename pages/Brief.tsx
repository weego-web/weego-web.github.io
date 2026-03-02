
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, CheckCircle2 } from 'lucide-react';

export const Brief: React.FC = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAllCapabilities, setShowAllCapabilities] = useState(false);

  const [formData, setFormData] = useState({
    route: searchParams.get('route') || 'turnkey',
    timeline: 'asap',
    links: '',
    details: '',
    contact: ''
  });

  useEffect(() => {
    const route = searchParams.get('route');
    if (route) {
      setFormData(prev => ({ ...prev, route }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-weego-black text-white pt-40 pb-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex justify-center mb-8"
          >
            <CheckCircle2 size={80} className="text-weego-lime" />
          </motion.div>
          <h1 className="font-display text-5xl md:text-6xl font-black uppercase mb-6">THANK YOU</h1>
          <p className="font-sans text-xl text-gray-400 mb-12">
            We've received your brief. Our team will review it and get back to you within 24 hours.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-weego-lime text-black font-display font-black uppercase tracking-widest text-sm hover:bg-white transition-all"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-weego-black text-white min-h-screen pt-32 pb-24">
      <div className="px-6 max-w-[1000px] mx-auto">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-weego-lime transition-colors font-mono text-[10px] uppercase tracking-widest mb-12 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8"
          >
            {t.brief.h1}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-sans text-xl text-gray-400 max-w-2xl leading-relaxed"
          >
            {t.brief.subtitle}
          </motion.p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Route Selection */}
            <div className="space-y-4">
              <label className="block font-mono text-[10px] text-weego-lime uppercase tracking-widest">{t.brief.fields.route}</label>
              <select 
                name="route"
                value={formData.route}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 p-5 font-mono text-sm uppercase tracking-widest focus:border-weego-lime focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                {Object.entries(t.brief.options.routes).map(([key, label]) => (
                  <option key={key} value={key} className="bg-weego-black">{label}</option>
                ))}
              </select>
            </div>

            {/* Timeline Selection */}
            <div className="space-y-4">
              <label className="block font-mono text-[10px] text-weego-lime uppercase tracking-widest">{t.brief.fields.timeline}</label>
              <select 
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 p-5 font-mono text-sm uppercase tracking-widest focus:border-weego-lime focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                {Object.entries(t.brief.options.timeline).map(([key, label]) => (
                  <option key={key} value={key} className="bg-weego-black">{label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <label className="block font-mono text-[10px] text-weego-lime uppercase tracking-widest">{t.brief.fields.links}</label>
            <input 
              type="text"
              name="links"
              value={formData.links}
              onChange={handleChange}
              placeholder="Competitors, inspiration, current site..."
              className="w-full bg-white/5 border border-white/10 p-5 font-sans text-sm focus:border-weego-lime focus:outline-none transition-colors"
            />
          </div>

          {/* Details */}
          <div className="space-y-4">
            <label className="block font-mono text-[10px] text-weego-lime uppercase tracking-widest">{t.brief.fields.details}</label>
            <textarea 
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows={6}
              required
              className="w-full bg-white/5 border border-white/10 p-5 font-sans text-sm focus:border-weego-lime focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <label className="block font-mono text-[10px] text-weego-lime uppercase tracking-widest">{t.brief.fields.contact}</label>
            <input 
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 p-5 font-sans text-sm focus:border-weego-lime focus:outline-none transition-colors"
            />
          </div>

          <div className="pt-8">
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-16 py-6 bg-weego-lime text-black font-display font-black uppercase tracking-widest text-sm hover:bg-white transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isSubmitting ? 'SENDING...' : t.brief.submit}
              {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
            </button>
          </div>
        </form>

        {/* Capabilities Section */}
        <div className="mt-32 pt-24 border-t border-white/5">
          <h2 className="font-display text-2xl uppercase font-black text-white mb-12 tracking-tight">
            {t.brief.capabilitiesTitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            {(showAllCapabilities ? t.services.capabilities.items : t.services.capabilities.items.slice(0, 8)).map((cap) => (
              <div key={cap.id} className="flex items-center gap-4 group">
                <div className="w-1.5 h-1.5 bg-weego-lime/30 group-hover:bg-weego-lime transition-colors" />
                <span className="font-mono text-xs uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
                  {cap.label}
                </span>
              </div>
            ))}
          </div>

          <button 
            onClick={() => setShowAllCapabilities(!showAllCapabilities)}
            className="mt-12 font-mono text-[10px] text-weego-lime hover:underline uppercase tracking-widest flex items-center gap-2"
          >
            {showAllCapabilities ? t.brief.showLessLabel : t.brief.showAllLabel}
          </button>
        </div>
      </div>
    </div>
  );
};
