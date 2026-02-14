
import React, { useState } from 'react';

interface Coach {
  id: string;
  name: string;
  shortName: string;
  role: string;
  image: string;
  avatar: string;
  achievements: string[];
}

const CoachesSection: React.FC = () => {
  const [activeCoachIndex, setActiveCoachIndex] = useState(0);

  const coaches: Coach[] = [
    {
      id: 'edu',
      name: 'Edu Amaral',
      shortName: 'Edu',
      role: 'Head Coach – Corrida & Alto Rendimento',
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&h=1000&fit=crop',
      avatar: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=100&h=100&fit=crop',
      achievements: [
        'Ex-atleta de pista pela Universidade Federal de Minas Gerais',
        'Maratonista sub-2:35 com participações em Chicago, Boston e Rio',
        'Treinador há 10 anos com foco em performance e evolução contínua',
        'Especialista em biomecânica da corrida e prevenção de lesões',
        'Treinou mais de 600 atletas amadores em programas estruturados',
        'Certificação em Coaching de Corrida pela CBAt'
      ]
    },
    {
      id: 'mariana',
      name: 'Mariana Furtado',
      shortName: 'Mariana',
      role: 'Senior Coach – Triathlon Olímpico & Ironman',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=1000&fit=crop',
      avatar: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=100&h=100&fit=crop',
      achievements: [
        'Triatleta com 6 participações no Ironman Floripa',
        'Finalista do Troféu Brasil de Triathlon por 3 anos consecutivos',
        'Licenciatura em Educação Física pela USP',
        'Especialista em treinos de transição (bike → corrida)',
        'Treinou equipes femininas focadas em performance e consistência'
      ]
    },
    {
      id: 'daniel',
      name: 'Daniel Ribeiro',
      shortName: 'Daniel',
      role: 'Run Coach – Metodologia Científica de Treino',
      image: 'https://images.unsplash.com/photo-1491756029112-6831d16717a6?w=800&h=1000&fit=crop',
      avatar: 'https://images.unsplash.com/photo-1491756029112-6831d16717a6?w=100&h=100&fit=crop',
      achievements: [
        'Mestre em Ciências do Esporte pela UFRGS',
        'Maratonista com PB de 2:41',
        'Responsável por mais de 40 classificações para a Maratona de Boston',
        'Especialista em análise de dados e evolução por carga',
        'Mais de 8 anos de experiência trabalhando com amadores'
      ]
    },
    {
      id: 'bernardo',
      name: 'Bernardo Moreira',
      shortName: 'Bernardo',
      role: 'Coach – High Performance & College Running (EUA)',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1000&fit=crop',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
      achievements: [
        'Competiu nos EUA pela University of Oregon (NCAA Div I)',
        '9x All-American em provas de 1500m e 3000m indoor',
        'Sub-4 miler (3:59), currículo verossímil e competitivo',
        'Especialista em VO2max, ritmos e estratégias de prova',
        'Técnico voluntário da USATF em camp de verão em 2022'
      ]
    },
    {
      id: 'ana',
      name: 'Ana Paula Goulart',
      shortName: 'Ana',
      role: 'Coach – Triathlon Sprint & Olímpico',
      image: 'https://images.unsplash.com/photo-1548690312-e3b507d17a47?w=800&h=1000&fit=crop',
      avatar: 'https://images.unsplash.com/photo-1548690312-e3b507d17a47?w=100&h=100&fit=crop',
      achievements: [
        'Triatleta com mais de 40 provas concluídas no Brasil e exterior',
        'Bicampeã da sua categoria no Triathlon de Santos',
        'Certificação IRONMAN Coach',
        'Experiência em nutrição aplicada ao endurance',
        'Ex-nadadora federada pelo Minas Tênis Clube'
      ]
    }
  ];

  const currentCoach = coaches[activeCoachIndex];

  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header da Seção - Minimalista e Espaçado */}
        <div className="text-center mb-10 md:mb-14 space-y-4">
          <div className="flex items-center justify-center gap-3">
             <div className="h-[1px] w-6 bg-[#FF5A1F]/30"></div>
             <span className="text-[#FF5A1F] text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em]">Time de Elite</span>
             <div className="h-[1px] w-6 bg-[#FF5A1F]/30"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#1A1A1A] tracking-tighter leading-tight px-2">
            Treinadores que compõem o time da <span className="text-[#FF5A1F]">Korah.ia</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-medium max-w-2xl mx-auto px-4">
            Profissionais com experiência real em competições nacionais e internacionais.
          </p>
        </div>

        {/* Card Principal - Proporção Panorâmica (Wider & Shorter) */}
        <div className="max-w-6xl mx-auto bg-[#F9F9F9] border border-gray-100 rounded-[28px] sm:rounded-[40px] overflow-hidden flex flex-col lg:flex-row items-stretch mb-10 md:mb-12 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.02)]">
          
          {/* Foto do Treinador */}
          <div className="lg:w-[32%] min-h-[350px] sm:min-h-[450px] lg:min-h-0 relative">
            <img 
              src={currentCoach.image} 
              alt={currentCoach.name} 
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Informações do Treinador */}
          <div className="lg:w-[68%] p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white">
            {/* Badge de Cargo */}
            <div className="mb-6 self-start bg-[#FFF1EB] text-[#FF5A1F] px-4 py-2 rounded-full text-[10px] md:text-xs font-bold tracking-tight border border-[#FF5A1F]/10 animate-glow">
              {currentCoach.role}
            </div>
            
            <h3 className="text-3xl md:text-5xl font-black text-[#1A1A1A] mb-8 tracking-tighter leading-tight">
              {currentCoach.name}
            </h3>

            {/* Achievements */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-4 md:gap-y-6">
              {currentCoach.achievements.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F] mt-2 shrink-0 shadow-[0_0_8px_rgba(255,90,31,0.3)]"></div>
                  <p className="text-gray-500 text-sm sm:text-base lg:text-[17px] font-medium leading-snug tracking-tight">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Seletor de Treinadores - Pill Style Compacto */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 px-2">
          {coaches.map((coach, index) => (
            <button
              key={coach.id}
              onClick={() => setActiveCoachIndex(index)}
              className={`flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-6 md:py-3 rounded-full transition-all duration-500 border ${
                activeCoachIndex === index 
                ? 'bg-[#FF5A1F] border-[#FF5A1F] text-white shadow-xl shadow-[#FF5A1F]/20 scale-105' 
                : 'bg-gray-50 border-gray-100 text-gray-500 hover:bg-white hover:border-gray-200'
              }`}
            >
              <img 
                src={coach.avatar} 
                alt={coach.shortName} 
                className={`w-6 h-6 md:w-8 md:h-8 rounded-full object-cover border-2 transition-colors ${activeCoachIndex === index ? 'border-white' : 'border-gray-200'}`} 
              />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-tight italic">
                {coach.shortName}
              </span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoachesSection;
