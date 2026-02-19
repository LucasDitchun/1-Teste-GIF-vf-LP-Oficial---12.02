
import React from 'react';

interface PricingProps {
  onOpenModal: (plan: { name: string; price: string }) => void;
}

const Pricing: React.FC<PricingProps> = ({ onOpenModal }) => {
  const newFeatures = [
    "Coaching Korah IA 24/7 via WhatsApp",
    "Treinos 100% personalizados",
    "Planos estruturados de 8, 12 ou 16 semanas",
    "Ajustes em tempo real",
    "integração com Strava",
    "Feedback completo de todos os treinos",
    "Grupo exclusivo da comunidade",
    "Suporte direto pelo WhatsApp",
    "Histórico e plano sempre disponíveis",
    "Reembolso 100% garantido em 14 dias"
  ];

  const plans = [
    {
      name: "Plano Anual",
      price: "29,90",
      period: "/mês",
      description: "A escolha definitiva para atletas comprometidos com a performance total.",
      features: newFeatures,
      cta: "Assinar Anual",
      highlight: false,
      badge: "MELHOR VALOR"
    },
    {
      name: "Plano Semestral",
      price: "39,90",
      period: "/mês",
      description: "O melhor custo-benefício para quem busca resultados de médio prazo.",
      features: newFeatures,
      cta: "Assinar Semestral",
      highlight: true,
      badge: "MAIS VENDIDO"
    },
    {
      name: "Plano Mensal",
      price: "49,90",
      period: "/mês",
      description: "Ideal para quem quer testar a tecnologia e sentir a evolução imediata.",
      features: newFeatures,
      cta: "Assinar Mensal",
      highlight: false
    }
  ];

  return (
    <section id="pricing-section" className="py-24 md:py-32 relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20 space-y-4 px-2">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white leading-[1.1]">
            ESCOLHA SEU <span className="text-[#FF5A1F]">PLANO.</span>
          </h2>
          <p className="text-gray-400 font-medium text-base md:text-xl max-w-4xl mx-auto leading-relaxed">
            Treinos exclusivos, benefícios reais e acompanhamento 24/7 por menos que uma assessoria tradicional — evolua com quem vive a corrida como você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <div 
              key={i}
              className={`relative p-8 sm:p-10 rounded-[40px] md:rounded-[48px] border transition-all duration-500 group flex flex-col ${
                plan.highlight 
                ? 'bg-[#111] border-[#FF5A1F]/40 shadow-2xl shadow-[#FF5A1F]/10 lg:scale-105 z-10' 
                : 'bg-[#080808] border-white/5 hover:border-white/10'
              }`}
            >
              {plan.badge && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[9px] md:text-[10px] font-black uppercase italic tracking-widest text-white whitespace-nowrap ${plan.highlight ? 'korah-gradient' : 'bg-zinc-800 border border-white/10'}`}>
                  {plan.badge}
                </div>
              )}

              <div className="mb-8 md:mb-10 text-center lg:text-left">
                <h3 className="text-xl font-black italic uppercase text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center lg:justify-start gap-1">
                  <span className="text-lg font-bold text-gray-500">R$</span>
                  <span className="text-5xl md:text-6xl font-black italic tracking-tighter text-white">{plan.price}</span>
                  <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">{plan.period}</span>
                </div>
                <p className="mt-4 md:mt-6 text-gray-500 text-xs md:text-sm font-medium leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-3 md:space-y-4 mb-10 md:mb-12 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[10px] sm:text-[11px] md:text-xs font-bold italic uppercase tracking-tight text-gray-300">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#FF5A1F]/10 flex items-center justify-center text-[9px] md:text-[10px] text-[#FF5A1F] shrink-0">✓</div>
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onOpenModal({ name: plan.name, price: plan.price })}
                className={`w-full py-4 md:py-5 rounded-2xl md:rounded-3xl font-black text-base md:text-lg uppercase italic transition-all active:scale-95 ${
                  plan.highlight
                  ? 'korah-gradient text-white shadow-xl shadow-[#FF5A1F]/20 border-none hover:brightness-110'
                  : 'bg-white text-[#FF5A1F] border-2 border-[#FF5A1F] hover:bg-[#FF5A1F]/5 shadow-lg shadow-[#FF5A1F]/5'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:mt-16 text-center px-4">
          <p className="text-[9px] md:text-[10px] text-gray-700 font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">Pagamento Seguro via Stripe & Ebanx</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
