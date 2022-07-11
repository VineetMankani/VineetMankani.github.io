import React from 'react';

import './projects.css'

import facetrack from '../../assets/facetrack-screen.png';
import amusify from '../../assets/amusify-screen-2.jpg';
import engvind from '../../assets/engvind-screen.png';
import vbot from '../../assets/vbot-screen.png';
import treksforyou from '../../assets/treksforyou-screen.png';
import fyspit from '../../assets/fyspit-screen.jpg';

const projectsLink = 'https://bit.ly/VineetMankaniProjects';

function ProjectCard(props){
    return(
        <div className="card p-card mx-xl-3 mb-5 p-0">
            <img src={props.img} className="card-img-top p-2 pb-0" alt={props.name}/>
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text px-2">{props.desc}</p>
                </div>
                <div className="d-flex mt-3">
                    { props.name === "First Year at S.P.I.T. - Video" ?
                        <a href={props.demoLink} className="btn demo-link me-2" target="_blank" rel="noreferrer">Live Demo</a>
                    : props.name === "FaceTrack" ?
                        <a href={props.codeLink} className="btn code-link me-2" target="_blank" rel="noreferrer">GitHub</a>
                    :
                      <><a href={props.codeLink} className="btn code-link me-2" target="_blank" rel="noreferrer">GitHub</a>
                        <a href={props.demoLink} className="btn demo-link me-2" target="_blank" rel="noreferrer">Live Demo</a></>
                    }
                </div>
            </div>
            <div className="card-footer text-muted">{props.date}</div>
        </div>
    )
}

const Projects = () => {
    return (

        <section id="projects" className="container">
            <div className="title">
                <h2>Projects</h2>
                <h5>My Collection</h5>
            </div>

            <div className="projects row justify-content-evenly mt-4">
                                
                <ProjectCard name="FaceTrack"
                    img={facetrack}
                    desc="A web application that records attendance of students through a facial recognition mechanism and displays it in real time, along with filtering and sorting of data as per requirement."
                    codeLink="https://github.com/VineetMankani/FaceTrack"
                    demoLink="/"
                    date="May 2022"/>
                
                <ProjectCard name="Amusify"
                    img={amusify}
                    desc="An interactive game platform that involves guessing a movie or web series based on the instrumental, melody, or theme song played. Built using vanilla JavaScript"
                    codeLink="https://github.com/VineetMankani/Amusify"
                    demoLink="https://vineetmankani.github.io/Amusify/"
                    date="Feb 2022"/>

                <ProjectCard name="IND Tour of ENG '21"
                    img={engvind}
                    desc="A cricket website which summaries the India Tour of England 2021. It covers each of the five test matches in detail."
                    codeLink="https://github.com/VineetMankani/ENGvIND2021"
                    demoLink="https://vineetmankani.github.io/ENGvIND2021/"
                    date="Sep 2021"/>

                <ProjectCard name="V-Bot (Discord Bot)"
                    img={vbot}
                    desc="A Discord Bot (V Bot) made using Node.js and API which reacts to 4 different commands entered by the user."
                    codeLink="https://github.com/VineetMankani/DiscordBot"
                    demoLink="https://discord.com/api/oauth2/authorize?client_id=926386503305822248&permissions=137439472704&scope=bot"
                    date="Jan 2022"/>

                <ProjectCard name="TreksForYou"
                    img={treksforyou}
                    desc="The Trek Blog covers some of the most famous treks in Maharashtra. This project was created in the initial stages as a part of a web development competition."
                    codeLink="https://github.com/VineetMankani/TreksForYou"
                    demoLink="https://vineetmankani.github.io/TreksForYou/Home/"
                    date="Apr 2021"/>

                <ProjectCard name="First Year at S.P.I.T. - Video"
                    img={fyspit}
                    desc="A short video summarising my first year at college, which happened to be in online mode due to the pandemic."
                    codeLink="/"
                    demoLink="https://youtu.be/jcCfyIvGGHI"
                    date="Dec 2021"/>

            </div>

            <a href={projectsLink} className="btn otherProjs mt-0" target="_blank" rel="noreferrer">View All Projects</a>
        </section>
    )
}

export default Projects;