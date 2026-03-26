import { MapPin, Quote } from "lucide-react";
import { themeColors } from "../theme";
import SpeakerGrid from "./SpeakerGrid";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, List } from 'lucide-react';


const speakers = [
  { id: 1, name: "Aurora Virgínia & Fernanda Mualeia", country: "Angola/Moçambique", theme: "Compliance e Tribunal de Contas em Angola: Prevenção, Legalidade e Boa Governação", flag: "🇦🇴/🇲🇿" },
  { id: 2, name: "Edilson de Sousa Silva", country: "Brasil", theme: "Diálogos Institucionais e os Tribunais de Contas Como Agentes do Direito Fundamental à Boa Administração Pública", flag: "🇧🇷" },
  { id: 3, name: "Inaldo Araújo", country: "Brasil", theme: "A Importância da Cooperação Internacional para o Aperfeiçoamento dos Tribunais de Contas", flag: "🇧🇷" },
  { id: 4, name: "André de Matos", country: "Brasil", theme: "Os Aspectos Centrais da Actividade Financeira do Estado e o Indispensável Papel de Controle das Instituições Superiores de Controlo", flag: "🇧🇷" },
  { id: 5, name: "Filipa Urbano Calvão", country: "Portugal", theme: "Painel de Direito Público e Fiscalização", flag: "🇵🇹" },
  { id: 6, name: "Maria Santana Milhomem", country: "Brasil", theme: "Conhecimento, Inovação e Controlo Externo: Contributos da Academia para a Jurisdição Financeira no Século XXI", flag: "🇧🇷" },
  { id: 7, name: "Sebastião Helvécio", country: "Brasil", theme: "A Jurisdição dos Tribunais de Contas como Pilar de Instituição Inclusiva", flag: "🇧🇷" },
  { id: 8, name: "Jorge Bacelar Gouveia", country: "Portugal", theme: "Sustentabilidade Fiscal e Responsabilidade Intergeracional na Gestão dos Recursos Públicos", flag: "🇵🇹" },
  { id: 9, name: "Nelson Pelligrine", country: "Brasil", theme: "LINDB 13.655/2018, Regras para Interpretação e Aplicação do Direito Público", flag: "🇧🇷" },
  { id: 10, name: "Luciano Vieira de Araújo", country: "Brasil", theme: "IA Generativa Ativa: Do Texto à tarefa, do Risco ao Controle", flag: "🇧🇷" },
  { id: 11, name: "Marina Faraco Siqueira e Silva", country: "Brasil", theme: "Arquitetura Constitucional do Controle Externo: Separação de Poderes e Legitimação Democrática das Cortes de Contas na Experiência Brasileira", flag: "🇧🇷" },
  { id: 12, name: "Augusto Nardes", country: "Brasil", theme: "Governança Pública", flag: "🇧🇷" },
  { id: 13, name: "José Fontes", country: "Portugal", theme: "A Cooperação Internacional dos Tribunais de Contas e a Consolidação da Jurisdição Financeira nas Democracias Contemporâneas", flag: "🇵🇹" },
  { id: 14, name: "Carina Leite", country: "Portugal", theme: "Saúde ocupacional de Bem-Estar Institucional: Fundamentos para um Tribunal de Contas Moderno e Sustentável", flag: "🇵🇹" },
];

export function SpeakersSection() {
  return (
    <section id="oradores" className="py-24" style={{ backgroundColor: themeColors.primary }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Secção */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-[#C9A347]" />
            <span className="text-[#C9A347] text-xs font-bold tracking-widest uppercase">Prelectores Convidados</span>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            Corpo de <span className="text-[#C9A347]">Oradores</span>
          </h2>
        </div>

        <SpeakersNavigation simpleSpeakers={speakers} />

        {/* Footer da Secção */}
        <div className="mt-12 text-center">
          <p className="text-white/30 text-xs italic">
            * A lista de oradores inclui prelectores nacionais e internacionais de referência na jurisdição financeira.
          </p>
        </div>
      </div>
    </section>
  );
}

export function SpeakersNavigation({ simpleSpeakers }: { simpleSpeakers: any[] }) {
  const [activeTab, setActiveTab] = useState<'detailed' | 'quick'>('detailed');

  return (
    <div className="w-full">
      {/* Tab Switcher Brutalista */}
      <div className="flex justify-center mb-16">
        <div className="inline-flex bg-white/5 p-1 border border-white/10 rounded-none">
          <button
            onClick={() => setActiveTab('detailed')}
            className={`flex items-center gap-2 px-6 py-3 font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300 rounded-none ${
              activeTab === 'detailed' 
              ? 'bg-[#C9A347] text-[#0A2540] shadow-[4px_4px_0px_rgba(255,255,255,0.1)]' 
              : 'text-white/50 hover:text-white'
            }`}
          >
            <List size={14} /> Prelectores
          </button>
          <button
            onClick={() => setActiveTab('quick')}
            className={`flex items-center gap-2 px-6 py-3 font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300 rounded-none ${
              activeTab === 'quick' 
              ? 'bg-[#C9A347] text-[#0A2540] shadow-[4px_4px_0px_rgba(255,255,255,0.1)]' 
              : 'text-white/50 hover:text-white'
            }`}
          >
            <LayoutGrid size={14} /> Currículos
          </button>
        </div>
      </div>

      {/* Conteúdo das Abas */}
      <AnimatePresence mode="wait">
        {activeTab === 'quick' ? (
          <motion.div
            key="detailed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <SpeakerGrid  />
          </motion.div>
        ) : (
          <motion.div
            key="quick"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0 border-t border-l border-white/10"
          >
            {simpleSpeakers.map((speaker) => (
              <div 
                key={speaker.id}
                className="group relative bg-white/5 border-r m-1 border-b border-white/10 p-8 transition-all duration-300 hover:bg-white/[0.08] hover:border-[#C9A347]/50"
              >
                <span className="absolute top-4 right-6 text-white/5 font-black text-6xl group-hover:text-[#C9A347]/10 transition-colors pointer-events-none">
                  {speaker.id.toString().padStart(2, '0')}
                </span>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">{speaker.flag}</span>
                    <span 
                      className="text-[10px] font-black uppercase tracking-tighter flex items-center gap-1"
                      style={{ color: "#C9A347" }}
                    >
                      <MapPin size={10} /> {speaker.country}
                    </span>
                  </div>

                  <h3 className="text-white font-black text-lg mb-4 uppercase leading-none tracking-tighter group-hover:text-[#C9A347] transition-colors">
                    {speaker.name}
                  </h3>

                  <div className="flex gap-3 pt-4 border-t border-white/5">
                    <Quote size={14} className="text-[#C9A347] flex-shrink-0 mt-1 rotate-180 opacity-50" />
                    <p className="text-white/60 text-xs leading-relaxed italic font-light">
                      {speaker.theme}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#C9A347] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}