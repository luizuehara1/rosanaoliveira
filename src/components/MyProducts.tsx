import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Download, 
  Sparkles, 
  BookOpen, 
  GraduationCap, 
  ArrowUpRight, 
  CheckCircle2, 
  ShoppingBag,
  Layers,
  ShieldCheck
} from 'lucide-react';
import Section, { FadeIn, BlurIn } from './Section';
import { generateEbookPDF } from '../lib/generateEbookPdf';

const WHEY_CHECKOUT_URL = "https://pay.kiwify.com.br/cKLdBg0";

export default function MyProducts() {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadEbook = () => {
    setDownloading(true);
    try {
      const doc = generateEbookPDF();
      doc.save('7-Habitos-Para-Melhorar-Sua-Alimentacao-Rosana-Oliveira.pdf');
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    } catch (err) {
      console.error('Erro ao gerar PDF:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <Section id="meus-produtos" className="relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-lime-key/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-lime-key/30 bg-lime-key/10 text-lime-key text-[11px] font-extrabold uppercase tracking-widest mb-4">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Vitrine Digital</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Meus Produtos
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 font-light max-w-xl mx-auto">
              Materiais educativos e cursos práticos desenvolvidos para potencializar seus resultados, sua saúde e sua rotina alimentar.
            </p>
          </FadeIn>
        </div>

        {/* Products Grid: 2 Columns on Desktop, 1 Column on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* PRODUCT 1: E-BOOK GRATUITO */}
          <FadeIn delay={0.1} y={20}>
            <div className="h-full rounded-3xl bg-zinc-950/90 border border-white/10 hover:border-lime-key/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.6)] group">
              
              {/* Product Visual / Cover Header */}
              <div className="relative p-6 sm:p-8 pb-4 bg-gradient-to-b from-zinc-900 to-zinc-950 flex items-center justify-center border-b border-white/5">
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-lime-key text-black text-[10px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    GRATUITO
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-10">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                    E-Book PDF
                  </span>
                </div>

                {/* Minimalist Graphic Cover Representation */}
                <div className="w-40 sm:w-48 aspect-[1/1.35] my-4 rounded-xl bg-zinc-950 border border-lime-key/30 p-4 flex flex-col justify-between shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:border-lime-key">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-[8px] font-black tracking-widest text-lime-key uppercase">Rosana Oliveira</span>
                    <BookOpen className="w-3 h-3 text-lime-key" />
                  </div>
                  
                  <div className="text-center py-2">
                    <span className="text-3xl font-black text-lime-key leading-none block">7</span>
                    <span className="text-xs font-black text-white uppercase tracking-tight block">HÁBITOS</span>
                    <span className="text-[8px] bg-lime-key text-black px-1.5 py-0.5 rounded font-black uppercase inline-block my-0.5">QUE SABOTAM</span>
                    <span className="text-[10px] font-black text-white block">O EMAGRECIMENTO</span>
                    <span className="text-[9px] font-serif italic text-lime-key">após os 35</span>
                  </div>

                  <div className="border-t border-white/10 pt-1.5 flex justify-between items-center text-[8px] text-zinc-400">
                    <span>13 Páginas</span>
                    <span className="text-lime-key font-bold">100% Grátis</span>
                  </div>
                </div>
              </div>

              {/* Product Info & Action */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="mb-2">
                    <span className="text-[11px] font-bold text-lime-key uppercase tracking-wider">
                      Material Gratuito
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-lime-key transition-colors">
                    7 Hábitos para Melhorar sua Alimentação e seus Resultados
                  </h3>

                  <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                    E-book gratuito com estratégias práticas para melhorar sua alimentação e seus hábitos.
                  </p>
                </div>

                <div>
                  <AnimatePresence>
                    {downloadSuccess && (
                      <motion.div 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mb-3 p-2.5 rounded-lg bg-lime-key/15 border border-lime-key/30 text-lime-key text-xs font-semibold flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>Download concluído com sucesso!</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    id="btn-baixar-produto-gratis"
                    onClick={handleDownloadEbook}
                    disabled={downloading}
                    className="w-full py-4 px-6 rounded-full bg-lime-key text-black font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_10px_25px_rgba(217,255,0,0.25)] hover:shadow-[0_15px_30px_rgba(217,255,0,0.4)] cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>{downloading ? "BAIXANDO..." : "BAIXAR GRÁTIS"}</span>
                  </button>
                </div>
              </div>

            </div>
          </FadeIn>

          {/* PRODUCT 2: CURSO WHEY PROTEIN */}
          <FadeIn delay={0.2} y={20}>
            <div className="h-full rounded-3xl bg-zinc-950/90 border border-white/10 hover:border-lime-key/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.6)] group">
              
              {/* Product Visual / Cover Header */}
              <div className="relative p-6 sm:p-8 pb-4 bg-gradient-to-b from-zinc-900 to-zinc-950 flex items-center justify-center border-b border-white/5">
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                    <GraduationCap className="w-3 h-3 text-black" />
                    CURSO ONLINE
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-10">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                    Checkout Kiwify
                  </span>
                </div>

                {/* Minimalist Graphic Cover Representation */}
                <div className="w-40 sm:w-48 aspect-[1/1.35] my-4 rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-white/20 p-4 flex flex-col justify-between shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:border-lime-key">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-[8px] font-black tracking-widest text-lime-key uppercase">Rosana Oliveira</span>
                    <Layers className="w-3 h-3 text-lime-key" />
                  </div>
                  
                  <div className="text-center py-2">
                    <div className="w-8 h-8 rounded-full bg-lime-key/10 border border-lime-key/30 flex items-center justify-center mx-auto mb-2 text-lime-key">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-black text-white uppercase tracking-tight block">WHEY PROTEIN</span>
                    <span className="text-sm font-serif italic text-lime-key block leading-none">Sem Segredos</span>
                    <span className="text-[8px] text-zinc-400 font-light mt-1.5 block leading-tight">
                      Aprenda a escolher seu suplemento na prática
                    </span>
                  </div>

                  <div className="border-t border-white/10 pt-1.5 flex justify-between items-center text-[8px] text-zinc-400">
                    <span>Acesso Imediato</span>
                    <span className="text-white font-bold flex items-center gap-0.5">
                      <ShieldCheck className="w-2.5 h-2.5 text-lime-key" /> 100% Seguro
                    </span>
                  </div>
                </div>
              </div>

              {/* Product Info & Action */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="mb-2">
                    <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                      Curso Online Oficial
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-lime-key transition-colors">
                    Whey Protein Sem Segredos
                  </h3>

                  <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                    Aprenda a entender o whey protein e fazer melhores escolhas para sua rotina.
                  </p>
                </div>

                <div>
                  <a
                    id="btn-acessar-curso-vitrine"
                    href={WHEY_CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-full bg-white text-black hover:bg-lime-key font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_10px_25px_rgba(255,255,255,0.15)] hover:shadow-[0_15px_30px_rgba(217,255,0,0.35)] cursor-pointer group/btn"
                  >
                    <span>ACESSAR CURSO</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>

            </div>
          </FadeIn>

        </div>
      </div>
    </Section>
  );
}
