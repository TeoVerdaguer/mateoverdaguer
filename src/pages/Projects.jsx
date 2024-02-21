import ProjectCard from '../components/ProjectCard';
import { sites } from '../constants';

const Projects = () => {
  return (
    <section id="projects" className="max-container max-sm:mt-12">
      <h1 className="text-5xl font-jakarta-sans sm:py-20
      main-gradient text-center">
      Projects
      </h1>

      <div className='mt-16 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 
      sm:grid-cols-2 grid-cols-1 md:gap-14 gap-6'>
        {sites.map(site => (
          <ProjectCard key={site.id} {...site} />
        ))}
      </div>

    </section>
  )
}

export default Projects;
