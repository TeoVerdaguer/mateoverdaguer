import ProjectCard from '../components/ProjectCard';
import { sites } from '../constants';

const Projects = () => {
  return (
    <section id="projects" className="max-container max-sm:mt-12">
      <h1 className="text-5xl p-20 font-jakarta-sans font-bold
      main-gradient text-center leading-7">
        My Projects
      </h1>

      <div className='mt-16 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 
      sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
        {sites.map(site => (
          <ProjectCard key={site.id} {...site} />
        ))}
      </div>

    </section>
  )
}

export default Projects;
