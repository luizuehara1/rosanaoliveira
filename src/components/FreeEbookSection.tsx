import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Download, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  FileText, 
  ArrowDown, 
  Eye, 
  X, 
  ChevronRight, 
  ChevronLeft,
  ArrowRight,
  ShieldCheck,
  Zap,
  Coffee,
  Wheat,
  Dumbbell,
  Moon,
  Flame,
  Droplets,
  Users
} from 'lucide-react';
import Section, { FadeIn, BlurIn } from './Section';
import { generateEbookPDF } from '../lib/generateEbookPdf';

const habitsList = [
  {
    num: "01",
    title: "Pular o café da manhã e comer pouco no almoço",
    desc: "O ciclo de fome descontrolada no fim do dia e a perda de massa magra.",
    icon: Coffee
  },
  {
    num: "02",
    title: "Cortar carboidratos completamente",
    desc: "A armadilha das restrições severas, perda de rendimento e efeito sanfona.",
    icon: Wheat
  },
  {
    num: "03",
    title: "Fazer exercício em jejum sem planejar a dieta",
    desc: "Diferença entre oxidar gordura no treino e real emagrecimento corporal.",
    icon: Dumbbell
  },
  {
    num: "04",
    title: "Dormir menos de 7 horas por noite",
    desc: "O impacto da privação de sono no cortisol, grelina e compulsão por doces.",
    icon: Moon
  },
  {
    num: "05",
    title: "Achar que mais treinos significam mais resultados",
    desc: "A importância do descanso e progressão de carga na recuperação muscular.",
    icon: Flame
  },
  {
    num: "06",
    title: "Beber pouca água durante o dia",
    desc: "Como a desidratação trava o metabolismo e confunde fome com sede.",
    icon: Droplets
  },
  {
    num: "07",
    title: "Comparar seu capítulo 1 com o capítulo 20 de outra pessoa",
    desc: "Individualidade biológica, genética e consistência na sua rotina real.",
    icon: Users
  }
];

