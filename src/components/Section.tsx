import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  dark?: boolean;
}

export default function Section({ children, id, className = '', dark = true }: SectionProps) {
  return (
    <section 
      id={id} 
      className={`relative py-24 px-6 md:px-12 overflow-hidden ${dark ? 'bg-black' : 'bg-zinc-900'} ${className}`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
}

export function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
