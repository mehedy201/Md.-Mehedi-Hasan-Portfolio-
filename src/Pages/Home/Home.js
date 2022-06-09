import React from 'react';
import HeroArea from './HeroArea/HeroArea';
import Services from './Services/Services';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div>
            <HeroArea></HeroArea>
            <Services></Services>
            <Skills></Skills>
        </div>
    );
};

export default Home;