export default function FreeEbookSection() {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [showReader, setShowReader] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDownload = () => {
    setDownloading(true);
    try {
      const doc = generateEbookPDF();
      doc.save('7-Habitos-Para-Melhorar-Sua-Alimentacao-Rosana-Oliveira.pdf');
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 5000);
    } catch (err) {
      console.error('Error generating PDF:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <Section id="ebook-gratuito" className="relative overflow-visible">
      {/* Glow Ambient Lights */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[500px] h-[500px] bg-lime-key/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main E-Book Container */}
      <div className="relative border border-lime-key/20 rounded-[40px] md:rounded-[56px] bg-gradient-to-b from-zinc-950 via-zinc-900/90 to-zinc-950 p-6 sm:p-10 md:p-14 lg:p-18 overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.8)]">
        
        {/* Floating Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="px-4 py-1.5 rounded-full border border-lime-key/40 bg-lime-key/10 text-lime-key text-xs font-black uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              E-BOOK GRATUITO
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-bold uppercase tracking-wider hidden sm:inline-flex">
              100% GRATUITO
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-400 font-semibold tracking-wider uppercase">
            <Download className="w-4 h-4 text-lime-key" />
            <span>DOWNLOAD GRATUITO DISPONÍVEL</span>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-14">
          
          {/* Left: Copy and CTAs */}
          <div className="lg:col-span-7">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-white leading-[1.08] tracking-[-0.03em] mb-6">
                7 Hábitos para <span className="text-lime-key italic font-serif">Melhorar</span> sua Alimentação e seus Resultados
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed mb-6">
                Baixe gratuitamente este e-book e descubra estratégias práticas para melhorar sua alimentação, organizar seus hábitos e potencializar seus resultados.
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-lime-key/10 border border-lime-key/30 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-lime-key" />
                </div>
                <div>
                  <h4 className="text-xs font-black tracking-widest uppercase text-lime-key">
                    É GRÁTIS. BAIXE AGORA.
                  </h4>
                  <p className="text-xs text-zinc-400 font-light mt-0.5">
                    Acesso instantâneo ao PDF completo de 13 páginas sem nenhuma cobrança.
                  </p>
                </div>
              </div>

              {/* Main Download CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  id="btn-baixar-ebook"
                  onClick={handleDownload}
                  disabled={downloading}
                  className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-5 bg-lime-key text-black font-black text-base rounded-full hover:scale-105 active:scale-95 transition-all uppercase tracking-wider shadow-[0_15px_35px_rgba(217,255,0,0.3)] hover:shadow-[0_20px_45px_rgba(217,255,0,0.45)] group cursor-pointer"
                >
                  <Download className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                  <span>{downloading ? "GERANDO PDF..." : "BAIXAR E-BOOK GRATUITAMENTE"}</span>
                </button>

                <button
                  id="btn-ler-ebook"
                  onClick={() => setShowReader(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-5 border border-white/20 text-white font-bold text-sm rounded-full hover:bg-white/10 hover:border-lime-key/50 transition-all uppercase tracking-wider group cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-lime-key" />
                  <span>VISUALIZAR GUIA</span>
                </button>
              </div>

              {/* Download Success Notice */}
              <AnimatePresence>
                {downloadSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-xl bg-lime-key/15 border border-lime-key text-lime-key text-xs font-bold flex items-center gap-3 mb-6"
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>Download iniciado! O arquivo PDF "7 Hábitos para Melhorar sua Alimentação" foi salvo no seu dispositivo.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Mini Guarantees */}
              <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-lime-key" />
                  <span>Formato PDF Oficial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-lime-key" />
                  <span>100% Gratuito</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-lime-key" />
                  <span>Acesso no Celular & PC</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Realistic 3D E-Book Cover Presentation */}
          <div className="lg:col-span-5 flex justify-center">
            <FadeIn delay={0.2}>
              <div className="relative group max-w-[340px] sm:max-w-[380px] w-full">
                
                {/* Glow behind book */}
                <div className="absolute -inset-4 bg-gradient-to-r from-lime-key/20 to-energy-orange/10 rounded-[30px] blur-2xl opacity-70 group-hover:opacity-100 transition-opacity" />

                {/* Book Cover Frame */}
                <div className="relative aspect-[1/1.45] w-full rounded-2xl bg-zinc-950 border-2 border-lime-key/40 p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-transform duration-500 group-hover:scale-[1.02]">
                  
                  {/* Top Book Header */}
                  <div className="border-b border-white/10 pb-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-[0.25em] text-lime-key">
                        Rosana Oliveira
                      </span>
                      <span className="px-2 py-0.5 rounded bg-lime-key text-black text-[9px] font-black uppercase tracking-wider">
                        PDF Grátis
                      </span>
                    </div>
                    <span className="text-[8px] text-zinc-500 uppercase tracking-widest block mt-0.5">
                      Nutrição Esportiva & Performance
                    </span>
                  </div>

                  {/* Center Book Art */}
                  <div className="my-auto py-4 text-center">
                    <div className="text-6xl sm:text-7xl font-black text-lime-key leading-none mb-1 tracking-tighter">
                      7
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase leading-tight mb-2">
                      HÁBITOS
                    </div>
                    <div className="inline-block bg-lime-key text-black px-3 py-1 text-[11px] font-black uppercase tracking-wider rounded mb-2">
                      QUE SABOTAM O
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase leading-none mb-1">
                      EMAGRECIMENTO
                    </div>
                    <div className="text-base sm:text-lg font-serif italic text-lime-key">
                      após os 35
                    </div>
                    <p className="text-[10px] text-zinc-400 font-light mt-3 max-w-[220px] mx-auto leading-tight">
                      Os erros invisíveis que travam seus resultados e como destravar seu corpo.
                    </p>
                  </div>

                  {/* Bottom Book Footer */}
                  <div className="border-t border-white/10 pt-3">
                    <div className="flex items-center justify-between text-[9px] text-zinc-400 font-medium">
                      <span>13 Páginas de Conteúdo</span>
                      <span className="text-lime-key font-bold flex items-center gap-1">
                        <Download className="w-3 h-3" /> Baixar PDF
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            </FadeIn>
          </div>

        </div>

        {/* 7 Habits Preview Grid */}
        <div className="border-t border-white/10 pt-10 mb-14">
          <BlurIn delay={0.1}>
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">
                O que você vai aprender dentro do e-book
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                Os 7 erros mais comuns após os 35 anos
              </h3>
            </div>
          </BlurIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {habitsList.map((habit, i) => {
              const Icon = habit.icon;
              return (
                <FadeIn key={i} delay={0.05 * i} y={10}>
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-lime-key/30 hover:bg-white/[0.04] transition-all h-full flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-8 h-8 rounded-lg bg-lime-key/10 text-lime-key flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-black text-zinc-500 group-hover:text-lime-key transition-colors">
                          HÁBITO {habit.num}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1.5 leading-snug group-hover:text-lime-key transition-colors">
                        {habit.title}
                      </h4>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed">
                        {habit.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}

            {/* Extra Card for immediate action */}
            <FadeIn delay={0.35} y={10}>
              <div className="p-5 rounded-2xl bg-gradient-to-br from-lime-key/20 via-zinc-900 to-zinc-950 border border-lime-key/40 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-lime-key text-black flex items-center justify-center font-black text-xs">
                      13
                    </div>
                    <span className="text-[10px] font-black text-lime-key uppercase tracking-wider">
                      Guia Completo
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5 leading-snug">
                    Tabelas práticas e cálculos
                  </h4>
                  <p className="text-xs text-zinc-300 font-light leading-relaxed">
                    Exemplos de café da manhã, pré-treino e fórmula para calcular sua hidratação diária exata.
                  </p>
                </div>

                <button
                  onClick={handleDownload}
                  className="mt-4 w-full py-2.5 bg-lime-key text-black text-xs font-black uppercase rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Baixar Agora</span>
                </button>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* TRANSITION BANNER TO WHEY COURSE */}
        <FadeIn delay={0.3}>
          <div className="rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-950 border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
            <div className="space-y-1.5 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-lime-key uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Próximo Passo na sua Evolução</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Gostou do conteúdo gratuito? Conheça também o curso completo Whey Protein Sem Segredos.
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 font-light">
                Aprenda a escolher seu suplemento proteico sem erros e com máxima assertividade.
              </p>
            </div>

            <a
              id="cta-transicao-curso-whey"
              href="https://pay.kiwify.com.br/cKLdBg0"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-6 sm:px-8 py-4 bg-white text-black font-extrabold text-xs sm:text-sm rounded-full hover:bg-lime-key transition-all uppercase tracking-wider group cursor-pointer shadow-md hover:scale-105"
            >
              <span>QUERO CONHECER O CURSO</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </FadeIn>

      </div>

      {/* QUICK READER MODAL */}
      <AnimatePresence>
        {showReader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-zinc-950 border border-lime-key/30 rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-zinc-900/50">
                <div className="flex items-center gap-2.5">
                  <BookOpen className="w-5 h-5 text-lime-key" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Visualização do E-book</h4>
                    <span className="text-[11px] text-zinc-400">7 Hábitos Que Sabotam o Emagrecimento</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleDownload}
                    className="px-3 py-1.5 bg-lime-key text-black text-xs font-bold rounded-lg hover:bg-white transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Baixar PDF</span>
                  </button>
                  <button
                    onClick={() => setShowReader(false)}
                    className="p-1.5 text-zinc-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body - Slide Content */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-zinc-200">
                {currentSlide === 0 && (
                  <div className="text-center space-y-6">
                    <div className="inline-block p-2 px-4 rounded-full bg-lime-key/10 text-lime-key text-xs font-bold uppercase tracking-widest border border-lime-key/20">
                      Capa Oficial do E-book
                    </div>
                    <h3 className="text-3xl font-black text-white">
                      7 HÁBITOS QUE SABOTAM O EMAGRECIMENTO <span className="text-lime-key font-serif italic">após os 35</span>
                    </h3>
                    <p className="text-sm text-zinc-400 max-w-md mx-auto">
                      Os erros invisíveis que travam seus resultados e o que fazer para destravar seu corpo, sua energia e sua autoestima.
                    </p>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-zinc-300">
                      Por: <strong>Dra. Rosana Oliveira</strong> • Nutricionista Esportiva
                    </div>
                  </div>
                )}

                {currentSlide > 0 && currentSlide <= 7 && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="text-xs font-black text-lime-key uppercase tracking-widest">
                        Hábito #{habitsList[currentSlide - 1].num}
                      </span>
                      <span className="text-xs text-zinc-500">Página {currentSlide + 4} de 13</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {habitsList[currentSlide - 1].title}
                    </h3>

                    <div className="p-4 rounded-xl bg-zinc-900 border border-white/5 space-y-2">
                      <span className="text-xs uppercase font-bold text-energy-orange tracking-wider">
                        O erro comum:
                      </span>
                      <p className="text-sm text-zinc-300 leading-relaxed">
                        {habitsList[currentSlide - 1].desc}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-lime-key/10 border border-lime-key/30 space-y-2">
                      <span className="text-xs uppercase font-bold text-lime-key tracking-wider">
                        Estratégia prática da Nutri:
                      </span>
                      <p className="text-sm text-zinc-200 leading-relaxed">
                        Ajuste sua alimentação com consistência e individualidade. Baixe o PDF completo para ver as tabelas e exemplos de refeições.
                      </p>
                    </div>
                  </div>
                )}

                {currentSlide === 8 && (
                  <div className="text-center space-y-6">
                    <div className="w-16 h-16 rounded-full bg-lime-key/10 border border-lime-key/30 flex items-center justify-center mx-auto text-lime-key">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Pronta para ler as 13 páginas completas?
                    </h3>
                    <p className="text-sm text-zinc-400 max-w-md mx-auto">
                      O arquivo PDF oficial contém todas as tabelas de combinações, cálculos de água, estratégias de sono e quebras de crenças.
                    </p>
                    <button
                      onClick={handleDownload}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-lime-key text-black font-black text-sm rounded-full hover:scale-105 transition-all uppercase tracking-wider cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Baixar E-book em PDF (Grátis)</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Modal Footer Controls */}
              <div className="p-4 border-t border-white/10 flex items-center justify-between bg-zinc-900/50">
                <button
                  disabled={currentSlide === 0}
                  onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-bold text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" /> Anterior
                </button>

                <div className="flex gap-1.5">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        currentSlide === i ? 'bg-lime-key w-6' : 'bg-white/20'
                      }`}
                    />
                  ))}
                </div>

                <button
                  disabled={currentSlide === 8}
                  onClick={() => setCurrentSlide(prev => Math.min(8, prev + 1))}
                  className="px-4 py-2 rounded-lg bg-lime-key text-black hover:bg-white text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer"
                >
                  Próximo <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
