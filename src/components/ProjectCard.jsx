const ProjectCard = ({ id, title, img, alt, link, desc }) => {
  return (

    <div className="mt-10 flex flex-col rounded-xl text-white font-jakarta-sans">
      <img
        src={img}
        alt={alt}
        className="mx-4 -mt-6 h-41 overflow-hidden rounded-xl"
      />
      <div className="">
        {/* <h2>{title}</h2> */}
      </div>
    </div>

    // <div
    //   class="relative mt-10 flex flex-col rounded-xl
    //   bg-white bg-clip-border text-gray-700 shadow-md
    //   m-5"
    // >
    //   <img
    //     src={img}
    //     alt={alt}
    //     className="relative mx-4 -mt-6 h-41 overflow-hidden rounded-xl"
    //   />
    //   {/* <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></div> */}
    //   <div class="p-6">
    //     <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    //       {title}
    //     </h5>
    //     <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
    //       {desc}
    //     </p>
    //   </div>
    //   <div class="p-6 pt-0">
    //     <button
    //       data-ripple-light="true"
    //       type="button"
    //       onClick={() => window.open(link)}
    //       class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    //     >
    //       Open
    //     </button>
    //   </div>
    // </div>
  );
};

export default ProjectCard;
