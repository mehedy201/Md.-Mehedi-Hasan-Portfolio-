import React from 'react';
import './Skills.css'
import { ProgressBar } from 'react-bootstrap';

const Skills = () => {
    return (
        <div className='container py-5'>
            <div className="row">
                <h2 className='text-white text-center'>Skills</h2>
                <p className="text-secondary text-center">Showing my skills using simple ber</p>
                <div className="col-md-6 mx-auto">
                    <p className='text-white progress-style mb-1'>JavaScript 70%</p><ProgressBar className='mb-2' now={75} />
                    <p className='text-white progress-style mb-1'>React JS 90%</p><ProgressBar className='mb-2' now={85} />
                    <p className='text-white progress-style mb-1'>HTML 95%</p><ProgressBar className='mb-2' now={95} />
                    <p className='text-white progress-style mb-1'>CSS 95%</p> <ProgressBar className='mb-2' now={95} />
                    <p className='text-white progress-style mb-1'>Bootstrap 5 90%</p> <ProgressBar className='mb-2' now={90} />
                    <p className='text-white progress-style mb-1'>Tailwind CSS 90%</p> <ProgressBar className='mb-2' now={90} />
                    <p className='text-white progress-style mb-1'>Node JS 65%</p><ProgressBar className='mb-2' now={65} />
                    <p className='text-white progress-style mb-1'>Express JS 65%</p> <ProgressBar className='mb-2' now={65} />
                    <p className='text-white progress-style mb-1'>MongoDB 70%</p> <ProgressBar className='mb-2' now={70} />
                </div>
            </div>
        </div>
    );
};

export default Skills;