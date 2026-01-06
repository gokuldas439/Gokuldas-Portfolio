
import React from 'react';

const BackgroundEffect: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">
      {/* Optimized CSS-driven Background Blobs */}
      <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[120px] bg-blob animate-float-slow" />
      <div className="absolute top-[20%] -right-[10%] w-[45%] h-[45%] rounded-full bg-cyan-900/20 blur-[120px] bg-blob animate-float-medium" />
      <div className="absolute -bottom-[10%] left-[10%] w-[40%] h-[40%] rounded-full bg-blue-900/15 blur-[100px] bg-blob animate-float-slow" style={{ animationDelay: '-5s' }} />

      {/* Static Noise Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] brightness-50 pointer-events-none"></div>
      
      {/* Thin Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />
    </div>
  );
};

export default BackgroundEffect;
