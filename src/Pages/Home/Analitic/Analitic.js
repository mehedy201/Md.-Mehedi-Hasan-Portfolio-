import React from 'react';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {ImWoman} from 'react-icons/im'
import {BsBagCheckFill} from 'react-icons/bs'

const Analitic = () => {
    return (
        <div className='container '>
            <div className="row row-cols-1 row-cols-md-3 py-4 bg-primary mb-5 mx-md-5 rounded align-items-center justify-content-center">
                <div className="col">
                    <AiOutlineFundProjectionScreen className='m-3 fs-1 text-white d-block mx-auto'/> 
                    <h3 className='text-white text-center hero-text'>100+ Projects</h3>
                </div>
                <div className="col">
                    <BsBagCheckFill className='m-3 fs-1 text-white d-block mx-auto'/> 
                    <h3 className='text-white text-center hero-text'>100% Job Success</h3>
                </div>
                <div className="col">
                    <ImWoman className='m-3 fs-1 text-white d-block mx-auto'/> 
                    <h3 className='text-white text-center hero-text'>99% Happy Clients</h3>
                </div>
            </div>
        </div>
    );
};

export default Analitic;