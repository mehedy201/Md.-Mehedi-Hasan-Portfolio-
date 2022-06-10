import React from 'react';

const SingleProject = () => {
    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-3 g-1 py4">
                <div className="col">
                    <a href=""><img src="" alt="" /></a>
                </div>
                <div className="col">
                    <a href=""><img src="" alt="" /></a>
                </div>
                <div className="col">
                    <a href=""><img src="" alt="" /></a>
                </div>
            </div>
            <div className='row align-items-center'>
                <div className="col-md-6">
                    <h3 className="hero-text text-white">Project Details</h3>
                    <h5 className="text-secondary hero-text-p">Project Name</h5>
                    <p className="text-secondary hero-text-p">Front End:</p>
                    <p className="text-secondary hero-text-p">Back End:</p>
                    <p className="text-secondary hero-text-p">Description</p>
                </div>
                <div className="col-md-6">
                    <button className='btn btn-primary m-2'>Live Site</button>
                    <button className='btn btn-primary m-2'>GitHub Code__Client Site</button>
                    <button className='btn btn-primary m-2'>GitHub Code__Server Site</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;