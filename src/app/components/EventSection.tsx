import { useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { Calendar, MapPin, Clock, Music, Award, Mic, Users, BookOpen, Camera } from "lucide-react";

const anniversarySchedule = [
  {
    date: "08/04/2026",
    weekday: "Quarta-feira",
    activities: [
      { time: "08:30 - 09:30", event: "Recepção e Acomodação dos Convidados e Funcionários", resp: "DSA/Protocolo/Cerimonial/RH" },
      { time: "10:00 - 10:30", event: "Sessão Solene: Hino Nacional e Boas-Vindas (VJCP Sebastião Gunza)", resp: "Coro TdC / Gab GJCP", highlight: true },
      { time: "10:40 - 11:00", event: "Discurso de Abertura por S.Exa Presidente da República", resp: "Gab GJCP", highlight: true },
      { time: "11:00 - 11:20", event: "Fotografia Oficial na Escadaria Frontal", resp: "Protocolo/Cerimonial" },
      { time: "12:00 - 13:00", event: "Cerimónia de Condecorações", resp: "Gab GJCP / Cerimonial", highlight: true },
      { time: "13:00 - 13:30", event: "Lançamento do Novo Portal e Edições da Revista Fluxos da Corte", resp: "DDI / GCI / DST", highlight: true },
      { time: "15:00 - 15:50", event: "Painéis: Autonomia Financeira e Controlo Jurisdicional", resp: "Prof. Rui Cruz / Prof. Dr. Carlos Feijó" },
      { time: "16:00 - 16:50", event: "Palestras: Fiscalização e Cooperação Internacional (Portugal)", resp: "Cons. Pres. Filipa Calvão / Cons. Carlos António" }
    ]
  },
  {
    date: "09/04/2026",
    weekday: "Quinta-feira",
    activities: [
      { time: "09:30 - 10:50", event: "Painéis: Cooperação Internacional, Sustentabilidade Fiscal e Governança", resp: "Cons. Inaldo Araújo / Prof. Bacelar Gouveia / Ministro Augusto Nardes" },
      { time: "11:00 - 12:20", event: "Conferências: Instituições de Controlo e Compliance em Angola", resp: "Cons. André Luís de Matos / Dra. Aurora dos Santos" },
      { time: "14:30 - 15:50", event: "Diálogos Institucionais, Inovação e Controlo Externo", resp: "Cons. Edilson de Sousa Silva / Maria Santana Milhomem" },
      { time: "16:00 - 16:20", event: "IA Generativa Activa: do Texto à Tarefa, do Risco ao Controlo", resp: "Prof. Dr. Luciano Araújo (USP)", highlight: true }
    ]
  },
  {
    date: "10/04/2026",
    weekday: "Sexta-feira",
    activities: [
      { time: "09:30 - 10:50", event: "Painéis: Saúde Ocupacional, Combate à Corrupção e Inclusão", resp: "Prof. Dra. Carina Leite / Dr. João Pinto / Cons. Sebastião Helvéccio" },
      { time: "11:00 - 12:00", event: "Conferências: Arquitectura Constitucional e Cooperação Internacional", resp: "Prof. Dra. Marina Siqueira / Prof. Dr. José Fontes" },
      { time: "12:00 - 13:00", event: "Leitura do Relatório Final e Encerramento Cultural", resp: "Coro do Tribunal de Contas", highlight: true }
    ]
  },
  {
    date: "28/03/2026",
    weekday: "Sábado",
    activities: [
      { time: "08:00 - 09:30", event: "Inauguração do Complexo Desportivo do TdC (Zango)", resp: "D.S.A.", highlight: true },
      { time: "09:30 - 13:30", event: "Jogos Finais e Actividade Lúdica", resp: "D.S.A." },
      { time: "19:30", event: "Jantar de Comemoração dos 30 Anos (Tenda da Ilha)", resp: "D.S.A.", highlight: true }
    ]
  }
];

// Helper para ícones dinâmicos
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
    <section id="evento" className="py-24 bg-[#0A2540] font-['Roboto',sans-serif]">
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