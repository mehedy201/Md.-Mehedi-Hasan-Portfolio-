import useProjects from '../../Hooks/useProjects';
import Project from './Project';

const Projects = () => {
    const [projects] = useProjects([])
    return (
        <div className='container py-5'>
            <h2 className="text-center text-white">Our Projects</h2>
            <p className="text-center text-secondary mb-5">Please Review my work and GitHub code Quality</p>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        projects.map(project => <Project key={project.id} project={project} projects={projects}></Project>)
                    }
            </div>
        </div>
    );
};

export default Projects;