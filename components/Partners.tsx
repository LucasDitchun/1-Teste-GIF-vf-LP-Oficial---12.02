
import React from 'react';

const Partners: React.FC = () => {
  return (
    <section className="bg-white w-full">
      {/* Linha Superior - Delimitadora de Seção */}
      <div className="w-full h-[1.5px] bg-black"></div>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center">
        {/* Texto Auxiliar Centralizado */}
        <p className="text-center text-[#888888] text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] mb-12 md:mb-16">
          Nossos Parceiros
        </p>
        
        {/* Container de Logos com Wrap para Responsividade */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 md:gap-x-24 gap-y-12 md:gap-y-16">
          
          {/* STRAVA */}
          <div className="flex items-center">
            <span className="text-2xl md:text-4xl font-black tracking-tighter text-black uppercase">STRAVA</span>
          </div>

          {/* GARMIN. */}
          <div className="flex items-center">
            <span className="text-2xl md:text-4xl font-black tracking-tight text-black uppercase flex items-baseline">
              GARMIN<span className="text-[#FF5A1F]">.</span>
            </span>
          </div>

          {/* FOTOP */}
          <div className="flex items-center">
            <span className="text-2xl md:text-4xl font-black tracking-tight text-[#FF5A1F] uppercase">FOTOP</span>
          </div>

          {/* MARATONA INTERNACIONAL MANAUS */}
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 md:w-10 md:h-10">
                <svg viewBox="0 0 24 24" className="w-full h-full text-black" fill="none" stroke="currentColor" strokeWidth="2.5">
                   <path d="M3 20L12 4L21 20" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
             </div>
             <div className="flex flex-col leading-[1.1] text-left">
                <span className="text-[7px] md:text-[9px] font-black uppercase tracking-widest text-black">Maratona</span>
                <span className="text-[7px] md:text-[9px] font-black uppercase tracking-widest text-black">Internacional</span>
                <span className="text-[7px] md:text-[9px] font-black uppercase tracking-widest text-black">Manaus</span>
             </div>
          </div>

          {/* UDG RUNNING CREW */}
          <div className="flex flex-col items-center">
             <span className="text-2xl md:text-4xl font-serif italic font-black text-black leading-none">UDG</span>
             <span className="text-[6px] md:text-[8px] font-bold uppercase tracking-[0.4em] text-[#888888] mt-1">Running Crew</span>
          </div>

        </div>
      </div>

      {/* Linha Inferior - Delimitadora de Seção */}
      <div className="w-full h-[1.5px] bg-black"></div>
    </section>
  );
};

export default Partners;
