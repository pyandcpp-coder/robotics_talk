// src/components/LoadingSpinner.tsx
'use client';
import { motion as SpinnerMotion } from 'framer-motion';

export const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50">
      <SpinnerMotion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 border-3 border-cyan-500/30 border-t-cyan-500 rounded-full"
      />
    </div>
  );
};