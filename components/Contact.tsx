
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("This is a demo. Message feature is not connected to a backend.");
  };

  const socials = [
    { icon: <Github size={20} />, link: 'https://github.com/gokuldas439', color: 'hover:text-white' },
    { icon: <Linkedin size={20} />, link: '#', color: 'hover:text-blue-500' },
    { icon: <Twitter size={20} />, link: '#', color: 'hover:text-cyan-400' },
    { icon: <Mail size={20} />, link: 'mailto:gokuldas439@gmail.com', color: 'hover:text-red-400' },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Let's build <span className="text-orange-500">together.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-lg leading-relaxed mb-12"
            >
              Have a visionary project in mind? Or just want to talk tech and scalability? 
              Drop me a message and let's explore how we can create something exceptional.
            </motion.p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Email Me</p>
                  <p className="text-xl font-bold">gokuldas439@gmail.com</p>
                </div>
              </div>

              <div className="pt-8 flex gap-6">
                {socials.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -5 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`w-12 h-12 glass rounded-full flex items-center justify-center text-slate-400 transition-all ${social.color} hover:border-white/20`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-3xl border-white/5 relative group overflow-hidden"
          >
            {/* Form Glow Effect */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-48 h-48 bg-orange-500/10 blur-3xl rounded-full" />
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-cyan-500 focus:bg-white/10 transition-all"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Your Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-cyan-500 focus:bg-white/10 transition-all"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-cyan-500 focus:bg-white/10 transition-all resize-none"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-white text-slate-950 font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-400 transition-all group active:scale-[0.98]"
              >
                Launch Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
