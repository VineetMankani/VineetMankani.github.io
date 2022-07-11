import React from 'react';

import './about.css'
import ME from '../../assets/me.png'
import webdev from '../../assets/web-developer.png'
import videoedit from '../../assets/video-editor.png'
import sportsenthu from '../../assets/sports-enthusiast.webp'

const About = () => {
    return (
        <section id="about" className="container">
            <div className="title">
                <h2>About Me</h2>
                <h5>Get To Know Me</h5>
            </div>
            <div className="row justify-content-center pt-5">

                <div className="col-lg-5 mb-lg-0 mb-5">
                    <div className="me me-lg-5 pe-lg-5">
                        <img src={ME} alt="Vineet Mankani" />
                    </div>
                </div>

                <div className="col-lg-7">
                    <div className="">
                        <div className="boxes row justify-content-center">
                            <div className="col-3 mx-xl-3 mx-1 mb-3 w-auto">
                                <div className="card a-card justify-content-center text-center">
                                    <img src={webdev} className="card-img-top" alt="..."/>
                                    <div className="card-footer text-muted">Web Developer</div>
                                </div>
                            </div>
                            <div className="col-3 mx-xl-3 mx-1 mb-3 w-auto">
                                <div className="card a-card justify-content-center text-center">
                                    <img src={videoedit} className="card-img-top" alt="..."/>
                                    <div className="card-footer text-muted">Video Editor</div>
                                </div>
                            </div>
                            <div className="col-3 mx-xl-3 mx-1 mb-3 w-auto d-none d-sm-block">
                                <div className="card a-card justify-content-center text-center">
                                    <img src={sportsenthu} className="card-img-top" alt="..."/>
                                    <div className="card-footer text-muted">Sports Enthusiast</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="description d-block mt-xl-4 m-2">
                        Hey! I am a third year student at Sardar Patel Institute of Technology. I am aspiring to become a full-stack web developer. I am a good timekeeper, always willing to learn new skills. I do video editing as a part of my leisure time, and have served as a creative head in my college committees including IEEE S.P.I.T. & Industry Relations Cell S.P.I.T. I am able to work well in a team environment, and interact with professionals, as I represent the TPO S.P.I.T. as a Training and Placement Coordinator.
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default About;