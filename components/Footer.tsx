
import React from 'react';

const Footer: React.FC = () => {
  const logoUrl = "https://i.ibb.co/tTsg21hr/Logo-korah.png";

  return (
    <footer className="py-20 border-t border-white/10 bg-black">
       <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 text-center md:text-left">
             <div className="col-span-2 space-y-6 flex flex-col items-center md:items-start">
                <div className="flex items-center">
                  <img src={logoUrl} alt="Korah Logo" className="h-10 w-auto object-contain" />
                </div>
                <p className="text-gray-500 max-w-sm leading-relaxed">
                  A inteligência artificial aplicada à sua performance. Corra mais longe, corra mais rápido, corra com a Korah.
                </p>
                
                {/* Ícones de Redes Sociais Sofisticados */}
                <div className="flex gap-4 pt-2">
                   <a 
                    href="https://instagram.com/korah.ia" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#FF5A1F] hover:bg-[#FF5A1F]/5 transition-all duration-300 group"
                    title="Siga no Instagram"
                   >
                     <svg className="w-5 h-5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                     </svg>
                   </a>
                   <a 
                    href="https://tiktok.com/@korah.ia" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#FF5A1F] hover:bg-[#FF5A1F]/5 transition-all duration-300 group"
                    title="Siga no TikTok"
                   >
                     <svg className="w-5 h-5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                     </svg>
                   </a>
                </div>
             </div>

             <div className="space-y-6">
                <h4 className="text-sm font-black uppercase tracking-widest text-[#FF5A1F]">Institucional</h4>
                <ul className="space-y-4 text-gray-500 font-medium">
                   <li><a href="#" className="hover:text-white transition-colors">Membros Fundadores</a></li>
                   <li><a href="https://app.korah.fit/legal/privacidade" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacidade</a></li>
                   <li><a href="https://app.korah.fit/legal/terms" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Termos de Uso</a></li>
                   <li><a href="https://app.korah.fit/legal/cookies" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Política de Cookies</a></li>
                </ul>
             </div>

             <div className="space-y-6">
                <h4 className="text-sm font-black uppercase tracking-widest text-[#FF5A1F]">Atendimento</h4>
                <ul className="space-y-4 text-gray-500 font-medium">
                   <li>
                     <a href="https://wa.me/5519982186025" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors block">
                       WhatsApp: +55 19 98218-6025
                     </a>
                   </li>
                   <li>
                     <a href="mailto:contato@korah.com" className="hover:text-white transition-colors block">
                       contato@korah.com
                     </a>
                   </li>
                </ul>
             </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
             <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">© 2026 KORAH - TODOS OS DIREITOS RESERVADOS</p>
             <p className="text-[10px] text-gray-600 font-black italic uppercase tracking-tighter">Evoluir é inevitável.</p>
          </div>
       </div>
    </footer>
  );
};

export default Footer;
