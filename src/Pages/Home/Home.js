import React from 'react';
import Contact from '../Contact/Contact';
import Analitic from './Analitic/Analitic';
import HeroArea from './HeroArea/HeroArea';
import HomeProjects from './HomeProjects/HomeProjects';
import Review from './Review/Review';
import Services from './Services/Services';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div>
            <HeroArea></HeroArea>
            <Analitic></Analitic>
            <Services></Services>
            <Skills></Skills>
            <HomeProjects></HomeProjects>
            <Contact></Contact>
        </div>
    );
};

export default Home;