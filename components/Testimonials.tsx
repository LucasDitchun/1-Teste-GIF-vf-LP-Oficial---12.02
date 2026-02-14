
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "A integração com o WhatsApp é genial. Não preciso abrir app nenhum, só olho a mensagem e saio para correr.",
      author: "Fernanda Costa",
      role: "Triatleta",
      metric: "TOP 10",
      metricLabel: "CATEGORIA"
    },
    {
      quote: "Baixei meu tempo na Maratona do Rio em 12 minutos. O Korah ajustou meu treino quando peguei uma gripe e isso salvou minha prova.",
      author: "Ricardo Silva",
      role: "Maratonista Amador",
      metric: "-12min",
      metricLabel: "EM 42KM"
    },
    {
      quote: "O feedback da IA após cada treino é o que me mantém constante. É como ter um treinador de elite no bolso 24h.",
      author: "Lucas Porto",
      role: "Corredor de Trilha",
      metric: "100%",
      metricLabel: "CONSTÂNCIA"
    },
    {
      quote: "Saí do sedentarismo para os primeiros 5km em 3 meses. Sem lesões e com muita motivação diária.",
      author: "Ana Beatriz",
      role: "Iniciante",
      metric: "5KM",
      metricLabel: "CONQUISTADOS"
    }
  ];

  // Duplicando para o efeito de scroll infinito
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-black tracking-tight leading-tight mb-4">
          Resultados <span className="text-[#FF5A1F] italic">reais</span>
        </h2>
        <p className="text-base md:text-lg text-gray-400 font-medium">
          Veja o que nossos atletas estão conquistando com o Korah
        </p>
      </div>

      {/* MARQUEE DINÂMICO - CARDS PEQUENOS E DELICADOS */}
      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap py-6">
          {doubledTestimonials.map((t, i) => (
            <div 
              key={i} 
              className="inline-block w-[300px] md:w-[380px] mx-3 bg-white border border-gray-100 p-7 rounded-[28px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 whitespace-normal"
            >
              <div className="flex flex-col h-full">
                {/* Métrica de Destaque Sutil */}
                <div className="flex justify-between items-start mb-6">
                  <div className="text-[#FF5A1F] opacity-30">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-black text-[#FF5A1F] italic leading-none">{t.metric}</div>
                    <div className="text-[8px] font-black text-gray-300 uppercase tracking-widest mt-1">{t.metricLabel}</div>
                  </div>
                </div>

                {/* Depoimento - Fonte Menor e Elegante */}
                <p className="text-base md:text-[17px] font-medium text-gray-600 leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>

                {/* Autor */}
                <div className="flex items-center gap-3 mt-auto pt-5 border-t border-gray-50">
                  <div className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-[10px] font-black text-gray-400">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-black uppercase italic leading-none">{t.author}</h4>
                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fades Laterais */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* PROVA SOCIAL - LARANJA CONFORME SOLICITADO */}
      <div className="mt-20 flex items-center justify-center gap-4">
        <div className="h-[1.5px] w-12 bg-[#FF5A1F]"></div>
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#FF5A1F] italic">
          Prova Social
        </span>
        <div className="h-[1.5px] w-12 bg-[#FF5A1F]"></div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
