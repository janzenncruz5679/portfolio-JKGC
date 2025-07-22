"use client";

import React, { useEffect, useRef, ReactNode } from "react"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from 'react-icons/hi'
import { motion } from "framer-motion"
import AOS from "aos"
import { useAOS } from "../hooks/UseAOS"

// import 'devicon/devicon.min.css'
import {
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiBootstrap,
    SiSass,
    SiJavascript,
    SiNodedotjs,
    SiTypescript,
    SiJquery,
    SiReact,
    SiNextdotjs,
    SiUnity,
    SiPhp,
    SiLaravel,
    SiMysql,
    SiGit,
    SiGithub,
    SiBitbucket,
    SiJira,
    SiAndroidstudio,
} from 'react-icons/si'
import {
    BiLogoJava,
    BiLogoAndroid,
    BiLogoPython,
    BiLogoFlutter,
    BiLogoGoLang,
} from 'react-icons/bi'


const skills = [
    { skill: SiHtml5, description: 'HTML5' },
    { skill: SiCss3, description: 'CSS' },
    { skill: SiTailwindcss, description: 'Tailwind CSS' },
    { skill: SiBootstrap, description: 'Bootstrap' },
    { skill: SiSass, description: 'SASS' },
    { skill: SiJavascript, description: 'javascript' },
    { skill: SiNodedotjs, description: 'Node.js' },
    { skill: SiTypescript, description: 'Typescript' },
    { skill: SiJquery, description: 'jQuery' },
    { skill: SiReact, description: 'React' },
    { skill: SiNextdotjs, description: 'Next.js' },
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
    useAOS();
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
                        <div className='grid md:grid-cols-2 gap-8'>
                            <div data-aos="flip-up"
                                className="glass p-4 rounded-lg shadow-lg cursor-default hover:-translate-y-0.5 transition-transform"
                            >
                                <h1 className="text-2xl font-semibold mb-2">Frontend Web Development</h1>
                                <p>Skilled at leveraging modern frontend technologies like HTML, CSS, JavaScript, and TypeScript to create dynamic, responsive websites. Also has experience with style tools like Tailwind CSS, Bootstrap, Sass, and jQuery, as well as frameworks and libraries like React, Vue.js, and Next.js. Also acquainted with WordPress content management and Axios API processing.</p>
                            </div>
                            <div data-aos="flip-up"
                                className="glass p-4 rounded-lg shadow-lg cursor-default hover:-translate-y-0.5 transition-transform"
                            >
                                <h1 className="text-2xl font-semibold mb-2">Backend Web Development</h1>
                                <p>
                                    Proficient in backend development using Node.js, C#, Python, Golang, and PHP (with Laravel). knowledgeable about creating scalable server-side applications, automating system operations with PowerShell scripts, and designing and deploying RESTful APIs. Working on real projects with experts taught me industry norms, workflows, and development processes. These experiences improved my problem-solving, teamwork, and adaptability, readying me for my career.</p>
                            </div>
                            <div data-aos="flip-up"
                                className="glass p-4 rounded-lg shadow-lg cursor-default hover:-translate-y-0.5 transition-transform"
                            >
                                <h1 className="text-2xl font-semibold mb-2">Database Management</h1>
                                <p>
                                    Experienced in relational database management using MySQL, MSSQL, PostgreSQL, and MariaDB. Skilled in writing complex SQL queries, optimizing database performance, and designing normalized schemas for scalable applications.</p>
                            </div>
                            <div data-aos="flip-up"
                                className="glass p-4 rounded-lg shadow-lg cursor-default hover:-translate-y-0.5 transition-transform"
                            >
                                <h1 className="text-2xl font-semibold mb-2">Data Analysis</h1>
                                <p>
                                    Experienced in data analysis and reporting using Crystal Reports, Microsoft Excel, and Power BI. Proficient in querying and transforming data with MSSQL, MySQL, and DAX, with a strong focus on creating insightful dashboards and actionable business intelligence.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <h1 className='text-center text-2xl font-bold mb-6 md:text-left'> Technologies I have been working with: </h1>
                        <div className='flex flex-wrap gap-8 flex-row justify-center cursor-default'>
                            {skills.map((item, idx) => {
                                return (
                                    <div data-aos="flip-up"
                                        key={idx}
                                        className='font-semibold h-12 w-12 md:h-14 md:w-14 hover:-translate-y-0.5 transition-transform'
                                    >
                                        <item.skill
                                            key={idx}
                                            className="h-full w-full cursor-pointer"
                                            title={item.description} />

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