import { Instagram, Leaf, Sparkles, MessageSquareHeart } from 'lucide-react';

export default function Footer() {
  const whatsappLink = "https://wa.me/5515997489481?text=Olá%20vim%20pelo%20site";

  return (
    <footer className="bg-black py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-2xl font-bold tracking-tight">Rosana Oliveira</h3>
          </div>
          <p className="text-zinc-500 text-sm">Nutricionista Esportiva | CRN 12345</p>
          
          <div className="flex gap-4 mt-6">
            <a href="https://wa.me/5515997489481" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold tracking-widest text-zinc-500 hover:text-lime-key transition-colors uppercase">
              <MessageSquareHeart className="w-4 h-4" />
              WhatsApp
            </a>
            <a href="https://instagram.com/rosanaoliveira_nutri" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold tracking-widest text-zinc-500 hover:text-lime-key transition-colors uppercase">
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          </div>
          
          <p className="text-zinc-600 text-xs mt-4 uppercase tracking-[0.3em] font-bold">Sorocaba, SP</p>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          <a href="https://instagram.com/rosanaoliveira_nutri" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-lime-key hover:text-black hover:border-lime-key transition-all duration-300 group">
            <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-lime-key hover:text-black hover:border-lime-key transition-all duration-300 group">
            <MessageSquareHeart className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-zinc-500 text-sm mb-1">© 2026 Rosana Oliveira Nutrição</p>
          <p className="text-zinc-600 text-[9px] uppercase tracking-[0.4em] font-medium">Premium Lifestyle Nutrition</p>
        </div>
      </div>
    </footer>
  );
}
