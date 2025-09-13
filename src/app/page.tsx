// src/app/page.tsx - Fixed Version with Proper Tailwind Classes
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ContentSection } from '@/components/ContentSection';
import { TiltCard } from '@/components/TiltCard';
import { ArrowDown, Code, Cpu, Bot, Zap, Brain, Wrench, Github, Linkedin, Mail, ExternalLink, Rocket, Target, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const staggerChildren = {
    offscreen: {},
    onscreen: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeInUp = {
    offscreen: { opacity: 0, y: 60 },
    onscreen: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        bounce: 0.3,
        duration: 0.8 
      }
    }
  };

  return (
    <>
      {/* Mouse follower effect */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-cyan-400/20 rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 z-40 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <main className="overflow-x-hidden">
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col justify-center items-center p-4 text-center relative">
          <motion.div
            style={{ y }}
            className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur-3xl opacity-30 animate-pulse" />
            <span className="relative px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-sm md:text-base tracking-wide backdrop-blur-sm inline-flex items-center">
              <Rocket className="w-4 h-4 mr-2" />
              Mechatronics Engineering • Robotics Innovator
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 10, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase mb-6"
          >
            <motion.span 
              className="block bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-400"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Building the
            </motion.span>
            <motion.span 
              className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Future
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl leading-relaxed"
          >
            Where mechanical precision meets intelligent algorithms.
            <br />
            <span className="text-cyan-400 font-semibold">One breakthrough at a time.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 mb-20"
          >
            <motion.a 
              href="#pillars" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-lg font-bold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Explore the Journey
                <ArrowDown className="ml-3 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-10 py-5 border-2 border-white/30 rounded-full text-lg font-bold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm hover:shadow-lg"
            >
              Get in Touch
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-12 flex flex-col items-center"
          >
            <span className="text-sm text-gray-500 mb-3 font-mono">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="text-gray-600 w-6 h-6" />
            </motion.div>
          </motion.div>
        </section>

        {/* SECTION 2: THE THREE PILLARS */}
        <ContentSection id="pillars" className="aurora-background">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-20"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight"
            >
              The Three{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Pillars
              </span>
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
            >
              Every revolutionary robot is built on the perfect harmony of three fundamental disciplines
            </motion.p>
          </motion.div>
          
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-8 lg:gap-12"
          >
            <TiltCard className="group hover:bg-gradient-to-br hover:from-red-500/10 hover:to-orange-500/10 transition-all duration-700">
              <motion.div variants={fadeInUp} className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                    <Wrench size={40} className="text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4 group-hover:text-orange-300 transition-colors">Mechanical</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  The physical foundation. Precision-engineered chassis, actuators, and mechanisms that interact with the real world through force and motion.
                </p>
                <div className="mt-6 flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full opacity-60" />
                  <div className="w-2 h-2 bg-orange-500 rounded-full opacity-80" />
                  <div className="w-2 h-2 bg-yellow-500 rounded-full opacity-60" />
                </div>
              </motion.div>
            </TiltCard>
            
            <TiltCard className="group hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-cyan-500/10 transition-all duration-700">
              <motion.div variants={fadeInUp} className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                    <Zap size={40} className="text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4 group-hover:text-cyan-300 transition-colors">Electronics</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  The nervous system. Advanced sensors, powerful actuators, and intelligent circuits that bridge the physical and digital realms.
                </p>
                <div className="mt-6 flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full opacity-60" />
                  <div className="w-2 h-2 bg-cyan-500 rounded-full opacity-80" />
                  <div className="w-2 h-2 bg-teal-500 rounded-full opacity-60" />
                </div>
              </motion.div>
            </TiltCard>
            
            <TiltCard className="group hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-700">
              <motion.div variants={fadeInUp} className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                    <Brain size={40} className="text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4 group-hover:text-pink-300 transition-colors">Software</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  The consciousness. Sophisticated algorithms, AI models, and control systems that transform machinery into intelligent beings.
                </p>
                <div className="mt-6 flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full opacity-60" />
                  <div className="w-2 h-2 bg-pink-500 rounded-full opacity-80" />
                  <div className="w-2 h-2 bg-rose-500 rounded-full opacity-60" />
                </div>
              </motion.div>
            </TiltCard>
          </motion.div>
        </ContentSection>

        {/* SECTION 3: THE SIMULATION LAB */}
        <ContentSection>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              className="text-left"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight"
              >
                Your Virtual
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600">
                  Robotics Lab
                </span>
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed"
              >
                The world's leading roboticists prototype, test, and perfect their creations in simulation before ever touching physical hardware.
              </motion.p>
              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="flex items-center text-xl group">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-6 group-hover:scale-125 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">Zero hardware costs</span>
                </div>
                <div className="flex items-center text-xl group">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mr-6 group-hover:scale-125 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">Infinite experimentation</span>
                </div>
                <div className="flex items-center text-xl group">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mr-6 group-hover:scale-125 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">Industry-standard tools</span>
                </div>
                <div className="flex items-center text-xl group">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full mr-6 group-hover:scale-125 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">Rapid prototyping</span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerChildren}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8"
            >
              <TiltCard className="p-8 flex flex-col items-center justify-center aspect-square group hover:bg-gradient-to-br hover:from-red-500/10 hover:to-orange-500/10 transition-all duration-700">
                <motion.div variants={fadeInUp} className="text-center">
                  <div className="relative mb-6">
                    <img 
                      src="/images/ros.jpeg" 
                      alt="ROS Logo" 
                      className="w-24 h-24 object-contain mx-auto group-hover:scale-110 transition-transform duration-500 rounded-lg shadow-lg" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="font-black text-xl text-white mb-2 group-hover:text-orange-300 transition-colors">ROS 2</h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Robot Operating System</p>
                  <div className="mt-4 px-3 py-1 bg-red-500/20 rounded-full text-xs text-red-300 font-mono">
                    OPEN SOURCE
                  </div>
                </motion.div>
              </TiltCard>
              
              <TiltCard className="p-8 flex flex-col items-center justify-center aspect-square group hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-cyan-500/10 transition-all duration-700">
                <motion.div variants={fadeInUp} className="text-center">
                  <div className="relative mb-6">
                    <img 
                      src="/images/Gazebo_logo.png" 
                      alt="Gazebo Logo" 
                      className="w-24 h-24 object-contain mx-auto group-hover:scale-110 transition-transform duration-500 rounded-lg shadow-lg" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="font-black text-xl text-white mb-2 group-hover:text-cyan-300 transition-colors">Gazebo</h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Physics Simulation</p>
                  <div className="mt-4 px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300 font-mono">
                    3D PHYSICS
                  </div>
                </motion.div>
              </TiltCard>
              
              <TiltCard className="p-8 flex flex-col items-center justify-center aspect-square group hover:bg-gradient-to-br hover:from-green-500/10 hover:to-emerald-500/10 transition-all duration-700">
                <motion.div variants={fadeInUp} className="text-center">
                  <div className="relative mb-6">
                    <img 
                      src="/images/omnilogo.jpg" 
                      alt="Omniverse Logo" 
                      className="w-24 h-24 object-contain rounded-full mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="font-black text-xl text-white mb-2 group-hover:text-emerald-300 transition-colors">Omniverse</h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Digital Twin Platform</p>
                  <div className="mt-4 px-3 py-1 bg-green-500/20 rounded-full text-xs text-green-300 font-mono">
                    NVIDIA RTX
                  </div>
                </motion.div>
              </TiltCard>
            </motion.div>
          </div>
        </ContentSection>

        {/* SECTION 4: THE MINDSET */}
        <ContentSection className="aurora-background">
          <motion.div 
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center max-w-6xl mx-auto"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-16 tracking-tight"
            >
              Think Like a{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">
                Roboticist
              </span>
            </motion.h2>
            
            <TiltCard className="p-16 bg-gradient-to-br from-white/8 to-white/4 border-2 border-white/20 hover:border-white/30 transition-all duration-700">
              <motion.div variants={fadeInUp}>
                <p className="text-3xl md:text-4xl lg:text-5xl text-center leading-relaxed mb-12 font-light">
                  It's not about having the{' '}
                  <span className="font-black text-red-400">most expensive hardware</span>
                  <br />
                  It's about crafting the{' '}
                  <span className="font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
                    most elegant solution
                  </span>
                </p>
                
                <div className="grid md:grid-cols-2 gap-12 mt-16">
                  <div className="space-y-6">
                    <h4 className="text-2xl font-black text-amber-400 mb-8 flex items-center justify-center md:justify-start">
                      <Target className="w-8 h-8 mr-3" />
                      Creative Problem Solving
                    </h4>
                    <div className="space-y-5 font-mono text-lg">
                      <motion.div 
                        className="flex items-center p-4 rounded-lg bg-red-500/10 border border-red-500/20"
                        whileHover={{ scale: 1.02 }}
                      >
                        <span className="text-red-400 mr-4 text-2xl">×</span>
                        <span className="text-gray-300">NO LIDAR SENSOR?</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center p-4 rounded-lg bg-green-500/10 border border-green-500/20"
                        whileHover={{ scale: 1.02 }}
                      >
                        <span className="text-green-400 mr-4 text-2xl">✓</span>
                        <span className="text-green-300 font-bold">FUSE ULTRASONIC ARRAYS</span>
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h4 className="text-2xl font-black text-amber-400 mb-8 flex items-center justify-center md:justify-start">
                      <Users className="w-8 h-8 mr-3" />
                      Resourceful Innovation
                    </h4>
                    <div className="space-y-5 font-mono text-lg">
                      <motion.div 
                        className="flex items-center p-4 rounded-lg bg-red-500/10 border border-red-500/20"
                        whileHover={{ scale: 1.02 }}
                      >
                        <span className="text-red-400 mr-4 text-2xl">×</span>
                        <span className="text-gray-300">NO DEPTH CAMERA?</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center p-4 rounded-lg bg-green-500/10 border border-green-500/20"
                        whileHover={{ scale: 1.02 }}
                      >
                        <span className="text-green-400 mr-4 text-2xl">✓</span>
                        <span className="text-green-300 font-bold">STEREO VISION + CV</span>
                      </motion.div>
                    </div>
                  </div>
                </div>

                <motion.div
                  variants={fadeInUp}
                  className="mt-16 p-8 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl border border-amber-500/20"
                >
                  <h5 className="text-xl font-bold text-amber-300 mb-4">The Roboticist's Mantra:</h5>
                  <p className="text-2xl font-mono text-center text-gray-300 leading-relaxed">
                    "Constraints breed creativity.<br />
                    <span className="text-amber-400 font-bold">Limitations spark innovation."</span>
                  </p>
                </motion.div>
              </motion.div>
            </TiltCard>
          </motion.div>
        </ContentSection>

        {/* SECTION 5: CONTACT */}
        <ContentSection id="contact">
          <motion.div 
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight"
            >
              Let's Build the{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Future
              </span>
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-2xl md:text-3xl text-gray-400 mb-16 leading-relaxed font-light"
            >
              Ready to collaborate on the next breakthrough in robotics?
              <br />
              <span className="text-cyan-400 font-semibold">Let's connect and create something extraordinary together.</span>
            </motion.p>
            
            <motion.div
              variants={staggerChildren}
              className="flex flex-wrap justify-center gap-8 mb-16"
            >
              <motion.a 
                variants={fadeInUp}
                href="https://github.com/pyandcpp-coder" 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center px-10 py-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full text-xl font-bold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-2xl hover:shadow-gray-800/25 border border-gray-700 hover:border-gray-600"
              >
                <Github className="mr-4 w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                GitHub
                <ExternalLink className="ml-3 w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
              </motion.a>
              
              <motion.a 
                variants={fadeInUp}
                href="https://linkedin.com/in/yrevash/" 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center px-10 py-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full text-xl font-bold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-2xl hover:shadow-blue-600/25 border border-blue-500 hover:border-blue-400"
              >
                <Linkedin className="mr-4 w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                LinkedIn
                <ExternalLink className="ml-3 w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
              </motion.a>
              
              <motion.a 
                variants={fadeInUp}
                href="mailto:yashtiwari9182@gmail.com" 
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center px-10 py-6 bg-gradient-to-r from-green-600 to-green-700 rounded-full text-xl font-bold hover:from-green-500 hover:to-green-600 transition-all duration-300 shadow-2xl hover:shadow-green-600/25 border border-green-500 hover:border-green-400"
              >
                <Mail className="mr-4 w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                Email
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-center"
            >
              <p className="text-gray-500 font-mono text-sm mb-4">
                "The future belongs to those who build it."
              </p>
              <div className="flex justify-center space-x-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </motion.div>
          </motion.div>
        </ContentSection>
      </main>
    </>
  );
}