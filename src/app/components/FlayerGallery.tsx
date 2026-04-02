import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { themeColors } from '../theme';
import { X, Share2 } from 'lucide-react';

// Dados Exemplo dos Flayers (Substituir pelos teus caminhos reais no Railway)
const flayersData = [
  { id: 1, title: "Sebastião Cunza", image: "/flayers/p1.png" },
  { id: 2, title: "célio gourgel", image: "/flayers/p2.png" },
  { id: 3, title: "alexandre cose", image: "/flayers/p3.png" },
  { id: 4, title: "Adilson Cardoso", image: "/flayers/p4.png" },
  { id: 5, title: "Evarista Solano", image: "/flayers/p5.png" },
  { id: 6, title: "Zineb el adaqui", image: "/flayers/p6.png" },
  { id: 7, title: "Rui Cruz", image: "/flayers/p7.png" },
  { id: 8, title: "Carlos Feijó", image: "/flayers/p8.png" },
  { id: 9, title: "Filipa Calvão", image: "/flayers/p9.png" },
  { id: 10, title: "Ministro Zimler", image: "/flayers/p10.png" },
  { id: 11, title: "Mamadou Faye", image: "/flayers/p11.png" }, // O ficheiro 11 não apareceu no seu ls, valide se existe
  { id: 12, title: "Inaudo Araújo", image: "/flayers/p12.png" },
  { id: 13, title: "Jorge Bacelar Gouveia", image: "/flayers/p13.png" },
  { id: 14, title: "Augusto Nardes", image: "/flayers/p14.png" },
  { id: 15, title: "André Matos", image: "/flayers/p15.png" },
  { id: 16, title: "Aurora dos Santos", image: "/flayers/p16.png" },
  { id: 17, title: "Fernanda Mualeia", image: "/flayers/p17.png" },
  { id: 18, title: "Edilson Sousa Silva", image: "/flayers/p18.png" },
  { id: 19, title: "Maria Milhomem", image: "/flayers/p19.png" },
  { id: 20, title: "Nelson Pellegrini", image: "/flayers/p20.png" },
  { id: 21, title: "Luciano Araújo", image: "/flayers/p21.png" },
  { id: 22, title: "Karina Leite", image: "/flayers/p22.png" },
  { id: 23, title: "João Pinto", image: "/flayers/p23.png" },
  { id: 24, title: "Sebastião Helvécio", image: "/flayers/p24.png" },
  { id: 25, title: "Mariana Faraco", image: "/flayers/p25.png" },
  { id: 26, title: "José Fontes", image: "/flayers/p26.png" },
];

