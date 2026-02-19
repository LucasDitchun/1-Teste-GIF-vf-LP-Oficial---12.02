
import React from 'react';
import { useScrollReveal, useScrollRevealStagger } from '../hooks/useScrollReveal';

const WhyMostFail: React.FC = () => {
  const titleRef = useScrollReveal({ variant: 'fade-up' });
  const imageRef = useScrollReveal({ variant: 'scale-up' });
  const painPointsRef = useScrollRevealStagger({ variant: 'fade-up', interval: 100 });
  const quoteRef = useScrollReveal({ variant: 'fade-right' });
  const ctaRef = useScrollReveal({ variant: 'scale-up' });
  // Ícones SVG estilizados para a lista de pontos
  const FileIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
    </svg>
  );

  const BrainIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z"></path>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z"></path>
    </svg>
  );

  const DollarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"></line>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  );

  const RefreshIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 2v6h-6"></path>
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
      <path d="M3 22v-6h6"></path>
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path>
    </svg>
  );

  const TimerIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );

  const painPoints = [
    { text: "Treinos genéricos não respeitam seu corpo", icon: <FileIcon /> },
    { text: "Falta de acompanhamento mata a motivação", icon: <BrainIcon /> },
    { text: "Assessoria tradicional não cabe na realidade da maioria", icon: <DollarIcon /> },
    { text: "Sem constância, não existe evolução", icon: <RefreshIcon /> },
    { text: "Comparar pace destrei o prazer de correr", icon: <TimerIcon /> },
  ];

  const impactImageUrl = "https://i.ibb.co/7JKz6ySk/tired-runner-beanbag-Cgc-TWw-Fo-1.png";

  const scrollToPricing = () => {
    const element = document.getElementById('pricing-section');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden text-center">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TITULO CORRIGIDO E SEPARADO */}
        <h2 ref={titleRef} className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black text-black tracking-tighter leading-[1.1] md:leading-[0.95] uppercase italic mb-12">
          Por que a maioria <br className="hidden md:block" />
          falha na <span className="text-[#FF5A1F]">corrida</span>
        </h2>

        {/* IMAGEM QUADRADA */}
        <div ref={imageRef} className="flex justify-center mb-16 md:mb-20">
          <div className="w-full max-w-[320px] sm:max-w-[480px] md:max-w-[627px] aspect-square overflow-hidden rounded-[24px] md:rounded-[40px] shadow-2xl">
            <img 
              src={impactImageUrl} 
              alt="Dados da corrida"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* LISTA DE PONTOS */}
        <div className="max-w-3xl mx-auto space-y-12 md:space-y-16 text-left">
          
          <div ref={painPointsRef} className="space-y-6 md:space-y-8">
            {painPoints.map((item, i) => (
              <div key={i} data-sr-child className="flex items-center gap-4 md:gap-6 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-[#FFF1EB] flex items-center justify-center shrink-0 text-[#FF5A1F]">
                  {item.icon}
                </div>
                <p className="text-base sm:text-lg md:text-2xl text-gray-500 font-bold tracking-tight leading-tight">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div ref={quoteRef} className="pt-8 border-l-[4px] md:border-l-[10px] border-[#FF5A1F] pl-6 md:pl-12 space-y-2">
            <h3 className="text-lg sm:text-xl md:text-5xl font-extrabold text-black leading-tight tracking-tight italic uppercase">
              A maioria das pessoas não falha na corrida.
            </h3>
            <h3 className="text-xl sm:text-2xl md:text-6xl font-black text-[#FF5A1F] leading-tight tracking-tighter italic uppercase">
              Ela falha no método.
            </h3>
          </div>

          <div ref={ctaRef} className="pt-6">
            <button
              onClick={scrollToPricing}
              className="w-full md:w-auto px-10 py-5 md:px-16 md:py-8 rounded-[20px] md:rounded-[36px] bg-[#FF5A1F] text-white font-black text-lg sm:text-xl md:text-3xl uppercase tracking-tighter shadow-xl hover:brightness-110 hover:-translate-y-2 transition-all italic"
            >
              KORAH.IA TE AJUDA
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyMostFail;
