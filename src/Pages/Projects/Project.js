import React from 'react';

const Project = ({project}) => {

    const {img, name, des} = project;
    return (
        <div className='col'>
            <div className="card h-100 shadow">
                    <img className='m-4 rounded h-50' src={img} alt={name}/>
                  <div className="card-body">
                    <h5 className="card-title title-color-card">{name}</h5>
                    <p className="card-text text-color-card">{des}</p>
                    <div className='px-3 float-end'>
                        <button className='btn btn-sm btn-primary me-4'>Live Site</button>
                        <button className='btn btn-sm btn-primary'>Code Link</button>
                    </div>
                  </div>
            </div>
        </div>
    );
};

export default Project;