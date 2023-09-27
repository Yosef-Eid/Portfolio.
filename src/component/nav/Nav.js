import React from 'react';
import './Nav.css'
const Nav = () => {


    return (
        <div className='nav'>
            {/* <ion-icon name="moon-outline"></ion-icon> */}
            <div className='option'>
                <a href='#home' title='Home'><ion-icon name="home-outline"></ion-icon></a>
                <a href='#skills' title='Skills'><ion-icon name="extension-puzzle-outline"></ion-icon></a>
                <a href='#works' title='Works'><ion-icon name="grid-outline"></ion-icon></a>
                <a href='#publications' title='publications'><ion-icon name="easel-outline"></ion-icon></a>
                <a href='#contact' title='Contact'><ion-icon name="globe-outline"></ion-icon></a>
                <a href='#otherSits' title='Other Sites'><ion-icon name="planet-outline"></ion-icon></a>
            </div>
        </div>
    );
}

export default Nav;
