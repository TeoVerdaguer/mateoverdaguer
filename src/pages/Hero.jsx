import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { portrait } from '../assets/images';

const ease = [0.16, 1, 0.3, 1];

// All delays offset by ~2s so hero animates in as the preloader curtain lifts
const OFFSET = 1.9;

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={containerRef} id="home" className="relative min-h-[180vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">

        <div className="relative w-full px-8 md:px-16 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] gap-10 items-center">

            {/* Left: Text */}
            <motion.div style={{ opacity: contentOpacity, y: contentY }}>

              {/* Location badge */}
              <motion.div
                className="flex items-center gap-3 mb-10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: OFFSET, ease }}
              >
                <motion.span
                  className="w-2 h-2 rounded-full bg-[#B8FF3C] block"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#5A5A62]">
                  Córdoba, Argentina · Available for work
                </span>
              </motion.div>

              {/* Name — clip reveal, line by line */}
              <h1 className="leading-none mb-8">
                <div className="overflow-hidden">
                  <motion.span
                    className="block font-shoulders font-black text-[#F0EEE8]"
                    style={{ fontSize: 'clamp(3.5rem, 11vw, 10rem)', letterSpacing: '-0.01em' }}
                    initial={{ y: '105%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 1, delay: OFFSET + 0.1, ease }}
                  >
                    MATEO
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span
                    className="block font-shoulders font-black text-[#F0EEE8]"
                    style={{ fontSize: 'clamp(2rem, 7vw, 6.5rem)', letterSpacing: '-0.01em' }}
                    initial={{ y: '105%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 1, delay: OFFSET + 0.25, ease }}
                  >
                    VERDAGUER
                  </motion.span>
                </div>
              </h1>

              {/* Role */}
              <motion.div
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: OFFSET + 0.45, ease }}
              >
                <div className="h-px w-10 bg-[#B8FF3C] shrink-0" />
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#5A5A62]">
                  Web Developer & Digital Craftsman
                </span>
              </motion.div>

              {/* Tagline */}
              <motion.p
                className="font-body text-xl md:text-2xl text-[#F0EEE8] leading-relaxed max-w-md mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: OFFSET + 0.55, ease }}
              >
                I build the digital things{' '}
                <span className="text-[#B8FF3C]">you wish already existed.</span>
              </motion.p>

              {/* CTA */}
              <motion.div
                className="flex flex-wrap items-center gap-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: OFFSET + 0.7, ease }}
              >
                <a
                  href="#contact"
                  className="px-8 py-4 bg-[#B8FF3C] text-[#09090A] font-display font-bold text-sm rounded-full hover:bg-[#F0EEE8] transition-all duration-300 hover:scale-105"
                >
                  Let's talk →
                </a>
                <a
                  href="#projects"
                  className="font-mono text-xs tracking-[0.2em] uppercase text-[#5A5A62] hover:text-[#F0EEE8] transition-colors border-b border-[#1A1A1E] pb-0.5 hover:border-[#F0EEE8]"
                >
                  View my work
                </a>
                <div className="hidden lg:flex items-center gap-3 text-[#5A5A62] font-mono text-xs ml-auto">
                  <span>5+ yrs</span>
                  <span className="text-[#B8FF3C]">·</span>
                  <span>10+ projects</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Portrait */}
            <motion.div
              className="hidden md:block relative"
              style={{ y: portraitY }}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: OFFSET + 0.2, ease }}
            >
              <div className="relative">
                <img
                  src={portrait}
                  alt="Mateo Verdaguer"
                  className="w-full object-cover"
                />
                <div
                  className="absolute -bottom-4 -right-4 w-full h-full -z-10"
                  style={{ border: '1px solid rgba(184,255,60,0.22)' }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#09090A] to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-8 md:left-16 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: OFFSET + 1.4, duration: 1 }}
        >
          <motion.div
            className="w-px h-10 bg-[#5A5A62] origin-top"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.5 }}
          />
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#5A5A62]">
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
