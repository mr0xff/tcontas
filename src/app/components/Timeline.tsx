import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import clsx from "clsx";

const IMAGES = {
  1917: "/timelines/1917.png",
  1933: "/timelines/1933.png",
  1951: "/timelines/1951.png",
  1975: "/timelines/1975.png",
  1991: "/timelines/1991.png",
  1992: "/timelines/1992.png",
  1996: "/timelines/1996.png",
  2001: "/timelines/2001.png",
  2010: "/timelines/2010.png",
  2012: "/timelines/2012.png",
  2019: "/timelines/2019.png",
  2023: "/timelines/2023.png",
  2024: "/timelines/2024.jpg",
  2026: "/timelines/2026.png",
};

// export const timelineData: Array<{
//   year: number;
//   title: string;
//   text: string;
//   side: "right" | "left";
// }> = [
//   {
//     year: 1917,
//     side: "left",
//     title: "AS PRIMEIRAS SEMENTES DO CONTROLO FINANCEIRO",
//     text: "A história do controlo das contas públicas em Angola tem raízes profundas. Em 1917 foi criado o Tribunal do Contencioso e de Contas, primeira estrutura destinada a apreciar matérias administrativas, fiscais e financeiras no território. Embora inserido no contexto da administração colonial, este organismo lançou uma ideia que atravessaria o tempo: os recursos públicos exigem responsabilidade e prestação de contas.",
//   },
//   {
//     year: 1933,
//     side: "right",
//     title: "A ADMINISTRAÇÃO FINANCEIRA DO ULTRAMAR",
//     text: `
//       Com a reorganização administrativa do Império Português, o controlo das contas públicas das colónias passou a ser enquadrado nas estruturas centrais do Estado.
//       Neste período, a fiscalização financeira permaneceu distante da realidade local. Ainda assim, consolidou-se o princípio jurídico de que a gestão do dinheiro público deve ser submetida a escrutínio institucional.
//     `
//   },
//   {
//     year: 1951,
//     side: "left",
//     title: "A PRESTAÇÃO DE CONTAS GANHA NOVO SIGNIFICADO",
//     text: `
//       A revisão constitucional de 1951 veio reafirmar a necessidade de examinar as contas das províncias ultramarinas, reforçando o papel do Tribunal de Contas no sistema administrativo português.
//       Apesar das limitações da época, este momento representou mais um passo na construção de uma tradição jurídica baseada na responsabilidade financeira do poder público.
//     `
//   },
//   {
//     year: 1975,
//     side: "right",
//     title: "NASCE UMA NOVA NAÇÃO",
//     text: `
//       Com a Independência Nacional, Angola assumiu plenamente o desafio de construir as suas próprias instituições de soberania.
//       Num contexto de profundas transformações políticas e sociais, o país iniciou o longo processo de edificação do seu Estado. A criação de um tribunal especializado na fiscalização das contas públicas tornar-se-ia, mais tarde, uma necessidade incontornável para o fortalecimento da governação democrática.
//     `
//   },
//   {
//     year: 1991,
//     side: "left",
//     title: "O DESPERTAR DO ESTADO DE DIREITO",
//     text: `
//       A abertura política dos anos 1990 trouxe consigo novas exigências institucionais.
//       A Lei n.º 12/91, ao reconhecer a necessidade de criar um órgão independente de controlo financeiro, abriu caminho para a institucionalização de um tribunal dedicado à fiscalização das finanças públicas.
//       O princípio da prestação de contas começava a afirmar-se como elemento essencial da nova ordem constitucional angolana.
//     `
//   },
//   {
//     year: 1992,
//     side: "right",
//     title: "A CONSTITUIÇÃO CONSAGRA O TRIBUNAL",
//     text: `
//       A segunda revisão constitucional, aprovada em 1992, estabeleceu formalmente a criação do Tribunal de Contas de Angola.
//       Pela primeira vez, a Constituição reconhecia a importância de um órgão jurisdicional dedicado a assegurar a legalidade e a disciplina na gestão dos recursos públicos.
//       A ideia transformava-se, finalmente, em compromisso institucional.
//     `
//   },
//   {
//     year: 1996,
//     side: "left",
//     title: "NASCE O TRIBUNAL DE CONTAS DE ANGOLA",
//     text: `
//       A 12 de Abril de 1996, através da Lei n.º 5/96, foi oficialmente criado o Tribunal de Contas de Angola.
//       Com este acto legislativo, o país deu um passo decisivo na consolidação do Estado de Direito, instituindo um órgão especializado na fiscalização das finanças públicas e no julgamento das contas sujeitas à sua jurisdição.
//       Era o nascimento jurídico de uma instituição destinada a proteger a legalidade financeira do Estado.
//     `
//   },
//   {
//     year: 2001,
//     side: "right",
//     title: "O TRIBUNAL GANHA VIDA",
//     text: `
//       Cinco anos após a sua criação legal, o Tribunal de Contas iniciou efectivamente as suas funções.
//       Com a nomeação do primeiro Juiz Conselheiro Presidente, Dr. Julião António, e da primeira geração de Juízes Conselheiros, começou a construção concreta da instituição.
//       Foram anos de fundação institucional, em que se lançaram as bases da fiscalização financeira moderna em Angola.
//     `
//   },
//   {
//     year: 2012,
//     side: "left",
//     title: "EXPANSÃO E FORTALECIMENTO",
//     text: `
//       Com o crescimento da administração pública e o aumento das responsabilidades de controlo, o Tribunal conheceu uma nova fase de expansão institucional.
//       A nomeação de novos Juízes Conselheiros e o reforço das estruturas técnicas permitiram consolidar o Tribunal como referência nacional na fiscalização das finanças públicas.
//     `
//   },
//   {
//     year: 2020, // Atribuído ano aproximado para manter cronologia da Placa 10
//     side: "right",
//     title: "UMA CORTE AO SERVIÇO DO ESTADO",
//     text: `
//       Ao longo das décadas, o Tribunal de Contas afirmou-se como guardião da legalidade financeira.
//       Mais do que julgar contas, a instituição passou a desempenhar um papel essencial na promoção da transparência, da boa governação e da responsabilidade na gestão da coisa pública.
//       O Tribunal tornou-se, assim, um pilar da democracia financeira em Angola.
//     `
//   },
//   {
//     year: 2024, // Atribuído ano aproximado para a fase de modernização da Placa 11
//     side: "left",
//     title: "INSTITUIÇÃO EM TRANSFORMAÇÃO",
//     text: `
//       Num mundo em rápida mudança, o Tribunal de Contas acompanha os desafios da modernização administrativa.
//       gitalização dos processos, o reforço da cooperação internacional e a incorporação de novas tecnologias transformam a forma como a fiscalização financeira é exercida, tornando-a mais eficiente, mais transparente e mais próxima das exigências contemporâneas da governação pública.
//     `
//   },
//   {
//     year: 2026,
//     side: "right",
//     title: "30 ANOS | UMA NOVA MARCA | UM NOVO CICLO",
//     text: `
//       Trinta anos depois da sua criação, o Tribunal de Contas de Angola celebra a maturidade de uma instituição que se tornou essencial para o funcionamento do Estado.
//       Em 2026, a Corte apresenta também a sua nova identidade visual, símbolo de renovação, modernização e compromisso com o futuro.
//       As 12 estrelas da nova marca representam os valores que orientam a instituição e recordam que a história do Tribunal continua a ser escrita todos os dias, ao serviço da legalidade, da transparência e da confiança pública.
//     `
//   },
// ];


