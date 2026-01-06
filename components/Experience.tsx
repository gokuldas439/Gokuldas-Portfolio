import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 35 });

  return (
    <section id="experience" className="py-20 px-6 relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">The <span className="text-cyan-400">Journey</span></h2>
          <p className="text-slate-400">My professional trajectory through the tech landscape.</p>
        </motion.div>

        <div ref={containerRef} className="relative">
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-orange-500 z-0 will-change-transform"
          />

          <div className="space-y-16 relative z-10">
            {EXPERIENCES.map((exp, idx) => (
              <div key={exp.id} className={`flex flex-col md:flex-row gap-12 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 z-10 mt-8 hidden md:block" />

                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full md:w-[calc(50%-2rem)] will-change-transform"
                >
                  <div className="glass p-8 rounded-3xl border-white/5 hover:border-cyan-500/20 transition-all duration-300 group">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors">{exp.role}</h3>
                        <span className="text-[10px] font-bold px-3 py-1 glass rounded-full text-cyan-400 border border-cyan-500/20 flex items-center gap-1.5 uppercase tracking-wider">
                          <Calendar size={12} /> {exp.period}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-slate-400 text-xs font-mono">
                        <span className="flex items-center gap-1.5"><Briefcase size={14} /> {exp.company}</span>
                        <span className="flex items-center gap-1.5"><MapPin size={14} /> {exp.location}</span>
                      </div>

                      <ul className="mt-4 space-y-3">
                        {exp.description.map((point, pIdx) => (
                          <li key={pIdx} className="text-slate-400 text-sm leading-relaxed flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/50 mt-1.5 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
                
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 glass p-8 rounded-3xl border-white/5 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 group hover:border-cyan-400/20 transition-all duration-500"
        >
          <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
             <Briefcase size={32} />
          </div>
          <div className="flex-1 text-center md:text-left">
             <h3 className="text-2xl font-bold">Academic Foundation</h3>
             <p className="text-slate-400 mb-2">B.Sc. Computer Science</p>
             <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
               <span className="text-slate-300 text-sm">Calicut University (NSS College Ottapalam)</span>
               <span className="text-[10px] px-3 py-1 bg-white/5 rounded-full text-slate-500 font-bold uppercase tracking-widest italic border border-white/5">Graduated</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;