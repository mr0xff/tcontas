import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, X, Plus, Quote, GraduationCap, Award } from 'lucide-react';
import { themeColors } from "../theme"; // Importação centralizada

const speakersData = [
  {
    id: "karina-leite",
    name: "Dra. Karina Leite Baía Fernandes",
    shortName: "Prof. Dra. Karina Leite",
    role: "CEO e Directora Clínica",
    image: "fallback.png", // Caminho da imagem adicionado
    institution: "Instituto Karina Leite Dental Clinic (Brasil e Portugal)",
    topic: "Fundamentos para um Tribunal de Contas Moderno e Sustentável: saúde ocupacional e bem-estar Institucional",
    time: "09h30 – 09h50",
    date: "10/04/2026",
    details: {
      specialization: "Reabilitação estética e digital, implantodontia e prótese",
      academic: "Doutorada e Mestre em Implantodontia pela Universidade São Leopoldo Mandic; Especialização em Prótese Dentária pela ABO-Bahia.",
      bio: `<b>CEO do Instituto Karina Leite Dental Clinic (Brasil e Portugal)</b> e Directora Clínica do Instituto Karina Leite Portugal, é médica dentista com actuação especializada em <b>reabilitação estética e digital</b>.<br/><br/>
      Acumula as funções de directora clínica, protesista e professora visitante em instituições como <b>FITS</b>, <b>FUNORTE</b> e <b>Odonto Master (Portugal)</b>. Possui <b>Doutorado e Mestrado em Implantodontia</b> pela Universidade São Leopoldo Mandic e residência em técnica <i>All-on-4</i> pelo Malo Clinical Education.<br/><br/>
      Sua trajetória profissional é marcada pelo domínio consolidado em <b>reabilitações totais fixas com implantes</b>, carga imediata e planejamento multidisciplinar, com foco em estética em implantes unitários anteriores e integração multidisciplinar.<br/><br/>
      Como palestrante, acumula <b>mais de 50 apresentações</b> em congressos internacionais (Brasil, Portugal, Alemanha e Suécia), tendo sido convidada por entidades como <b>SBOE</b> e <b>Jornadas de Medicina Dentária do Porto</b>. É autora de artigos em periódicos de relevo, como <i>Brazilian Dental Journal</i> e <i>Implant News</i>.`,
      achievements: "Mais de 50 apresentações em congressos internacionais (Brasil, Portugal, Alemanha e Suécia). Autora de artigos em periódicos como Brazilian Dental Journal e Implant News."
    }
  },
  {
    id: "inaldo-paixao",
    name: "Dr. Inaldo da Paixão Araujo",
    shortName: "Conselheiro Inaldo da Paixão",
    role: "Presidente do Instituto Rui Barbosa (IRB)",
    image: "/speakers/p12.jpeg",
    institution: "Tribunal de Contas do Estado da Bahia (TCE/BA)",
    topic: "A importância da Cooperação Internacional para o aperfeiçoamento dos Tribunais de Contas",
    time: "09h30 – 09h50",
    date: "09/04/2026",
    details: {
      specialization: "Controlo Externo, Auditoria Governamental e Contabilidade Pública",
      academic: "Mestre em Contabilidade e Contador. Professor da Universidade do Estado da Bahia (UNEB) há 29 anos.",
      bio: `<b>Conselheiro do Tribunal de Contas do Estado da Bahia (TCE/BA)</b>, onde também exerce as funções de Director da Escola de Contas Conselheiro José Borba Pedreira Lapa. É o actual <b>Presidente do Instituto Rui Barbosa (IRB)</b> para o biênio 2026/2027.<br/><br/>
      Mestre em Contabilidade e contador de formação, ingressou no TCE/BA por concurso público, construindo uma carreira de <b>25 anos como auditor</b>, tendo ocupado posições de destaque no controlo externo.<br/><br/>
      Paralelamente, há <b>29 anos é professor da Universidade do Estado da Bahia (UNEB)</b>, tendo lecionado também na UCSal, UFBa, UNIFACS e em diversos cursos preparatórios. Sua experiência docente inclui a regência do curso de <i>Auditoria Integral no Tribunal de Contas de Portugal</i>.<br/><br/>
      Sua actuação é marcada pelo domínio do controlo externo, contabilidade pública e governança. É <b>autor de 13 livros</b> sobre auditoria e contabilidade, além de manter colunas semanais nos jornais <i>A Tarde</i> e <i>Tribuna da Bahia</i>.`,
      achievements: "Autor de 13 livros sobre auditoria e contabilidade. Articulista semanal nos jornais A Tarde e Tribuna da Bahia."
    }
  },
  {
    id: "aurora-carvalho",
    name: "Dra. Aurora Carvalho",
    shortName: "Dra. Aurora Carvalho",
    role: "Directora de Sustentabilidade e Compliance",
    image: "fallback.png",
    institution: "Porto de Luanda – Empresa Pública",
    topic: "Compliance e Tribunal de Contas em Angola: Prevenção, Legalidade e Boa Governação",
    time: "12h00 – 12h20",
    date: "09/04/2026",
    details: {
      specialization: "Direito Portuário, Compliance, Integridade e Sustentabilidade",
      academic: "Licenciada em Direito (UAN); Pós-graduada em Direito Bancário e Gestão Estratégica de Portos (Portugal). Certificada pela LEC Brasil.",
      bio: `<b>Directora de Sustentabilidade e Compliance no Porto de Luanda – Empresa Pública</b>, é licenciada em Direito pela UAN, com pós-graduações em <b>Direito Bancário e Gestão Estratégica de Portos</b> pelo Instituto Superior Infante D. Henrique (Portugal).<br/><br/>
      Complementou sua formação com certificações em <b>Compliance pela LEC Brasil</b>, Gestão da Fraude pela Universidade de Coimbra, Sustentabilidade e Coaching pela BAI Academy. Sua carreira abrange <b>mais de 15 anos</b> de experiência técnica e estratégica.<br/><br/>
      Actuou no <b>Ministério dos Petróleos</b> e no Gabinete Jurídico do <b>BNI (Banco de Negócios Internacional)</b> antes de ingressar na Empresa Portuária de Luanda, onde ocupou cargos de chefia em Contratação, Contencioso e Gestão de Pessoas, servindo também como <b>Assessora da Presidência</b> para Concessões e Ordenamento Portuário.<br/><br/>
      Possui sólida experiência em <b>governança no sector portuário</b> e sustentabilidade aplicada a infraestruturas. Como palestrante, participou em formações internacionais em Portugal, Espanha e Brasil, destacando-se pela comunicação institucional e mediação em áreas estratégicas.`,
      achievements: "Vasta experiência em governança no setor portuário e mediação institucional."
    }
  },
  {
    id: "fernanda-mualeia",
    name: "Dra. Fernanda Mualeia",
    shortName: "Dra. Fernanda Mualeia",
    role: "Vice-Presidente da Associação Angolana de Corporate Governance (ACGA)",
    image: "fallback.png",
    institution: "Fernanda Mualeia Advogados",
    topic: "Governança Corporativa e ESG nas Instituições",
    time: "15h00 – 15h20",
    date: "09/04/2026",
    details: {
      specialization: "ESG, Governança Corporativa, Direito Fiscal e Recuperação de Empresas",
      academic: "Mestre em Direito Penal (Coimbra); Pós-graduada em Direito dos Contratos (UCP Porto). Certificada em ESG pela Universidade Nova de Lisboa.",
      bio: `<b>Sócio-Fundadora da Fernanda Mualeia Advogados</b> e Vice-Presidente da Associação Angolana de Corporate Governance (ACGA), é advogada inscrita em <b>Angola e Moçambique</b> com 19 anos de experiência jurídica.<br/><br/>
      Licenciada pela UCP Porto e <b>Mestre em Direito Penal</b> pela Universidade de Coimbra, possui certificações em <b>ESG Reporting, Compliance e Prevenção da Corrupção</b> pela Universidade Nova de Lisboa, sendo também Administradora de Empresas em Recuperação e Insolvência.<br/><br/>
      Sua actuação foca-se em <b>ESG, Governança Corporativa, Direito Fiscal e Financeiro</b>, com domínio em concessões, privatizações e investimento. Desde 2006, lecciona na <b>UAN (Pós-graduação e Mestrado)</b>, Universidade Lusíadas e ISPTEC, sendo formadora de magistrados em processos de insolvência.<br/><br/>
      É autora e coautora de diversas obras, com destaque para o <i>Guia Prático de Direito Comercial</i> (Escolar Editora) e artigos especializados em periódicos como <i>Business & Legal</i>, <i>Economia & Finanças</i> e <i>Mercado</i>, consolidando-se como referência em <b>Corporate Governance</b>.`,
      achievements: "Coautora do 'Guia Prático de Direito Comercial'. Formadora de magistrados em Recuperação de Empresa e Insolvência."
    }
  }
];

