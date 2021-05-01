import React from 'react';

import './footer.styles.scss';

const Icon = (props) => {
    return (<div className="icon-container">
        {props.children}
    </div>)
}

const Footer = () => {
    return (<div className="footer-container">
        <ul className='footer-content'>
            <li className="footer-option">
                <Icon>
                    <i className="fa fa-envelope"></i>
                </Icon>
                <span>rishi9632@gmail.com</span>
            </li>
            <li className="footer-option">
                <Icon>
                    <i className="fa fa-linkedin"></i>
                </Icon>
                <span>https://www.linkedin.com/in/rishi-suresh</span>
            </li>
            <li className="footer-option">
                <Icon>
                    <i className='fa fa-mobile'></i>
                </Icon>
                <span>+91-8792615476</span>
            </li>
            <li className="footer-option">
                <Icon>
                    <i className="fa fa-github"></i>
                </Icon>
                <span>https://github.com/rishisuresh7</span>
            </li>
            <li className="footer-option">

            </li>
            <li className="footer-option">
                <Icon>
                    <i className="fa fa-instagram"></i>
                </Icon>
                <span>https://www.instagram.com/rishisuresh7</span>
            </li>
        </ul>
    </div>)
}

export default Footer;