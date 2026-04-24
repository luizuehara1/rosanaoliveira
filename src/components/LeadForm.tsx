import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, BookOpen } from 'lucide-react';
import Section, { FadeIn, TextReveal } from './Section';
import { saveLead } from '../lib/firebase';

export default function LeadForm() {
  const [formData, setFormData] = useState({ name: '', whatsapp: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await saveLead({
        ...formData,
        source: 'ebook_download'
      });
      setSuccess(true);
      // Redirect after a short delay
      setTimeout(() => {
        window.open('https://wa.me/5515997489481?text=Olá,%20acabei%20de%20baixar%20seu%20ebook%20e%20quero%20saber%20mais%20sobre%20o%20acompanhamento', '_blank');
      }, 2000);
    } catch (err) {
      alert("Ocorreu um erro ao salvar seus dados. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="ebook" className="overflow-visible">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-lime-key rounded-[40px] overflow-hidden">
        <div className="p-8 md:p-16 flex flex-col justify-center text-black">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-8 h-8" />
              <span className="text-sm font-bold tracking-widest uppercase">Ebook Gratuito</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              <TextReveal>
                Baixe seu guia
              </TextReveal>
              <TextReveal delay={0.2}>
                estratégico gratuito
              </TextReveal>
            </h2>
            <p className="text-xl mb-8 font-medium opacity-80">
              Descubra como iniciar sua mudança de forma simples e estratégica. 
              O primeiro passo para o corpo que você deseja começa aqui.
            </p>
          </FadeIn>
        </div>

        <div className="p-8 md:p-16 bg-zinc-900 border-l border-white/10 relative">
          <AnimatePresence mode="wait">
            {!success ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Nome Completo</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Seu nome aqui"
                    className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-lime-key focus:ring-1 focus:ring-lime-key outline-none transition-all placeholder:text-zinc-600"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">WhatsApp</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="(15) 99999-9999"
                      className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-lime-key focus:ring-1 focus:ring-lime-key outline-none transition-all placeholder:text-zinc-600"
                      value={formData.whatsapp}
                      onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">E-mail</label>
                    <input 
                      required
                      type="email" 
                      placeholder="ex@email.com"
                      className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-lime-key focus:ring-1 focus:ring-lime-key outline-none transition-all placeholder:text-zinc-600"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <button 
                  disabled={loading}
                  type="submit"
                  className="w-full py-6 bg-lime-key text-black font-black text-lg rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {loading ? "Processando..." : (
                    <>
                      BAIXAR AGORA
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
                <p className="text-center text-[10px] text-zinc-500 uppercase tracking-wider">
                  Ao clicar, você concorda com nossos termos e política de privacidade.
                </p>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="w-24 h-24 bg-lime-key/20 rounded-full flex items-center justify-center border-2 border-lime-key">
                  <CheckCircle className="w-12 h-12 text-lime-key" />
                </div>
                <h3 className="text-3xl font-bold">Quase lá!</h3>
                <p className="text-zinc-400">
                  Seus dados foram salvos. <br />
                  Você será redirecionado para o WhatsApp para receber seu guia em instantes...
                </p>
                <div className="w-16 h-1 bg-lime-key animate-[loading_2s_ease-in-out_infinite]" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
