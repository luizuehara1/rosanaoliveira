import { Sparkles, Users, Activity, Pill } from 'lucide-react';
import Section, { FadeIn, TextReveal, BlurIn } from './Section';

const upcoming = [
  {
    title: "Grupo de Desafio",
    tagline: "Comunidade & Resultados",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Dieta + Treino",
    tagline: "Sincronia Perfeita",
    icon: <Activity className="w-6 h-6" />
  },
  {
    title: "Ebook GLP-1",
    tagline: "Ciência & Estratégia",
    icon: <Pill className="w-6 h-6" />
  }
];

export default function FutureProducts() {
  return (
    <Section id="em-breve" className="relative">
      {/* Decorative blurry glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-energy-orange/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center border border-white/5 p-12 md:p-24 rounded-[80px] bg-zinc-950/50 backdrop-blur-sm relative overflow-hidden ring-1 ring-white/10">
        <FadeIn>
          <div className="flex items-center justify-center gap-3 mb-10 text-energy-orange">
            <div className="w-12 h-px bg-energy-orange/30" />
            <BlurIn>
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase">Private Collection</span>
            </BlurIn>
            <div className="w-12 h-px bg-energy-orange/30" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter">
            <TextReveal>Sua próxima</TextReveal>
            <TextReveal delay={0.2}>
              <span className="text-energy-orange font-serif italic">evolução</span>
            </TextReveal>
          </h2>
          <BlurIn delay={0.4}>
            <p className="text-lg text-zinc-400 mb-16 max-w-xl mx-auto font-light leading-relaxed">
              Estamos desenhando experiências digitais exclusivas para elevar sua saúde a um novo patamar de sofisticação.
            </p>
          </BlurIn>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcoming.map((item, i) => (
            <div key={i}>
              <FadeIn delay={i * 0.1}>
                <div className="p-8 border border-white/5 rounded-[35px] bg-white/[0.02] hover:bg-white/[0.05] transition-all flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center mb-5 text-energy-orange/80">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-base tracking-tight">{item.title}</h4>
                  <p className="text-[9px] text-zinc-500 uppercase tracking-[0.2em] mt-2">{item.tagline}</p>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
