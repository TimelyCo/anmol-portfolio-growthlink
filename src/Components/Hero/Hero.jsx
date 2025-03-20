import React from 'react';
import './Hero.css'
import profile_img from '../../assets/4011825.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
    const openResume = () => {
        // URL to your resume PDF
        window.open('https://anmolraturi-resume.tiiny.site', '_blank');
    };

    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Anmol Raturi,</span>Web-developer based in India.</h1>
            <p>I am a FullStack Web Developer who is also a competitive programmer.</p>
            <div className="heroAction">
                <div className="heroConnect">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
                </div>
                <div className="heroResume">
                    <button onClick={openResume} className="resume-button">
                        My Resume
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero