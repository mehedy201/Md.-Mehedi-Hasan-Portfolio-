import React from 'react';


const Review = () => {
    return (
        <div className="container py-5">
          <h2 className="hero-text text-white text-center">Our Review</h2>
          <p className="hero-text-p text-white text-center">Got this rivew after work on Freelancing marketplace</p>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col p-4">
              <div className="bg-secondary p-4 rounded">
                <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, illo.</p>
                <h6 className='text-white text-center'>Demo</h6>
              </div>
            </div>
            <div className="col p-4">
              <div className="bg-secondary p-4 rounded">
                <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, illo.</p>
                <h6 className='text-white text-center'>Demo</h6>
              </div>
            </div>
            <div className="col p-4">
              <div className="bg-secondary p-4 rounded">
                <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, illo.</p>
                <h6 className='text-white text-center'>Demo</h6>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Review;