import { useState, FormEvent } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { Calendar, MapPin, Clock, CheckCircle2, Music, Award, Mic, Users, BookOpen, Camera } from "lucide-react";
// const anniversarySchedule = [
//   {
//     date: "09/04/2026",
//     weekday: "Quinta-feira",
//     activities: [
//       { time: "09:00 - 09:50", event: "Receção e Acolhimento", resp: "DSA/Protocolo" },
//       { time: "10:00 - 10:15", event: "Sessão Solene & Hino Nacional", resp: "Coro TdC", highlight: true },
//       { time: "10:30 - 11:00", event: "Discurso de Abertura", resp: "S.Exa Presidente da República" },
//       { time: "11:30 - 11:50", event: "O TdC como pilar da Boa Governação", resp: "Ven. Juiz Sebastião Gunza" },
//       { time: "13:00 - 13:30", event: "Lançamento de Portais e Revistas", resp: "Vários" },
//       { time: "15:00 - 17:00", event: "Ciclo de Painéis Técnicos (Brasil/Angola)", resp: "GCI / Prelectores" }
//     ]
//   },
//   {
//     date: "10/04/2026",
//     weekday: "Sexta-feira",
//     activities: [
//       { time: "09:30 - 12:30", event: "Conferências: IA, Compliance e Direito Público", resp: "GCI / Prelectores" },
//       { time: "14:30 - 16:00", event: "Relatório Final e Encerramento Cultural", resp: "Coro TdC", highlight: true }
//     ]
//   },
//   {
//     date: "11/04/2026",
//     weekday: "Sábado",
//     activities: [
//       { time: "08:00", event: "Inauguração Complexo Desportivo (Zango)", resp: "D.S.A" },
//       { time: "19:30", event: "Jantar de Gala (30 Anos)", resp: "Tenda da Ilha", highlight: true }
//     ]
//   }
// ];

// function RSVPForm() {
//   const [form, setForm] = useState({ nome: "", email: "", cargo: "", instituicao: "" });
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       setSubmitted(true);
//     }, 1500);
//   };

//   const inputStyle = {
//     fontFamily: "'Roboto', sans-serif",
//     backgroundColor: "rgba(255,255,255,0.05)",
//     border: "1px solid rgba(201,163,71,0.3)",
//     color: "#fff",
//     fontSize: "0.9rem",
//     padding: "12px 16px",
//     width: "100%",
//     outline: "none",
//     transition: "border-color 0.2s",
//   };

//   const labelStyle = {
//     fontFamily: "'Roboto', sans-serif",
//     color: "#C9A347",
//     fontSize: "0.8rem",
//     fontWeight: 600,
//     letterSpacing: "0.1em",
//     textTransform: "uppercase" as const,
//     marginBottom: "6px",
//     display: "block",
//   };

//   if (submitted) {
//     return (
//       <div className="flex flex-col items-center justify-center py-16 text-center">
//         <div
//           className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
//           style={{ backgroundColor: "rgba(201,163,71,0.15)", border: "2px solid #C9A347" }}
//         >
//           <CheckCircle2 size={40} className="text-[#C9A347]" />
//         </div>
//         <h3
//           className="text-white mb-3"
//           style={{ fontFamily: "'Roboto', sans-serif", fontSize: "1.4rem", fontWeight: 700 }}
//         >
//           Presença Confirmada!
//         </h3>
//         <p
//           className="text-white/60 max-w-xs"
//           style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.9rem", lineHeight: 1.7 }}
//         >
//           Obrigado, <span style={{ color: "#C9A347" }}>{form.nome}</span>. A sua confirmação foi registada com sucesso. Irá receber uma confirmação no seu endereço de email.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-5">
//       <div>
//         <label style={labelStyle}>Nome Completo *</label>
//         <input
//           type="text"
//           required
//           value={form.nome}
//           onChange={(e) => setForm({ ...form, nome: e.target.value })}
//           placeholder="Insira o seu nome completo"
//           style={inputStyle}
//           onFocus={(e) => { e.currentTarget.style.borderColor = "#C9A347"; }}
//           onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(201,163,71,0.3)"; }}
//         />
//       </div>
//       <div>
//         <label style={labelStyle}>Endereço de Email *</label>
//         <input
//           type="email"
//           required
//           value={form.email}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//           placeholder="exemplo@instituicao.ao"
//           style={inputStyle}
//           onFocus={(e) => { e.currentTarget.style.borderColor = "#C9A347"; }}
//           onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(201,163,71,0.3)"; }}
//         />
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//         <div>
//           <label style={labelStyle}>Cargo / Função</label>
//           <input
//             type="text"
//             value={form.cargo}
//             onChange={(e) => setForm({ ...form, cargo: e.target.value })}
//             placeholder="Ex: Director, Técnico..."
//             style={inputStyle}
//             onFocus={(e) => { e.currentTarget.style.borderColor = "#C9A347"; }}
//             onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(201,163,71,0.3)"; }}
//           />
//         </div>
//         <div>
//           <label style={labelStyle}>Instituição</label>
//           <input
//             type="text"
//             value={form.instituicao}
//             onChange={(e) => setForm({ ...form, instituicao: e.target.value })}
//             placeholder="Nome da instituição"
//             style={inputStyle}
//             onFocus={(e) => { e.currentTarget.style.borderColor = "#C9A347"; }}
//             onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(201,163,71,0.3)"; }}
//           />
//         </div>
//       </div>
//       <button
//         type="submit"
//         disabled={loading}
//         className="w-full py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 mt-2 hover:scale-[1.02] disabled:opacity-60"
//         style={{
//           fontFamily: "'Roboto', sans-serif",
//           backgroundColor: loading ? "#888" : "#C9A347",
//           color: "#0A2540",
//           letterSpacing: "0.15em",
//           boxShadow: loading ? "none" : "0 4px 20px rgba(201,163,71,0.4)",
//         }}
//       >
//         {loading ? "A processar..." : "Confirmar Presença"}
//       </button>
//       <p
//         className="text-white/40 text-center"
//         style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.75rem" }}
//       >
//         * Campos obrigatórios. A sua informação será tratada de forma confidencial.
//       </p>
//     </form>
//   );
// }

