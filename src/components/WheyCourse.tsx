import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Sparkles, 
  FileText, 
  Layers, 
  Search, 
  ShieldAlert, 
  UtensilsCrossed, 
  ArrowUpRight,
  ExternalLink,
  ShieldCheck,
  ShoppingBag
} from 'lucide-react';
import Section, { FadeIn, BlurIn } from './Section';

const CHECKOUT_URL = "https://pay.kiwify.com.br/cKLdBg0";

const highlights = [
  {
    title: "Como escolher seu whey",
    desc: "Critérios claros e objetivos para escolher o produto mais adequado para a sua rotina e seus objetivos.",
    icon: ShoppingBag,
  },
  {
    title: "Como interpretar rótulos",
    desc: "Aprenda a ler tabelas nutricionais e listas de ingredientes sem se confundir com termos técnicos.",
    icon: FileText,
  },
  {
    title: "Diferenças entre tipos de whey",
    desc: "Entenda com clareza o que muda entre concentrado, isolado, hidrolisado e blends proteicos.",
    icon: Layers,
  },
  {
    title: "Como analisar composição e ingredientes",
    desc: "Saiba avaliar concentração de proteína por dose, adoçantes, carboidratos e a real pureza do suplemento.",
    icon: Search,
  },
  {
    title: "Como evitar armadilhas na compra",
    desc: "Descubra como fugir de pegadinhas do mercado, amino spiking e produtos de baixa qualidade disfarçados.",
    icon: ShieldAlert,
  },
  {
    title: "Bônus com receitas práticas usando whey",
    desc: "Preparações saborosas, simples e fáceis para incorporar o whey protein no seu cardápio do dia a dia.",
    icon: UtensilsCrossed,
    isBonus: true
  }
];

export default function WheyCourse() {
  return (
    <Section id="curso-whey" className="relative">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-lime-key/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-energy-orange/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Course Container */}
      <div className="relative border border-white/10 rounded-[40px] md:rounded-[56px] bg-zinc-950/80 backdrop-blur-md p-6 sm:p-10 md:p-16 lg:p-20 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
        
        {/* Top Header Badge & Tagline */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-lime-key/30 bg-lime-key/10 text-lime-key text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Curso Online Oficial</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.08] tracking-[-0.03em] mb-6">
              Whey Protein <span className="text-lime-key italic font-serif">Sem Segredos</span>
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-zinc-200 font-medium leading-snug mb-6 max-w-2xl mx-auto">
              Aprenda como escolher seu whey na prática, entender rótulos, composição e evitar erros na hora de comprar.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
              Um curso completo para você entender de verdade o whey protein, saber o que analisar nos rótulos, identificar diferenças entre produtos e fazer escolhas mais inteligentes para sua rotina.
            </p>
          </FadeIn>
        </div>

        {/* The Problem & The Solution Context Banner */}
        <FadeIn delay={0.15}>
          <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-white/5 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-widest font-semibold">
                <ShieldAlert className="w-4 h-4 text-energy-orange" />
                <span>O problema no mercado</span>
              </div>
              <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                Marcas com embalagens atraentes escondem aditivos desnecessários, açúcares e baixos níveis proteicos reais. Sem conhecimento, você paga caro e não tem os resultados que busca.
              </p>
            </div>
            <div className="space-y-3 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
              <div className="flex items-center gap-2 text-lime-key text-xs uppercase tracking-widest font-semibold">
                <ShieldCheck className="w-4 h-4 text-lime-key" />
                <span>A solução com a Nutri</span>
              </div>
              <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                Um método direto ao ponto e baseado em evidências para você nunca mais ter dúvidas na prateleira ou na internet, investindo seu dinheiro apenas no que realmente vale a pena.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Highlights / Features Grid */}
        <div className="mb-14">
          <BlurIn delay={0.2}>
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">
                O que você vai dominar no curso
              </span>
            </div>
          </BlurIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeIn key={idx} delay={0.1 + idx * 0.08} y={15}>
                  <div className={`h-full p-6 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between group ${
                    item.isBonus 
                      ? 'bg-gradient-to-br from-lime-key/10 via-zinc-900 to-zinc-950 border-lime-key/40 shadow-[0_10px_30px_rgba(217,255,0,0.1)]' 
                      : 'bg-zinc-900/50 border-white/5 hover:border-lime-key/30 hover:bg-zinc-900/80'
                  }`}>
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                          item.isBonus 
                            ? 'bg-lime-key text-black' 
                            : 'bg-white/5 text-lime-key group-hover:bg-lime-key/20'
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        {item.isBonus ? (
                          <span className="px-3 py-1 bg-lime-key text-black text-[10px] font-black uppercase tracking-wider rounded-full">
                            Bônus Incluso
                          </span>
                        ) : (
                          <CheckCircle2 className="w-5 h-5 text-lime-key/40 group-hover:text-lime-key transition-colors" />
                        )}
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight group-hover:text-lime-key transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-sm text-zinc-400 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* Primary CTA Box */}
        <FadeIn delay={0.4}>
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 text-center flex flex-col items-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
              Pronto para fazer escolhas certeiras?
            </h3>
            <p className="text-sm sm:text-base text-zinc-400 font-light max-w-xl mb-8">
              Acesse agora o curso e aprenda na prática como escolher o melhor whey para sua saúde, performance e rotina.
            </p>

            {/* Main CTA Button */}
            <a
              id="cta-whey-principal"
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-5 sm:py-6 bg-lime-key text-black font-black text-sm sm:text-base md:text-lg rounded-full hover:scale-105 active:scale-95 transition-all uppercase tracking-wider shadow-[0_15px_40px_rgba(217,255,0,0.3)] hover:shadow-[0_20px_50px_rgba(217,255,0,0.45)] group mb-6"
            >
              <span>QUERO ACESSAR O WHEY PROTEIN SEM SEGREDOS</span>
              <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            {/* Secondary CTA Button */}
            <div className="pt-4 border-t border-white/10 w-full max-w-md flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                id="cta-whey-secundario"
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/20 text-white font-bold text-xs sm:text-sm rounded-full hover:bg-white/10 hover:border-lime-key/50 transition-all uppercase tracking-widest group"
              >
                <span>QUERO APRENDER SOBRE WHEY</span>
                <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-lime-key transition-colors" />
              </a>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-zinc-500 uppercase tracking-widest mt-6">
              <ShieldCheck className="w-4 h-4 text-lime-key" />
              <span>Checkout 100% Seguro via Kiwify</span>
            </div>
          </div>
        </FadeIn>

      </div>
    </Section>
  );
}
