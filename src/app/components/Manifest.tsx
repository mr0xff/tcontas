import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Globe, ArrowRight } from 'lucide-react';
import { themeColors } from "../theme";

const AnniversaryManifesto = () => {
  const pillars = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Modernização",
      desc: "Expressão da adaptação tecnológica e da inovação institucional."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Integridade",
      desc: "Fundamento da confiança pública e da responsabilidade na gestão."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Cooperação",
      desc: "Fortalecimento das relações institucionais nacionais e internacionais."
    }
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* CABEÇALHO COM A CORES DO TEMA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-[#C9A347]" />
              <span className="text-[#0A2540] font-black tracking-[0.3em] uppercase text-xs">
                1996 — 2026
              </span>
            </div>
            <h2 
              className="text-5xl md:text-7xl font-black leading-tight tracking-tighter"
              style={{ color: themeColors.primary }}
            >
              30 ANOS DE <br />
              <span 
                style={{ 
                  backgroundImage: "linear-gradient(180deg, #F0D492 0%, #C9A347 50%, #8A6D29 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                JUSTIÇA
              </span> FINANCEIRA
            </h2>
          </div>
          <div className="border-l-4 border-[#C9A347] pl-8 py-2">
            <p className="text-xl md:text-2xl font-bold text-[#0A2540] leading-tight uppercase italic tracking-tight">
              Modernização. <br />Integridade. Cooperação.
            </p>
          </div>
        </div>

        {/* CONTEÚDO PRINCIPAL (MANIFESTO INTEGRAL) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 space-y-8 text-lg leading-relaxed text-[#0A2540]/80">
            <p className="font-medium text-[#0A2540]">
              Em Abril de 2026, o Tribunal de Contas de Angola assinala 30 anos de existência ao serviço da República, três décadas marcadas pelo compromisso inabalável com a fiscalização das finanças públicas.
            </p>
            <p>
              Instituído pela <span className="font-bold text-[#0A2540]">Lei n.º 5/96, de 12 de Abril</span>, o Tribunal afirmou-se como um dos pilares fundamentais do Estado de Direito em Angola, contribuindo para a consolidação da transparência e da confiança pública.
            </p>
            <p className="text-sm border-t border-[#C9A347]/20 pt-8">
              É neste contexto de maturidade institucional que se realizam as <span className="font-bold">Jornadas Científicas</span>, de 8 a 10 de Abril, no Palácio da Justiça, em Luanda, reafirmando uma visão estratégica ancorada na inovação e no rigor.
            </p>
            
            {/* TAGLINE FINAL */}
            <div className="flex flex-col gap-2 pt-4">
               <span className="text-[#C9A347] font-black text-xs tracking-widest uppercase">A missão mantém-se firme:</span>
               <div className="flex flex-wrap gap-x-6 gap-y-2 text-[#0A2540] font-black text-sm uppercase italic">
                  <span>• Fiscalizar com rigor</span>
                  <span>• Promover a transparência</span>
                  <span>• Servir melhor Angola</span>
               </div>
            </div>
          </div>

          {/* CARDS LATERAIS (PILARES) - USANDO O AZUL DO TEMA */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {pillars.map((p, i) => (
              <div 
                key={i} 
                className="p-8 transition-all duration-500 border-b-2 border-transparent hover:border-[#C9A347]"
                style={{ backgroundColor: themeColors.primary }}
              >
                <div className="text-[#C9A347] mb-4">
                  {p.icon}
                </div>
                <h4 className="text-white text-lg font-black uppercase tracking-widest mb-2">
                  {p.title}
                </h4>
                <p className="text-white/60 text-sm leading-snug">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnniversaryManifesto;