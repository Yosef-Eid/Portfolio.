import React from 'react';
import './Skills.css'
import html from "./icons/html-1.svg";
import css  from "./icons/css-3.svg";
import js  from "./icons/javascript-1.svg";
import react  from "./icons/react-2.svg";
import redux  from "./icons/redux.svg";
import bootstrap  from "./icons/bootstrap-5-1.svg";
import git  from "./icons/git.svg";
import github  from "./icons/github.svg";
import vsCode  from "./icons/visual-studio.svg";
import terminal  from "./icons/terminal-1.svg";
import figma  from "./icons/figma_logo.svg";
import notion  from "./icons/notion.svg";

const Skills = () => {
    return (
        <div className='skills2' id='skills'>
            <div className='title'>
                <h2><span>My</span> Skills</h2>
                <p>These are the skills I use in building projects and which I have mastered well</p>
            </div>

            <div className='icon'>
                <img title='Html' src={html}/>
                <img title='CSS' src={css}/>
                <img title='Javascript' src={js}/>
                <img title='React.js' src={react}/>
                <img title='Redux' src={redux}/>
                <img title='Bootstrap' src={bootstrap}/>
                <img title='Git' src={git}/>
                <img title='Github' src={github}/>
                <img title='Figma' src={figma} id='fig'/>
                <img title='Vs Code' src={vsCode}/>
                <img title='Notion' src={notion}/>
                <img title='Terminal' src={terminal}/>
            </div>
        </div>
    );
}

export default Skills;
