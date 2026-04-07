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
  return (
    <section className="py-24 px-6 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">
        
        {/* TÍTULO DA SECÇÃO */}
        <div className="mb-16">
          <h2 
            className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6"
            style={{ color: themeColors.primary }}
          >
            O QUE ENCONTRARÁ <br />
            <span className="text-[#C9A347]">NESTE ESPAÇO</span>
          </h2>
          <div className="w-24 h-1 bg-[#C9A347] mb-8" />
          
          <div className="max-w-4xl text-[#0A2540]/80 leading-relaxed space-y-4 font-medium">
            <p>
              Ao aceder a este microsite dedicado às Jornadas Científicas dos 30 anos do Tribunal de Contas de Angola, o visitante é imediatamente acolhido por uma mensagem de boas-vindas, que introduz o espírito desta celebração e o significado deste momento histórico para a instituição e para o país.
            </p>
          </div>
        </div>

        {/* GRID DE FUNCIONALIDADES (TEXTO INTEGRAL) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Linha do Tempo */}
          <div className="p-8 bg-white border border-gray-100 shadow-sm">
            <History className="text-[#C9A347] mb-6 w-10 h-10" />
            <p className="text-sm text-[#0A2540]/80 leading-relaxed">
              No primeiro contacto, destaca-se uma <strong>linha do tempo interactiva</strong>, concebida para oferecer, de forma clara e envolvente, uma visão sintética da evolução do Tribunal de Contas — desde a sua génese até à actualidade. Em poucos passos, o utilizador percorre os principais marcos que moldaram a instituição e consolidaram o seu papel como guardião da legalidade financeira.
            </p>
          </div>

          {/* Programa */}
          <div className="p-8 bg-white border border-gray-100 shadow-sm">
            <CalendarDays className="text-[#C9A347] mb-6 w-10 h-10" />
            <p className="text-sm text-[#0A2540]/80 leading-relaxed">
              Neste espaço digital, encontrará também o <strong>programa completo e detalhado das Jornadas Científicas</strong>, com a identificação dos prelectores, temas e painéis, permitindo uma leitura estruturada e antecipada dos conteúdos que marcam esta celebração.
            </p>
          </div>

          {/* Notícias */}
          <div className="p-8 bg-white border border-gray-100 shadow-sm">
            <Newspaper className="text-[#C9A347] mb-6 w-10 h-10" />
            <p className="text-sm text-[#0A2540]/80 leading-relaxed">
              O microsite integra ainda uma área dedicada a <strong>notícias e conteúdos institucionais</strong>, assegurando o acompanhamento contínuo das actividades, anúncios e momentos relevantes associados ao 30.º aniversário do Tribunal.
            </p>
          </div>

          {/* Placard de Recursos */}
          <div className="p-8 bg-white border border-gray-100 shadow-sm lg:col-span-2">
            <FileBox className="text-[#C9A347] mb-6 w-10 h-10" />
            <div className="text-sm text-[#0A2540]/80 leading-relaxed">
              <p className="mb-4">
                Pensando no legado deste evento, foi igualmente concebido um <strong>placard de recursos e publicações</strong>, que funcionará como repositório pós-evento, onde estarão disponíveis:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 italic">
                <li>• prelecções e comunicações apresentadas;</li>
                <li>• relatórios e documentos institucionais;</li>
                <li>• currículos dos oradores;</li>
                <li>• e demais materiais de interesse científico e institucional.</li>
              </ul>
            </div>
          </div>

          {/* Galeria */}
          <div className="p-8 bg-white border border-gray-100 shadow-sm">
            <LayoutTemplate className="text-[#C9A347] mb-6 w-10 h-10" />
            <p className="text-sm text-[#0A2540]/80 leading-relaxed">
              Complementarmente, o utilizador poderá aceder a uma <strong>galeria multimédia</strong>, integrada com o site principal do Tribunal, reunindo imagens, vídeos e registos visuais que documentam os principais momentos desta celebração.
            </p>
          </div>
        </div>

        {/* CONCLUSÃO TÉCNICA E INSTITUCIONAL */}
        <div style={{backgroundColor: themeColors.primary }} className="bg-[#0A2540] p-10 text-white">
          <div className="flex items-start gap-6 mb-8">
            <MonitorSmartphone className="text-[#C9A347] w-12 h-12 shrink-0" />
            <div className="space-y-4 text-sm leading-relaxed text-white/80">
              <p>
                Do ponto de vista técnico, trata-se de uma plataforma moderna, responsiva e intuitiva, concebida para garantir: fácil navegação; acessibilidade em diferentes dispositivos; interactividade; e actualização permanente dos conteúdos.
              </p>
              <p className="text-white font-bold text-lg leading-snug">
                Mais do que um simples portal informativo, este microsite constitui-se como uma janela digital do Tribunal de Contas de Angola, reflectindo a sua história, a sua actividade e a sua visão de futuro.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SiteFeatures;