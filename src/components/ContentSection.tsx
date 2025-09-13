// src/components/ContentSection.tsx
'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Props {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const ContentSection = ({ children, id, className }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "-100px" });

  return (
    <section 
      id={id} 
      ref={ref} 
      className={`min-h-screen w-full flex flex-col justify-center items-center px-4 py-16 md:px-8 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ 
          opacity: isInView ? 1 : 0, 
          y: isInView ? 0 : 60 
        }}
        transition={{ 
          duration: 0.8, 
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.1
        }}
        className="w-full max-w-7xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
};