export const timelineData: Array<{
  year: number;
  title: string;
  extraStyle?: string;
  text: string;
  side: "right" | "left";
}> = [
  {
    year: 1917,
    side: "left",
    title: "AS PRIMEIRAS SEMENTES DO CONTROLO FINANCEIRO",
    text: "A história do controlo das contas públicas em Angola tem raízes profundas. Em 1917 foi criado o Tribunal do Contencioso e de Contas, primeira estrutura destinada a apreciar matérias administrativas, fiscais e financeiras no território. Embora inserido no contexto da administração colonial, este organismo lançou uma ideia que atravessaria o tempo: os recursos públicos exigem responsabilidade e prestação de contas.",
  },
  {
    year: 1933,
    side: "right",
    title: "A ADMINISTRAÇÃO FINANCEIRA DO ULTRAMAR",
    text: "Com a reorganização administrativa do Império Português, o controlo das contas públicas das colónias passou a ser enquadrado nas estruturas centrais do Estado. Neste período, a fiscalização financeira permaneceu distante da realidade local. Ainda assim, consolidou-se o princípio jurídico de que a gestão do dinheiro público deve ser submetida a escrutínio institucional.",
  },
  {
    year: 1951,
    side: "left",
    title: "A PRESTAÇÃO DE CONTAS GANHA NOVO SIGNIFICADO",
    text: "A revisão constitucional de 1951 veio reafirmar a necessidade de examinar as contas das províncias ultramarinas, incluindo Angola. Isto ajudou a reforçar o papel do Tribunal de Contas no sistema administrativo português. Apesar das limitações da época, este momento representou mais um passo na construção de uma tradição jurídica baseada na responsabilidade financeira do poder público.",
  },
  {
    year: 1975,
    side: "right",
    title: "NASCE UMA NOVA NAÇÃO",
    text: "Com a Independência Nacional, Angola assumiu plenamente o desafio de construir as suas próprias instituições de soberania. Num contexto de profundas transformações políticas e sociais, o país iniciou o longo processo de edificação do seu Estado. A criação de um tribunal especializado na fiscalização das contas públicas tornar-se-ia, mais tarde, uma necessidade incontornável para o fortalecimento da governação democrática.",
  },
  {
    year: 1991,
    side: "left",
    title: "O DESPERTAR DO ESTADO DE DIREITO",
    extraStyle: "lg:object-contain h-96",
    text: "A abertura política dos anos 1990 trouxe consigo novas exigências institucionais. A Lei n.º 12/91, ao reconhecer a necessidade de criar um órgão independente de controlo financeiro, abriu caminho para a institucionalização de um tribunal dedicado à fiscalização das finanças públicas. O princípio da prestação de contas começava a afirmar-se como elemento essencial da nova ordem constitucional angolana.",
  },
  {
    year: 1992,
    side: "right",
    title: "A CONSTITUIÇÃO CONSAGRA O TRIBUNAL",
    extraStyle: "lg:object-contain h-96",
    text: "A segunda revisão constitucional, aprovada em 1992, estabeleceu formalmente a criação do Tribunal de Contas de Angola. Pela primeira vez, a Constituição reconhecia a importância de um órgão jurisdicional dedicado a assegurar a legalidade e a disciplina na gestão dos recursos públicos. A ideia transformava-se, finalmente, em compromisso institucional.",
  },
  {
    year: 1996,
    side: "left",
    title: "NASCE O TRIBUNAL DE CONTAS DE ANGOLA",
    text: "A 12 de Abril de 1996, através da Lei n.º 5/96, foi oficialmente criado o Tribunal de Contas de Angola. Com este acto legislativo, o país deu um passo decisivo na consolidação do Estado de Direito, instituindo um órgão especializado na fiscalização das finanças públicas e no julgamento das contas sujeitas à sua jurisdição. Era o nascimento jurídico de uma instituição destinada a proteger a legalidade financeira do Estado.",
  },
  {
    year: 2001,
    side: "right",
    title: "O TRIBUNAL GANHA VIDA",
    text: "Cinco anos após a sua criação legal, o Tribunal de Contas iniciou efectivamente as suas funções. Com a nomeação do primeiro Juiz Conselheiro Presidente, Dr. Julião António, e da primeira geração de Juízes Conselheiros, começou a construção concreta da instituição. Foram anos de fundação institucional, em que se lançaram as bases da fiscalização financeira moderna em Angola.",
  },
  {
    year: 2010,
    side: "left",
    title: "EXPANSÃO E FORTALECIMENTO",
    text: "Com o crescimento da administração pública e o aumento das responsabilidades de controlo, o Tribunal conheceu uma nova fase de expansão institucional, com a aprovação da Lei Orgânica e do Processo do Tribunal de Contas, visando a conformação da legislação da sua disciplina e funcionamento. A nomeação de novos Juízes Conselheiros e o reforço das estruturas técnicas permitiram consolidar o Tribunal como referência nacional na fiscalização das finanças públicas.",
  },
  {
    year: 2019,
    side: "right",
    title: "UMA CORTE AO SERVIÇO DO ESTADO",
    text: "Ao longo das décadas, o Tribunal de Contas foi consolidando o seu papel como guardião da legalidade financeira do Estado. A Assembleia Nacional aprova a alteração da Lei Orgânica e do Processo do Tribunal de Contas. A Corte reforçou a sua capacidade de intervenção, passando a imprimir maior celeridade à resolução dos litígios, a alargar a sua composição de 9 para 13 Juízes Conselheiros e a ampliar o seu campo de actuação. Neste novo quadro, o Tribunal passou a poder realizar, por iniciativa própria ou a solicitação da Assembleia Nacional, inquéritos e auditorias de natureza contabilística, financeira ou patrimonial às entidades públicas e aos serviços dependentes das entidades sujeitas à sua jurisdição, bem como exercer a fiscalização concomitante sobre essas mesmas entidades.",
  },
  {
    year: 2023,
    side: "left",
    title: "UM NOVO CICLO DE LIDERANÇA E TRANSFORMAÇÃO",
    text: "A história recente do Tribunal de Contas de Angola é marcada por sucessivas etapas de liderança, cada uma delas determinante para o seu processo de consolidação, renovação e afirmação institucional. Em 2023, o Juiz Conselheiro Presidente, Dr. Sebastião Domingos Gunza, assumiu a liderança da Corte, inaugurando um novo ciclo orientado por uma visão estratégica assente na modernização institucional, na valorização do capital humano, na digitalização dos processos e no reforço da projecção nacional e internacional do Tribunal. Sob a sua direcção, a instituição tem vindo a aprofundar o seu processo de transformação, afirmando-se como um Tribunal cada vez mais moderno, eficiente e alinhado com os mais elevados padrões de controlo externo das finanças públicas.",
  },
  {
    year: 2026,
    side: "right",
    title: "30 ANOS | UMA NOVA MARCA | UM NOVO CICLO",
    text: "Trinta anos depois da sua criação, o Tribunal de Contas de Angola celebra a maturidade de uma instituição que se tornou essencial para o funcionamento do Estado. Em 2026, a Corte apresenta também a sua nova identidade visual, símbolo de renovação, modernização e compromisso com o futuro. As 12 estrelas da nova marca representam os valores que orientam a instituição e recordam que a história do Tribunal continua a ser escrita todos os dias, ao serviço da legalidade, da transparência e da confiança pública.",
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
              className={clsx("w-full h-48 object-cover mb-4 shadow-lg", item.extraStyle)}
              style={{ border: "2px solid #C9A347" }}
            />
            <h3
              className="text-[#0A2540] mb-2"
              style={{ fontFamily: "'Roboto', sans-serif", fontSize: "1.15rem", fontWeight: 700 }}
            >
              {item.title}
            </h3>
            <p
              className="text-[#555] leading-relaxed text-justify"
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
              className={clsx("w-full h-48 object-cover mb-4 shadow-lg", item.extraStyle)}
              style={{ border: "2px solid #C9A347" }}
            />
            <h3
              className="text-[#0A2540] mb-2"
              style={{ fontFamily: "'Roboto', sans-serif", fontSize: "1.15rem", fontWeight: 700 }}
            >
              {item.title}
            </h3>
            <p
              className="text-[#555] leading-relaxed text-justify"
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
