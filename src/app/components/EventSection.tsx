import { useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { Calendar, MapPin, Clock, Music, Award, Mic, Users, BookOpen, Camera } from "lucide-react";
import { themeColors } from "../theme";

// Helper para ícones dinâmicos

const anniversarySchedule = [
  {
    date: "08/04/2026",
    weekday: "Quarta-feira",
    activities: [
      { time: "08h30 – 09h00", event: "Acomodação dos funcionários", resp: "DSA/Protocolo/Cerimonial/RH" },
      { time: "09h00 – 09h30", event: "Recepção e Acomodação dos Convidados", resp: "DSA/Protocolo/Cerimonial/RH" },
      { time: "10h00 – 10h10", event: "Sessão solene de abertura: Entoação do Hino Nacional", resp: "Coro do Tribunal de Contas / DSA/Protocolo", highlight: true },
      { time: "10h15 – 10h30", event: "Apresentação de Boas-Vindas", resp: "VJCP – Sebastião Gunza / Gabinete do VJCP", highlight: true },
      { time: "10h40 – 11h00", event: "Discurso de Abertura", resp: "Entidade protocolar a indicar ", highlight: true },
      { time: "11h00 – 11h20", event: "Fotografia Oficial (se presença PR)", resp: "Escadaria Frontal / Protocolo/Cerimonial" },
      { time: "12h00 – 13h00", event: "CERIMÓNIA DE CONDECORAÇÕES", resp: "Gabinete VJCP / Cerimonial", highlight: true },
      { time: "13h00 – 13h30", event: "Lançamento do novo Portal", resp: "Célio Gourgel / DDI", highlight: true },
      { time: "13h00 – 13h30", event: "Lançamento da 3.ª Edição da Revista Fluxos da Corte", resp: "Alexandre Cose / GCI" },
      { time: "13h00 – 13h30", event: "Lançamento da 4.ª, 5.ª, 6.ª e 7.ª Edições da Colectânea de Jurisprudência", resp: "Juiz Conselheiro Carlos António / DST" },
      { time: "13h00 – 13h30", event: "Lançamento da 4.ª Edição da Revista Científica", resp: "Juiz Conselheiro Vice-Presidente Evaristo Solano / Gabinete Vice-Presidente" },
      { time: "13h30", event: "Pausa para Almoço", resp: "" },
      { time: "14h50", event: "Mensagem de felicitações da Presidente do Tribunal de Contas de Marrocos", resp: "Dra. Zineb El Adaoui / GCII – A. Cose" },
      { time: "15h00 – 15h20", event: "A Autonomia Financeira dos Órgãos de Fiscalização Externa das Finanças Públicas", resp: "Prof. Rui Cruz / GCII – A. Cose" },
      { time: "15h30 – 15h50", event: "O Controlo Jurisdicional das Políticas Públicas", resp: "Prof. Dr. Carlos Maria Feijó / GCII – A. Cose" },
      { time: "16h00 – 16h20", event: "A importância de um Controlo integrado e articulado das Finanças Públicas", resp: "Juíza Conselheira Filipa Calvão / GCII – A. Cose" },
      { time: "16h30 – 16h50", event: "A Fiscalização do Tribunal de Contas e as Entidades e Organismos sujeitos à sua Jurisdição", resp: "Juiz Conselheiro Carlos António / GCII – A. Cose" }
    ]
  },
  {
    date: "09/04/2026",
    weekday: "Quinta-feira",
    activities: [
      { time: "09h30 – 09h50", event: "A importância da Cooperação Internacional para o aperfeiçoamento dos Tribunais de Contas", resp: "Conselheiro Inaldo da Paixão Araújo / GCII – A. Cose" },
      { time: "10h00 – 10h20", event: "Sustentabilidade Fiscal e Responsabilidade Inter-geracional na Gestão dos Recursos Públicos", resp: "Prof. Dr. Jorge Bacelar Gouveia / GCII – A. Cose" },
      { time: "10h30 – 10h50", event: "Governança Pública", resp: "Ministro Augusto Nardes / GCII – A. Cose" },
      { time: "11h00 – 11h20", event: "Os aspectos centrais da Actividade Financeira do Estado e o papel de Controlo das ISC", resp: "Conselheiro André Luís de Matos / GCII – A. Cose" },
      { time: "12h00 – 12h20", event: "Compliance e Tribunal de Contas em Angola: Prevenção, Legalidade e Boa Governação", resp: "Dra. Aurora dos Santos / GCII – A. Cose" },
      { time: "12h20", event: "Pausa para Almoço", resp: "" },
      { time: "14h30 – 14h50", event: "Diálogos Institucionais e os Tribunais de Contas como agentes do Direito Fundamental à Boa Administração Pública", resp: "Conselheiro Edilson de Sousa Silva / GCII – A. Cose" },
      { time: "15h00 – 15h20", event: "Conhecimento, Inovação e Controlo Externo: Contributos da Academia para a Jurisdição Financeira no Século XXI", resp: "Maria Santana Milhomem / GCII – A. Cose" },
      { time: "15h30 – 15h50", event: "Interpretação e Aplicação do Direito Público: balizas para o exercício do Controlo Externo no Brasil", resp: "Conselheiro Nelson Pellegrini / GCII – A. Cose" },
      { time: "16h00 – 16h20", event: "IA Generativa Activa: do Texto à Tarefa, do Risco ao Controlo", resp: "Prof. Dr. Luciano Araújo / GCII – A. Cose", highlight: true }
    ]
  },
  {
    date: "10/04/2026",
    weekday: "Sexta-feira",
    activities: [
      { time: "09h30 – 09h50", event: "Fundamentos para um Tribunal de Contas Moderno e Sustentável: saúde ocupacional e bem-estar Institucional", resp: "Prof. Dra. Karina Leite / GCII – A. Cose" },
      { time: "10h00 – 10h20", event: "O papel do Controlo Interno no Combate à Corrupção", resp: "Dr. João Pinto / GCII – A. Cose" },
      { time: "10h30 – 10h50", event: "A jurisdição dos Tribunais de Contas como pilar de Instituição inclusiva", resp: "Conselheiro Sebastião Helvécio / GCII – A. Cose" },
      { time: "11h00 – 11h20", event: "Arquitectura Constitucional do Controlo Externo: Separação de Poderes e Legitimação Democrática", resp: "Prof. Dra. Marina Faraco / GCII – A. Cose" },
      { time: "11h30 – 11h50", event: "A Cooperação Internacional dos Tribunais de Contas e a Consolidação da Jurisdição Financeira", resp: "Prof. Dr. José Fontes / GCII – A. Cose" },
      { time: "12h00 – 13h00", event: "Leitura do Relatório Final, Momento Cultural e Encerramento", resp: "Coro do Tribunal de Contas" },
      { time: "19h30", event: "Jantar de Comemoração do 30.º Aniversário do Tribunal de Contas – Tenda da Ilha de Luanda", resp: "Cerimonial", highlight: true }
    ]
  }
];

const getActivityIcon = (event: string) => {
  const e = event.toLowerCase();
  if (e.includes("hino") || e.includes("cultural") || e.includes("jantar")) return Music;
  if (e.includes("discurso") || e.includes("sessão") || e.includes("conferência") || e.includes("painéis")) return Mic;
  if (e.includes("desportivo") || e.includes("condecorações")) return Award;
  if (e.includes("lançamento") || e.includes("revista")) return BookOpen;
  if (e.includes("fotografia")) return Camera;
  return Clock;
};

export function EventSection() {
  const [activeTab, setActiveTab] = useState(0);
  const { ref: titleRef, isVisible: titleVisible } = useIntersectionObserver();
  const { ref: contentRef, isVisible: contentVisible } = useIntersectionObserver();

  return (
    <section id="evento" className="py-24 font-['Roboto',sans-serif]" style={{ backgroundColor: themeColors.primary }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#C9A347]" />
            <span className="text-[#C9A347] text-xs font-bold tracking-[0.3em] uppercase">Programa Oficial</span>
            <div className="h-px w-12 bg-[#C9A347]" />
          </div>
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Celebração dos <span className="text-[#C9A347]">30 Anos</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto font-light">
            Três dias de reflexão técnica, reconhecimento institucional e confraternização.
          </p>
        </div>

        <div ref={contentRef} className={`transition-all duration-700 delay-200 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Tabs de Seleção de Dia */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {anniversarySchedule.map((day, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-4 transition-all duration-300 border-t-2 text-xs font-bold uppercase tracking-widest
                  ${activeTab === idx 
                    ? 'bg-[#C9A347]/10 border-[#C9A347] text-[#C9A347]' 
                    : 'bg-white/5 border-transparent text-white/40 hover:bg-white/10 hover:text-white'}`}
              >
                {day.weekday} <br />
                <span className="text-[10px] opacity-60 font-normal">{day.date}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Lista de Atividades (Cronograma) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <h3 className="text-white font-bold flex items-center gap-2">
                  <Calendar size={18} className="text-[#C9A347]" />
                  {anniversarySchedule[activeTab].weekday}
                </h3>
                <span className="text-[#C9A347]/50 text-xs font-mono">{anniversarySchedule[activeTab].date}</span>
              </div>

              <div className="grid gap-3 transition-all duration-500">
                {anniversarySchedule[activeTab].activities.map((item, i) => {
                  const Icon = getActivityIcon(item.event);
                  return (
                    <div
                      key={i}
                      className={`group flex items-start gap-4 p-4 transition-all border ${
                        item.highlight 
                        ? 'bg-[#C9A347]/5 border-[#C9A347]/30' 
                        : 'bg-white/5 border-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="flex-shrink-0 w-28 pt-1">
                        <span className="text-[#C9A347] font-bold text-xs block tabular-nums">
                          {item.time.split(' - ')[0]}
                        </span>
                        {item.time.includes('-') && (
                          <span className="text-white/30 text-[10px] block">
                            até {item.time.split(' - ')[1]}
                          </span>
                        )}
                      </div>
                      
                      <div className={`w-10 h-10 flex items-center justify-center flex-shrink-0 border transition-colors ${
                        item.highlight ? 'border-[#C9A347]/40 bg-[#C9A347]/10' : 'border-white/10'
                      }`}>
                        <Icon size={16} className={item.highlight ? "text-[#C9A347]" : "text-white/40"} />
                      </div>

                      <div className="flex-1">
                        <p className={`text-sm font-medium leading-snug mb-1 ${item.highlight ? 'text-white' : 'text-white/80'}`}>
                          {item.event}
                        </p>
                        <div className="flex items-center gap-2">
                          <Users size={10} className="text-[#C9A347]/60" />
                          <p className="text-[#C9A347]/70 text-[10px] uppercase tracking-wider font-semibold">
                            {item.resp}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Coluna Direita: Mapa e Localização */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white/5 p-6 border border-white/10">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                  <MapPin size={16} className="text-[#C9A347]" /> Localização
                </h3>
                
                {/* Switch de Local baseado no dia */}
                <div className="mb-4">
                  <p className="text-white text-lg font-medium">
                    {activeTab === 2 && anniversarySchedule[2].activities[0].event.includes("Zango") 
                      ? "Complexo Desportivo (Zango)" 
                      : activeTab === 2 && anniversarySchedule[2].activities[2].event.includes("Ilha")
                      ? "Tenda da Ilha de Luanda"
                      : "Palácio da Justiça (Cidade Alta)"}
                  </p>
                  <p className="text-white/40 text-xs mt-1">Luanda, Angola</p>
                </div>

                <div className="h-48 w-full bg-white/5 border border-white/10 overflow-hidden relative">
                   {/* Placeholder do Mapa */}
                   <iframe
                    title="Mapa"
                    className="w-full h-full grayscale opacity-60 contrast-125"
                    src="about:blank" 
                    style={{ border: 0 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-[#0A2540]/80">
                    <p className="text-[#C9A347] text-[10px] tracking-widest font-bold uppercase">Ver no Google Maps</p>
                  </div>
                </div>
              </div>

              {/* Nota de rodapé */}
              <div className="p-6 border border-[#C9A347]/20 bg-[#C9A347]/5">
                <p className="text-[#C9A347] text-xs leading-relaxed italic">
                  * Programa provisório sujeito a alterações. Confirmações de presença são essenciais para a logística do cerimonial.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}