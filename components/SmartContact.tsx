
import React, { useState, useEffect, useRef } from 'react';
import { generateProjectBrief } from '../services/geminiService';
import { useLanguage } from '../contexts/LanguageContext';
import { Sparkles, Send, Command, Terminal, Wifi, Shield, Cpu, Activity, AlertCircle } from 'lucide-react';

export const SmartContact: React.FC = () => {
  const { t, language } = useLanguage();
  const [input, setInput] = useState('');
  const [brief, setBrief] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-focus logic for "immersive" feel
  const focusTerminal = () => {
    textareaRef.current?.focus();
  };

  const addLog = (msg: string) => {
    setConsoleLogs(prev => [...prev.slice(-4), `> ${msg}`]);
  };

  const handleBriefGeneration = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setBrief(null);
    setConsoleLogs([]);
    
    // Simulate connection sequence
    addLog("INITIALIZING_CONNECTION...");
    await new Promise(r => setTimeout(r, 600));
    addLog("HANDSHAKE_INITIATED...");
    await new Promise(r => setTimeout(r, 800));
    addLog("PACKET_ENCRYPTION: AES-256");
    await new Promise(r => setTimeout(r, 400));
    addLog("TRANSMITTING_PAYLOAD...");

    try {
        const result = await generateProjectBrief(input, language);
        setBrief(result);
        addLog("PAYLOAD_RECEIVED.");
        addLog("DECRYPTING_RESPONSE...");
    } catch (e) {
        addLog("ERROR: CONNECTION_LOST");
    } finally {
        setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full min-h-screen bg-weego-black text-weego-white border-t border-weego-gray relative flex flex-col">
      
      {/* Top Bar Status */}
      <div className="w-full border-b border-white/10 p-2 flex justify-between items-center bg-black/50 backdrop-blur-sm z-20">
         <div className="flex gap-4 font-mono text-[10px] text-gray-500 uppercase tracking-widest">
             <span className="flex items-center gap-1"><Wifi size={10} className={loading ? "animate-pulse text-weego-lime" : ""} /> CONNECTION: {loading ? 'BUSY' : 'IDLE'}</span>
             <span className="flex items-center gap-1"><Shield size={10} /> SECURE</span>
         </div>
         <div className="font-mono text-[10px] text-weego-lime uppercase">
             TERMINAL_ID: WEEGO_NODE_07
         </div>
      </div>

      <div className="flex-grow flex flex-col xl:flex-row relative">
         
         {/* LEFT: Input Console */}
         <div className="w-full xl:w-1/2 p-6 md:p-12 lg:p-16 border-b xl:border-b-0 xl:border-r border-white/10 flex flex-col">
            
            <div className="mb-12">
                <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4">
                    {t.contact.heading} <span className="text-weego-lime">{t.contact.subheading}</span>
                </h2>
                <p className="font-mono text-sm text-gray-400 max-w-md border-l-2 border-weego-lime pl-4">
                    {t.contact.desc}
                </p>
            </div>

            <form onSubmit={handleBriefGeneration} className="flex-grow flex flex-col relative group" onClick={focusTerminal}>
                {/* Input Area styling to look like raw terminal */}
                <div className="flex-grow relative bg-black border border-white/20 p-6 min-h-[300px] transition-colors group-focus-within:border-weego-lime/50">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-weego-lime/0 via-weego-lime/50 to-weego-lime/0 opacity-0 group-focus-within:opacity-100 transition-opacity" />
                    
                    <textarea
                        ref={textareaRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={t.contact.placeholder}
                        className="w-full h-full bg-transparent border-none focus:ring-0 text-lg md:text-xl font-mono text-weego-white placeholder-gray-700 resize-none outline-none z-10 relative custom-scrollbar"
                        spellCheck={false}
                    />
                    
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30" />
                </div>

                {/* Control Bar */}
                <div className="mt-4 flex justify-between items-center">
                    <div className="flex flex-col font-mono text-[10px] text-gray-600 uppercase">
                        <span>BUFFER_SIZE: {input.length} B</span>
                        <span>LATENCY: 12ms</span>
                    </div>

                    <button 
                        type="submit"
                        disabled={loading || !input.trim()}
                        className="bg-weego-lime text-black px-8 py-4 font-bold font-mono uppercase tracking-widest hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
                    >
                        {loading ? <Activity className="animate-spin" /> : <Command size={18} />}
                        {loading ? t.contact.processing : t.contact.button}
                    </button>
                </div>
            </form>
         </div>

         {/* RIGHT: Output / Visualizer */}
         <div className="w-full xl:w-1/2 bg-gray-900/20 relative overflow-hidden flex flex-col p-6 md:p-12">
            
            {/* Background noise/grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

            {/* Console Log Overlay */}
            <div className="absolute top-6 right-6 font-mono text-[10px] text-weego-lime/70 flex flex-col items-end pointer-events-none">
                {consoleLogs.map((log, i) => (
                    <span key={i} className="animate-in fade-in slide-in-from-right-4 duration-300">{log}</span>
                ))}
            </div>

            <div className={`flex-grow border border-white/10 bg-black/80 backdrop-blur-md p-8 relative overflow-y-auto custom-scrollbar transition-all duration-500 ${brief ? 'opacity-100' : 'opacity-80'}`}>
                
                {/* Header for Output */}
                <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
                    <Cpu size={18} className="text-weego-lime" />
                    <span className="font-mono text-sm uppercase tracking-widest text-white">{t.contact.aiTitle}</span>
                </div>

                {brief ? (
                    <div className="prose prose-invert max-w-none">
                        <div className="font-mono text-sm leading-relaxed space-y-4">
                            {brief.split('\n').map((line, i) => {
                                if (line.startsWith('## ')) {
                                    return (
                                        <div key={i} className="mt-8 mb-4 flex items-center gap-2 text-weego-lime">
                                            <span className="text-xs opacity-50">#</span>
                                            <h3 className="font-display text-xl uppercase font-bold m-0">{line.replace('## ', '')}</h3>
                                        </div>
                                    )
                                }
                                if (line.trim() === '') return <div key={i} className="h-2" />;
                                return <p key={i} className="text-gray-300 m-0">{line}</p>
                            })}
                        </div>
                        
                        <div className="mt-12 pt-8 border-t border-dashed border-gray-800">
                             <a href="mailto:munister@outlook.com" className="w-full block bg-white/5 hover:bg-weego-lime hover:text-black border border-white/20 text-center py-4 font-mono uppercase tracking-widest transition-all group">
                                <span className="flex items-center justify-center gap-2">
                                    {t.contact.sendButton} <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                             </a>
                             <p className="text-center font-mono text-[10px] text-gray-600 mt-2 uppercase">Action will open local mail client</p>
                        </div>
                    </div>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-gray-600 opacity-50">
                        <div className="w-24 h-24 border border-dashed border-gray-700 rounded-full flex items-center justify-center mb-6 animate-[spin_10s_linear_infinite]">
                           <Terminal size={32} />
                        </div>
                        <p className="font-mono text-xs uppercase tracking-[0.2em]">{t.contact.waiting}</p>
                    </div>
                )}
            </div>
         </div>
      </div>
    </section>
  );
};
