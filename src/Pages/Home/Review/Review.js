import React from 'react';
import { Carousel } from 'react-bootstrap';


const Review = () => {
    return (
        <div className='py-5'>
            <Carousel fade>
                <Carousel.Item>
                  <Carousel.Caption>
                    <h3 className='text-white'>First slide label</h3>
                    <p className='text-secondary'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Carousel.Caption>
                    <h3 className='text-white'>Second slide label</h3>
                    <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                  <Carousel.Caption>
                    <h3 className='text-white'>Third slide label</h3>
                    <p className='text-secondary'>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            
        </div>
    );
};

export default Review;