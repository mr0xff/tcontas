import { useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

// const galleryImages = [
//   {
//     id: 0,
//     src: "presidente.png",
//     name: "Dr. Sebastião Gunza",
//     description: "Juiz Conselheiro — Tribunal de Contas",
//     biographyUrl: "#",
//   },
//   {
//     id: 1,
//     src: "https://tcontas.ao/wp-content/uploads/2025/09/04.webp",
//     name: "Dr. Evaristo José Solano",
//     description: "Juiz Conselheiro Vice-Presidente do Tribunal e Presidente da 1.ª Câmara",
//     biographyUrl: "https://tcontas.ao/Juízes/dr-evaristo-jose-solano/",
//   },
//   {
//     id: 2,
//     src: "https://tcontas.ao/wp-content/uploads/2025/09/06.webp",
//     name: "Dra. Arlete Maria Bolonhês da Conceição",
//     description: "JUÍZA CONSELHEIRA DA 1ª CÂMARA",
//     biographyUrl: "https://tcontas.ao/Juízes/dra-arlete-maria-bolonhes-da-conceicao/",
//   },
//   {
//     id: 3,
//     src: "https://tcontas.ao/wp-content/uploads/2025/09/04-1.webp",
//     name: "Dr. Armindo Gideão Kunjiquisse Jelembi",
//     description: "JUIZ CONSELHEIRO DA 1ª CÂMARA",
//     biographyUrl: "https://tcontas.ao/Juízes/dr-armindo-gideao-kunjiquisse-jelembi/",
//   },
//   {
//     id: 4,
//     src: "https://tcontas.ao/wp-content/uploads/2025/09/01-1.webp",
//     name: "Dr. Januário José Domingos",
//     description: "JUIZ CONSELHEIRO DA 1ª CÂMARA",
//     biographyUrl: "https://tcontas.ao/Juízes/dr-januario-jose-domingos/",
//   },
//   {
//     id: 5,
//     src: "https://tcontas.ao/wp-content/uploads/2025/09/03.webp",
//     name: "Dr. Carlos Luís M. António",
//     description: "JUIZ CONSELHEIRO DA 1ª CÂMARA",
//     biographyUrl: "https://tcontas.ao/Juízes/dr-carlos-luis-m-antonio/",
//   },
//   {
//     id: 6,
//     src: "https://tcontas.ao/wp-content/uploads/2025/09/8.webp",
//     name: "Dra. Olinda França Cardoso",
//     description: "JUÍZA CONSELHEIRA PRESIDENTE DA 2ª CÂMARA",
//     biographyUrl: "https://tcontas.ao/Juízes/dra-olinda-franca-cardoso/",
//   },
//   {
//     id: 7,
//     src: "https://tcontas.ao/wp-content/uploads/2025/09/03-1.webp",
//     name: "Dr. Fausto Tavares de Carvalho Simões",
//     description: "JUIZ CONSELHEIRO DA 2ª CÂMARA",
//     biographyUrl: "https://tcontas.ao/Juízes/dr-fausto-tavares-de-carvalho-simoes/",
//   },
//   {
//     id: 8,
//     src: "https://tcontas.ao/wp-content/uploads/2025/09/Imagem-WhatsApp-2025-10-09-as-12.58.44_7f1ebd62.png",
//     name: "Dr. Manuel José Domingos",
//     description: "JUIZ CONSELHEIRO DA 2ª CÂMARA",
//     biographyUrl: "https://tcontas.ao/Juízes/dr-manuel-jose-domingos/",
//   },
//   {
//     id: 9,
//     src: "https://tcontas.ao/wp-content/uploads/2025/09/02-1.webp",
//     name: "Dr. Manuel da Cruz Neto",
//     description: "JUIZ CONSELHEIRO DA 2ª CÂMARA",
//     biographyUrl: "https://tcontas.ao/Juízes/dr-manuel-da-cruz-neto/",
//   },
//   {
//     id: 10,
//     src: "https://tcontas.ao/wp-content/uploads/2025/09/05.webp",
//     name: "Dr. Sebastião Jorge Diogo Bessa",
//     description: "JUIZ CONSELHEIRO DA 2ª CÂMARA",
//     biographyUrl: "https://tcontas.ao/Juízes/dr-sebastiao-jorge-diogo-bessa/",
//   },
//   {
//     id: 11,
//     src: "https://tcontas.ao/wp-content/uploads/2025/09/02.webp",
//     name: "Dr. João Carlos de C. Paiva",
//     description: "JUIZ CONSELHEIRO DA 2ª CÂMARA",
//     biographyUrl: "https://tcontas.ao/Juízes/dr-joao-carlos-de-c-paiva/",
//   },
//   {
//     id: 12,
//     src: "https://tcontas.ao/wp-content/uploads/2025/09/01.webp",
//     name: "Dr. Fernando de Almeida Gomes",
//     description: "JUIZ CONSELHEIRO DA 2ª CÂMARA",
//     biographyUrl: "https://tcontas.ao/Juízes/dr-fernando-de-almeida-gomes/",
//   },
   
// ];

export const galleryImages = [
  {
    id: 0,
    name: "Dr. Sebastião Domingos Gunza",
    description: "Juiz Conselheiro Presidente do Tribunal",
    src: "presidente.png",
    biographyUrl: "#",
  },
  {
    id: 1,
    name: "Dr. Evaristo José Solano",
    description: "Juiz Conselheiro Vice-Presidente do Tribunal e Presidente da 1.ª Câmara",
    src: "https://tcontas.ao/wp-content/uploads/2025/09/04.webp",
    biographyUrl: "https://tcontas.ao/Juízes/dr-evaristo-jose-solano/",
  },
  {
    id: 2,
    name: "Dra. Olinda Maria França Cardoso",
    description: "Juíza Conselheira Presidente da 2.ª Câmara",
    src: "https://tcontas.ao/wp-content/uploads/2025/09/8.webp",
    biographyUrl: "https://tcontas.ao/Juízes/dra-olinda-franca-cardoso/",
  },
  // {
  //   id: 3,
  //   name: "Dr. Fausto Tavares de Carvalho Simões",
  //   description: "Juiz Conselheiro da 2.ª Câmara",
  //   src: "https://tcontas.ao/wp-content/uploads/2025/09/03-1.webp",
  //   biographyUrl: "https://tcontas.ao/Juízes/dr-fausto-tavares-de-carvalho-simoes/",
  // },
  {
    id: 4,
    name: "Dr. Manuel José Domingos",
    description: "Juiz Conselheiro da 2.ª Câmara",
    src: "https://tcontas.ao/wp-content/uploads/2025/09/Imagem-WhatsApp-2025-10-09-as-12.58.44_7f1ebd62.png",
    biographyUrl: "https://tcontas.ao/Juízes/dr-manuel-jose-domingos/",
  },
  {
    id: 5,
    name: "Dra. Arlete Maria Bolonhês da Conceição",
    description: "Juíza Conselheira da 1.ª Câmara",
    src: "https://tcontas.ao/wp-content/uploads/2025/09/06.webp",
    biographyUrl: "https://tcontas.ao/Juízes/dra-arlete-maria-bolonhes-da-conceicao/",
  },
  {
    id: 6,
    name: "Dr. Sebastião Jorge Diogo Bessa",
    description: "Juiz Conselheiro da 2.ª Câmara",
    src: "https://tcontas.ao/wp-content/uploads/2025/09/05.webp",
    biographyUrl: "https://tcontas.ao/Juízes/dr-sebastiao-jorge-diogo-bessa/",
  },
  {
    id: 7,
    name: "Dr. Manuel da Cruz Neto",
    description: "Juiz Conselheiro da 2.ª Câmara",
    src: "https://tcontas.ao/wp-content/uploads/2025/09/02-1.webp",
    biographyUrl: "https://tcontas.ao/Juízes/dr-manuel-da-cruz-neto/",
  },
  {
    id: 8,
    name: "Dr. Armindo Gideão Kunjiquisse Jelembi",
    description: "Juiz Conselheiro da 1.ª Câmara",
    src: "https://tcontas.ao/wp-content/uploads/2025/09/04-1.webp",
    biographyUrl: "https://tcontas.ao/Juízes/dr-armindo-gideao-kunjiquisse-jelembi/",
  },
  {
    id: 9,
    name: "Dr. Januário José Domingos",
    description: "Juiz Conselheiro da 1.ª Câmara",
    src: "https://tcontas.ao/wp-content/uploads/2025/09/01-1.webp",
    biographyUrl: "https://tcontas.ao/Juízes/dr-januario-jose-domingos/",
  },
  {
    id: 10,
    name: "Dr. João Carlos de C. Paiva",
    description: "Juiz Conselheiro da 2.ª Câmara",
    src: "https://tcontas.ao/wp-content/uploads/2025/09/02.webp",
    biographyUrl: "https://tcontas.ao/Juízes/dr-joao-carlos-de-c-paiva/",
  },
  {
    id: 11,
    name: "Dr. Carlos Luís M. António",
    description: "Juiz Conselheiro da 1.ª Câmara",
    src: "https://tcontas.ao/wp-content/uploads/2025/09/03.webp",
    biographyUrl: "https://tcontas.ao/Juízes/dr-carlos-luis-m-antonio/",
  },
  {
    id: 12,
    name: "Dr. Fernando de Almeida Gomes",
    description: "Juiz Conselheiro da 2.ª Câmara",
    src: "https://tcontas.ao/wp-content/uploads/2025/09/01.webp",
    biographyUrl: "https://tcontas.ao/Juízes/dr-fernando-de-almeida-gomes/",
  },
  {
    id: 13,
    name: "Dr. Aquiles Gonçalves da Silva Francisco",
    description: "Juiz Conselheiro da 2.ª Câmara",
    src: "/juiz.jpeg",
    biographyUrl: "https://tcontas.ao/Juízes/dr-fernando-de-almeida-gomes/",
  },
];

const testimonials = [
  {
    id: 50,
    quote: "A missão do TCA vai além da fiscalização; é um compromisso permanente com a construção de um Estado mais justo, transparente e eficiente ao serviço dos cidadãos angolanos.",
    name: "Dr. Sebastião Gunza",
    image: "presidente.png",
    role: "Juiz Conselheiro — Tribunal de Contas"
  },
  {
    id: 40,
    quote: "O Tribunal de Contas representa um pilar fundamental para a transparência e a boa governação em Angola. Trinta anos de dedicação ao serviço público são motivos de grande orgulho para toda a nação.",
    name: "Dr. Carlos Luís M. António",
    image: "https://tcontas.ao/wp-content/uploads/2025/09/03.webp",
    role: "Juiz Conselheiro da 1ª Câmara do Tribunal de Contas"
  },
  {
    id: 30,
    quote: "Ao longo destes trinta anos, é notável a evolução desta instituição, que cresceu em capacidade técnica, modernidade e impacto na gestão das finanças públicas angolanas.",
    name: "Dra. Arlete Maria Bolonhês da Conceição",
    image: "https://tcontas.ao/wp-content/uploads/2025/09/06.webp",
    role: "Juíza Conselheira da 1ª Câmara do Tribunal de Contas"
  }
];

function GalleryGrid() {
  const { ref, isVisible } = useIntersectionObserver();

  const president = galleryImages.find((img) => img.id === 0);
  const other_judges = galleryImages.filter((img) => img.id !== 0);

  // Verificação simples para evitar erros de renderização
  const isDesktop = typeof window !== 'undefined' && window.innerWidth > 768;

  return (
    <div ref={ref} className="flex flex-col items-center w-full px-4 min-h-[500px]">
      
      {/* 1. DESTAQUE DO PRESIDENTE */}
      {president && (
        <div className="w-full max-w-sm mb-12 flex justify-center">
          <div
            className="relative overflow-hidden group w-full shadow-2xl border-2 border-[#C9A347]"
            style={{
              // No mobile (isDesktop false), a opacidade é sempre 1. No desktop, segue o isVisible.
              opacity: !isDesktop || isVisible ? 1 : 0,
              transform: !isDesktop || isVisible ? "scale(1)" : "scale(0.95)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
              aspectRatio: "3 / 4",
              backgroundColor: "#0A2540",
            }}
          >
            <img
              src={president.src}
              alt={president.name}
              className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
              style={{ objectPosition: "center 20%" }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-transparent to-transparent opacity-90 md:opacity-60" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
              <span className="text-[#C9A347] font-bold tracking-widest uppercase block mb-1">
                {president.name}
              </span>
              <p className="text-white text-[10px] font-medium uppercase opacity-90 mb-4">
                {president.description}
              </p>

              {president.biographyUrl && (
                <a
                  href={president.biographyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-[#C9A347] text-[#0A2540] text-xs font-bold uppercase transition-all hover:bg-white active:scale-95"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  Ver Biografia
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 2. GRID DOS OUTROS JUÍZES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {other_judges.map((img, i) => (
          <div
            key={img.id}
            className="relative overflow-hidden group border border-[#C9A347]/30"
            style={{
              // No mobile, ignoramos o isVisible para garantir que o card apareça
              opacity: !isDesktop || isVisible ? 1 : 0,
              transform: !isDesktop || isVisible ? "scale(1)" : "scale(0.98)",
              transition: `opacity 0.5s ease ${(i + 1) * 0.06}s, transform 0.5s ease ${(i + 1) * 0.06}s`,
              aspectRatio: "3 / 4",
              backgroundColor: "#0A2540",
            }}
          >
            <img
              src={img.src}
              alt={img.name}
              className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
              style={{ objectPosition: "center 35%" }}
            />
            
            {/* Overlay: No Mobile o fundo escuro é permanente para legibilidade */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[2%] via-[#0A2540]/60 to-transparent md:from-transparent md:via-transparent md:group-hover:from-[#0A2540] md:group-hover:via-[#0A2540]/80 transition-all duration-300 flex flex-col items-center justify-end p-6 text-center">              <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                <span className="text-[#C9A347] font-bold tracking-wider uppercase block mb-1 text-sm">
                  {img.name}
                </span>
                <p className="text-white text-[10px] uppercase tracking-tighter mb-4">
                  {img.description}
                </p>

                {img.biographyUrl && (
                  <a
                    href={img.biographyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-[#C9A347] text-[#0A2540] text-[10px] font-black uppercase tracking-widest hover:bg-white active:scale-95"
                  >
                    Biografia
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useIntersectionObserver();
  const t = testimonials[current];

  return (
    <div
      ref={ref}
      className="mt-20"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
      }}
    >
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="h-px w-12 bg-[#C9A347]" />
          <span className="text-[#C9A347] text-xs font-bold tracking-[0.3em] uppercase" style={{ fontFamily: "'Roboto', sans-serif" }}>
            Depoimentos
          </span>
          <div className="h-px w-12 bg-[#C9A347]" />
        </div>
        <h3
          className="text-[#0A2540]"
          style={{ fontFamily: "'Roboto', sans-serif", fontSize: "1.6rem", fontWeight: 700 }}
        >
          Vozes da Instituição
        </h3>
      </div>

      <div className="max-w-3xl mx-auto">
        <div
          className="relative p-8 md:p-10 bg-white"
          style={{ border: "1px solid #C9A347", boxShadow: "0 8px 40px rgba(10,37,64,0.08)" }}
        >
          {/* Quote mark */}
          <div
            className="absolute -top-5 left-10 text-[#C9A347] leading-none"
            style={{ fontSize: "5rem", fontFamily: "Georgia, serif", lineHeight: 1 }}
            aria-hidden="true"
          >
            "
          </div>

          <p
            className="text-[#333] leading-relaxed text-center mb-8 pt-4"
            style={{ fontFamily: "'Roboto', sans-serif", fontSize: "1.05rem", fontStyle: "italic", fontWeight: 300 }}
          >
            {t.quote}
          </p>

          <div className="flex items-center justify-center gap-4">
            <img
              src={t.image}
              alt={t.name}
              className="w-14 h-14 rounded-full object-cover"
              style={{ border: "2px solid #C9A347" }}
            />
            <div>
              <p
                className="text-[#0A2540]"
                style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.95rem", fontWeight: 700 }}
              >
                {t.name}
              </p>
              <p
                className="text-[#C9A347]"
                style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.8rem", fontWeight: 500 }}
              >
                {t.role}
              </p>
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-3 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-300"
              style={{
                width: i === current ? "28px" : "8px",
                height: "8px",
                borderRadius: "4px",
                backgroundColor: i === current ? "#C9A347" : "#ccc",
              }}
              aria-label={`Depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Gallery() {
  const { ref: titleRef, isVisible: titleVisible } = useIntersectionObserver();

  return (
    <section
      id="galeria"
      className="py-24"
      style={{ backgroundColor: "#F8F6F0", fontFamily: "'Roboto', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={titleRef}
          className="text-center mb-14"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#C9A347]" />
            <span className="text-[#C9A347] text-xs font-bold tracking-[0.3em] uppercase">
              Juízes
            </span>
            <div className="h-px w-12 bg-[#C9A347]" />
          </div>
          <h2
            className="text-[#0A2540]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, lineHeight: 1.2 }}
          >
            Juízes em funções no Tribunal de Contas
          </h2>
        </div>

        <GalleryGrid />

        <TestimonialCarousel />
      </div>
    </section>
  );
}