// export function EventSection() {
//   const { ref: titleRef, isVisible: titleVisible } = useIntersectionObserver();
//   const { ref: contentRef, isVisible: contentVisible } = useIntersectionObserver();
  
//   // Estado para controlar qual dia está selecionado (0, 1 ou 2)
//   const [activeTab, setActiveTab] = useState(0);

//   const getActivityIcon = (event: string) => {
//     if (event.includes("Hino") || event.includes("Cultural") || event.includes("Jantar")) return Music;
//     if (event.includes("Discurso") || event.includes("Sessão") || event.includes("Conferências")) return Mic;
//     if (event.includes("Desportivo")) return Award;
//     return Clock;
//   };

//   return (
//     <section
//       id="evento"
//       className="py-24"
//       style={{ backgroundColor: "#0A2540", fontFamily: "'Roboto', sans-serif" }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header (Mantido igual) */}
//         <div
//           ref={titleRef}
//           className="text-center mb-16"
//           style={{
//             opacity: titleVisible ? 1 : 0,
//             transform: titleVisible ? "translateY(0)" : "translateY(30px)",
//             transition: "opacity 0.7s ease, transform 0.7s ease",
//           }}
//         >
//           <div className="flex items-center justify-center gap-4 mb-4">
//             <div className="h-px w-12 bg-[#C9A347]" />
//             <span className="text-[#C9A347] text-xs font-bold tracking-[0.3em] uppercase">
//               Evento Comemorativo
//             </span>
//             <div className="h-px w-12 bg-[#C9A347]" />
//           </div>
//           <h2 className="text-white" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700 }}>
//             Comemoração dos <span style={{ color: "#C9A347" }}>30 Anos</span>
//           </h2>
//         </div>

//         <div
//           ref={contentRef}
//           style={{
//             opacity: contentVisible ? 1 : 0,
//             transform: contentVisible ? "translateY(0)" : "translateY(30px)",
//             transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
//           }}
//         >
//           {/* Info Bar (Mantido igual) */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-px mb-12" style={{ backgroundColor: "rgba(201,163,71,0.3)" }}>
//             {[
//               { icon: Calendar, label: "Data", value: "09 a 11 de Abril 2026", sub: "Quinta a Sábado" },
//               { icon: Clock, label: "Horário", value: "Variável", sub: "Consulte o cronograma" },
//               { icon: MapPin, label: "Local", value: "Palácio da Justiça", sub: "Cidade Alta, Luanda" },
//             ].map((item, idx) => (
//               <div key={idx} className="flex items-center gap-4 p-6" style={{ backgroundColor: "#0D2D50" }}>
//                 <div className="w-12 h-12 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(201,163,71,0.12)", border: "1px solid rgba(201,163,71,0.4)" }}>
//                   <item.icon size={22} className="text-[#C9A347]" />
//                 </div>
//                 <div>
//                   <p className="text-[#C9A347] text-xs font-bold tracking-widest uppercase mb-0.5">{item.label}</p>
//                   <p className="text-white font-medium">{item.value}</p>
//                   <p className="text-white/50 text-xs">{item.sub}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//             {/* Coluna Esquerda: Cronograma com Abas */}
//             <div className="space-y-6">
//               <h3 className="text-white flex items-center gap-2" style={{ fontSize: "1.1rem", fontWeight: 700 }}>
//                 <span style={{ color: "#C9A347" }}>★</span> Cronograma Completo
//               </h3>

//               {/* Seleção de Dias (Tabs) */}
//               <div className="flex border-b border-white/10">
//                 {anniversarySchedule.map((day, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setActiveTab(idx)}
//                     className="flex-1 py-3 text-xs font-bold uppercase tracking-widest transition-all"
//                     style={{
//                       color: activeTab === idx ? "#C9A347" : "rgba(255,255,255,0.4)",
//                       borderBottom: activeTab === idx ? "2px solid #C9A347" : "2px solid transparent",
//                       backgroundColor: activeTab === idx ? "rgba(201,163,71,0.05)" : "transparent"
//                     }}
//                   >
//                     {day.weekday.split('-')[0]} <span className="hidden sm:inline">({day.date.split('/')[0]})</span>
//                   </button>
//                 ))}
//               </div>

