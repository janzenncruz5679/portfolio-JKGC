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
            <div className='my-12 pb-12 md:pt-16 md:pb-48'>
                <h1 className='text-center font-bold text-4xl'>
                    About Me
                    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>
                <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10'>
                    <div className='md:w-1/2'>
                        <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>My Scope of Work</h1>
                        <div className='grid gap-8'>
                            <motion.div
                                className="glass p-4 rounded-lg shadow-lg cursor-default"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 50, damping: 10 }}
                            >
                                <h1 className="text-2xl font-semibold mb-4">Web Development</h1>
                                <p>This is a div with an enhanced glassmorphism design using Tailwind CSS.</p>
                            </motion.div>
                            <motion.div
                                className="glass p-4 rounded-lg shadow-lg cursor-default"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                            >
                                <h1 className="text-2xl font-semibold mb-4">Software Development</h1>
                                <p>This is a div with an enhanced glassmorphism design using Tailwind CSS.</p>
                            </motion.div>
                            <motion.div
                                className="glass p-4 rounded-lg shadow-lg cursor-default"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                            >
                                <h1 className="text-2xl font-semibold mb-4">Game Development</h1>
                                <p>This is a div with an enhanced glassmorphism design using Tailwind CSS.</p>
                            </motion.div>
                        </div>
                    </div>
                    <div className='md:w-1/2'>
                        <h1 className='text-center text-2xl font-bold mb-6 md:text-left'> Technologies I've been working with: </h1>
                        <div className='flex flex-wrap gap-2 flex-row justify-center md:justify-start cursor-default'>
                            {skills.map((item, idx) => {
                                return (
                                    <motion.div
                                        key={idx}
                                        className='px-2 py-2 rounded font-semibold h-12 w-12 md:h-16 md:w-16 '
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                    >
                                        <item.skill 
                                            key={idx} 
                                            className="h-full w-full cursor-pointer"
                                            title={item.description}/>
                                    </motion.div>
                                )
                            })}
                        </div>
                        {/* <Image
                            src="/boy.png"
                            className='hidden, md:block md:relative md:bottom-4 md:left-32 md:z-0'
                            alt=''
                            width={325}
                            height={100} /> */}
                    </div>
                </div>
                {/* <div className='flex flex-row justify-center'>
                    <Link
                        to="projects"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    ><HiArrowDown size={35} className='animate-bounce' /></Link>
                </div> */}
            </div>
        </section>
    )
}

export default AboutSection