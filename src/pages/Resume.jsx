import { motion } from 'framer-motion';

const stats = [
  { number: '5+', label: 'Years of Experience' },
  { number: '10+', label: 'Projects Completed' },
  { number: '7+', label: 'Happy Clients' },
];

const experience = [
  { role: 'Frontend Developer', company: 'Freelance', location: 'Córdoba, Argentina', period: '2023 — Now' },
  { role: 'Web UI Dev Semi Sr Advanced', company: 'Globant', location: 'Córdoba, Argentina', period: '2019 — Now' },
  { role: 'IT Help Desk', company: 'Key Soluciones', location: 'Córdoba, Argentina', period: '2018 — 2019' },
];

const certifications = [
  { title: 'The Creative React & Redux Course', issuer: 'developedbyed.com', year: '2022' },
  { title: 'JavaScript Course', issuer: 'Coderhouse', year: '2021' },
  { title: 'JAVA 7 Oracle Certification', issuer: 'Academia CISCO, UTN', year: '2019' },
];

const Resume = () => (
  <section id="resume" className="px-8 md:px-16 py-24 md:py-36 max-w-[1440px] mx-auto">

    {/* Section header with clip reveal */}
    <div className="pb-8 border-b border-[#1A1A1E] mb-16 relative overflow-hidden">
      <span
        className="absolute -top-4 -left-4 font-display font-black text-[#F0EEE8] leading-none select-none pointer-events-none"
        style={{ fontSize: 'clamp(7rem, 18vw, 16rem)', opacity: 0.025 }}
        aria-hidden
      >
        01
      </span>
      <motion.span
        className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#5A5A62] block mb-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        01 / About
      </motion.span>
      <div className="overflow-hidden">
        <motion.h2
          className="font-display font-black text-[#F0EEE8] leading-none tracking-tighter"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
          initial={{ y: '110%' }}
          whileInView={{ y: '0%' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          THE WORK
        </motion.h2>
      </div>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-3 gap-3 md:gap-6 mb-20">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          className="border border-[#1A1A1E] rounded-2xl p-5 md:p-10 text-center hover:border-[#B8FF3C]/40 transition-colors duration-500"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="font-display font-black text-[#B8FF3C] block leading-none mb-2"
            style={{ fontSize: 'clamp(2.2rem, 6vw, 5rem)' }}
          >
            {stat.number}
          </span>
          <span className="font-mono text-[10px] md:text-xs tracking-[0.15em] uppercase text-[#5A5A62]">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </div>

    {/* Experience + Certifications */}
    <div className="grid md:grid-cols-2 gap-12 md:gap-20">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <h3 className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#5A5A62] mb-8">
          Work Experience
        </h3>
        {experience.map((item, i) => (
          <div key={i}>
            <div className="group py-7">
              <div className="flex justify-between items-start mb-1.5">
                <h4 className="font-display font-bold text-lg text-[#F0EEE8] group-hover:text-[#B8FF3C] transition-colors duration-300 leading-tight pr-4">
                  {item.role}
                </h4>
                <span className="font-mono text-xs text-[#5A5A62] shrink-0 mt-0.5">
                  {item.period}
                </span>
              </div>
              <p className="font-body text-sm text-[#5A5A62]">
                {item.company} — {item.location}
              </p>
            </div>
            {i < experience.length - 1 && <div className="h-px bg-[#1A1A1E]" />}
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        <h3 className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#5A5A62] mb-8">
          Certifications
        </h3>
        {certifications.map((item, i) => (
          <div key={i}>
            <div className="group py-7">
              <div className="flex justify-between items-start mb-1.5">
                <h4 className="font-display font-bold text-lg text-[#F0EEE8] group-hover:text-[#B8FF3C] transition-colors duration-300 leading-tight pr-4">
                  {item.title}
                </h4>
                <span className="font-mono text-xs text-[#5A5A62] shrink-0 mt-0.5">
                  {item.year}
                </span>
              </div>
              <p className="font-body text-sm text-[#5A5A62]">{item.issuer}</p>
            </div>
            {i < certifications.length - 1 && <div className="h-px bg-[#1A1A1E]" />}
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Resume;
