import React from 'react';
import './about.styles.scss';

const About = () => {
    const url = 'https://github-readme-stats.vercel.app/api?username=rishisuresh7&hide_title=true&count_private=true&show_icons=true&bg_color=00000000&hide_border=true&icon_color=518282&text_color=518282';
    return <div className="about-container">
        <div className="about-content">
            <div className="about-content-image"></div>
            <p>A Software engineer based in Bangalore, India. I enjoy creating things that live on the internet,
                    whether that be websites, applications, or anything in between. My goal is to always build
                    products that provide performant experiences. Shortly before graduating from
                    Visvesvaraya Technological University, I joined the R&D team at Cast Software where I work as a
                    REST API developer in Golang.</p>
        </div>
        <div className="about-stats">
            <img className='stats-card' alt='' src = {url} />
        </div>
    </div>
}

export default About;