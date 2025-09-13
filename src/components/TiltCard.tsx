// src/components/TiltCard.tsx
'use client';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const TiltCard = ({ children, className = "" }: Props) => {
  const cardVariants = {
    offscreen: { 
      y: 80, 
      opacity: 0,
      scale: 0.8
    },
    onscreen: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div 
      variants={cardVariants}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2 }
      }}
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.15}
        glareColor="#ffffff"
        glarePosition="all"
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        scale={1.03}
        transitionSpeed={2500}
        gyroscope={true}
        className={`
          w-full h-full 
          bg-gradient-to-br from-white/8 to-white/4 
          border border-white/10 
          rounded-2xl p-6
          backdrop-blur-xl 
          shadow-2xl 
          hover:border-white/20 
          hover:shadow-3xl 
          transition-all duration-500
          ${className}
        `}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div style={{ transform: "translateZ(30px)" }}>
          {children}
        </div>
      </Tilt>
    </motion.div>
  );
};