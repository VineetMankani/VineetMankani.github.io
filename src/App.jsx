import React from 'react';

import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

const App = () => {
    return (
        <>
            <Navbar />
            <Header />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </>        
    )
}

export default App;