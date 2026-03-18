import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const IMAGES = {
  1917: "/fallback.webp",
  1933: "/fallback.webp",
  1951: "/fallback.webp",
  1975: "/fallback.webp",
  1991: "/fallback.webp",
  1992: "/fallback.webp",
  1996: "/fallback.webp",
  2001: "/fallback.webp",
  2012: "/fallback.webp",
  2018: "/fallback.webp", // Placa "Legado"
  2023: "/fallback.webp", // Placa "Futuro"
  2026: "/fallback.webp",
};
// const timelineData = [
//   {
//     year: 1996,
//     title: "Fundação do Tribunal de Contas",
//     text: "Por força da Lei n.º 4/96, de 22 de março, o Tribunal de Contas de Angola é criado como órgão supremo de fiscalização e controlo da administração financeira do Estado. Inicia-se uma nova era de transparência e legalidade nas finanças públicas angolanas.",
//     side: "right" as const,
//   },
//   {
//     year: 2006,
//     title: "Consolidação Institucional",
//     text: "Uma década de operação consolida o TCA como pilar fundamental da governação financeira em Angola. Reformas internas reforçam os mecanismos de controlo e ampliam a capacidade técnica dos magistrados e auditores, fortalecendo o quadro jurídico de fiscalização.",
//     side: "left" as const,
//   },
//   {
//     year: 2016,
//     title: "Modernização e Transparência",
//     text: "O TCA abraça a modernização tecnológica e a digitalização dos seus processos, adoptando novos sistemas de gestão e controlo financeiro. Inicia-se a publicação electrónica dos relatórios de auditoria, promovendo a transparência e o acesso público à informação.",
//     side: "right" as const,
//   },
//   {
//     year: 2026,
//     title: "30 Anos — Uma Nova Visão",
//     text: "Trinta anos de história, compromisso e dedicação ao serviço público. O TCA reitera o seu compromisso com a legalidade, a eficiência e a modernidade, projectando-se para o futuro com uma visão renovada ao serviço do povo angolano e do desenvolvimento sustentável.",
//     side: "left" as const,
//   },
// ];

