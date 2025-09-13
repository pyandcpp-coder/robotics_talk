// src/components/ScrollIndicator.tsx
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 z-50 origin-left"
      style={{ scaleX }}
    />
  );
};
