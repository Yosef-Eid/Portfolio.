import React from 'react';
import './Publications.css'

const Publications = () => {
    return (
        <div className='publications' id='publications'>

            <div className='title3'>
                <h3><span>publi</span>cations</h3>
                <p>Some of my programming explanations and simplification of some concepts</p>
            </div>
            
            <div className='imgs'>
            <a href='https://www.facebook.com/photo?fbid=300296089289938&set=a.106364675349748&locale=ar_AR'> <div className='img1'></div></a>
            <a href='https://www.facebook.com/photo?fbid=304379912214889&set=a.106364675349748&locale=ar_AR'> <div className='img2'></div></a>
            <a href='https://www.facebook.com/photo?fbid=302905502362330&set=a.302905555695658&locale=ar_AR'> <div className='img3'></div></a>
            <a href='https://www.facebook.com/photo/?fbid=306557998663747&set=a.106364675349748&locale=ar_AR'> <div className='img4'></div></a>
            </div>
            
        </div>
    );
}

export default Publications;
