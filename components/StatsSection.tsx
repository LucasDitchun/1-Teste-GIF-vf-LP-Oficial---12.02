
import React, { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  shouldFormat?: boolean;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000, suffix = "", shouldFormat = false }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function: easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  const formatNumber = (num: number) => {
    if (shouldFormat) {
      return num.toLocaleString('pt-BR');
    }
    return num;
  };

  return (
    <span ref={countRef}>
      {formatNumber(count)}{suffix}
    </span>
  );
};

const StatsSection: React.FC = () => {
  const headlineRef = useScrollReveal({ variant: 'fade-up' });
  const cardRef = useScrollReveal({ variant: 'scale-up', delay: 100 });
  const manifestoRef = useScrollReveal({ variant: 'fade-up', delay: 200 });

  const stats = [
    { target: 200, suffix: "+", label: "Atletas ativos" },
    { target: 32, suffix: "%", label: "Melhora média" },
    { target: 15420, label: "Km Rodados", shouldFormat: true },
    { target: 486, label: "Treinos/Semana" },
    { target: 98, suffix: "%", label: "Taxa de satisfação" }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Headline Externa - Impacto Máximo - Ajustado leading */}
        <div ref={headlineRef} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-[#1A1A1A] tracking-tighter leading-[1.1] md:leading-none uppercase italic">
            QUEM TREINA COM A <br className="md:hidden" />
            KORAH <span className="text-[#FF5A1F]">VENCE.</span>
          </h2>
        </div>

        {/* Container do Card */}
        <div ref={cardRef} className="bg-[#F8F8F8] border border-gray-100 rounded-[32px] sm:rounded-[40px] md:rounded-[64px] p-8 md:p-20 shadow-sm">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-10 md:gap-y-12 lg:gap-4 text-center items-center">
            {stats.map((stat, i) => (
              <div key={i} className={`flex flex-col items-center ${i === stats.length - 1 && stats.length % 2 !== 0 ? 'col-span-2 lg:col-span-1' : ''}`}>
                <span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-[#FF5A1F] italic tracking-tighter leading-none mb-3">
                  <CountUp 
                    end={stat.target} 
                    suffix={stat.suffix} 
                    shouldFormat={stat.shouldFormat} 
                  />
                </span>
                <span className="text-[9px] md:text-xs font-bold text-gray-500 uppercase tracking-[0.15em] px-2 leading-tight max-w-[120px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Divider Sutil */}
          <div className="w-full h-[1px] bg-gray-200/60 max-w-5xl mx-auto my-12 md:my-20"></div>

          {/* Manifesto & Value Prop */}
          <div ref={manifestoRef} className="max-w-4xl mx-auto text-center px-2">
            <p className="text-base md:text-2xl text-gray-600 font-medium leading-relaxed mb-8 md:mb-12">
              Não acreditamos em mágica. Acreditamos em <span className="text-black font-extrabold">dados, consistência e recuperação inteligente.</span> Junte-se à Elite que escolheu treinar com a Korah.
            </p>
            
            <div className="pt-4">
              <h3 className="text-lg md:text-4xl font-bold text-[#FF5A1F] leading-tight tracking-tight">
                Plano inteligente que reduz seu pace médio em 8% nas primeiras 6 semanas.
              </h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
