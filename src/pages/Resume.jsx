import { portraitStats } from "../assets/images";

const Resume = () => {
  return (
    <section
      id="resume"
      className="max-container sm:mt-12 flex flex-col items-center justify-center mx-6"
    >
      <img src={portraitStats} alt="" className="w-80 mb-10" />
      <div
        className="flex text-white font-jakarta-sans w-[90%]
        lg:w-[70%] justify-between"
      >
        <div className="text-center">
          <h2 className="main-gradient text-4xl mb-4">10+</h2>
          <p>Years of exerience in design</p>
        </div>
        <div className="text-center">
          <h2 className="main-gradient text-4xl mb-4">101+</h2>
          <p>Succesful projects completed</p>
        </div>
        <div className="text-center">
          <h2 className="main-gradient text-4xl mb-4">5+</h2>
          <p>Gobal customers</p>
        </div>
      </div>

      <div className="mt-20 font-jakarta-sans text-slate-200 lg:grid lg:grid-cols-2
      lg:gap-10 xl:gap-20">
        <div>
          <h2 className="main-gradient text-4xl mb-4">Education</h2>
          <h3 className="text-2xl mt-10">Stanford University</h3>
          <div className="flex gap-14 text-gray-400">
            <p>Lorem ipsum dolor sit, amet consectetur</p>
            <p>&bull;&ensp;2001-2003</p>
          </div>

          <hr className="h-px mt-6 bg-gray-800 border-0" />
          <h3 className="text-2xl mt-6">Stanford University</h3>
          <div className="flex gap-14 text-gray-400">
            <p>Lorem ipsum dolor sit, amet consectetur</p>
            <p>&bull;&ensp;2001-2003</p>
          </div>

          <hr className="h-px mt-6 bg-gray-800 border-0" />
          <h3 className="text-2xl mt-6">Stanford University</h3>
          <div className="flex gap-14 text-gray-400">
            <p>Lorem ipsum dolor sit, amet consectetur</p>
            <p>&bull;&ensp;2001-2003</p>
          </div>
        </div>
        <div>
          <h2 className="main-gradient text-4xl mb-4 mt-20 lg:mt-0">Work Experience</h2>
          <h3 className="text-2xl mt-10">Apple Inc</h3>
          <div className="flex gap-14 text-gray-400">
            <p>Lorem ipsum dolor sit, amet consectetur</p>
            <p>&bull;&ensp;2001-2003</p>
          </div>

          <hr className="h-px mt-6 bg-gray-800 border-0" />
          <h3 className="text-2xl mt-6">Apple Inc</h3>
          <div className="flex gap-14 text-gray-400">
            <p>Lorem ipsum dolor sit, amet consectetur</p>
            <p>&bull;&ensp;2001-2003</p>
          </div>

          <hr className="h-px mt-6 bg-gray-800 border-0" />
          <h3 className="text-2xl mt-6">Apple Inc</h3>
          <div className="flex gap-14 text-gray-400">
            <p>Lorem ipsum dolor sit, amet consectetur</p>
            <p>&bull;&ensp;2001-2003</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
