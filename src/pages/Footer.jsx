import { navLinks } from '../constants';

const Footer = () => {
  return (
    <footer className="border-t border-[#1A1A1E]">
      <div className="px-8 md:px-16 py-12 max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-display font-black text-2xl text-[#F0EEE8]">
          MV<span className="text-[#B8FF3C]">.</span>
        </span>

        <ul className="flex flex-wrap justify-center items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#5A5A62] hover:text-[#F0EEE8] transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="font-mono text-xs text-[#5A5A62]">
          © 2024 Mateo Verdaguer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
