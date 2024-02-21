import { resume1, resume2, resume3 } from "../assets/images";

const Resume = () => {
  return (
    <section
      id="resume"
      className="sm:mt-12 flex flex-col items-center justify-center mx-6"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        <img src={resume1} alt="" className="w-[400px] lg:w-80 mb-2 mt-20 sm:mt-0 lg:mb-10 object-cover" />
        <img src={resume2} alt="" className="h-[200px] w-[400px] lg:h-[500px] lg:w-80 mb-2 lg:mb-10 object-cover" />
        <img src={resume3} alt="" className="h-[200px] w-[400px] lg:h-[500px] lg:w-80 lg:mb-10 mb-20 object-cover" />
      </div>

      <div
        className="flex text-white font-jakarta-sans w-[90%]
        lg:w-[70%] justify-between max-w-5xl"
      >
        <div className="text-center">
          <h2 className="main-gradient text-4xl mb-4">4+</h2>
          <p>Years of Experience</p>
        </div>
        <div className="text-center">
          <h2 className="main-gradient text-4xl mb-4">10+</h2>
          <p>Successful projects completed</p>
        </div>
        <div className="text-center">
          <h2 className="main-gradient text-4xl mb-4">5+</h2>
          <p>Global customers</p>
        </div>
      </div>

      <div className="mt-20 font-jakarta-sans text-slate-200 lg:grid lg:grid-cols-2
      lg:gap-10 xl:gap-20">
        <div>
          <h2 className="main-gradient text-4xl mb-4">Certifications</h2>
          <h3 className="text-2xl mt-10">The creative React and Redux course</h3>
          <div className="flex justify-between text-gray-400 text-xs sm:text-sm md:text-md">
            <p>developedbyed.com - Online</p>
            <p>&bull;&ensp;2022</p>
          </div>

          <hr className="h-px mt-6 bg-gray-800 border-0" />
          <h3 className="text-2xl mt-6">JavaScript Course</h3>
          <div className="flex justify-between text-gray-400 text-xs sm:text-sm md:text-md">
            <p>Coderhouse - Online</p>
            <p>&bull;&ensp;2021</p>
          </div>

          <hr className="h-px mt-6 bg-gray-800 border-0" />
          <h3 className="text-2xl mt-6">JAVA 7 Oracle certification</h3>
          <div className="flex justify-between text-gray-400 text-xs sm:text-sm md:text-md">
            <p>Academia CISCO, UTN - Córdoba, Argentina</p>
            <p>&bull;&ensp;2019</p>
          </div>
        </div>
        <div>
          <h2 className="main-gradient text-4xl mb-4 mt-20 lg:mt-0">Work Experience</h2>
          <h3 className="text-2xl mt-10">Web UI Dev Semi Sr Advanced</h3>
          <div className="flex justify-between text-gray-400 text-xs sm:text-sm md:text-md">
            <p>Globant, Córdoba, Argentina</p>
            <p>&bull;&ensp;2019 - Present</p>
          </div>

          <hr className="h-px mt-6 bg-gray-800 border-0" />
          <h3 className="text-2xl mt-6">Web UI and Mobile Developer</h3>
          <div className="flex justify-between text-gray-400 text-xs sm:text-sm md:text-md">
            <p>Risto - Córdoba, Argentina</p>
            <p>&bull;&ensp;2023</p>
          </div>

          <hr className="h-px mt-6 bg-gray-800 border-0" />
          <h3 className="text-2xl mt-6">IT Help Desk</h3>
          <div className="flex justify-between text-gray-400 text-xs sm:text-sm md:text-md">
            <p>Key Soluciones - Córdoba, Argentina</p>
            <p>&bull;&ensp;2018 - 2019</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
