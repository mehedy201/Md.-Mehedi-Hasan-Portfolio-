import React from 'react';
import './Services.css'
import { BsJournalCode } from "react-icons/bs";
import { DiReact } from "react-icons/di";
import { SiReactrouter } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoWordpress } from "react-icons/io";


const Services = () => {
    return (
        <div className='container pb-5'>
            <h1 className="text-primary section-hedear text-center mb-4">
                Our Services
            </h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card h-100 shadow">
                    <BsJournalCode className='fs-1 text-primary mt-3 mx-auto'/>
                  <div class="card-body">
                    <h5 class="card-title text-center title-color-card">Full-Stack Web Development</h5>
                    <p class="card-text text-color-card">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 shadow">
                    <SiReactrouter className='fs-1 text-primary mt-3 mx-auto'/>
                  <div class="card-body">
                    <h5 class="card-title text-center title-color-card">SPA Application (React JS)</h5>
                    <p class="card-text text-color-card">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 shadow">
                    <DiReact className='fs-1 text-primary mt-3 mx-auto'/>
                  <div class="card-body">
                    <h5 class="card-title text-center title-color-card">Front-End (React JS)</h5>
                    <p class="card-text text-color-card">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 shadow">
                    <SiNodedotjs className='fs-1 text-primary mt-3 mx-auto'/>
                  <div class="card-body">
                    <h5 class="card-title text-center title-color-card">Backend (Node JS)</h5>
                    <p class="card-text text-color-card">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 shadow">
                    <SiMongodb className='fs-1 text-primary mt-3 mx-auto'/>
                  <div class="card-body">
                    <h5 class="card-title text-center title-color-card">Database (MongoDB)</h5>
                    <p class="card-text text-color-card">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 shadow">
                    <IoLogoWordpress className='fs-1 text-primary mt-3 mx-auto'/>
                  <div class="card-body">
                    <h5 class="card-title text-center title-color-card">WordPress</h5>
                    <p class="card-text text-color-card">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Services;