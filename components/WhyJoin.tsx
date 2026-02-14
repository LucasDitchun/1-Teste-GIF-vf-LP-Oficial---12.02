
import React, { useEffect, useRef, useState } from 'react';

interface WhyJoinProps {
  onCtaClick: () => void;
}

const WhyJoin: React.FC<WhyJoinProps> = ({ onCtaClick }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const benefits = [
    "60 dias grátis de treino inteligente",
    "Acesso antecipado à IA treinadora",
    "Participação ativa nos testes",
    "Influenciar na evolução do produto",
    "Prioridade em novas funcionalidades",
    "Condições especiais vitalícias"
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-white"
    >
       <div className="absolute bottom-0 right-0 -translate-y-1/2 -z-10 w-96 h-96 bg-[#FF5A1F] rounded-full blur-[150px] opacity-[0.03]"></div>
       
       <div className={`max-w-4xl mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center space-y-8">
             <h2 className="text-4xl md:text-6xl font-black italic leading-tight uppercase text-black">
               Benefícios <span className="text-[#FF5A1F]">Fundadores</span>
             </h2>
             <p className="text-xl text-gray-600 font-medium">
               Ao se tornar um Membro Fundador hoje, você garante privilégios vitalícios que ninguém mais terá acesso.
             </p>

             <div className="grid sm:grid-cols-2 gap-6 pt-10 text-left">
                {benefits.map((benefit, i) => (
                  <div 
                    key={i} 
                    className={`flex items-center gap-4 p-6 rounded-3xl bg-white border border-gray-100 group hover:border-[#FF5A1F]/30 transition-all shadow-sm hover:shadow-xl hover:shadow-black/5 transform duration-700`}
                    style={{ 
                      transitionDelay: `${isVisible ? i * 150 : 0}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                    }}
                  >
                     <div className="w-8 h-8 rounded-full korah-gradient flex items-center justify-center text-[10px] text-white shrink-0 shadow-lg shadow-[#FF5A1F]/10">
                       ✓
                     </div>
                     <span className="text-lg font-bold text-gray-800 group-hover:text-black transition-colors">{benefit}</span>
                  </div>
                ))}
             </div>

             <div 
              className={`pt-12 transition-all duration-1000 delay-[1000ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             >
                <button 
                  onClick={onCtaClick}
                  className="w-full md:w-auto px-12 py-6 rounded-2xl korah-gradient text-white font-black text-2xl hover:brightness-110 transition-all active:scale-95 shadow-xl shadow-[#FF5A1F]/20 uppercase italic"
                >
                  60 dias Grátis + Participe do Sorteio
                </button>
             </div>
          </div>
       </div>
    </section>
  );
};

export default WhyJoin;
