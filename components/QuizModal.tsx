
import React, { useState } from 'react';
import { QuizStep, LeadData } from '../types';

interface QuizModalProps {
  onClose: () => void;
}

const QuizModal: React.FC<QuizModalProps> = ({ onClose }) => {
  const [step, setStep] = useState<QuizStep>(QuizStep.NAME);
  const [data, setData] = useState<LeadData>({
    nome: '',
    dataNascimento: '',
    whatsapp: '',
    email: '',
    genero: '',
    tamanhoCamiseta: '',
    tamanhoTop: '',
    tamanhoTenis: ''
  });

  const totalSteps = 7;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < QuizStep.SHOE) setStep(step + 1);
    else setStep(QuizStep.SUCCESS);
  };

  const handleBack = () => {
    if (step > QuizStep.NAME) setStep(step - 1);
  };

  const updateField = (field: keyof LeadData, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const renderContent = () => {
    switch(step) {
      case QuizStep.NAME:
        return (
          <div className="step-enter space-y-6">
            <h2 className="text-3xl font-black italic uppercase leading-tight">Para começar, qual seu <span className="text-[#FF5A1F]">nome completo</span>?</h2>
            <input 
              type="text" autoFocus
              className="w-full bg-transparent border-b-2 border-white/20 py-4 text-2xl font-bold focus:border-[#FF5A1F] outline-none transition-all placeholder:text-white/5"
              placeholder="Digite seu nome..."
              value={data.nome}
              onChange={(e) => updateField('nome', e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && data.nome && handleNext()}
            />
          </div>
        );
      case QuizStep.BIRTH:
        return (
          <div className="step-enter space-y-6">
            <h2 className="text-3xl font-black italic uppercase leading-tight">Sua <span className="text-[#FF5A1F]">data de nascimento</span>?</h2>
            <input 
              type="date" autoFocus
              className="w-full bg-transparent border-b-2 border-white/20 py-4 text-2xl font-bold focus:border-[#FF5A1F] outline-none transition-all text-white"
              value={data.dataNascimento}
              onChange={(e) => updateField('dataNascimento', e.target.value)}
            />
          </div>
        );
      case QuizStep.WHATSAPP:
        return (
          <div className="step-enter space-y-6">
            <h2 className="text-3xl font-black italic uppercase leading-tight">Seu <span className="text-[#FF5A1F]">WhatsApp</span> com DDD?</h2>
            <p className="text-gray-500 font-medium">É por aqui que você receberá seus treinos. 📱</p>
            <input 
              type="tel" autoFocus
              className="w-full bg-transparent border-b-2 border-white/20 py-4 text-2xl font-bold focus:border-[#FF5A1F] outline-none transition-all placeholder:text-white/5"
              placeholder="(00) 00000-0000"
              value={data.whatsapp}
              onChange={(e) => updateField('whatsapp', e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && data.whatsapp && handleNext()}
            />
          </div>
        );
      case QuizStep.EMAIL:
        return (
          <div className="step-enter space-y-6">
            <h2 className="text-3xl font-black italic uppercase leading-tight">Seu melhor <span className="text-[#FF5A1F]">e-mail</span>?</h2>
            <input 
              type="email" autoFocus
              className="w-full bg-transparent border-b-2 border-white/20 py-4 text-2xl font-bold focus:border-[#FF5A1F] outline-none transition-all placeholder:text-white/5"
              placeholder="seu@email.com"
              value={data.email}
              onChange={(e) => updateField('email', e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && data.email && handleNext()}
            />
          </div>
        );
      case QuizStep.GENDER:
        return (
          <div className="step-enter space-y-8">
            <h2 className="text-3xl font-black italic uppercase leading-tight">Você se identifica como:</h2>
            <div className="grid grid-cols-2 gap-4">
              {['Masculino', 'Feminino'].map(gender => (
                <button
                  key={gender}
                  onClick={() => { updateField('genero', gender); handleNext(); }}
                  className={`py-8 rounded-2xl border-2 font-black transition-all text-xl uppercase italic ${data.genero === gender ? 'border-[#FF5A1F] bg-[#FF5A1F] text-white shadow-lg shadow-[#FF5A1F]/20' : 'border-white/10 bg-white/5 hover:border-white/30'}`}
                >
                  {gender === 'Masculino' ? '♂ Homem' : '♀ Mulher'}
                </button>
              ))}
            </div>
          </div>
        );
      case QuizStep.CLOTHING:
        const isMale = data.genero === 'Masculino';
        return (
          <div className="step-enter space-y-8">
            <h2 className="text-3xl font-black italic uppercase leading-tight">
              Qual o tamanho do seu <span className="text-[#FF5A1F]">{isMale ? 'Camiseta' : 'Top'}</span>?
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
              {['PP', 'P', 'M', 'G', 'GG'].map(size => (
                <button
                  key={size}
                  onClick={() => { 
                    updateField(isMale ? 'tamanhoCamiseta' : 'tamanhoTop', size); 
                    handleNext(); 
                  }}
                  className={`py-4 rounded-2xl border-2 font-black transition-all ${
                    (isMale ? data.tamanhoCamiseta : data.tamanhoTop) === size 
                    ? 'border-[#FF5A1F] bg-[#FF5A1F] text-white shadow-lg shadow-[#FF5A1F]/20' 
                    : 'border-white/10 bg-white/5 hover:border-white/30'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        );
      case QuizStep.SHOE:
        return (
          <div className="step-enter space-y-8">
            <h2 className="text-3xl font-black italic uppercase leading-tight">E o número do seu <span className="text-[#FF5A1F]">tênis</span>?</h2>
            <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
              {[34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45].map(size => (
                <button
                  key={size}
                  onClick={() => { updateField('tamanhoTenis', size.toString()); }}
                  className={`py-3 rounded-xl border-2 font-bold transition-all ${data.tamanhoTenis === size.toString() ? 'border-[#FF5A1F] bg-[#FF5A1F] text-white shadow-lg shadow-[#FF5A1F]/20' : 'border-white/10 bg-white/5 hover:border-white/30'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        );
      case QuizStep.SUCCESS:
        return (
          <div className="step-enter text-center py-6 space-y-8">
            <div className="w-24 h-24 korah-gradient rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce shadow-xl shadow-[#FF5A1F]/40">
               <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="white" />
               </svg>
            </div>
            <h2 className="text-4xl font-black italic uppercase tracking-tighter">VAGA <span className="text-[#FF5A1F]">GARANTIDA!</span></h2>
            <div className="space-y-4">
              <p className="text-gray-400 text-lg font-medium">Parabéns, {data.nome.split(' ')[0]}! Você agora é um <b>Membro Fundador Korah</b>.</p>
              <p className="text-sm text-gray-500 max-w-sm mx-auto">Em breve, nossa equipe entrará em contato via WhatsApp para liberar seus 60 dias de treino grátis.</p>
            </div>
            <button 
              onClick={onClose} 
              className="w-full py-5 rounded-2xl bg-white text-black font-black text-xl hover:bg-gray-200 transition-all uppercase italic shadow-xl"
            >
              Finalizar
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/98 backdrop-blur-xl">
      <div className="w-full max-w-xl bg-[#0d0d0d] border border-white/10 rounded-[40px] p-8 md:p-14 shadow-2xl relative overflow-hidden">
        {step !== QuizStep.SUCCESS && (
          <>
            <div className="absolute top-0 left-0 w-full h-1.5 bg-white/5">
              <div className="h-full korah-gradient transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
            <button onClick={onClose} className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div className="mb-12">
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FF5A1F]">Passo {step} de {totalSteps}</span>
            </div>
          </>
        )}

        <div className="min-h-[340px] flex flex-col justify-center">
          {renderContent()}
        </div>

        {step !== QuizStep.SUCCESS && (
          <div className="mt-12 flex gap-4">
            {step > QuizStep.NAME && (
              <button onClick={handleBack} className="px-8 py-5 rounded-2xl border-2 border-white/10 text-gray-400 font-bold text-sm uppercase italic hover:bg-white/5">
                Voltar
              </button>
            )}
            <button 
              onClick={handleNext} 
              disabled={
                (step === QuizStep.NAME && !data.nome) || 
                (step === QuizStep.WHATSAPP && !data.whatsapp) ||
                (step === QuizStep.GENDER && !data.genero)
              }
              className="flex-1 py-5 rounded-2xl korah-gradient font-black text-xl btn-hover uppercase italic disabled:opacity-50 text-white"
            >
              {step === QuizStep.SHOE ? 'Garantir minha vaga' : 'Próximo'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizModal;