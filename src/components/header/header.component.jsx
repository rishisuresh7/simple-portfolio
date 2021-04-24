import React from 'react';
import './header.styles.scss';

const Header = () => {

    const handleClick = () => {
        
    }

    return (<header className="header-container">
        <div className="header-logo">
            <h3>Rishi Suresh</h3>
            <h3 className="logo-small">RS</h3>
        </div>
        <div className="header-button" onClick = {handleClick} >
            <span>Download Resume</span>
        </div>
        <div className="header-options">
            <div className="header-option" onClick = {handleClick} >
                About
            </div>
            <div className="header-option" onClick = {handleClick} >
                Experience
            </div>
            <div className="header-option" onClick = {handleClick} >
                Projects
            </div>
            <div className="header-option" onClick = {handleClick} >
                Get In Touch
            </div>
        </div>
    </header>)
}

export default Header;