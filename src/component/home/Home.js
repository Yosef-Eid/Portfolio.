import React from 'react';
import './Home.css'
import Top from './sectionTop/Top';
import Skills from './skills/Skills';
import Works from './works/Works';
import Publications from './publications/Publications';
import Contact from './contact/Contact';
import OtherSites from './Other-sites/OtherSites';
import Cv2 from './Cv2/Cv2';
const Home = () => {
    return (
        <div className='home' id='home'>
            <Top/>
            <Cv2/>
            <Skills/>
            <Works/>
            <Publications/>
            <Contact/>
            <OtherSites/>
        </div>
    );
}

export default Home;
