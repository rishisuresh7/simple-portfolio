import React from 'react';

import './footer.styles.scss';

const Icon = (props) => {
    return (<div className="icon-container">
        {props.children}
    </div>)
}

const Footer = () => {
    return (<div className="footer-container">
        <div className="footer-option">
            <Icon>
                <i className="fa fa-envelope"></i>
            </Icon>
            <span>rishi9632@gmail.com</span>
        </div>
        <div className="footer-option">
            <Icon>
                <i className="fa fa-linkedin"></i>
            </Icon>
            <span>https://www.linkedin.com/in/rishi-suresh/</span>
        </div>
        <div className="footer-option">
            <Icon>
                <i className="fa fa-github"></i>
            </Icon>
            <span>https://github.com/rishisuresh7</span>
        </div>
        <div className="footer-option">
            <Icon>
                <i className="fa fa-instagram"></i>
            </Icon>
            <span>https://www.instagram.com/rishisuresh7</span>
        </div>
    </div>)
}

export default Footer;