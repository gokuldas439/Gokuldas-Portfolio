
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-slate-950">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Gokuldas K. Built with React & Motion.
        </p>
        
        <div className="flex items-center gap-4">
           <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
           <span className="text-xs text-slate-400 font-medium uppercase tracking-[0.2em]">Open for opportunities</span>
        </div>

        <p className="text-slate-600 text-[10px] uppercase tracking-widest font-bold">
          Based in Bengaluru, India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
