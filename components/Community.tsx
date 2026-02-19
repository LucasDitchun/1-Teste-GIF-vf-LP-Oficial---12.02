import React from "react";
import {
  useScrollReveal,
  useScrollRevealStagger,
} from "../hooks/useScrollReveal";

const Community: React.FC = () => {
  const badgeRef = useScrollReveal({ variant: "fade-down" });
  const titleRef = useScrollReveal({ variant: "fade-up", delay: 100 });
  const benefitsRef = useScrollRevealStagger({
    variant: "fade-up",
    interval: 100,
  });
  const photoRef = useScrollReveal({ variant: "scale-up" });
  const imageUrl = "https://i.ibb.co/67v7Zjjg/korah-community-Oo-D3dxtb.png";

  const benefits = [
    "Eventos e provas com desconto",
    "Comunidade de +200 atletas",
    "Experiências inesquecíveis",
    "Apoio e ajuda dos colegas",
  ];

  return (
    <section className="py-24 pb-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER CENTRALIZADO */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Badge Comunidade com o efeito animate-glow */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#FF5A1F]/40 bg-[#FF5A1F]/10 text-[#FF5A1F] mb-8 animate-glow">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span className="text-sm font-black uppercase italic tracking-widest">
              Comunidade
            </span>
          </div>

          <h2
            ref={titleRef}
            className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-6 uppercase italic">
            Corra junto com a <span className="text-[#FF5A1F]">Korah</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
            Faça parte de uma comunidade de corredores que compartilham a mesma
            paixão. Treinos em grupo, eventos exclusivos e muita motivação.
          </p>

          {/* LISTA DE BENEFÍCIOS */}
          <div
            ref={benefitsRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mb-16 text-left max-w-3xl mx-auto w-full">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                data-sr-child
                className="flex items-center gap-4 group">
                <div className="w-6 h-6 rounded-full bg-[#FF5A1F]/10 flex items-center justify-center shrink-0 text-[12px] text-[#FF5A1F] font-bold">
                  ✓
                </div>
                <span className="text-white text-lg md:text-xl font-bold tracking-tight italic uppercase">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* IMAGEM COM CANTOS ARREDONDADOS */}
        <div ref={photoRef} className="relative w-full max-w-6xl mx-auto">
          <div className="aspect-[4/3] md:aspect-[16/9] w-full rounded-[40px] md:rounded-[64px] overflow-hidden border border-white/5 shadow-2xl">
            <img
              src={imageUrl}
              alt="Comunidade Korah correndo"
              className="w-full h-full object-cover transform hover:scale-[1.02] transition-transform duration-1000"
            />
            {/* Overlay sutil para profundidade */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>

          {/* Elemento de brilho decorativo de fundo */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#FF5A1F]/5 blur-[120px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Community;
