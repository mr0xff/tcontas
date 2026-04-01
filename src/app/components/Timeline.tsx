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

export const timelineData: Array<{
  year: number;
  title: string;
  text: string;
  side: "right" | "left";
}> = [
  {
    year: 1917,
    side: "left",
    title: "AS PRIMEIRAS SEMENTES",
    text: "Criação do Tribunal do Contencioso e de Contas, a primeira estrutura destinada a apreciar matérias administrativas, fiscais e financeiras em território angolano.",
  },
  {
    year: 1933,
    side: "right",
    title: "ADMINISTRAÇÃO DO ULTRAMAR",
    text: "O controlo das contas passou a ser enquadrado nas estruturas centrais do Estado, consolidando o princípio jurídico do escrutínio institucional sobre o dinheiro público.",
  },
  {
    year: 1951,
    side: "left",
    title: "NOVO SIGNIFICADO",
    text: "A revisão constitucional reafirmou a necessidade de examinar as contas das províncias ultramarinas, reforçando o papel do Tribunal no sistema administrativo.",
  },
  {
    year: 1975,
    side: "right",
    title: "NASCE UMA NOVA NAÇÃO",
    text: "Com a Independência Nacional, Angola assumiu o desafio de edificar as suas próprias instituições de soberania e governação democrática.",
  },
  {
    year: 1991,
    side: "left",
    title: "O DESPERTAR DO ESTADO DE DIREITO",
    text: "A Lei n.º 12/91 reconheceu a necessidade de um órgão independente de controlo financeiro, abrindo caminho para a fiscalização das finanças públicas.",
  },
  {
    year: 1992,
    side: "right",
    title: "CONSAGRAÇÃO CONSTITUCIONAL",
    text: "A segunda revisão constitucional estabeleceu formalmente o Tribunal de Contas de Angola como órgão jurisdicional para assegurar a legalidade dos recursos públicos.",
  },
  {
    year: 1996,
    side: "left",
    title: "NASCIMENTO JURÍDICO",
    text: "A 12 de Abril, através da Lei n.º 5/96, é oficialmente criado o Tribunal de Contas de Angola, instituição destinada a proteger a legalidade financeira do Estado.",
  },
  {
    year: 2001,
    side: "right",
    title: "O TRIBUNAL GANHA VIDA",
    text: "Início efetivo das funções com a nomeação do primeiro Juiz Conselheiro Presidente, Dr. Julião António, lançando as bases da fiscalização moderna.",
  },
  {
    year: 2012,
    side: "left",
    title: "EXPANSÃO E FORTALECIMENTO",
    text: "Fase de crescimento institucional com a nomeação de novos Juízes e reforço técnico, consolidando o Tribunal como referência na fiscalização nacional.",
  },
  {
    year: 2020, // Atribuído ano aproximado para manter cronologia da Placa 10
    side: "right",
    title: "AO SERVIÇO DO ESTADO",
    text: "Afirmação como guardião da legalidade, promovendo a transparência, a boa governação e a responsabilidade na gestão da coisa pública.",
  },
  {
    year: 2024, // Atribuído ano aproximado para a fase de modernização da Placa 11
    side: "left",
    title: "INSTITUIÇÃO EM TRANSFORMAÇÃO",
    text: "Digitalização de processos e reforço da cooperação internacional, tornando a fiscalização mais eficiente e próxima das exigências contemporâneas.",
  },
  {
    year: 2026,
    side: "right",
    title: "30 ANOS | NOVO CICLO",
    text: "Celebração da maturidade institucional e apresentação da nova identidade visual. Um compromisso renovado com a transparência e a confiança pública.",
  },
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
