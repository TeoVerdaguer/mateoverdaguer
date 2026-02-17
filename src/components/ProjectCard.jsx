import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ title, img, alt, link, short_desc, full_desc, tags }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        <article
          className="relative isolate flex flex-col justify-end overflow-hidden
          rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto font-jakarta-sans min-h-[400px]
          group transition-all duration-300 hover:shadow-xl"
        >
          <img
            src={img}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover group-hover:scale-105
            transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40
          "></div>
          <h3 className="z-10 mt-3 text-2xl font-bold text-white mb-5">{title}</h3>
          <div
            className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            {short_desc}
          </div>
        </article>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}

              className="relative w-full max-w-2xl bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 flex flex-col max-h-[90vh] overflow-hidden"
            >
              <div className="relative h-48 md:h-80 shrink-0">
                <img
                  src={img}
                  alt={alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                    {short_desc}
                  </p>

                  <div className="my-6 p-4 rounded-lg bg-gray-800/50 border border-gray-700/50">
                    <p className="text-gray-400 text-sm">{full_desc}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-xs md:text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors duration-200 text-sm md:text-base"
                    >
                      View Project
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence >
    </>
  );
};

export default ProjectCard;
