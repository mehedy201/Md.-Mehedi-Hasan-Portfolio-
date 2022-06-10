import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProjects from '../../../Hooks/useProjects';
import Project from '../../Projects/Project';

const HomeProjects = () => {
    const [projects] = useProjects([]);

    const navigate = useNavigate();
    const handleAllProjectsButton = () => {
        navigate('/our-projects')
    }
    return (
        <div className='container py-5'>
            <h2 className="text-center text-white">Our Projects</h2>
            <p className="text-center text-secondary mb-5">Please Review my work and GitHub code Quality</p>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        projects.slice(0,6).map(project => <Project key={project.id} project={project}></Project>)
                    }
            </div>
            <button onClick={handleAllProjectsButton} className='btn btn-primary d-block mx-auto mt-5'>All Projects</button>
        </div>
    );
};

export default HomeProjects;