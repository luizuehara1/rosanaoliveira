import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { TextReveal, BlurIn } from './Section';

export default function Hero() {
  const scrollToEbook = () => {
    document.getElementById('ebook')?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappLink = "https://wa.me/5515997489481?text=Olá%20vim%20pelo%20site%20e%20quero%20começar";

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden premium-gradient">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="feminine-glow top-1/4 -left-20 w-[500px] h-[500px] bg-lime-key/20" />
        <div className="feminine-glow bottom-1/4 -right-20 w-[600px] h-[600px] bg-copper-key/15" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial="initial"
          animate="animate"
        >
          <BlurIn>
            <span className="inline-block px-6 py-2 mb-8 text-[10px] font-bold tracking-[0.3em] uppercase border border-lime-key/20 text-lime-key rounded-full bg-lime-key/5 backdrop-blur-sm">
              Saúde, Performance & Estilo de Vida
            </span>
          </BlurIn>
          
          <h1 className="text-6xl md:text-[100px] font-black mb-10 leading-[0.95] tracking-tighter">
            <TextReveal delay={0.1}>
              O corpo que você
            </TextReveal>
            <TextReveal delay={0.3}>
              <span className="text-lime-key italic font-serif">merece</span>, com equilíbrio.
            </TextReveal>
          </h1>

          <BlurIn delay={0.6}>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-14 font-light leading-relaxed tracking-wide">
              Nutrição estratégica para quem busca emagrecimento real, 
              ganho de performance e uma vida vibrante e saudável.
            </p>
          </BlurIn>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-10 py-5 bg-lime-key text-black font-black uppercase tracking-widest text-sm rounded-full hover:bg-white hover:scale-105 transition-all flex items-center justify-center gap-2 group shadow-[0_0_50px_rgba(163,230,53,0.3)] shadow-lime-key/20"
            >
              Quero começar agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              onClick={scrollToEbook}
              className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 hover:scale-105 transition-all flex items-center justify-center gap-2 text-sm tracking-widest"
            >
              <Download className="w-5 h-5" />
              BAIXAR EBOOK GRATUITO
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Scroll para explorar</span>
        <div className="w-px h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
      </motion.div>
    </section>
  );
}
