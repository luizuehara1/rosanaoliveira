import { Apple, Dumbbell, Target, RefreshCw, Calendar } from 'lucide-react';
import Section, { FadeIn } from './Section';

const services = [
  {
    title: "Consultas Nutricionais",
    desc: "Acompanhamento clínico especializado (online e presencial) focado em resultados reais.",
    icon: <Apple className="w-8 h-8" />,
    color: "lime"
  },
  {
    title: "Planos Personalizados",
    desc: "Estratégias sob medida para sua rotina, respeitando seu paladar e estilo de vida.",
    icon: <Target className="w-8 h-8" />,
    color: "energy"
  },
  {
    title: "Nutrição Esportiva",
    desc: "Otimização metabólica para ganho de performance e definição muscular.",
    icon: <Dumbbell className="w-8 h-8" />,
    color: "copper"
  },
  {
    title: "Reeducação Alimentar",
    desc: "Transforme sua relação com a comida de forma sustentável e sem radicalismos.",
    icon: <RefreshCw className="w-8 h-8" />,
    color: "lime"
  }
];

export default function Services() {
  const whatsappLink = "https://wa.me/5515997489481?text=Olá%20queria%20agendar%20uma%20consulta";

  return (
    <Section id="servicos">
      <div className="text-center mb-20">
        <FadeIn>
          <span className="text-sm font-bold tracking-[0.3em] uppercase text-zinc-500 mb-4 block">Especialidades</span>
          <h2 className="text-4xl md:text-6xl font-bold">Como posso te ajudar</h2>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <div key={i}>
            <FadeIn delay={i * 0.1}>
              <div className="h-full p-10 rounded-[45px] border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-lime-key/20 transition-all duration-500 group flex flex-col shadow-lg">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-10 bg-white/5 group-hover:bg-lime-key/10 transition-colors">
                  <div className="text-lime-key scale-110">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-5 tracking-tight">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed font-light text-sm flex-grow">{service.desc}</p>
              </div>
            </FadeIn>
          </div>
        ))}
      </div>

      <FadeIn delay={0.5}>
        <div className="mt-16 text-center">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black rounded-full hover:bg-lime-key transition-colors"
          >
            <Calendar className="w-6 h-6" />
            AGENDAR CONSULTA
          </a>
        </div>
      </FadeIn>
    </Section>
  );
}
