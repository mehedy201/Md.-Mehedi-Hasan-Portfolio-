import React from 'react';
import aboutImg from '../../images/Mehedi4.png'

const About = () => {
    return (
        <div className='container'>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img className='my-img-size' src={aboutImg} alt="" />
                </div>
                <div className="col-md-6">
                    <h2 className="text-white hero-text">About Me</h2>
                    <p className="text-secondary hero-text-p">Are you looking expert Full-Stack Developer then I'm the best candidate for you? I'm a full-stack Node JS Developer. I know the value of time, very hard work, and always deliver the work on time. My Motive is to make my employer happy without adding additional charges. If you are looking for a React JS and Node JS Developer, I am the Right person for you.</p>
                </div>
            </div>
        </div>
    );
};

export default About;