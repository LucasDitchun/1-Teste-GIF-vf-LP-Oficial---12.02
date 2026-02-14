
import React from 'react';

interface FinalVisualProps {
  onCtaClick: () => void;
}

const FinalVisual: React.FC<FinalVisualProps> = ({ onCtaClick }) => {
  const imageUrl = "https://i.ibb.co/67v7Zjjg/korah-community-Oo-D3dxtb.png";

  return (
    <section className="pb-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Container alinhado com o estilo da Sessão 2 (WhatIsKorah) */}
        <div className="relative w-full rounded-[40px] md:rounded-[56px] overflow-hidden shadow-2xl shadow-black/20 border border-white/5 group mb-16 bg-[#111]">
          <img 
            src={imageUrl} 
            className="w-full h-auto block object-cover transform transition-transform duration-1000 group-hover:scale-[1.02]" 
            alt="Korah Evolution Showcase"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8">
           <h3 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.9] text-white">
             O FUTURO DA CORRIDA É <span className="text-[#FF5A1F]">AGORA.</span>
           </h3>
           <p className="text-gray-400 text-xl md:text-2xl font-medium leading-relaxed">
             Não fique para trás. A revolução do treino inteligente já começou e você tem um lugar reservado.
           </p>
           
           <div className="pt-8">
              <button 
                onClick={onCtaClick}
                className="w-full sm:w-auto px-16 py-7 rounded-[28px] korah-gradient text-white font-black text-2xl md:text-3xl hover:brightness-110 transition-all active:scale-95 shadow-2xl shadow-[#FF5A1F]/30 uppercase italic tracking-tighter"
              >
                GARANTIR MINHA VAGA AGORA
              </button>
           </div>
           
           <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-700 pt-8">
             Vagas limitadas para os membros fundadores
           </p>
        </div>
      </div>
    </section>
  );
};

export default FinalVisual;
