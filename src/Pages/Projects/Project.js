import React from 'react';
import './Project.css'
import { useNavigate } from 'react-router-dom';
import SingleProject from './SingleProject';

const Project = ({project, projects}) => {

    const navigate = useNavigate();

    const {id, img, name, des, live, client, server} = project;

    const imageHandle = (id, projects) => {
        navigate(`/our-projects/${id}`);
        {<SingleProject projects={projects}></SingleProject>}
    }

    return (
        <div className='col'>
            <div className="card h-100 shadow">
                    <img onClick={() => imageHandle(id, projects)} className='m-4 rounded h-50 for-pointer' src={img} alt={name}/>
                  <div className="card-body">
                    <h5 className="card-title title-color-card">{name}</h5>
                    <p className="card-text text-color-card">{des}</p>
                    <div className='px-3 float-end'>
                        <a href={live} className='btn btn-sm btn-primary me-2' target={'_blank'}>Live</a>
                        <a href={client} className='btn btn-sm btn-primary me-2' target={'_blank'}>Code_Client</a>
                        {
                            project.server && <a href={server} className='btn btn-sm btn-primary' target={'_blank'}>Code_Server</a>
                        }
                    </div>
                  </div>
                  
            </div>
        </div>
    );
};

export default Project;