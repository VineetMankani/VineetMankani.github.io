import React from 'react';

import './skills.css'
import html from '../../assets/html-logo.png';
import css from '../../assets/css-logo.png';
import bs from '../../assets/bs-logo.png';
import js from '../../assets/js-logo.svg';
import reactjs from '../../assets/reactjs-logo.png';
import nodejs from '../../assets/nodejs-logo.png';
import expressjs from '../../assets/expressjs-logo.png';
import mongodb from '../../assets/mongodb-logo.png';
import mysql from '../../assets/mysql-logo.png';
import django from '../../assets/django-logo.png';
import python from '../../assets/python-logo.png';
import cpp from '../../assets/cpp-logo.png';
import blender from '../../assets/blender-logo.png';
import autocad from '../../assets/autocad-logo.png';
import inshot from '../../assets/inshot-logo.png';

function Skill1(props){
    return(
        <article className="skills-details text-start col-3 my-3 me-sm-4 me-5 d-flex">
            <img src={props.logo} className="icon mt-1 me-2" alt={props.skill} />     
            <div><h4 className="p-0 m-0">{props.skill}</h4><small>{props.level}</small></div>
        </article>
    )
}

function Skill2(props){
    return(
        <article className="skills-details text-start col-5 col-md-4 col-lg-2  d-flex my-3 my-lg-0 ">
            <img src={props.logo} className="icon mt-1 me-2" alt={props.skill} />
            <div><h4 className="p-0 m-0">{props.skill}</h4><small>{props.level}</small></div>
        </article>
    )
}

const Skills = () => {
    return (
        <section id="skills" className="container">
            <div className="title mb-0">
                <h2>Skills</h2>
                <h5>What I've Got</h5>
            </div>
            
            <div className="all-skills-cont row justify-content-around pt-1">

        {/* FRONTEND */}

                <div className="skillbox col-xl-5 col-10 p-4 pb-0">
                    <h3 className="mb-4 mt-2">Frontend Development</h3>
                    <div className="skills row justify-content-evenly pb-4">
                        <Skill1 skill="HTML" level="Experienced" logo={html} />
                        <Skill1 skill="CSS" level="Experienced" logo={css} />
                        <Skill1 skill="BootStrap" level="Experienced" logo={bs} />
                        <Skill1 skill="JavaScript" level="Experienced" logo={js} />
                        <Skill1 skill="React.js" level="Intermediate" logo={reactjs} />
                    </div>
                </div>

        {/* BACKEND */}

                <div className="skillbox col-xl-5 col-10 p-4 pb-0 mt-xl-0 mt-5">
                    <h3 className="mb-4 mt-2">Backend Development</h3>
                    <div className="skills row justify-content-evenly pb-4">
                        <Skill1 skill="Node.js" level="Experienced" logo={nodejs} />
                        <Skill1 skill="Express.js" level="Experienced" logo={expressjs} />
                        <Skill1 skill="MongoDB" level="Intermediate" logo={mongodb} />
                        <Skill1 skill="MySQL" level="Intermediate" logo={mysql} />
                        <Skill1 skill="Django" level="Basic" logo={django} />
                    </div>
                </div>

        {/* OTHER SKILLS */}
        { window.width < 1200 ?
                <div className="skillbox col-xl-9 col-10 p-4 pb-0 mt-5">
                    <h3 className="mb-4 mt-1">Other Skills</h3>
                    <div className="skills row justify-content-evenly mt-3 mb-4 px-4 ps-lg-0">
                        <Skill1 skill="C/C++" level="Experienced" logo={cpp} />
                        <Skill1 skill="Python" level="Intermediate" logo={python} />
                        <Skill1 skill="Blender" level="Basic" logo={blender} />
                        <Skill1 skill="Inshot" level="Experienced" logo={inshot} />
                        <Skill1 skill="AutoCAD" level="Intermediate" logo={autocad} />
                    </div>
                </div>
            : 
            <div className="skillbox col-xl-9 col-10 p-4 pb-0 mt-5">
                    <h3 className="mb-4 mt-1">Other Skills</h3>
                    <div className="skills row justify-content-evenly mt-3 mb-4 px-4 ps-lg-0">
                        <Skill2 skill="C/C++" level="Experienced" logo={cpp} />
                        <Skill2 skill="Python" level="Intermediate" logo={python} />
                        <Skill2 skill="Blender" level="Basic" logo={blender} />
                        <Skill2 skill="Inshot" level="Experienced" logo={inshot} />
                        <Skill2 skill="AutoCAD" level="Intermediate" logo={autocad} />
                    </div>
                </div>
        }
            </div>
            
        </section>
    )
}

export default Skills;