import React, { useState } from 'react';
import './Top.css'
import el1 from "./icon/Ellipse 15.svg";
import el2 from "./icon/Ellipse 16.svg";
import el3 from "./icon/Rectangle 52.svg";
import Cv from './../../Cv/Cv.js'
const Top = () => {



    return (
        <div className='top'>
                <img src={el1} style={{position:'absolute', left:'40px', top:'30px' }}/>
                <img src={el2} style={{position:'absolute', left:'88px', bottom:'30px' }}/>
                <img src={el3} style={{position:'absolute', left:'337px', bottom:'112px' }}/>
                <img src={el1} style={{position:'absolute', right:'50px', top:'102px' }}/>
                <img src={el2} style={{position:'absolute', left:'520px', top:'52px' }}/>


            <div className='title'>
                <div className='aboutMy'>
                    <h1>I’m Youssef Eid <span>Front-End</span> Developer</h1>
                    <p>
                    I am a highly skilled and experienced Front-End and Front-End Programmer
                     with a passion for creating user-friendly and visually appealing web applications
                     I am confident that I have the skills and experience that you are looking for in a Front-End and Front-End Programmer.
                    </p>
                </div>
                <div className='imgMy'></div>
            </div>
        </div>
    );
}

export default Top;
