import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="sm:px-16 px-8 pt-6 absolute z-10 w-full border-b-[1px] border-slate-800">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="mateo verdaguer logo"
            width={130}
            height={30}
            className="pb-3"
          />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden mb-4">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-200
                hover:text-slate-400 transition-colors duration-300 ease-in-out"
              >
                {item.label}
              </a>
              {/* <div className="hidden group-hover:block w-full h-1.5 mt-4 bg-gradient-to-r from-[rgba(177,108,234,1)]
                via-[rgba(255,94,105,1)] to-[rgba(255,168,75,1)]">
              </div> */}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
