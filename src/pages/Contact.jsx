import { motion } from 'framer-motion';
import { contactLinks } from '../constants';

const linkLabels = {
  'email icon': 'Email',
  'phone icon': 'Phone',
  'linkedin icon': 'LinkedIn',
  'github icon': 'GitHub',
};

const Contact = () => (
  <section id="contact" className="px-8 md:px-16 py-24 md:py-36 max-w-[1440px] mx-auto">

    {/* Section header with clip reveal */}
    <div className="pb-8 border-b border-[#1A1A1E] mb-16 relative overflow-hidden">
      <span
        className="absolute -top-4 -left-4 font-display font-black text-[#F0EEE8] leading-none select-none pointer-events-none"
        style={{ fontSize: 'clamp(7rem, 18vw, 16rem)', opacity: 0.025 }}
        aria-hidden
      >
        03
      </span>
      <motion.span
        className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#5A5A62] block mb-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        03 / Contact
      </motion.span>
      <div className="overflow-hidden">
        <motion.h2
          className="font-display font-black leading-none tracking-tighter"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
          initial={{ y: '110%' }}
          whileInView={{ y: '0%' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[#F0EEE8]">LET'S BUILD</span>{' '}
          <span className="text-[#B8FF3C]">SOMETHING.</span>
        </motion.h2>
      </div>
    </div>

    {/* Statement */}
    <motion.p
      className="font-body text-lg md:text-2xl text-[#5A5A62] max-w-2xl leading-relaxed mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      Got a project in mind? An idea that needs to become real?
      I'm available for freelance work and collaborations.{' '}
      <span className="text-[#F0EEE8]">Let's make something great together.</span>
    </motion.p>

    {/* Contact cards */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
      {contactLinks.map((link, i) => (
        <motion.a
          key={link.id}
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-center gap-4 py-10 px-6 border border-[#1A1A1E] rounded-2xl hover:border-[#B8FF3C]/50 hover:bg-[#B8FF3C]/5 transition-all duration-500"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4 }}
        >
          <img
            src={link.icon}
            alt={link.label}
            className="h-7 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
          />
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#5A5A62] group-hover:text-[#F0EEE8] transition-colors duration-300">
            {linkLabels[link.label]}
          </span>
        </motion.a>
      ))}
    </div>
  </section>
);

export default Contact;
