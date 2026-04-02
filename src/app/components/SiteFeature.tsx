import React from 'react';
import { 
  History, 
  CalendarDays, 
  Newspaper, 
  FileBox, 
  LayoutTemplate, 
  MonitorSmartphone 
} from 'lucide-react';
import { themeColors } from "../theme";

const SiteFeatures = () => {
  const features = [
    {
      icon: <History className="w-8 h-8" />,
      title: "Linha do Tempo Interativa",
      desc: "Uma viagem visual pelos marcos que moldaram a instituição, desde a sua génese até à atualidade."
    },
    {
      icon: <CalendarDays className="w-8 h-8" />,
      title: "Programa Científico",
      desc: "Acesso detalhado a preletores, temas e painéis das Jornadas, estruturado para uma consulta antecipada."
    },
    {
      icon: <Newspaper className="w-8 h-8" />,
      title: "Atualizações em Tempo Real",
      desc: "Área dedicada a notícias e conteúdos institucionais para acompanhar cada momento relevante do aniversário."
    },
    {
      icon: <FileBox className="w-8 h-8" />,
      title: "Repositório de Recursos",
      desc: "Placard digital com comunicações, relatórios e materiais científicos disponíveis para consulta pós-evento."
    },
    {
      icon: <LayoutTemplate className="w-8 h-8" />,
      title: "Galeria Multimédia",
      desc: "Registo visual completo em alta definição, integrado com o portal principal do Tribunal de Contas."
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8" />,
      title: "Plataforma Responsiva",
      desc: "Navegação intuitiva e acessível em qualquer dispositivo, refletindo a modernização digital da Corte."
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">
        
        {/* TÍTULO DA SECÇÃO */}
        <div className="text-center mb-20">
          <h2 
            className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6"
            style={{ color: themeColors.primary }}
          >
            O que encontrará <br />
            <span className="text-[#C9A347]">neste espaço</span>
          </h2>
          <div className="w-24 h-1 bg-[#C9A347] mx-auto mb-8" />
          <p className="max-w-2xl mx-auto text-[#0A2540]/70 leading-relaxed font-medium">
            Uma janela digital concebida para refletir a história, a atividade e a visão de futuro do Tribunal de Contas de Angola.
          </p>
        </div>

        {/* GRID DE FUNCIONALIDADES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 bg-white border border-gray-100 hover:shadow-2xl transition-all duration-500 rounded-sm relative overflow-hidden"
            >
              {/* Efeito de Dourado no Topo ao passar o mouse */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#C9A347] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="text-[#C9A347] mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              
              <h4 
                className="text-lg font-black uppercase tracking-tight mb-4"
                style={{ color: themeColors.primary }}
              >
                {item.title}
              </h4>
              
              <p className="text-sm text-[#0A2540]/60 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* MENSAGEM FINAL / STATUS TÉCNICO */}
        <div className="mt-20 p-8 border border-[#0A2540]/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             <span className="text-xs font-bold uppercase tracking-widest text-[#0A2540]">
               Plataforma em Atualização Permanente
             </span>
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] font-black text-[#C9A347]">
            Tribunal de Contas de Angola • 30 Anos
          </p>
        </div>

      </div>
    </section>
  );
};

export default SiteFeatures;