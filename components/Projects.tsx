
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';
import TiltCard from './TiltCard';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Selected <span className="text-purple-400">Works</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 max-w-xl"
            >
              Discover applications where functionality meets cinematic design.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a 
              href="https://github.com/gokuldas439" 
              target="_blank" 
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
            >
              See all repositories <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
            >
              <TiltCard className="group">
                <div className="relative glass rounded-3xl overflow-hidden aspect-[16/10]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-8 flex flex-col justify-end">
                    <div className="flex justify-between items-start mb-4">
                      <div className="space-y-1">
                        {project.isProfessional && (
                          <span className="text-[10px] bg-purple-500 text-white px-2 py-0.5 rounded uppercase font-bold tracking-widest">
                            Professional
                          </span>
                        )}
                        <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                      </div>
                      <div className="flex gap-3">
                        {project.repo && (
                          <a 
                            href={project.repo} 
                            target="_blank" 
                            className="p-3 glass rounded-full hover:bg-white hover:text-slate-950 transition-all"
                            title="GitHub Repo"
                          >
                            <Github size={20} />
                          </a>
                        )}
                        {project.link && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            className="p-3 glass rounded-full hover:bg-white hover:text-slate-950 transition-all"
                            title="Live Demo"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-slate-300 mb-6 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="text-[10px] px-2.5 py-1 glass border-white/5 rounded-full text-slate-400 font-medium uppercase">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
