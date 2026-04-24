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

interface AnimationProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  key?: any;
}

export function FadeIn({ children, delay = 0, y = 20 }: AnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function TextReveal({ children, delay = 0 }: AnimationProps) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function BlurIn({ children, delay = 0 }: AnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
