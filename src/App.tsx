/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MessageCircle, Instagram } from 'lucide-react';
import Hero from './components/Hero';
import Authority from './components/Authority';
import LeadForm from './components/LeadForm';
import Services from './components/Services';
import FutureProducts from './components/FutureProducts';
import TestimonialsAndLocation from './components/TestimonialsAndLocation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { TextReveal, FadeIn, BlurIn } from './components/Section';

export default function App() {
  const whatsappLink = "https://wa.me/5515997489481?text=Olá%20vim%20pelo%20site";

  return (
    <div className="bg-black text-white selection:bg-lime-key selection:text-black">
      <ScrollToTop />
      {/* Floating WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring' }}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform active:scale-95 group"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
      </motion.a>

      {/* Navigation - Minimal and Fixed */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-6 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold tracking-tighter uppercase">Rosana Oliveira</span>
            <div className="hidden sm:flex items-center gap-2 border-l border-white/10 pl-4 ml-2">
              <a href="https://instagram.com/rosanaoliveira_nutri" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-lime-key transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-lime-key transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
            <a href="#autoridade" className="hover:text-lime-key transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-lime-key transition-colors">Serviços</a>
            <a href="#ebook" className="hover:text-lime-key transition-colors">Ebook</a>
            <a href="#prova-social" className="hover:text-lime-key transition-colors">Resultados</a>
          </div>
          <a 
            href={whatsappLink}
            className="px-6 py-2.5 bg-white text-black text-xs font-bold uppercase rounded-full hover:bg-lime-key transition-colors"
          >
            Contato
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <Authority />
        <LeadForm />
        <Services />
        <FutureProducts />
        <TestimonialsAndLocation />
        
        {/* Final CTA Section */}
        <section className="py-32 bg-gradient-to-t from-lime-key/10 to-transparent">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight">
                <TextReveal>Tudo pronto para mudar</TextReveal>
                <TextReveal delay={0.2}>seu estilo de vida?</TextReveal>
              </h2>
            </FadeIn>
            <BlurIn delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href={whatsappLink}
                  className="w-full sm:w-auto px-12 py-6 bg-lime-key text-black font-black rounded-full hover:scale-105 active:scale-95 transition-all text-xl uppercase tracking-widest shadow-[0_20px_50px_rgba(163,230,53,0.3)]"
                >
                  WHATSAPP
                </a>
                <button 
                  onClick={() => document.getElementById('ebook')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-12 py-6 border border-white/20 rounded-full font-bold hover:bg-white/5 hover:scale-105 active:scale-95 transition-all text-xl uppercase tracking-widest"
                >
                  BAIXAR EBOOK
                </button>
              </div>
            </BlurIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

