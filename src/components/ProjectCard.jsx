const ProjectCard = ({ title, img, alt, link, desc }) => {

  return (
    <a href={link} target="blank">
      <article
        className="relative isolate flex flex-col justify-end overflow-hidden
        rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto font-jakarta-sans min-h-[400px]
        group"
      >
        <img
          src={img}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover group-hover:scale-105
          transition-transform duration-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40
        "></div>
        <h3 className="z-10 mt-3 text-2xl font-bold text-white mb-5">{title}</h3>
        <div
          className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
          {desc}
        </div>
      </article>
    </a>
  );
};

export default ProjectCard;
