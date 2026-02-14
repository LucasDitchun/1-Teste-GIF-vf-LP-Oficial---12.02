
import React from 'react';

const Giveaways: React.FC = () => {
  // URLs corrigidas fornecidas para os kits
  const kitImageUrl = "https://lh3.google.com/u/0/d/1g9FdKcaqUie_q-7pYsp4IeaKuKRPCGUY=w2940-h1476-iv1?auditContext=prefetch";
  const superKitImageUrl = "https://lh3.google.com/u/0/d/1TqJs7biPjBNGfaGUqNRW2YaT08Meu6Ii=w2940-h1476-iv1?auditContext=prefetch";

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block px-4 py-1 rounded-full bg-[#FF5A1F] text-white text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            🎁 Membros Fundadores
          </div>
          <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.9]">
            SORTEIOS <span className="text-[#FF5A1F]">EXCLUSIVOS</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto font-medium text-lg">
            Garanta sua vaga hoje e concorra a equipamentos de elite para levar sua corrida ao próximo nível.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Kit Korah ELITE */}
          <div className="lg:col-span-6 bg-[#111111] border border-white/5 rounded-[48px] p-8 md:p-12 flex flex-col group hover:border-[#FF5A1F]/40 transition-all overflow-hidden relative shadow-2xl">
             <div className="relative z-10 flex flex-col h-full">
                <div className="mb-10 w-full rounded-[32px] overflow-hidden bg-gradient-to-b from-white/5 to-transparent flex items-center justify-center min-h-[300px] md:min-h-[400px]">
                   <img 
                    src={kitImageUrl} 
                    alt="Kit Korah Elite" 
                    className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-105" 
                   />
                </div>
                
                <div className="space-y-4 mt-auto">
                   <h3 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter leading-none">
                     KIT KORAH <span className="text-[#FF5A1F]">ELITE</span>
                   </h3>
                   <div className="space-y-2 py-4 border-y border-white/5">
                      {[
                        "Camiseta Atleta Korah - Cor Preto",
                        "Camiseta Atleta Korah - Cor Branca",
                        "Top Feminino Atleta Korah - Cor Preto",
                        "Top Feminino Atleta Korah - Cor Branca"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-300 font-bold italic uppercase tracking-tight">
                           <span className="text-[#FF5A1F]">✅</span> {item}
                        </div>
                      ))}
                   </div>
                   <div className="pt-4 flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#FF5A1F] italic">Apenas para os 500 primeiros</span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-white px-3 py-1 bg-white/5 rounded-lg border border-white/10">10 Kits para sorteio</span>
                   </div>
                </div>
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#FF5A1F]/5 rounded-full blur-[100px] pointer-events-none"></div>
          </div>

          {/* Card 2: Combo Supremo - Kit + Adidas Adizero */}
          <div className="lg:col-span-6 bg-[#111111] border-2 border-[#FF5A1F]/30 rounded-[48px] p-8 md:p-12 flex flex-col group hover:border-[#FF5A1F] transition-all overflow-hidden relative shadow-2xl">
             <div className="relative z-10 flex flex-col h-full">
                <div className="mb-10 w-full rounded-[32px] overflow-hidden bg-gradient-to-b from-[#FF5A1F]/10 to-transparent flex items-center justify-center min-h-[300px] md:min-h-[400px]">
                   <img 
                    src={superKitImageUrl} 
                    alt="Kit Korah Elite + Adidas Adizero" 
                    className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-105" 
                   />
                </div>
                
                <div className="space-y-4 mt-auto">
                   <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-lg bg-[#FF5A1F] text-white text-[8px] font-black uppercase tracking-widest animate-pulse italic">Apenas 1 Sorteio</span>
                   </div>
                   <h3 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter leading-[0.95]">
                     KIT KORAH ELITE + <br/>
                     <span className="text-[#FF5A1F]">ADIDAS ADIZERO ADIOS PRO EVO</span>
                   </h3>
                   <div className="space-y-2 py-4 border-y border-white/10">
                      {[
                        "Tenis ADIZERO ADIOS PRO EVO",
                        "Camiseta Atleta Korah - Cor Preto",
                        "Camiseta Atleta Korah - Cor Branca",
                        "Top Feminino Atleta Korah - Cor Preto",
                        "Top Feminino Atleta Korah - Cor Branca"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-white font-black italic uppercase tracking-tight">
                           <span className="text-[#FF5A1F]">✅</span> {item}
                        </div>
                      ))}
                   </div>
                   <div className="pt-4 flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                         <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 italic">Lançamento Exclusivo</span>
                         <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F] animate-ping"></div>
                            <span className="text-[10px] font-black text-white uppercase italic">Sorteio Exclusivo</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#FF5A1F]/20 rounded-full blur-[120px] pointer-events-none"></div>
          </div>

        </div>
        
        <p className="text-center mt-16 text-gray-700 font-bold italic text-sm uppercase tracking-[0.3em]">
          Urgência: Menos de 40 vagas disponíveis para os sorteios
        </p>
      </div>
    </section>
  );
};

export default Giveaways;
