import React from 'react';
import './Footer.css'
import {SiLinkedin} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='footer-area py-5'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="d-flex justify-content-center">
                            <SiLinkedin className='m-2 fs-2'/>
                            <BsGithub className='m-2 fs-2'/>
                            <BsFacebook className='m-2 fs-2'/>
                        </div>
                        <p className='text-center text-secondary'>Copyright&copy;2022 Md. Mehedi Hasan</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;