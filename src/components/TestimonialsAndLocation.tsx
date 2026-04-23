import { Star, MapPin, Navigation } from 'lucide-react';
import Section, { FadeIn } from './Section';

const testimonials = [
  {
    name: "Ana Cláudia",
    text: "A Rosana não passa só dieta, ela resolve o problema. Entendeu minha rotina e minhas dificuldades. Resultado real!",
    score: 5
  },
  {
    name: "Ricardo Mendes",
    text: "O acompanhamento esportivo mudou meu rendimento nos treinos. Estratégia pura e resultados visíveis.",
    score: 5
  },
  {
    name: "Juliana Santos",
    text: "Não é apenas nutricionista, é uma mentora. Mudou minha visão sobre alimentação e performance.",
    score: 5
  }
];

export default function TestimonialsAndLocation() {
  const mapsLink = "https://www.google.com/maps/search/?api=1&query=Rua+Professor+Daniel+Paulo+Verano+Pontes+93+Sorocaba+SP";

  const googleBusinessLink = "https://www.google.com/maps/place/Nutricionista+Esportiva%2FNutrigen%C3%A9tica+e+Funcional+em+Sorocaba+%7C+Rosana+de+Oliveira/@-23.4859901,-47.4389718,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipPQqERn_QodTsb2k6bMPRVDEguVweLzKfNS3rOP!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipPQqERn_QodTsb2k6bMPRVDEguVweLzKfNS3rOP%3Dw203-h175-k-no!7i4176!8i3616!4m11!1m2!2m1!1srosanaoliveira_nutri!3m7!1s0x94cf61c36d7866ff:0x5139888aacb67ee3!8m2!3d-23.4860496!4d-47.4390355!10e5!15sChVyb3NhbmEgb2xpdmVpcmEgbnV0cmlaFyIVcm9zYW5hIG9saXZlaXJhIG51dHJpkgEMbnV0cml0aW9uaXN0mgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJJYlZsWU1WcFJFQUXgAQD6AQUIwAEQHQ!16s%2Fg%2F11v0hg68lv?entry=ttu&g_ep=EgoyMDI2MDQyMS4wIKXMDSoASAFQAw%3D%3D";

  return (
    <Section id="prova-social" className="bg-zinc-950">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <FadeIn>
            <div className="flex items-center gap-2 mb-4 text-lime-key">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              <span className="text-sm font-bold ml-2">5.0 (58 avaliações)</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <h2 className="text-4xl md:text-6xl font-bold">Quem confia recomenda</h2>
              <a 
                href={googleBusinessLink}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-white transition-colors text-xs font-bold tracking-widest flex items-center gap-2 group"
              >
                VER MAIS NO GOOGLE
                <div className="w-8 h-[1px] bg-zinc-700 transition-all group-hover:w-12 group-hover:bg-lime-key" />
              </a>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i}>
                <FadeIn delay={i * 0.1}>
                  <div className="p-8 border border-white/5 bg-zinc-900 rounded-3xl h-full">
                    <p className="text-lg text-zinc-300 italic mb-6 leading-relaxed">"{t.text}"</p>
                    <p className="font-bold border-t border-white/10 pt-4">— {t.name}</p>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="mt-20">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Conheça nossos espaços</h3>
                <p className="text-zinc-500 font-light">Ambiente preparado para sua melhor performance e conforto.</p>
              </div>
              
              {/* Netflix-style scroll container */}
              <div className="relative group">
                <div className="flex gap-4 overflow-x-auto pb-8 snap-x no-scrollbar">
                  {[
                    "https://i.postimg.cc/zfmqR9fP/1.png",
                    "https://i.postimg.cc/WzfvpyCs/2.png",
                    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
                  ].map((url, i) => (
                    <div 
                      key={i} 
                      className="flex-none w-[280px] md:w-[400px] snap-center"
                    >
                      <div className="relative aspect-video rounded-3xl overflow-hidden group/item border border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:z-10 hover:border-lime-key/50">
                        <img 
                          src={url} 
                          alt={`Espaço ${i + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>
                {/* Subtle horizontal scroll indicator for mobile */}
                <div className="md:hidden flex justify-center gap-1.5 mt-2">
                  <div className="w-12 h-1 bg-lime-key/20 rounded-full overflow-hidden">
                    <div className="h-full bg-lime-key w-1/4" />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="bg-zinc-900 border border-white/10 p-8 rounded-[40px] h-full flex flex-col">
            <div className="w-16 h-16 rounded-2xl bg-lime-key/10 flex items-center justify-center mb-8 text-lime-key">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold mb-6">Onde estamos</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Rua Professor Daniel Paulo Verano Pontes, 93 <br />
              Jardim Santa Rosália <br/>
              Sorocaba – SP
            </p>
            
            <a 
              href={mapsLink}
              target="_blank"
              rel="noreferrer"
              className="mt-auto w-full py-5 bg-white/5 border border-white/10 hover:bg-white/10 transition-all rounded-2xl font-bold flex items-center justify-center gap-2"
            >
              <Navigation className="w-5 h-5" />
              VER NO GOOGLE MAPS
            </a>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
