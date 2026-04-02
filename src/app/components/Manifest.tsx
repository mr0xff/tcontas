import React from 'react';
import { ShieldCheck, Cpu, Globe } from 'lucide-react';
import { themeColors } from "../theme";

const AnniversaryManifesto = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* CABEÇALHO */}
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

        {/* CONTEÚDO INTEGRAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-8 text-lg leading-relaxed text-[#0A2540]/90 text-justify">
            <p>
              Em Abril de 2026, o Tribunal de Contas de Angola assinala 30 anos de existência ao serviço da República, três décadas marcadas pelo compromisso inabalável com a fiscalização das finanças públicas, a promoção da legalidade e o reforço da responsabilidade na gestão dos recursos do Estado.
            </p>
            <p>
              Instituído pela Lei n.º 5/96, de 12 de Abril, o Tribunal de Contas afirmou-se, ao longo do tempo, como um dos pilares fundamentais do Estado de Direito em Angola, contribuindo de forma decisiva para a consolidação da transparência, da boa gestão e da confiança pública.
            </p>
            <p>
              É neste contexto de maturidade institucional, dinamismo interno e crescente projecção internacional que se realizam as Jornadas Científicas alusivas ao 30.º aniversário do Tribunal de Contas de Angola, de 8 a 10 de Abril, no Palácio da Justiça, em Luanda.
            </p>
            <p>
              Sob o lema “30 Anos de Justiça Financeira: Modernização, Integridade e Cooperação”, este evento afirma-se como um espaço privilegiado de reflexão, partilha de conhecimento e diálogo institucional, reunindo magistrados, académicos, especialistas nacionais e internacionais e representantes de instituições congéneres.
            </p>
            
            <div className="py-6">
              <h4 className="font-black text-[#0A2540] uppercase tracking-widest mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-[#C9A347]" />
                Três Pilares Essenciais:
              </h4>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <Cpu className="text-[#C9A347] shrink-0" />
                  <span><strong>Modernização</strong>, como expressão da adaptação tecnológica e da inovação institucional;</span>
                </li>
                <li className="flex gap-4">
                  <ShieldCheck className="text-[#C9A347] shrink-0" />
                  <span><strong>Integridade</strong>, como fundamento da confiança pública e da responsabilidade na gestão dos recursos;</span>
                </li>
                <li className="flex gap-4">
                  <Globe className="text-[#C9A347] shrink-0" />
                  <span><strong>Cooperação</strong>, como caminho para o fortalecimento das relações institucionais, a nível nacional e internacional.</span>
                </li>
              </ul>
            </div>

            <p>
              Mais do que uma celebração, este momento representa uma oportunidade de olhar o percurso feito, consolidar o presente e projectar, com responsabilidade, os desafios que se colocam ao controlo externo das finanças públicas no século XXI.
            </p>
            <p>
              Hoje, o Tribunal de Contas de Angola é uma instituição moderna, em transformação contínua, que investe no capital humano, na qualificação técnica dos seus quadros e na inovação dos seus processos, afirmando-se igualmente no plano internacional, com destaque para a assunção da Presidência da OISC-CPLP.
            </p>

            <div className="pt-10 border-t border-gray-100">
              <p className="font-black text-[#0A2540] uppercase tracking-tighter text-2xl mb-4">
                Trinta anos depois, a missão mantém-se firme.
              </p>
              <div className="space-y-1 text-[#C9A347] font-bold uppercase italic tracking-widest">
                <p>• Fiscalizar com rigor.</p>
                <p>• Promover a transparência.</p>
                <p>• Servir melhor Angola.</p>
              </div>
              <p className="mt-6 font-black text-[#0A2540] uppercase tracking-widest">
                E o caminho continua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnniversaryManifesto;