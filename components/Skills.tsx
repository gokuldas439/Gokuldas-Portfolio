
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
// Fixed: Tooltip is not a valid exported icon in lucide-react. Changed to Terminal.
import { Cpu, Layers, HardDrive, Globe, Terminal } from 'lucide-react';

const Skills: React.FC = () => {
  const categories = [
    { name: 'Frontend', icon: <Layers size={20} />, accent: 'cyan' },
    { name: 'Backend', icon: <Cpu size={20} />, accent: 'purple' },
    { name: 'Database', icon: <HardDrive size={20} />, accent: 'orange' },
    { name: 'Cloud', icon: <Globe size={20} />, accent: 'blue' },
    // Fixed: Updated icon from non-existent Tooltip to Terminal
    { name: 'Tools', icon: <Terminal size={20} />, accent: 'slate' }
  ];

  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-cyan-400 font-mono text-sm mb-4 tracking-[0.3em] uppercase flex items-center gap-3"
            >
              <span className="w-12 h-[1px] bg-cyan-400/30" />
              System Capabilities
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold tracking-tight"
            >
              TECH <span className="gradient-text">MODALITIES</span>
            </motion.h2>
          </div>
          <div className="hidden lg:block text-right">
            <p className="text-slate-500 font-mono text-[10px] leading-relaxed uppercase">
              // Version: 2.0.4<br />
              // Status: Fully Operational<br />
              // Optimization: Active
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {categories.map((cat, idx) => {
            const isWide = idx === 0 || idx === 1;
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group relative glass rounded-2xl p-8 border-white/5 overflow-hidden transition-all duration-500 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] ${isWide ? 'lg:col-span-6' : 'lg:col-span-4'}`}
              >
                {/* Holographic Scan Line Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent h-1/2 w-full -translate-y-full group-hover:animate-[scan_3s_linear_infinite] pointer-events-none" />
                
                {/* Decorative Brackets */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/10 group-hover:border-cyan-400/50 transition-colors" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/10 group-hover:border-cyan-400/50 transition-colors" />

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-cyan-400 shadow-inner group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors uppercase tracking-widest">{cat.name}</h3>
                    <div className="h-1 w-12 bg-white/10 group-hover:w-20 group-hover:bg-cyan-400 transition-all duration-500 rounded-full" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 relative z-10">
                  {SKILLS.filter(s => s.category === cat.name).map((skill) => (
                    <div 
                      key={skill.name}
                      className="px-4 py-2 text-[11px] font-mono tracking-wider bg-white/5 border border-white/5 rounded-md text-slate-400 group-hover:text-slate-200 group-hover:border-white/20 transition-all flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400" />
                      {skill.name}
                    </div>
                  ))}
                </div>

                {/* Cyber Background Detail */}
                <div className="absolute -bottom-8 -right-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                  <div className="text-[120px] font-bold select-none leading-none">0{idx + 1}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          from { transform: translateY(-100%); }
          to { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
};

export default Skills;
