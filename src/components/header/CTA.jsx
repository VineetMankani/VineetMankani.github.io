import React from 'react';

// import CV from '../../assets/Vineet Mankani Resume.pdf'
const CV = 'https://bit.ly/VineetMankaniResume'

const CTA = () => {
    return (
        <div className="cta text-center my-4">
            <a href={CV} className='resume btn mx-3' target='_blank' rel="noreferrer">Resume</a>
            <a href="#contact" className='contact btn mx-3'>Let's Talk</a>
        </div>
    )
}

export default CTA;