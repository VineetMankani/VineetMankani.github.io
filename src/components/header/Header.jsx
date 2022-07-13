import React from 'react';

import CTA from './CTA'
import Socials from './Socials'
import './header.css';

const Header = () => {
    return (
        <header className="container d-flex flex-column justify-content-between">
            <div className="header-top mt-4">
                <h5 className="p-0 m-0">Hey! I am</h5>
                <h1 className="py-2 m-0">Vineet Mankani</h1>
                <h5 className="p-0 m-0">Third Year Student</h5>
                <h6 className="pt-2 m-0">{'Aspiring < Fullstack Web Developer />'}</h6>
            </div>
            <div className="header-bottom">
                <CTA />
                <Socials />
            </div>
        </header>
    )
}

export default Header;