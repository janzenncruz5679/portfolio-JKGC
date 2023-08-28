"use client";

import React from 'react'
import Image from 'next/image'
import { Link } from "react-scroll/modules"
import { HiArrowDown } from 'react-icons/hi'
import { motion } from "framer-motion"
// import 'devicon/devicon.min.css'
import {    SiHtml5, 
            SiCss3, 
            SiTailwindcss, 
            SiBootstrap, 
            SiSass, 
            SiJavascript,
            SiTypescript, 
            SiJquery, 
            SiReact, 
            SiNextdotjs, 
            SiCsharp, 
            SiUnity, 
            SiPhp, 
            SiLaravel, 
            SiMysql, 
            SiGit, 
            SiGithub, 
            SiBitbucket,
            SiJira,
            SiAndroidstudio, } from 'react-icons/si'
import {    BiLogoJava,
            BiLogoAndroid,
            BiLogoPython,
            BiLogoFlutter,
            BiLogoGoLang, } from 'react-icons/bi'


const skills = [
    { skill: SiHtml5, description: 'HTML5' },
    { skill: SiCss3, description: 'CSS' },
    { skill: SiTailwindcss, description: 'Tailwind CSS' },
    { skill: SiBootstrap, description: 'Bootstrap' },
    { skill: SiSass, description: 'SASS' },
    { skill: SiJavascript, description: 'javascript' },
    { skill: SiTypescript, description: 'Typescript' },
    { skill: SiJquery, description: 'jQuery'},
    { skill: SiReact, description: 'React' },
    { skill: SiNextdotjs, description: 'Next.js' },
    { skill: SiCsharp, description: 'C#' },
    { skill: SiUnity, description: 'Unity' },
    { skill: SiPhp, description: 'PHP' },
    { skill: SiLaravel, description: 'Laravel' },
    { skill: SiMysql, description: 'MySQL' },
    { skill: SiGit, description: 'Git' },
    { skill: SiGithub, description: 'Github' },
    { skill: SiBitbucket, description: 'Bitbucket' },
    { skill: SiJira, description: 'Jira' },
    { skill: BiLogoJava, description: 'Java' },
    { skill: BiLogoAndroid, description: 'Android' },
    { skill: SiAndroidstudio, description: 'Android Studio' },
    { skill: BiLogoPython, description: 'Python' },
    { skill: BiLogoFlutter, description: 'Flutter' },
    { skill: BiLogoGoLang, description: 'GoLang' },
]

const AboutSection = () => {
    return (
        <section id='about'>
            <div className='my-12 pb-12 md:pb-48'>
                <h1 className='text-center font-bold text-4xl'>
                    About Me
                    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>
                <div className='grid gap-12 space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0'>
                    <div className='w-full'>
                        <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>My Scope of Work</h1>
                        <div className='grid gap-8'>
                            <motion.div
                                className="glass p-4 rounded-lg shadow-lg cursor-default"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 50, damping: 10 }}
                            >
                                <h1 className="text-2xl font-semibold mb-4">Web Development</h1>
                                <p>I started my journey in web development during my time as a Senior High School student. Despite the challenges that come with it, I am committed to this path because of the immense satisfaction I derive from creating and improving websites. The process of coding and designing fascinates me, and I'm excited to continually learn and refine my skills.</p>
                            </motion.div>
                            <motion.div
                                className="glass p-4 rounded-lg shadow-lg cursor-default"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 50, damping: 10 }}
                            >
                                <h1 className="text-2xl font-semibold mb-4">Software Development</h1>
                                <p>Starting in college, I explored software development, expanding my skills. A pivotal point was my third-year internship, propelling me to new levels. Real-world projects with pros taught me industry standards, workflows, and development lifecycles intricacies.</p>
                            </motion.div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <h1 className='text-center text-2xl font-bold mb-6 md:text-left'> Technologies I've been working with: </h1>
                        <div className='flex flex-wrap gap-8 flex-row justify-center md:justify-start cursor-default'>
                            {skills.map((item, idx) => {
                                return (
                                    <div
                                        key={idx}
                                        className='font-semibold h-12 w-12 md:h-14 md:w-14 hover:-translate-y-0.5 transition-transform'
                                    >
                                        <item.skill 
                                            key={idx} 
                                            className="h-full w-full cursor-pointer"
                                            title={item.description}/>
                                    </div>
                                    
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection