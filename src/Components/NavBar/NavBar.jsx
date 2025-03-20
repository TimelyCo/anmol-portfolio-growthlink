import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './NavBar.css'
import logo from '../../assets/logo.jpg'
import underline from '../../assets/nav_underline.svg'
const NavBar = () => {

    const [menu, setMenu] = useState('home');

    return (
        <div className='navbar'>
            <img className='changeLogo' src={logo} alt="" />
            <ul className="nav-menu">
                <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("Home")}>Home</p></AnchorLink>{menu == "home" ? <img src={underline} /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("About Me")}>About Me</p></AnchorLink>{menu == "About Me" ? <img src={underline} /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu("Services")}>Projects</p></AnchorLink>{menu == "Service" ? <img src={underline} /> : <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="https://anmolraturi-resume.tiiny.site"><p onClick={() => setMenu("Resume")}>Resume</p></AnchorLink>
                    {menu === "Resume" ? <img src={underline} alt="underline" /> : null}
                </li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("Contact")}>Contact</p></AnchorLink>{menu == "Contact" ? <img src={underline} /> : <></>}</li>
            </ul>
            <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>

        </div>
    )
}

export default NavBar