export const timelineData: Array<{
  year: number;
  title: string;
  text: string;
  side: "right" | "left";
}> = [
  {
    year: 1917,
    title: "As Primeiras Sementes",
    text: "Criação do Tribunal do Contencioso e de Contas, a primeira estrutura destinada a apreciar matérias administrativas e financeiras.",
    side: "left"
  },
  {
    year: 1933,
    title: "Administração do Ultramar",
    text: "Consolidação do princípio jurídico de que a gestão do dinheiro público deve ser submetida a escrutínio institucional.",
    side: "right"
  },
  {
    year: 1951,
    title: "Novo Significado",
    text: "A revisão constitucional reafirma a necessidade de examinar as contas públicas, fortalecendo a tradição jurídica de fiscalização.",
    side: "left"
  },
  {
    year: 1975,
    title: "Nasce uma Nova Nação",
    text: "Com a Independência Nacional, Angola assume o desafio de construir as suas próprias instituições de soberania.",
    side: "right"
  },
  {
    year: 1991,
    title: "O Despertar do Estado de Direito",
    text: "A Lei n.º 12/91 abre caminho para a institucionalização de um tribunal dedicado à fiscalização das finanças públicas.",
    side: "left"
  },
  {
    year: 1992,
    title: "Consagração Constitucional",
    text: "A segunda revisão constitucional estabelece formalmente o Tribunal de Contas de Angola como órgão essencial do Estado.",
    side: "right"
  },
  {
    year: 1996,
    title: "Criação Oficial (Lei 5/96)",
    text: "A 12 de Abril nasce juridicamente o Tribunal de Contas de Angola, instituindo um órgão especializado no julgamento de contas.",
    side: "left"
  },
  {
    year: 2001,
    title: "O Tribunal Ganha Vida",
    text: "Início efetivo das funções com a nomeação do primeiro Juiz Conselheiro Presidente e da primeira geração de Juízes.",
    side: "right"
  },
  {
    year: 2012,
    title: "Expansão e Fortalecimento",
    text: "Fase de crescimento institucional e reforço das estruturas técnicas, consolidando o Tribunal como referência nacional.",
    side: "left"
  },
  {
    year: 2018, // Ano lógico para representar a "Corte ao Serviço do Estado"
    title: "Corte ao Serviço do Estado",
    text: "Afirmação como guardião da legalidade financeira, promovendo a transparência e a boa governação da coisa pública.",
    side: "right"
  },
  {
    year: 2023, // Ano lógico para a "Transformação Tecnológica"
    title: "Instituição em Transformação",
    text: "Modernização através da digitalização de processos e novas tecnologias, tornando a fiscalização mais eficiente.",
    side: "left"
  },
  {
    year: 2026,
    title: "30 Anos | Nova Marca",
    text: "Celebração da maturidade com o lançamento da nova identidade visual, símbolo de compromisso com o futuro.",
    side: "right"
  }
];
function TimelineItem({
  item,
  index,
}: {
  item: (typeof timelineData)[0];
  index: number;
}) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="relative flex flex-col md:flex-row items-center gap-0"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`,
      }}
    >
      {/* LEFT CONTENT — visible only when side=left on desktop */}
      <div
        className={`hidden md:flex w-5/12 ${item.side === "left" ? "justify-end pr-12" : "justify-end pr-12 opacity-0 pointer-events-none"}`}
      >
        {item.side === "left" && (
          <div className="max-w-sm text-right">
            <img
              src={IMAGES[item.year as keyof typeof IMAGES]}
              alt={`${item.year} — ${item.title}`}
              className="w-full h-48 object-cover mb-4 shadow-lg"
              style={{ border: "2px solid #C9A347" }}
            />
            <h3
              className="text-[#0A2540] mb-2"
              style={{ fontFamily: "'Roboto', sans-serif", fontSize: "1.15rem", fontWeight: 700 }}
            >
              {item.title}
            </h3>
            <p
              className="text-[#555] leading-relaxed"
              style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.9rem", fontWeight: 400 }}
            >
              {item.text}
            </p>
          </div>
        )}
      </div>

      {/* CENTER — year circle + line */}
      <div className="flex flex-col items-center w-full md:w-2/12 z-10">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg flex-shrink-0"
          style={{
            backgroundColor: "#0A2540",
            border: "3px solid #C9A347",
            boxShadow: "0 0 0 6px rgba(201,163,71,0.15)",
          }}
        >
          <span
            className="text-[#C9A347]"
            style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em" }}
          >
            {item.year}
          </span>
        </div>
      </div>

      {/* RIGHT CONTENT — visible only when side=right on desktop */}
      <div
        className={`hidden md:flex w-5/12 ${item.side === "right" ? "justify-start pl-12" : "justify-start pl-12 opacity-0 pointer-events-none"}`}
      >
        {item.side === "right" && (
          <div className="max-w-sm">
            <img
              src={IMAGES[item.year as keyof typeof IMAGES]}
              alt={`${item.year} — ${item.title}`}
              className="w-full h-48 object-cover mb-4 shadow-lg"
              style={{ border: "2px solid #C9A347" }}
            />
            <h3
              className="text-[#0A2540] mb-2"
              style={{ fontFamily: "'Roboto', sans-serif", fontSize: "1.15rem", fontWeight: 700 }}
            >
              {item.title}
            </h3>
            <p
              className="text-[#555] leading-relaxed"
              style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.9rem", fontWeight: 400 }}
            >
              {item.text}
            </p>
          </div>
        )}
      </div>

      {/* MOBILE CONTENT */}
      <div className="md:hidden w-full px-4 pb-4 mt-4">
        <img
          src={IMAGES[item.year as keyof typeof IMAGES]}
          alt={`${item.year} — ${item.title}`}
          className="w-full h-44 object-cover mb-4 shadow-lg"
          style={{ border: "2px solid #C9A347" }}
        />
        <h3
          className="text-[#0A2540] mb-2"
          style={{ fontFamily: "'Roboto', sans-serif", fontSize: "1.1rem", fontWeight: 700 }}
        >
          {item.title}
        </h3>
        <p
          className="text-[#555] leading-relaxed"
          style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.875rem" }}
        >
          {item.text}
        </p>
      </div>
    </div>
  );
}

export function Timeline() {
  const { ref: titleRef, isVisible: titleVisible } = useIntersectionObserver();

  return (
    <section
      id="timeline"
      className="py-24 bg-white"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={titleRef}
          className="text-center mb-20"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#C9A347]" />
            <span
              className="text-[#C9A347] text-xs font-bold tracking-[0.3em] uppercase"
            >
              Marcos Históricos
            </span>
            <div className="h-px w-12 bg-[#C9A347]" />
          </div>
          <h2
            className="text-[#0A2540]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, lineHeight: 1.2 }}
          >
            Uma Trajectória de <span style={{ color: "#C9A347" }}>Excelência</span>
          </h2>
          <p
            className="text-[#555] mt-4 max-w-xl mx-auto"
            style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.7 }}
          >
            Trinta anos de compromisso com a fiscalização financeira, a legalidade e o desenvolvimento de Angola.
          </p>
        </div>

        {/* Timeline items */}
        <div className="relative">
          {/* Vertical gold line — desktop only */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            style={{ background: "linear-gradient(180deg, #C9A347 0%, rgba(201,163,71,0.2) 100%)" }}
            aria-hidden="true"
          />
          {/* Mobile vertical line */}
          <div
            className="md:hidden absolute left-8 top-0 bottom-0 w-0.5"
            style={{ background: "linear-gradient(180deg, #C9A347 0%, rgba(201,163,71,0.2) 100%)" }}
            aria-hidden="true"
          />

          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <TimelineItem key={item.year} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
