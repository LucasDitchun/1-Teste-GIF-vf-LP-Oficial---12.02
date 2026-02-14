
import React, { useCallback } from 'react';
import Hero from './components/Hero';
import Partners from './components/Partners';
import WhatIsKorah from './components/WhatIsKorah';
import WhyMostFail from './components/WhyMostFail';
import Features from './components/Features';
import WhatsAppMockup from './components/WhatsAppMockup';
import Community from './components/Community';
import Testimonials from './components/Testimonials';
import StatsSection from './components/StatsSection';
import CoachesSection from './components/CoachesSection';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  const logoUrl = "https://i.ibb.co/tTsg21hr/Logo-korah.png";
  const faqImageAbove = "https://i.ibb.co/6c9MdCKR/Chat-GPT-Image-10-de-fev-de-2026-21-09-15.png";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const KorahLogo = () => (
    <div className="flex items-center group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
      <img 
        src={logoUrl} 
        alt="KORAH" 
        className="h-7 md:h-9 w-auto object-contain" 
      />
    </div>
  );

  const navLinks = [
    { name: 'Benefícios', id: 'benefits' },
    { name: 'Como Funciona', id: 'how-it-works' },
    { name: 'Planos', id: 'pricing-section' },
    { name: 'Depoimentos', id: 'testimonials' },
    { name: 'FAQ', id: 'faq' }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#FF5A1F] selection:text-white">
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <KorahLogo />
          
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-400 hover:text-white transition-colors text-sm font-medium tracking-tight"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('pricing-section')}
              className="px-7 py-2.5 rounded-xl korah-gradient font-black text-sm hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-[#FF5A1F]/20 uppercase italic text-white"
            >
              Começar Agora
            </button>
          </div>
        </div>
      </nav>

      <main>
        <div id="hero"><Hero onCtaClick={() => scrollToSection('pricing-section')} /></div>
        <Partners />
        <div id="how-it-works"><WhatIsKorah /></div>
        <div id="benefits"><WhyMostFail /></div>
        <Features />
        <Community />
        <WhatsAppMockup onCtaClick={() => scrollToSection('pricing-section')} />
        <div id="testimonials"><Testimonials /></div>
        <StatsSection />
        <CoachesSection />
        <div id="pricing-section"><Pricing /></div>
        
        {/* Espaço para a imagem acima do FAQ */}
        <div className="bg-black py-12 flex justify-center">
          <div className="max-w-6xl mx-auto px-6">
            <img 
              src={faqImageAbove} 
              alt="IA Interface Korah" 
              className="w-full h-auto rounded-[32px] md:rounded-[56px] shadow-2xl border border-white/5"
            />
          </div>
        </div>

        <div id="faq"><FAQ /></div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