//               {/* Lista de Atividades do Dia Selecionado */}
//               <div className="space-y-3 min-h-[350px]">
//                 {anniversarySchedule[activeTab].activities.map((item, i) => {
//                   const Icon = getActivityIcon(item.event);
//                   return (
//                     <div
//                       key={i}
//                       className="flex items-start gap-4 p-4 transition-all hover:bg-white/5 group"
//                       style={{ 
//                         borderLeft: item.highlight ? "3px solid #C9A347" : "1px solid rgba(201,163,71,0.2)",
//                         backgroundColor: item.highlight ? "rgba(201,163,71,0.03)" : "transparent"
//                       }}
//                     >
//                       <div className="flex-shrink-0 w-24 pt-1">
//                         <span className="text-[#C9A347] font-bold text-[0.7rem] block">
//                           {item.time.split(' - ')[0]}
//                         </span>
//                         {item.time.split(' - ')[1] && (
//                           <span className="text-white/30 text-[0.65rem] block">
//                             até {item.time.split(' - ')[1]}
//                           </span>
//                         )}
//                       </div>
                      
//                       <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 border border-white/10 rounded-sm group-hover:border-[#C9A347]/50 transition-colors">
//                         <Icon size={16} className={item.highlight ? "text-[#C9A347]" : "text-white/60"} />
//                       </div>

//                       <div className="flex-1">
//                         <p className={`text-sm font-medium mb-1 ${item.highlight ? "text-white" : "text-white/80"}`}>
//                           {item.event}
//                         </p>
//                         <p className="text-[#C9A347]/60 text-[0.65rem] uppercase tracking-wider font-bold">
//                           {item.resp}
//                         </p>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Coluna Direita: RSVP Form (Mantido igual) */}
//             <div className="h-full">
//               <div className="p-8 sticky top-8" style={{ border: "1px solid rgba(201,163,71,0.3)", backgroundColor: "rgba(255,255,255,0.03)" }}>
//                 <h3 className="text-white mb-2" style={{ fontSize: "1.3rem", fontWeight: 700 }}>
//                   <span style={{ color: "#C9A347" }}>★</span> Confirmar Presença
//                 </h3>
//                 <p className="text-white/50 mb-8 text-sm leading-relaxed">
//                   Preencha os dados abaixo para reservar o seu lugar nas celebrações.
//                 </p>
//                 <RSVPForm />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





// Dados Oficiais Atualizados
const anniversarySchedule = [
  {
    date: "09/04/2026",
    weekday: "Quinta-feira",
    activities: [
      { time: "09:00 - 09:50", event: "Recepção e Acomodação dos Convidados", resp: "DSA/Protocolo/Cerimonial" },
      { time: "10:00 - 10:15", event: "Sessão Solene: Hino Nacional e Boas-Vindas", resp: "Coro TdC / Alexandre Cose", highlight: true },
      { time: "10:30 - 11:00", event: "Discurso de Abertura", resp: "S.Exa Presidente da República", highlight: true },
      { time: "11:00 - 11:20", event: "Fotografia Oficial (Escadaria Frontal)", resp: "Protocolo/Cerimonial" },
      { time: "11:30 - 11:50", event: "O TdC como pilar da Boa Governação", resp: "VJCP – Sebastião Gunza" },
      { time: "12:00 - 13:00", event: "Cerimónia de Condecorações", resp: "Gab GJCP / Cerimonial", highlight: true },
      { time: "13:00 - 13:30", event: "Lançamento de Portal, Revistas e Colectâneas", resp: "DDI / GCI / DST" },
      { time: "15:00 - 17:00", event: "Ciclo de Painéis Técnicos: Autonomia, Jurisdição e Cooperação", resp: "Prof. Rui Cruz, Dr. Carlos Feijó e Convidados Internacionais" }
    ]
  },
  {
    date: "10/04/2026",
    weekday: "Sexta-feira",
    activities: [
      { time: "09:30 - 11:00", event: "Conferências: Governação Financeira e Combate à Corrupção", resp: "Cons. TdC / Dr. João Pinto / Dr. Bacelar Gouveia" },
      { time: "11:10 - 12:30", event: "Painéis: IA Generativa, Compliance e Direito Público", resp: "Prof. Luciano Araújo / Dra. Aurora dos Santos e Convidados" },
      { time: "14:30 - 16:00", event: "Relatório Final e Encerramento Cultural", resp: "Coro do TdC", highlight: true }
    ]
  },
  {
    date: "11/04/2026",
    weekday: "Sábado",
    activities: [
      { time: "08:00 - 09:00", event: "Inauguração do Complexo Desportivo do TdC", resp: "Zango - D.S.A.", highlight: true },
      { time: "09:30 - 13:30", event: "Jogos Finais e Actividade Lúdica", resp: "D.S.A." },
      { time: "19:30", event: "Jantar de Comemoração dos 30 Anos", resp: "Tenda da Ilha de Luanda", highlight: true }
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