export function FlayerGallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const flayersPerPage = 3;

  const indexOfLastFlayer = currentPage * flayersPerPage;
  const indexOfFirstFlayer = indexOfLastFlayer - flayersPerPage;
  const currentFlayers = flayersData.slice(indexOfFirstFlayer, indexOfLastFlayer);
  const totalPages = Math.ceil(flayersData.length / flayersPerPage);

  const [selectedFlayer, setSelectedFlayer] = useState<any>(null);

  return (
    <div className="w-full p-8 md:p-12 border border-white/10 rounded-none mt-20">
      
      {/* Cabeçalho */}
      <div className="flex items-center justify-between mb-12 pb-6 border-b border-white/10">
        <div className="flex items-center gap-4">
          <h2 className="text-4xl font-black uppercase tracking-tighter leading-none text-white" style={{ fontFamily: "'Roboto', sans-serif" }}>
            intervenientes
          </h2>
        </div>
        
        {/* Navegação de Paginação (Visível apenas em Desktop) */}
        <div className="hidden md:flex items-center gap-2">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="w-10 h-10 border flex items-center justify-center text-white/50 hover:text-white hover:border-[#C9A347] disabled:opacity-30 disabled:pointer-events-none transition-all rounded-none"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-xs font-bold text-white/70 uppercase tracking-widest px-4">
            {currentPage.toString().padStart(2, '0')} / {totalPages.toString().padStart(2, '0')}
          </span>
          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="w-10 h-10 border flex items-center justify-center text-white/50 hover:text-white hover:border-[#C9A347] disabled:opacity-30 disabled:pointer-events-none transition-all rounded-none"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Grelha com tuas Animações Originais */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentPage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Mostra todos no mobile (scroll vertical) ou paginado no desktop */}
          {(typeof window !== 'undefined' && window.innerWidth < 768 ? flayersData : currentFlayers).map((flayer) => (
            <div key={flayer.id} className="group relative rounded-none overflow-hidden bg-white/5 border border-white/10 hover:border-[#C9A347]/50 transition-all duration-300 flex flex-col h-full">
              
              <div className="relative aspect-[3/4] overflow-hidden border-b border-white/10">
                <img 
                  src={flayer.image} 
                  alt={flayer.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
                />

                <div className="absolute inset-0 bg-primary/25 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 z-10 p-6">
                  <button
                    onClick={() => setSelectedFlayer(flayer)}
                    className="flex items-center gap-2 px-5 py-3 font-black uppercase text-[10px] tracking-[0.2em] rounded-none border transition-colors"
                    style={{ backgroundColor: "transparent", borderColor: "#C9A347", color: "#C9A347" }}
                  >
                    <Maximize2 size={14} /> Expandir
                  </button>
                  <button className="flex items-center gap-2 px-5 py-3 font-black uppercase text-[10px] tracking-[0.2em] rounded-none transition-colors"
                    style={{ backgroundColor: "#C9A347", color: themeColors.primaryDark }}
                  >
                    <Download size={14} /> Download
                  </button>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="border-b-1 border-yellow-500 mb-2" />
                  <h3 className="text-white font-black text-xl uppercase tracking-tighter leading-tight mb-4 group-hover:text-[#C9A347] transition-colors" style={{ fontFamily: "'Roboto', sans-serif" }}>
                    {flayer.title}
                  </h3>
                </div>
                <div className="h-1 w-0 bg-[#C9A347] group-hover:w-full transition-all duration-500" />
              </div>

              <div className="absolute top-0 right-0 border-l border-b border-white/10 px-3 py-1 text-[9px] font-mono text-white/50 group-hover:text-[#C9A347]">
                FL_{flayer.id.toString().padStart(3, '0')}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      <FlayerExpandModal 
        isOpen={!!selectedFlayer} 
        onClose={() => setSelectedFlayer(null)} 
        flayer={selectedFlayer} 
      />
    </div>
  );
}
interface FlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  flayer: {
    title: string;
    image: string;
    category: string;
  } | null;
}

export function FlayerExpandModal({ isOpen, onClose, flayer }: FlayerModalProps) {
  if (!flayer) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-10  backdrop-blur-md">
          {/* Botão de Fechar Externo (Mobile Friendly) */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-white/50 hover:text-[#C9A347] transition-colors z-[160]"
          >
            <X size={32} strokeWidth={1.5} />
          </button>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            style={{backgroundColor: themeColors.primary }}
            className="w-full max-w-5xl h-[90vh] md:h-auto overflow-hidden flex flex-col md:flex-row border border-[#C9A347]/30 shadow-2xl"
          >
            {/* Lado Esquerdo: Visualização do Flayer */}
            <div className="flex-1 bg-black/40 flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-white/10 overflow-hidden">
              <img 
                src={flayer.image} 
                alt={flayer.title}
                className="max-w-full max-h-full object-contain shadow-[0_0_50px_rgba(201,163,71,0.15)]"
              />
            </div>

            {/* Lado Direito: Info e Ações */}
            <div className="w-full md:w-80 p-8 flex flex-col justify-between " style={{backgroundColor: themeColors.primary}}>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-[#C9A347]">
                  {flayer.category}
                </p>
                <h2 className="text-2xl font-black uppercase tracking-tighter leading-none mb-6 text-white" style={{ fontFamily: "'Roboto', sans-serif" }}>
                  {flayer.title}
                </h2>
                <div className="h-px w-12 bg-[#C9A347] mb-8" />
                
                <p className="text-white/40 text-[11px] leading-relaxed uppercase tracking-wider mb-10">
                  Documento oficial das Jornadas Científicas do 30º Aniversário do Tribunal de Contas de Angola.
                </p>
              </div>

              {/* Ações Brutalistas */}
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-3 py-4 px-6 font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300 border border-[#C9A347]"
                  style={{ backgroundColor: "#C9A347", color: "#0A2540" }}
                >
                  <Download size={16} strokeWidth={3} />
                  Download
                </button>

                <button className="w-full flex items-center justify-center gap-2 py-3 border border-white/10 text-white/70 hover:text-[#C9A347] hover:border-[#C9A347] transition-all text-[9px] font-black uppercase tracking-widest">
                  <Share2 size={14} /> Partilhar
                </button>
                <button 
                  onClick={onClose}
                  className="w-full mt-4 flex items-center justify-center gap-2 py-3 text-white/30 hover:text-white transition-colors text-[9px] font-black uppercase tracking-[0.3em]"
                >
                  Fechar Visualização
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}