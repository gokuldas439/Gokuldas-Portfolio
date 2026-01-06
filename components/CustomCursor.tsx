
import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isPointer, setIsPointer] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  
  // High-performance spring physics for smoothness
  const mouseX = useSpring(0, { stiffness: 800, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 800, damping: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame to ensure updates happen on sync with refresh rate
      window.requestAnimationFrame(() => {
        mouseX.set(e.clientX - 10);
        mouseY.set(e.clientY - 10);
        
        const target = e.target as HTMLElement;
        if (target) {
          const cursorStyle = window.getComputedStyle(target).cursor;
          setIsPointer(cursorStyle === 'pointer' || target.tagName === 'A' || target.tagName === 'BUTTON');
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 border border-cyan-400/50 rounded-full pointer-events-none z-[9999] mix-blend-screen hidden md:flex items-center justify-center will-change-transform"
      style={{
        x: mouseX,
        y: mouseY,
        scale: isPointer ? 2 : 1,
        boxShadow: isPointer ? '0 0 20px rgba(34, 211, 238, 0.4)' : 'none',
        backgroundColor: isPointer ? 'rgba(34, 211, 238, 0.1)' : 'transparent',
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.5 }}
    >
      <div className="w-1 h-1 bg-cyan-400 rounded-full" />
    </motion.div>
  );
};

export default CustomCursor;
