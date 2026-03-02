
import React, { useEffect, useState } from 'react';
import { Cpu, Radio } from 'lucide-react';

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [percentage, setPercentage] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  
  const PATHOS_WORDS = [
    "INITIALIZING_CORE",
    "ESTABLISHING_LINK",
    "BREACHING_REALITY",
    "DEFINING_AESTHETICS",
    "WE_GO_BEYOND",
    "WELCOME_TO_THE_VOID"
  ];

  useEffect(() => {
    const totalDuration = 3200; 
    const startTime = Date.now();
    let animationFrame: number;

    const update = () => {
      const elapsed = Date.now() - startTime;
      const next = Math.min((elapsed / totalDuration) * 100, 100);
      
      setPercentage(next);

      // Distribute words across the timeline
      const totalWords = PATHOS_WORDS.length;
      // Map 0-100 to 0-(totalWords-1)
      const index = Math.min(Math.floor((next / 100) * totalWords), totalWords - 1);
      setWordIndex(index);

      if (next < 100) {
        animationFrame = requestAnimationFrame(update);
      } else {
        setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 1000); 
        }, 500);
      }
    };

    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[99999] flex flex-col pointer-events-none transition-all duration-1000 ${isExiting ? 'pointer-events-none' : 'pointer-events-auto'}`}>
      
      {/* Top Shutter */}
      <div className={`absolute top-0 left-0 w-full bg-black z-20 transition-transform duration-1000 cubic-bezier(0.8, 0, 0.2, 1) ${isExiting ? '-translate-y-full' : 'translate-y-0'}`} style={{ height: '50vh' }}>
      </div>
      
      {/* Bottom Shutter */}
      <div className={`absolute bottom-0 left-0 w-full bg-black z-20 transition-transform duration-1000 cubic-bezier(0.8, 0, 0.2, 1) ${isExiting ? 'translate-y-full' : 'translate-y-0'}`} style={{ height: '50vh' }}>
      </div>

      {/* Center Content */}
      <div className={`absolute inset-0 z-30 flex items-center justify-center flex-col transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
         
         {/* Massive Percentage Background */}
         <h1 className="font-display font-black text-[30vw] md:text-[25vw] leading-none text-gray-900 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 blur-sm">
            {Math.floor(percentage)}
         </h1>

         {/* Cinematic Text Flash - Using the new animate-cinematic-flash class */}
         <div className="relative z-10 mix-blend-difference px-4 w-full">
             <h2 
                key={wordIndex}
                className="font-display font-black text-5xl md:text-8xl text-weego-lime tracking-tighter uppercase text-center animate-cinematic-flash"
                style={{ textShadow: '0 0 20px rgba(212,255,0,0.5)' }}
             >
                {PATHOS_WORDS[wordIndex]}
             </h2>
         </div>

         {/* Loading Bar Line */}
         <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2">
             <div 
                className="h-[2px] bg-weego-lime shadow-[0_0_30px_rgba(212,255,0,1)] transition-all duration-75 ease-linear"
                style={{ width: `${percentage}%` }}
             />
         </div>

      </div>
    </div>
  );
};
