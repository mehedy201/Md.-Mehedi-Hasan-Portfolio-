import React from 'react';
import blogImg from '../../images/blog.jpg'

const Blog = () => {
    return (
        <div className='container'>
            <div className="row py-5">
                <div className="col-md-6 mx-auto m-3">
                    <img className='rounded' src={blogImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Blog;