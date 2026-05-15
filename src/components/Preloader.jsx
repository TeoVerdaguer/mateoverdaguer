import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setExiting(true), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-[#09090A] overflow-hidden select-none"
      style={{ zIndex: 9999 }}
      animate={exiting ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => { if (exiting) onComplete(); }}
    >
      <motion.div
        className="text-center px-8"
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <span
          className="block font-shoulders font-black text-[#F0EEE8] leading-[0.9]"
          style={{ fontSize: 'clamp(4.5rem, 17vw, 15rem)', letterSpacing: '-0.01em' }}
        >
          MATEO
        </span>
        <span
          className="block font-shoulders font-black text-[#F0EEE8] leading-[0.9]"
          style={{ fontSize: 'clamp(2.4rem, 9vw, 8rem)', letterSpacing: '-0.01em' }}
        >
          VERDAGUER
        </span>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-8 right-8 flex items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="flex-1 h-px bg-[#1A1A1E] overflow-hidden rounded-full">
          <motion.div
            className="h-full bg-[#B8FF3C] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.4, ease: 'linear' }}
          />
        </div>
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#5A5A62] shrink-0">
          Portfolio · 2024
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
