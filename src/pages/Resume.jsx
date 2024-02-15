import { portrait } from "../assets/images";

const Resume = () => {
  return (
    <section
      id="resume"
      className="max-container max-sm:mt-12 flex flex-col items-center justify-center"
    >
      <img
        src={portrait}
        alt=""
        className="w-80 mb-10"
      />
      <div
        className="flex text-white font-jakarta-sans text-2xl 
        w-[70%] justify-between"
      >
        <h1>Stat 1</h1>
        <h1>Stat 2</h1>
        <h1>Stat 3</h1>
      </div>

    </section>
  )
}

export default Resume;
