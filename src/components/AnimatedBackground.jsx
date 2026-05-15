import { motion } from 'framer-motion';

const orbs = [
  {
    size: 750,
    color: 'rgba(184,255,60,0.09)',
    blur: 80,
    style: { top: '-15%', left: '-8%' },
    animate: { x: [0, 90, 40, -60, 0], y: [0, -70, 60, 25, 0] },
    duration: 22,
  },
  {
    size: 650,
    color: 'rgba(100,60,255,0.07)',
    blur: 90,
    style: { top: '35%', right: '-10%' },
    animate: { x: [0, -80, -30, 70, 0], y: [0, 70, -60, 40, 0] },
    duration: 28,
  },
  {
    size: 550,
    color: 'rgba(255,70,90,0.06)',
    blur: 70,
    style: { bottom: '0%', left: '20%' },
    animate: { x: [0, 60, -50, 30, 0], y: [0, -50, 70, -25, 0] },
    duration: 20,
  },
];

const AnimatedBackground = () => (
  <div
    className="fixed inset-0 pointer-events-none overflow-hidden"
    style={{ zIndex: 0 }}
  >
    {orbs.map((orb, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: orb.size,
          height: orb.size,
          background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
          filter: `blur(${orb.blur}px)`,
          ...orb.style,
        }}
        animate={orb.animate}
        transition={{
          duration: orb.duration,
          repeat: Infinity,
          ease: 'easeInOut',
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      />
    ))}
  </div>
);

export default AnimatedBackground;
