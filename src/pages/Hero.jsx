import { portrait } from "../assets/images";
import Button from "../components/Button";
import { motion } from "framer-motion";

const Hero = () => {

  return (
    <section
      id="home"
      className="w-full px-10 flex xl:flex-row flex-col items-center gap-10 justify-center
      min-h-screen mt-10 md:mt-0 md:pb-20"
    >
      <motion.div
        className="flex flex-col items-start w-full xl:w-2/5"
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.75 }}
      >
        <h1 className="font-palanquin min-lg:text-7xl text-[34px] leading-[82px] md:leading-[90px] font-bold">
          <span className="font-normal font-jakarta-sans text-slate-100 relative z-10 pr-10">
            Hi! 👋&ensp;I'm
          </span>
          <br />
          <span className="font-jakarta-sans lg:text-7xl text-5xl main-gradient inline-block
          h-full md:leading-tight lg:leading-tight leading-relaxed">
            Mateo Verdaguer
          </span>
        </h1>

        <motion.div 
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center mt-6 w-full
            duration-700 relative transform transition-all translate-x-[-12] ease-out"
        >
          <hr className="border w-[40%] border-[rgba(255,94,105,1)]" />
          <p className="font-jakarta-sans text-slate-100 ml-4 text-2xl sm:text-xl max-sm:text-[16px]">Web Developer</p>
        </motion.div>

        <p className="font-jakarta-sans text-slate-100 text-md max-sm:text-sm leading-8 mt-6 mb-14 sm:max-w-sm">
          I'm a web developer based in Argentina with 4+ years of experience building websites and web applications.
        </p>
        <Button 
          label="Hire Me"
          textColor={"text-white"}
          borderColor={"border-[main-gradient]"}
          action={() => { window.scrollTo(0, document.body.scrollHeight) }}
         />
      </motion.div>

      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.75 }}
        className="flex justify-center bg-cover bg-center"
      >
        <img
          src={portrait}
          alt="portrait"
          className="w-[300px] sm:w-[400px] mt-10"
        />

      </motion.div>
    </section>
  );
};

export default Hero;
