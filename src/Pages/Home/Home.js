import React from 'react';
import HeroArea from './HeroArea/HeroArea';
import HomeProjects from './HomeProjects/HomeProjects';
import Review from './Review/Review';
import Services from './Services/Services';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div>
            <HeroArea></HeroArea>
            <Services></Services>
            <Skills></Skills>
            <HomeProjects></HomeProjects>
            <Review></Review>
        </div>
    );
};

export default Home;