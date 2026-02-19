
import React, { useState, useEffect } from 'react';

// ─── Google Apps Script ───────────────────────────────────────────────────────
// Cole aqui a URL gerada ao publicar o Apps Script como Web App.
// Veja as instruções no README ou pergunte ao dev.
// ─────────────────────────────────────────────────────────────────────────────
const APPS_SCRIPT_URL = 'YOUR_APPS_SCRIPT_DEPLOYMENT_URL';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  planPrice: string;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose, planName, planPrice }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  // Bloqueia scroll do body quando modal estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Fecha com Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    setEmail('');
    setIsSuccess(false);
    setError('');
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setError('Por favor, insira um email válido.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Envia via Google Apps Script (sem API key).
      // O script recebe os parâmetros e envia email pelo Gmail da conta Google.
      // mode: 'no-cors' é necessário pois o Apps Script não retorna cabeçalhos CORS.
      const params = new URLSearchParams({
        user_email: email,
        plan_name: planName,
        plan_price: `R$ ${planPrice}/mês`,
      });

      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: params,
      });

      // Com no-cors não conseguimos ler a resposta, mas a requisição foi enviada.
      setIsSuccess(true);
    } catch (err) {
      console.error('Erro ao enviar:', err);
      setError('Não foi possível enviar. Verifique sua conexão e tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-lg"
        onClick={handleClose}
      />

      {/* Card */}
      <div
        className="relative bg-[#0A0A0A] border border-white/10 rounded-[32px] p-8 md:p-12 max-w-md w-full shadow-2xl shadow-black/60"
        style={{ animation: 'modalIn 0.25s cubic-bezier(0.34,1.56,0.64,1) forwards' }}
        onClick={(e) => e.stopPropagation()}
      >
        <style>{`
          @keyframes modalIn {
            from { opacity: 0; transform: scale(0.92) translateY(16px); }
            to   { opacity: 1; transform: scale(1) translateY(0); }
          }
        `}</style>

        {/* Botão fechar */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-gray-500 hover:text-white transition-all"
          aria-label="Fechar"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* ── Estado: Formulário ── */}
        {!isSuccess ? (
          <>
            {/* Badge do plano */}
            <div className="flex justify-center mb-6">
              <span className="px-4 py-1.5 rounded-full bg-[#FF5A1F]/10 border border-[#FF5A1F]/25 text-[#FF5A1F] text-[11px] font-black uppercase tracking-widest">
                {planName} — R$ {planPrice}/mês
              </span>
            </div>

            <div className="text-center mb-8 space-y-3">
              <h3
                id="modal-title"
                className="text-2xl md:text-3xl font-black italic uppercase text-white leading-tight"
              >
                Entre na{' '}
                <span className="text-[#FF5A1F]">lista de espera</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                A Korah está em beta fechado. Deixe seu email e seja o primeiro a saber quando abrirmos as vagas.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(''); }}
                  placeholder="seu@email.com"
                  autoFocus
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-600 text-sm font-medium focus:outline-none focus:border-[#FF5A1F]/60 focus:ring-1 focus:ring-[#FF5A1F]/30 transition-all"
                />
                {error && (
                  <p className="mt-2 text-[#FF5A1F] text-xs font-semibold flex items-center gap-1.5">
                    <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    {error}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl korah-gradient font-black text-base uppercase italic text-white shadow-xl shadow-[#FF5A1F]/20 hover:brightness-110 transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="3"/>
                      <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"/>
                    </svg>
                    Enviando…
                  </>
                ) : (
                  'Garantir minha vaga'
                )}
              </button>
            </form>

            <p className="mt-4 text-center text-[10px] text-gray-700 font-medium">
              Sem spam. Somente novidades sobre o lançamento.
            </p>
          </>
        ) : (
          /* ── Estado: Sucesso ── */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full korah-gradient flex items-center justify-center mx-auto shadow-xl shadow-[#FF5A1F]/30">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-black italic uppercase text-white leading-tight">
                Você está{' '}
                <span className="text-[#FF5A1F]">dentro!</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                Você entrou para a lista de espera do Korah. Aguarde o contato para nosso beta aberto.
              </p>
            </div>

            <button
              onClick={handleClose}
              className="mt-2 px-8 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-bold uppercase italic tracking-wide transition-all active:scale-95"
            >
              Fechar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaitlistModal;
