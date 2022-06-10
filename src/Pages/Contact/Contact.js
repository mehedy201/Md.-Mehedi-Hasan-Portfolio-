import React from 'react';
import {SiLinkedin} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import {BsFillPhoneFill} from 'react-icons/bs'

const Contact = () => {
    return (
        <div className='container py-5'>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="contact-text">
                        <h2 className="hero-text text-white">Md. Mehedi Hasan</h2>
                        <small className='text-secondary'>Full-Stack Web Developer</small>
                        <h4 className="hero-text text-white mt-4">Contact Details</h4>
                        <h6 className="text-white hero-text-p fw-bold mb-0 mt-4"><AiFillHome className='fs-3 text-white me-2  '/>  Address</h6>
                        <p className="text-white hero-text-p">Puthia-6260, Rajshahi, Bangladesh</p>
                        <h6 className="text-white hero-text-p fw-bold mb-0"><MdEmail className='fs-3 text-white me-2  '/> Email</h6>
                        <p className="text-white hero-text-p">mehedi.hasan.mern@gmail.com</p>
                        <h6 className="text-white hero-text-p fw-bold mb-0"><BsFillPhoneFill className='fs-3 text-white me-2  '/> Phone</h6>
                        <p className="text-white hero-text-p">01612013433</p>
                        <div className="d-flex justify-content-center">
                            <SiLinkedin className='m-3 fs-3 text-white'/>
                            <BsGithub className='m-3 fs-3 text-white'/>
                            <BsFacebook className='m-3 fs-3 text-white'/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="border rounded py-4 px-4 m-4">
                        <h3 className="hero-text text-center text-white">Get in tuch</h3>
                        <p className='hero-text-p text-secondary text-center'>Please mail me and stay with us</p>
                        <form action="https://formsubmit.co/mehedy643@gmail.com" method="POST">
                            <div className="mb-3">
                               <label htmlFor="exampleInputEmail1" className="form-label text-white">Your Name</label>
                               <input type="Name" name='name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            </div>
                            <div className="mb-3">
                               <label htmlFor="exampleInputPassword1" className="form-label text-white">Subjects</label>
                               <input type="text" name='subject' className="form-control" id="exampleInputPassword1"></input>
                            </div>
                            <div className="mb-3">
                               <label htmlFor="exampleInputPassword1" className="form-label text-white">Description</label>
                               <textarea type="text" name='message' className="form-control" id="exampleInputPassword1"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;