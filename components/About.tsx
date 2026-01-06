import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

const About: React.FC = () => {
  return (
    <section id="about" className="pt-12 pb-20 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <TiltCard className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 border-2 border-cyan-500/30 translate-x-4 translate-y-4 rounded-2xl" />
              <div className="relative z-10 w-full h-full glass rounded-2xl overflow-hidden group">
                <img 
                  src="https://picsum.photos/seed/gokuldas/600/600" 
                  alt="Gokuldas K" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
              </div>
            </TiltCard>
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Crafting digital <span className="text-cyan-400">futures.</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Results-driven Full-Stack Developer with strong expertise in JavaScript and TypeScript. I have a deep passion for building scalable, data-driven web applications that combine robust backend architectures with fluid, high-fidelity user interfaces.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                My approach is performance-focused. I don't just write code; I engineer solutions that are clean, maintainable, and optimized for growth. Whether it's complex ABM platforms or sleek interactive animations, I thrive on the intersection of logic and creativity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-6"
            >
              {[
                { label: 'Experience', val: '2+ Years' },
                { label: 'Projects', val: '15+' },
                { label: 'Commitment', val: '100%' },
              ].map((item) => (
                <div key={item.label} className="glass p-4 rounded-xl border-white/5">
                  <p className="text-cyan-400 font-bold text-2xl">{item.val}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;