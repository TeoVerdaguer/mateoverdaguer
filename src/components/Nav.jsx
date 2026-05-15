import { useState, useEffect } from 'react';
import { navLinks } from '../constants';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#09090A]/90 backdrop-blur-md border-b border-[#1A1A1E]' : ''
      }`}
    >
      <nav className="flex justify-between items-center px-8 md:px-16 py-6 max-w-[1440px] mx-auto">
        <a href="#home" className="font-display font-black text-lg tracking-tight text-[#F0EEE8]">
          MV<span className="text-[#B8FF3C]">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#5A5A62] hover:text-[#F0EEE8] transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 bg-[#B8FF3C] text-[#09090A] font-display font-bold text-xs tracking-tight rounded-full hover:bg-[#F0EEE8] transition-colors duration-300"
        >
          Hire Me
        </a>

        <a
          href="#contact"
          className="md:hidden text-[#B8FF3C] font-display font-bold text-xs"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
};

export default Nav;
