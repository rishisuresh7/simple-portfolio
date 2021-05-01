import React from 'react';

import './footer.styles.scss';

const Icon = (props) => {
    return (<div className="icon-container">
        {props.children}
    </div>)
}

const items = [
    {
        protocol: 'mailto:',
        className: 'fa fa-envelope',
        address: 'rishi9632@gmail.com'
    },
    {
        className: 'fa fa-linkedin',
        address: 'https://www.linkedin.com/in/rishi-suresh'
    },
    {
        protocol: 'tel:',
        className: 'fa fa-mobile',
        address: '+91-8792615476'
    },
    {
        className: 'fa fa-github',
        address: 'https://github.com/rishisuresh7'
    },
    {},
    {
        className: 'fa fa-instagram',
        address: 'https://www.instagram.com/rishisuresh7'
    },
];

const Footer = () => {
    return (<div className="footer-container">
        <ul className='footer-content'>
            {
                items.map(({protocol, className, address}, i) => 
                    (<li key={i} className="footer-option">
                        {
                            className ? (<a target='_blank' rel='noreferrer' href={protocol?`${protocol}${address}`:address}>
                                            <Icon>
                                                <i className={className}></i>
                                            </Icon>
                                            <span>{address}</span>
                                        </a>) : null
                        }
                    </li>))
            }
        </ul>
    </div>)
}

export default Footer;