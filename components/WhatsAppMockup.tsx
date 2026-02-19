
import React from 'react';
import { useScrollReveal, useScrollRevealStagger } from '../hooks/useScrollReveal';

const WhatsAppMockup: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  const headingRef = useScrollReveal({ variant: 'fade-right' });
  const benefitsRef = useScrollRevealStagger({ variant: 'fade-up', interval: 80 });
  const phoneRef = useScrollReveal({ variant: 'fade-left', delay: 200 });
  const benefits = [
    "Planos para 5K, 10K, Meia e Maratona",
    "Integração com Garmin, Strava e Apple Watch",
    "Feedback em tempo real via WhatsApp",
    "Ajuste automático baseado em fadiga",
    "Suporte com treinadores humanos",
    "Sem apps extras para instalar"
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* COLUNA DA ESQUERDA: TEXTO E BENEFÍCIOS (AGORA PRIMEIRO) */}
          <div className="flex flex-col text-left order-1 lg:order-1">
            <h2 ref={headingRef} className="text-4xl md:text-6xl font-black text-black tracking-tighter leading-[0.95] uppercase italic mb-6">
              Treino profissional, <br />
              <span className="text-[#FF5A1F]">direto no bolso</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed mb-10 max-w-lg">
              Esqueça planilhas complicadas ou apps que você nunca abre. Com o Korah, seu treino chega onde você já está: no WhatsApp.
            </p>

            <div ref={benefitsRef} className="space-y-4 mb-12">
              {benefits.map((benefit, i) => (
                <div key={i} data-sr-child className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full border border-[#FF5A1F]/40 flex items-center justify-center shrink-0 group-hover:bg-[#FF5A1F]/10 transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF5A1F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg font-bold tracking-tight">{benefit}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={onCtaClick}
              className="w-full md:w-fit px-12 py-6 rounded-2xl korah-gradient text-white font-black text-xl md:text-2xl hover:brightness-110 transition-all active:scale-95 shadow-2xl shadow-[#FF5A1F]/20 uppercase italic flex items-center justify-center gap-4 group"
            >
              Começar agora
              <svg className="w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                <path d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* COLUNA DA DIREITA: MOCKUP DA INTERFACE (AGORA DEPOIS) */}
          <div ref={phoneRef} className="relative flex justify-center lg:justify-start order-2 lg:order-2">
            {/* Background Decorativo - Círculos */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none">
              <div className="absolute top-10 left-10 w-32 h-32 border border-[#FF5A1F]/10 rounded-full animate-float"></div>
              <div className="absolute bottom-20 right-10 w-48 h-48 border border-[#FF5A1F]/5 rounded-full animate-float-slow"></div>
            </div>

            {/* Smartphone Mockup */}
            <div className="relative z-10 w-full max-w-[340px] bg-[#0F172A] rounded-[48px] p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border-[8px] border-[#1E293B]">
              {/* StatusBar */}
              <div className="flex justify-between items-center px-6 py-2 mb-4">
                <span className="text-white text-xs font-bold">9:41</span>
                <div className="w-16 h-4 bg-black rounded-full"></div>
                <div className="w-5 h-2.5 bg-green-500 rounded-sm"></div>
              </div>

              {/* Chat Header */}
              <div className="px-4 mb-6 flex justify-between items-center">
                <div className="space-y-0.5">
                  <p className="text-gray-400 text-[10px] font-medium">Bom dia, João!</p>
                  <h4 className="text-white text-sm font-black italic uppercase tracking-tight">Seu treino de hoje</h4>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#FF5A1F] flex items-center justify-center text-white font-black text-xs">
                  J
                </div>
              </div>

              {/* Main Workout Card */}
              <div className="bg-[#FF5A1F] rounded-[32px] p-6 text-white mb-4 shadow-lg shadow-[#FF5A1F]/20 relative overflow-hidden group">
                <div className="flex justify-between items-start mb-6">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-80">Intervalado</span>
                    <h5 className="text-3xl font-black italic leading-none">6 x 400m</h5>
                  </div>
                  <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full flex items-center gap-1">
                    <span className="text-[10px]">⚡</span>
                    <span className="text-[10px] font-black uppercase">Alta</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 py-4 border-t border-white/20">
                  <div className="text-center">
                    <p className="text-2xl font-black italic">4:20</p>
                    <p className="text-[8px] font-bold uppercase tracking-tighter opacity-70">pace alvo</p>
                  </div>
                  <div className="text-center border-x border-white/20">
                    <p className="text-2xl font-black italic">40s</p>
                    <p className="text-[8px] font-bold uppercase tracking-tighter opacity-70">descanso</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-black italic">~35</p>
                    <p className="text-[8px] font-bold uppercase tracking-tighter opacity-70">minutos</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <button className="bg-[#00C48C] text-white py-4 rounded-2xl font-black text-xs italic uppercase flex items-center justify-center gap-2 shadow-lg shadow-[#00C48C]/20">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Concluído
                </button>
                <button className="bg-[#1E293B] text-white py-4 rounded-2xl font-black text-xs italic uppercase border border-white/5 hover:bg-white/5 transition-colors">
                  Ajustar
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatsAppMockup;
