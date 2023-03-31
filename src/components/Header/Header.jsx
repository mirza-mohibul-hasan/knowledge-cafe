import React from 'react';
import './Header.css'
import login from '../../assets/refat.jpg'
const Header = () => {
    return (
        <>
            <div className='header-container'>
                <h1 id='nav-title'>Knowledge Cafe</h1>
                <img id='nav-img' src={login} alt="" />
            </div>
            <div id='hr-line'>
                <hr />
            </div>
        </>
    );
};

export default Header;