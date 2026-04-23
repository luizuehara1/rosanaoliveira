import { Check, User, Instagram, MessageSquareHeart } from 'lucide-react';
import Section, { FadeIn } from './Section';

const benefits = [
  "Emagrecimento sustentável",
  "Ganho de massa magra",
  "Estratégias personalizadas",
  "Acompanhamento próximo"
];

export default function Authority() {
  return (
    <Section id="autoridade" className="bg-zinc-950">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <div className="relative group max-w-sm mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-lime-key/10 via-transparent to-copper-key/10 rounded-[60px] blur-2xl opacity-50"></div>
            <div className="relative rounded-[50px] overflow-hidden aspect-[3/4] bg-zinc-900 border border-white/5 ring-1 ring-white/10">
              <img 
                src="https://i.postimg.cc/j2Y8H4f5/ROSANA.jpg" 
                alt="Rosana Oliveira"
                className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-6 md:p-8 rounded-[30px] border-lime-key/20 shadow-2xl">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-8 rounded-full bg-lime-key/10 flex items-center justify-center border border-lime-key/20">
                  <User className="w-4 h-4 text-lime-key" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">Rosana Oliveira</h3>
              </div>
              <p className="text-lime-key text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Nutricionista Esportiva</p>
              
              <div className="flex gap-2">
                <a 
                  href="https://wa.me/5515997489481" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 rounded-full bg-[#25D366] hover:bg-[#128C7E] transition-colors group shadow-lg"
                >
                  <MessageSquareHeart className="w-4 h-4 text-white" />
                </a>
                <a 
                  href="https://instagram.com/rosanaoliveira_nutri" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors group"
                >
                  <Instagram className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Mais do que uma dieta, um acompanhamento que <span className="text-energy-orange italic">transforma</span> seu desempenho e sua saúde.
            </h2>
            <p className="text-lg text-zinc-400 mb-10 leading-relaxed font-light">
              Dra. Rosana Oliveira é especialista em Nutrição Esportiva, Nutrigenética e Funcional, 
              atendendo em Sorocaba/SP e online. Sua missão é guiar pessoas na jornada de
              redescobrimento do próprio potencial através de ciência e estratégia personalizada.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-lime-key/10 flex items-center justify-center border border-lime-key/20 group-hover:bg-lime-key transition-colors duration-300">
                    <Check className="w-5 h-5 text-lime-key group-hover:text-black transition-colors" />
                  </div>
                  <span className="text-zinc-200 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="p-8 border border-white/10 rounded-2xl bg-gradient-to-br from-white/5 to-transparent">
              <p className="text-zinc-300 leading-relaxed italic">
                "Meu foco não é apenas o que você come, mas como seu metabolismo responde 
                e como isso influencia sua energia, produtividade e autoestima."
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
