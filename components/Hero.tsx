
import React from 'react';

const Hero: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  const athletes = [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&h=200&fit=crop&q=95", 
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&q=95", 
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&q=95", 
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=95", 
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop&q=95"  
  ];

  const korahLogoIcon = "https://i.ibb.co/4wVRTr5R/Captura-de-Tela-2026-01-22-a-s-22-28-13-removebg-preview.png";

  return (
    <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge com efeito de brilho (animate-glow) aplicado no contorno laranja */}
          <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#FFF1EB]/50 border border-[#FF5A1F]/30 text-[#FF5A1F] text-[10px] md:text-[11px] font-black uppercase tracking-[0.15em] italic mb-8 gap-3 animate-glow">
            <img src={korahLogoIcon} alt="Logo" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
            Treinador 24/07 com IA no WhatsApp
          </div>
          
          {/* Headline em 3 linhas conforme imagem - Ajustado leading para evitar sobreposição */}
          <div className="mb-8 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[82px] font-[900] leading-[1.25] md:leading-[1.18] tracking-tighter text-[#1A1A1A] uppercase italic">
              Treino que se<br />
              <span className="text-[#FF5A1F]">adaptam a você.</span><br />
              Não o contrário.
            </h1>
          </div>
          
          {/* Subheadline */}
          <p className="text-lg md:text-2xl text-gray-500 max-w-3xl leading-relaxed font-medium mb-10 px-4">
            A Korah usa inteligência artificial e ciência para criar planos de corrida personalizados que evoluem com você direto no WhatsApp.
          </p>

          {/* Botão de Vídeo */}
          <div className="mb-12">
            <button className="group flex items-center gap-4 px-8 py-4 rounded-full border border-gray-100 bg-[#F9F9F9] shadow-sm hover:shadow-md transition-all active:scale-95">
              <div className="w-10 h-10 rounded-full korah-gradient flex items-center justify-center shadow-lg shadow-[#FF5A1F]/20 group-hover:scale-110 transition-transform">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M5 3L19 12L5 21V3Z" /></svg>
              </div>
              <span className="text-xs font-[900] uppercase tracking-widest italic text-gray-800">
                Ver Como Funciona
              </span>
            </button>
          </div>

          {/* Prova Social: 5 fotos + texto */}
          <div className="flex items-center gap-4 mb-20">
            <div className="flex -space-x-3">
              {athletes.map((src, i) => (
                <img key={i} src={src} className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-white object-cover shadow-lg" alt="Atleta" />
              ))}
            </div>
            <p className="text-sm md:text-xl text-[#FF5A1F] font-black italic uppercase tracking-tight">
              +400 atletas ativos
            </p>
          </div>

          {/* Mockup iPhone + 6 Cards */}
          <div className="w-full max-w-6xl mx-auto mt-10">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
              
              {/* Cards da Esquerda */}
              <div className="hidden lg:flex flex-col gap-6 items-end animate-float-slow">
                <Card icon="K" title="Coach Korah" subtitle="TREINADOR PESSOAL IA" type="orange-icon" />
                <Card icon="clock" title="Treino Intervalo" subtitle="45 min" type="light-orange" />
                <Card icon="target" title="Maratona" subtitle="FOCO DO TREINO" type="light-orange" />
              </div>

              {/* iPhone Mockup Central */}
              <div className="relative z-20 w-[280px] sm:w-[320px] h-[580px] sm:h-[640px] bg-black rounded-[50px] border-[10px] border-[#1A1A1A] shadow-[0_40px_100px_-20px_rgba(255,90,31,0.25)] overflow-hidden flex flex-col p-6 text-left">
                <div className="flex justify-between items-center mb-8 px-2">
                  <span className="text-white text-xs font-bold">9:41</span>
                  <div className="w-16 h-5 bg-black rounded-full border border-white/5"></div>
                  <div className="flex gap-1">
                    <div className="w-4 h-2 bg-white/20 rounded-full"></div>
                  </div>
                </div>

                <div className="flex justify-between items-start mb-10 px-2">
                  <div className="space-y-1">
                    <span className="text-xl">👋</span>
                    <h4 className="text-white text-2xl font-black italic leading-none">Olá, Corredor!</h4>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#FF5A1F] flex items-center justify-center text-white font-black text-xs italic">K</div>
                </div>

                <div className="bg-[#141414] rounded-[32px] p-8 text-center flex flex-col items-center gap-4 mb-8 border border-white/5">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Iniciante</span>
                  <div className="space-y-1">
                    <h5 className="text-white text-2xl font-black italic">Plano de 5 Dias</h5>
                    <p className="text-gray-400 text-xs font-medium">Força e Resistência</p>
                  </div>
                  <button onClick={onCtaClick} className="mt-4 w-full py-4 rounded-2xl korah-gradient text-white font-black text-sm uppercase italic shadow-lg shadow-[#FF5A1F]/30 active:scale-95 transition-transform">
                    Começar
                  </button>
                </div>

                <div className="mt-auto grid grid-cols-3 gap-2 px-2 pb-4">
                   <div className="flex flex-col items-center">
                      <span className="text-[#FF5A1F] font-black text-lg">42</span>
                      <span className="text-[7px] text-gray-500 uppercase font-black">km/sem</span>
                   </div>
                   <div className="flex flex-col items-center border-x border-white/10">
                      <span className="text-white font-black text-lg">5:12</span>
                      <span className="text-[7px] text-gray-500 uppercase font-black">pace</span>
                   </div>
                   <div className="flex flex-col items-center">
                      <span className="text-[#00FF00] font-black text-lg">↑8%</span>
                      <span className="text-[7px] text-gray-500 uppercase font-black">evolução</span>
                   </div>
                </div>
              </div>

              {/* Cards da Direita */}
              <div className="hidden lg:flex flex-col gap-6 items-start animate-float">
                <Card icon="flame" title="320 kcal" subtitle="QUEIMADAS HOJE" type="plain" />
                <Card icon="users" title="+2.500" subtitle="ATLETAS ATIVOS" type="plain" />
                <Card icon="chart" title="PROGRESSO" subtitle="" type="chart" />
              </div>

              {/* Layout Mobile dos Cards */}
              <div className="grid lg:hidden grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <Card icon="K" title="Coach Korah" subtitle="TREINADOR PESSOAL IA" type="orange-icon" />
                <Card icon="flame" title="320 kcal" subtitle="QUEIMADAS HOJE" type="plain" />
                <Card icon="clock" title="Treino Intervalo" subtitle="45 min" type="light-orange" />
                <Card icon="users" title="+2.500" subtitle="ATLETAS ATIVOS" type="plain" />
                <Card icon="target" title="Maratona" subtitle="FOCO DO TREINO" type="light-orange" />
                <Card icon="chart" title="PROGRESSO" subtitle="" type="chart" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Card = ({ icon, title, subtitle, type }: any) => {
  const getIcon = () => {
    switch(icon) {
      case 'K': return <div className="w-10 h-10 rounded-full bg-[#FF5A1F] flex items-center justify-center text-white font-black italic">K</div>;
      case 'clock': return <div className="w-10 h-10 rounded-full bg-[#FFF1EB] flex items-center justify-center text-[#FF5A1F]"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>;
      case 'target': return <div className="w-10 h-10 rounded-full bg-[#FFF1EB] flex items-center justify-center text-[#FF5A1F]"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg></div>;
      case 'flame': return <div className="text-[#FF5A1F]"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2C11.6,2,11.3,2.2,11.1,2.5C10.5,3.3,10,4.2,9.6,5.2C8.7,7.1,8,9.1,8,11c0,2.2,0.9,4.2,2.4,5.6C16.1,15.2,17,13.2,17,11c0-1.9-0.7-3.9-1.6-5.8c-0.4-1-0.9-1.9-1.5-2.7C13.7,2.2,13.4,2,13,2H12z"/></svg></div>;
      case 'users': return <div className="text-[#FF5A1F]"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg></div>;
      case 'chart': return null;
      default: return null;
    }
  };

  return (
    <div className="bg-white p-5 rounded-[28px] shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-50 flex items-center gap-4 min-w-[200px] text-left">
      {getIcon()}
      <div className="flex flex-col">
        {type === 'chart' ? (
          <>
            <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-2">PROGRESSO</span>
            <div className="flex items-end gap-1 h-8">
              {[30, 50, 40, 70, 60, 90, 75].map((h, i) => (
                <div key={i} className={`w-2 rounded-t-sm ${i === 5 ? 'bg-[#FF5A1F]' : 'bg-[#FF5A1F]/20'}`} style={{height: `${h}%`}}></div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h5 className="text-[#1A1A1A] font-[900] text-lg leading-tight uppercase italic">{title}</h5>
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{subtitle}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Hero;
