import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Data Alvo: 08 de Abril de 2026, 09h00 (Recepção dos Convidados)
const TARGET_DATE = new Date("2026-04-08T09:00:00").getTime();

// --- 1. Sub-componente para o Cartão Individual (o Segredo do Flip) ---
const FlipCard = ({ value, label }: { value: number; label: string }) => {
  const formattedValue = String(value).padStart(2, "0");

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-24 md:w-28 md:h-32 bg-[#0A2540] rounded-xl shadow-2xl overflow-hidden group border border-[#C9A347]/20">
        
        {/* A. Sombra e Efeito de Vidro de Fundo */}
        <div className="absolute inset-0 bg-[#0A2540] backdrop-blur-sm opacity-90" />

        {/* B. A "Linha de Corte" no Centro da Placa (Efeito Mecânico) */}
        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-white/10 z-20" />

        {/* C. ANIMAÇÃO DE FLIP (Uso do AnimatePresence para o valor antigo/novo) */}
        <AnimatePresence mode="popLayout">
          <motion.span
            key={formattedValue} // Chave única força o re-render e animação
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 120, // Rigidez da mola (efeito de queda metálica)
              damping: 14,    // Amortecimento
              duration: 0.6,
            }}
            className="absolute inset-0 flex items-center justify-center text-5xl md:text-6xl font-extrabold text-[#C9A347] tabular-nums tracking-tight z-10"
            style={{ 
              fontFamily: "'Roboto', sans-serif",
              // Pequeno gradient no texto para parecer metal dourado
              backgroundImage: "linear-gradient(180deg, #E5C374 0%, #C9A347 50%, #B28B32 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            {formattedValue}
          </motion.span>
        </AnimatePresence>

        {/* D. Glow Effect no Hover (Interatividade) */}
        <div className="absolute inset-0 bg-[#C9A347]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
        
        {/* E. Borda de Acrim (Glow permanente) */}
        <div className="absolute -inset-px rounded-xl border border-[#C9A347]/10" />
      </div>

      {/* F. Rótulo (Dias, Horas, etc.) */}
      <span 
        className="mt-3 text-[#0A2540] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase opacity-70"
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
        {label}
      </span>
    </div>
  );
};

// --- 2. Componente Principal do Countdown ---
export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(TARGET_DATE - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const distance = TARGET_DATE - Date.now();
      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft(0);
      } else {
        setTimeLeft(distance);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms: number) => {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);

    return [
      { label: "Dias", value: days },
      { label: "Horas", value: hours },
      { label: "Minutos", value: minutes },
      { label: "Segundos", value: seconds },
    ];
  };

  const timeData = formatTime(timeLeft);

  return (
    <div className="flex flex-col items-center my-16">
      
      {/* Título de Introdução (Opcional, mas dá contexto) */}
      <div className="flex items-center gap-4 mb-10 text-center">
          <div className="h-px w-12 bg-[#C9A347]/50" />
          <p className="text-[#0A2540] text-sm font-semibold tracking-wider uppercase opacity-80" style={{ fontFamily: "'Roboto', sans-serif" }}>
            A Contagem para os <span className="text-[#C9A347]">30 Anos</span> Começou
          </p>
          <div className="h-px w-12 bg-[#C9A347]/50" />
      </div>

      {/* --- GRID DE CONTAGEW --- */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {timeData.map((item, index) => (
          <FlipCard key={index} value={item.value} label={item.label} />
        ))}
      </div>
      {/* --- FIM DO GRID --- */}

    </div>
  );
}