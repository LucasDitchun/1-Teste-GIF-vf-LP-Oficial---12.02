
import React, { useState } from 'react';
import { useScrollReveal, useScrollRevealStagger } from '../hooks/useScrollReveal';

const FAQ: React.FC = () => {
  const titleRef = useScrollReveal({ variant: 'fade-up' });
  const itemsRef = useScrollRevealStagger({ variant: 'fade-up', interval: 100 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Preciso de algum relógio específico?",
      a: "Não! A Korah funciona de forma independente. Você pode usar seu Garmin, Apple Watch, Strava ou até mesmo o GPS do celular. O importante é o feedback que você nos envia."
    },
    {
      q: "Como os 60 dias grátis funcionam?",
      a: "No plano semestral, você ganha os primeiros 60 dias por nossa conta. Se não gostar da experiência dentro desse período, pode cancelar sem qualquer cobrança."
    },
    {
      q: "Eu sou iniciante, a Korah serve para mim?",
      a: "Com certeza. Nossa IA adapta o volume e a intensidade para o seu nível atual, garantindo que você evolua sem lesões, seja para correr seu primeiro quilômetro ou uma maratona."
    },
    {
      q: "Posso cancelar a qualquer momento?",
      a: "Sim. No plano mensal não há fidelidade. No plano semestral, você tem a garantia de 60 dias e após isso a renovação é automática a cada ciclo."
    }
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#050505]">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-12 md:mb-16 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white leading-tight">
            DÚVIDAS <span className="text-[#FF5A1F]">FREQUENTES</span>
          </h2>
        </div>

        <div ref={itemsRef} className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} data-sr-child className="rounded-2xl md:rounded-3xl border border-white/5 bg-black overflow-hidden transition-all">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left hover:bg-white/[0.02] gap-4"
              >
                <span className="text-base md:text-lg font-black italic uppercase tracking-tight text-white leading-tight">{faq.q}</span>
                <span className={`text-[#FF5A1F] transition-transform duration-300 shrink-0 ${openIndex === i ? 'rotate-45' : ''}`}>
                  <svg width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 md:px-8 md:pb-8 text-gray-400 font-medium leading-relaxed text-sm md:text-base">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
