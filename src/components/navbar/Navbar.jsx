import React from 'react';
import { useState, useRef } from 'react';

import V from '../../assets/icon.png'
import './navbar.css'

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('#');
    const navbar = useRef(null);
    const home = useRef(null);
    const toggle = useRef(null);
    const color = () => {
        navbar.current.classList.add('bg');
        navbar.current.classList.add('bg-gradient');
    }
    window.onscroll = () => {
        if (window.scrollY < 150) {
            navbar.current.classList.remove('bg');
            navbar.current.classList.remove('bg-gradient');
        }
        else {
            navbar.current.classList.add('bg');
            navbar.current.classList.add('bg-gradient');
        }
        if (window.scrollY <= 500){
            home.current.classList.add('active');
        }
    };

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark" ref={navbar}>
            <div className="container-fluid px-4">
                {/* <a className="navbar-brand" href="#top">Vineet Mankani</a> */}
                <a className="navbar-brand" href="#top">
                    <img src={V} alt="" className="img-fluid" width="36" height="36"/>
                </a>
                <button className="navbar-toggler" type="button" ref={toggle} onClick={()=>color()} data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a href="#top"      onClick={()=>setActiveNav('#top')} className={activeNav === '#top' ? 'active nav-link mx-1 home' : 'active nav-link mx-1 home'} ref={home}>Home</a>
                        <a href="#about"    onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active nav-link mx-1' : 'nav-link mx-1'}>About</a>
                        <a href="#skills"   onClick={()=>setActiveNav('#skills')} className={activeNav === '#skills' ? 'active nav-link mx-1' : 'nav-link mx-1'}>Skills</a>
                        <a href="#projects" onClick={()=>setActiveNav('#projects')} className={activeNav === '#projects' ? 'active nav-link mx-1' : 'nav-link mx-1'}>Projects</a>
                        <a href="#contact"  onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active nav-link mx-1' : 'nav-link mx-1'}>Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;