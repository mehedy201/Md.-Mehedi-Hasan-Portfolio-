import React from 'react';
import MyImg from '../../../images/Mehedi4.png'
import './HeroArea.css'

const HeroArea = () => {
    return (
            <div className="container py-5 ">
                <div className="row bg-dark align-items-center">
                    <div className="col-md-6">
                        <h1 className='text-white hero-text'>Hi, I am Md. Mehedi <br /> Hasan</h1>
                        <p className='text-white hero-text-p'>I'm full-stack web developer (React JS & Node JS). I have 3 years experince in this field.</p>
                        <a href='https://drive.google.com/file/d/106oHsaT5RV6FIsaWdwg9ZHNcQOZI_KpY/view?usp=sharing' className='btn bg-primary text-white' target={'_blank'}>Download Resume</a>
                    </div>
                    <div className="col-md-6">
                        <img className='my-img-size' src={MyImg} alt="" />
                    </div>
                </div>
            </div>
    );
};

export default HeroArea;