export default function SpeakerGrid() {
  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l"
      style={{ borderColor: "rgba(255,255,255,0.1)" }}
    >
      {speakersData.map(s => (
        <SpeakerCard key={s.id} speaker={s} />
      ))}
    </div>
  );
}

const SpeakerCard = ({ speaker }: { speaker: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        className="group relative border-r border-b m-1 border-white/10 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full"
        style={{ backgroundColor: "transparent" }}
      >
        {/* Overlay de Hover usando a cor do Teu Tema */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
          style={{ backgroundColor: "#C9A347" }}
        />

        {/* Container da Imagem - Brutalista (Sem arredondamento) */}
        <div className="relative h-72 w-full overflow-hidden border-b border-white/10 z-10">
          {speaker.image ? (
            <img 
              src={speaker.image} 
              alt={speaker.name}
              className="w-full h-full object-cover transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-slate-800 flex items-center justify-center">
              <User size={48} className="text-white/20" />
            </div>
          )}
          {/* Badge de ID/Ordem */}
          <div className="absolute bottom-0 right-0 bg-[#0A2540] group-hover:bg-white px-3 py-1 text-[10px] font-black text-[#C9A347] group-hover:text-[#0A2540] transition-colors">
            {speaker.id.slice(0, 3).toUpperCase()}
          </div>
        </div>

        <div className="relative z-10 p-8 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <p 
              className="text-[10px] font-bold uppercase tracking-[0.2em] transition-colors"
              style={{ color: "#C9A347" }}
            >
              <span className="group-hover:text-[#0A2540]">{speaker.role}</span>
            </p>
            <Plus size={18} style={{ color: "#C9A347" }} className="group-hover:text-[#0A2540]" />
          </div>

          <h3 
            className="font-black text-xl uppercase leading-none mb-4 tracking-tighter transition-colors"
            style={{ fontFamily: "'Roboto', sans-serif", color: "white" }}
          >
            <span className="group-hover:text-[#0A2540]">{speaker.name}</span>
          </h3>
          
          <div className="h-px w-full bg-white/10 group-hover:bg-[#0A2540]/20 mb-6" />
          
          <p 
            className="text-white/50 group-hover:text-[#0A2540]/80 text-[11px] leading-relaxed uppercase font-medium mt-auto"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            {speaker.topic}
          </p>
        </div>
      </div>

      {/* Modal Brutalista */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-10 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="bg-white w-full max-w-6xl h-full md:h-auto overflow-hidden flex flex-col md:flex-row rounded-none shadow-none border"
              style={{ borderColor: "#C9A347" }}
            >
              {/* Sidebar do Modal com Imagem */}
              <div 
                className="md:w-1/3 flex flex-col border-r"
                style={{ backgroundColor: themeColors.primary, borderColor: "#C9A347" }}
              >
                <div className="relative h-64 md:h-80 w-full border-b" style={{ borderColor: "#C9A347" }}>
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-black uppercase tracking-tighter leading-none mb-4 italic text-white" style={{ fontFamily: "'Roboto', sans-serif" }}>
                      {speaker.name}
                    </h2>
                    <p className="font-bold text-xs uppercase tracking-widest" style={{ color: "#C9A347" }}>
                      {speaker.role}
                    </p>
                    <p className="text-white/40 text-[9px] uppercase mt-4 tracking-widest leading-relaxed">
                      {speaker.institution}
                    </p>
                  </div>

                  <button 
                    onClick={() => setIsOpen(false)}
                    className="mt-12 flex items-center gap-2 font-black uppercase text-[10px] tracking-[0.2em] transition-colors py-3 px-6"
                    style={{ 
                      fontFamily: "'Roboto', sans-serif",
                      backgroundColor: "#C9A347",
                      color: themeColors.primary,
                      letterSpacing: "0.1em",
                    }}
                  >
                    <X size={16} /> Fechar Perfil
                  </button>
                </div>
              </div>

              {/* Conteúdo Técnico */}
              <div className="p-12 flex-1 bg-white overflow-y-auto max-h-[85vh]">
                <section className="mb-12">
                  <div className="flex items-center gap-2 mb-4">
                    <Quote size={20} style={{ color: "#C9A347" }} />
                    <h4 className="font-black uppercase text-xs tracking-widest" style={{ color: themeColors.primary }}>Tema em Debate</h4>
                  </div>
                  <p 
                    className="text-2xl font-black uppercase leading-tight border-l-[12px] pl-6 py-3 shadow-[10px_10px_0px_rgba(201,163,71,0.1)]" 
                    style={{ color: themeColors.primary, borderColor: "#C9A347", fontFamily: "'Roboto', sans-serif" }}
                  >
                    {speaker.topic}
                  </p>
                </section>

                <div className="grid grid-cols-1 gap-10">
                  <div className="border-b border-slate-100 pb-6">
                    <h5 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
                      <GraduationCap size={14} /> Formação e Especialização
                    </h5>
                    <p className="text-slate-700 text-sm leading-relaxed" style={{ fontFamily: "'Roboto', sans-serif" }}>
                      {speaker.details.academic}
                    </p>
                  </div>

                  <div>
                    <h5 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
                      <Award size={14} /> Biografia Científica
                    </h5>
                    <p 
                      className="text-slate-700 text-sm leading-relaxed" 
                      style={{ fontFamily: "'Roboto', sans-serif" }} 
                      dangerouslySetInnerHTML={{ __html: speaker.details.bio }} 
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};