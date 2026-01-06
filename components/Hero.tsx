
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-cyan-500/20">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold leading-none mb-6 tracking-tighter"
          >
            GOKULDAS <span className="gradient-text">K</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row md:items-center gap-4 mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-light text-slate-400">
              Full-Stack Developer <span className="mx-2 hidden md:inline">|</span> 
              <span className="text-white font-medium">Software Engineer</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed"
          >
            I architect and build high-performance, data-driven web experiences.
            Specializing in JavaScript, TypeScript, and modern ecosystem architectures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-6"
          >
            <a 
              href="#projects" 
              className="px-8 py-4 bg-white text-slate-950 rounded-full font-bold flex items-center gap-2 hover:bg-cyan-400 hover:text-slate-950 transition-all group"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 glass text-white rounded-full font-bold hover:bg-white/10 transition-all"
            >
              Let's Connect
            </a>
          </motion.div>
        </div>
      </div>

      {/* Hero Animated Background Element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[50%] h-[50%] hidden lg:block opacity-30">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-full h-full border-[1px] border-cyan-500/30 rounded-full relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full neon-glow-cyan" />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_purple]" />
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 opacity-50 cursor-pointer hidden md:block"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
