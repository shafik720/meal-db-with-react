import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faUtensilSpoon } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className="header-div">
            <div className="left-div">
                <h1><span><FontAwesomeIcon icon={faUtensilSpoon} /></span> Food Bangla</h1>
            </div>
            <div className="right-div">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Menu</a>
                <a href="">Contact</a>
            </div>
        </div>
    );    
};

export default Header;