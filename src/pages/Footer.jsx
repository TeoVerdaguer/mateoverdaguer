import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Footer = () => {
  return (
    <footer
      className="w-full h-80 pt-1 mt-20 bg-primary text-white bg-gradient-to-r
      from-[#b16cea] via-[#ff5e69]  to-[#ffa84b]"
    >
      <div
        className="bg-[#1e1e1e] w-full h-80 px-60 max-sm:px-10 sm:px-10 md:px-40 flex 
        pt-20 justify-between"
      >
        <div className="max-w-80">
          <img src={headerLogo} alt="mateo logo" width={150} className="mb-8" />
          <p className="font-jakarta-sans text-sm text-slate-300
            sm:text-sm
          ">
            Web Developer based in Argentina with 4+ years of experience
            developing websites and applications.
            <br />I have experience working with Angular, React, NextJS, React
            Native, tailwindCSS and more.
          </p>
        </div>

        <ul className="flex gap-10 self-start max-sm:hidden sm:gap-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat text-lg text-slate-200
              hover:main-gradient transition-colors duration-300 ease-in-out"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center bg-[#1e1e1e] pb-2">
        <p className="mt-auto mb-5 text-slate-600">
          © Copyright Mateo Verdaguer. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
