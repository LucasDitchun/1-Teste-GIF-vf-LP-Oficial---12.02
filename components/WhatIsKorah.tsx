
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const WhatIsKorah: React.FC = () => {
  const leftColRef = useScrollReveal({ variant: 'fade-right' });
  const rightColRef = useScrollReveal({ variant: 'fade-left', delay: 150 });
  const taglineRef = useScrollReveal({ variant: 'fade-up', delay: 400 });
  // Link direto para o novo GIF com transparência fornecido (bvTu8)
  const gifUrl = "https://s12.gifyu.com/images/bvTu8.gif";

  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* COLUNA: TEXTO - Centralizado no Mobile (text-center), Esquerda no Desktop (lg:text-left) */}
          <div ref={leftColRef} className="flex flex-col text-center lg:text-left pt-4 order-1">
            <div className="mb-10 md:mb-12">
              <p className="text-3xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-1">
                Sua jornada
              </p>
              <h2 className="text-[40px] sm:text-5xl md:text-[84px] font-[900] text-[#FF5A1F] tracking-tighter leading-[1] md:leading-[0.9]">
                +Personalizada
              </h2>
              <h2 className="text-[40px] sm:text-5xl md:text-[84px] font-[900] text-[#FF5A1F] tracking-tighter leading-[1] md:leading-[0.9] mb-2">
                +Inteligente
              </h2>
              <p className="text-3xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">
                No WhatsApp
              </p>
            </div>

            <div className="space-y-4 mb-12 md:mb-14 px-4 lg:px-0">
              <h3 className="text-3xl md:text-4xl font-[900] text-[#1A1A1A] leading-tight tracking-tight">
                Mais resultado, menos esforço.
              </h3>
              <p className="text-lg md:text-2xl text-gray-500 font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
                Tudo ajustado ao seu ritmo — sem baixar nenhum app.
              </p>
            </div>

            <div ref={taglineRef} className="mt-4">
              <p className="text-2xl md:text-3xl font-[900] text-[#FF5A1F] tracking-tight mb-2">
                Treino profissional
              </p>
              <h2 className="text-6xl sm:text-7xl md:text-[100px] font-[1000] text-[#FF5A1F] tracking-tighter uppercase leading-none md:-ml-1 italic">
                KORAH.IA
              </h2>
            </div>
          </div>

          {/* COLUNA: GIF ANIMADO (MOCKUP DO WHATSAPP) */}
          <div ref={rightColRef} className="flex flex-col items-center lg:items-center order-2">
            <div className="relative w-full max-w-[300px] sm:max-w-[340px] md:max-w-[420px] mb-8 md:mb-12">
              <img 
                src={gifUrl} 
                alt="Demonstração Korah no WhatsApp" 
                className="w-full h-auto block drop-shadow-2xl"
              />
            </div>

            {/* Texto de acompanhamento e métrica - Também centralizado para harmonizar */}
            <div className="w-full max-w-md text-center space-y-4 md:space-y-6">
              <div className="space-y-1">
                <h4 className="text-xl md:text-3xl font-bold text-black leading-tight">
                  A Korah não entrega um treino.
                </h4>
                <h4 className="text-xl md:text-3xl font-bold text-[#FF5A1F] leading-tight">
                  Ela acompanha a sua evolução.
                </h4>
              </div>
              <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed">
                <span className="text-[#FF5A1F] font-bold">93% dos assinantes</span> da Korah continuam treinando porque recebem treinos e feedbacks personalizados, adaptados à vida real.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatIsKorah;
