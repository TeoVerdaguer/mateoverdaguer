import { useEffect } from "react";
import { portrait } from "../assets/images";
import { pattern } from "../assets/images";
import Button from "../components/Button";
import { motion } from "framer-motion";

const Hero = () => {

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center
      min-h-screen gap-10 max-container"
    >
      <motion.div
        className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28"
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.75 }}
      >
        <h1 className="mt-10 font-palanquin text-7xl max-sm:text-[40px] max-sm:leading-[82px] font-bold">
          <span className="font-normal font-jakarta-sans text-slate-100 relative z-10 pr-10">
            Hi! 👋&ensp;I'm
          </span>
          <br />
          <span className="font-jakarta-sans text-7xl max-sm:text-5xl main-gradient inline-block
          h-full mt-3 leading-tight max-sm:leading-relaxed">
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
          backgroundColor={"main-gradient"}
          textColor={"text-white"}
          borderColor={"border-[main-gradient]"}
         />
      </motion.div>

      {/* BACKGROUND LINES PATTERN */}
      {/* <img 
        src={pattern}
        alt="lines pattern background"
        className="absolute top-[72px] right-0 w-[60%] h-[95%] object-cover z-0"
      /> */}

      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.75 }}
        className="relative flex-1 flex justify-center items-center xl:min-h-screen 
          max-xl:py-40 max-sm:py-10 sm:py-10 bg-primary bg-hero bg-cover bg-center"
      >
        <img
          src={portrait}
          alt="shoe collection"
          width={500}
          className="object-contain relative z-10"
        />

      </motion.div>
    </section>
  );
};

export default Hero;
