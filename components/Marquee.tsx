import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Star } from 'lucide-react';

export const Marquee: React.FC = () => {
  const { t } = useLanguage();
  const words = t.marquee;
  
  // Create a larger repeated array to ensure screen coverage
  const items = [...words, ...words, ...words, ...words];

  return (
    <div 
      className="w-full bg-weego-lime text-weego-black py-12 md:py-20 overflow-hidden border-y-[20px] border-weego-black select-none group"
      role="region"
      aria-label="Service highlights marquee"
    >
      <div className="relative flex overflow-x-hidden">
        {/* Primary Row */}
        <div className="animate-[marquee_60s_linear_infinite] whitespace-nowrap flex gap-24 md:gap-32 items-center pl-32 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">
          {items.map((word, index) => (
            <React.Fragment key={index}>
              <span className="font-display font-bold text-6xl md:text-[8rem] uppercase tracking-normal leading-none">
                {word}
              </span>
              <Star size={32} className="fill-current text-weego-black" />
            </React.Fragment>
          ))}
        </div>
        
        {/* Secondary Row (Duplicate for Loop) */}
        <div 
            className="absolute top-0 animate-[marquee_60s_linear_infinite] whitespace-nowrap flex gap-24 md:gap-32 items-center pl-32 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]" 
            style={{ left: '100%' }}
            aria-hidden="true"
        >
           {items.map((word, index) => (
            <React.Fragment key={`dup-${index}`}>
              <span className="font-display font-bold text-6xl md:text-[8rem] uppercase tracking-normal leading-none">
                {word}
              </span>
              <Star size={32} className="fill-current text-weego-black" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};