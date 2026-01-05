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
                                <p>Proficient in frontend web development technologies and frameworks, including HTML, CSS, JavaScript and TypeScript, with experience in modern libraries and frameworks such as React, Vue.js, and Next.js. Skilled in responsive and utility-first design using Tailwind CSS, Bootstrap 5, and Sass, as well as dynamic DOM manipulation with jQuery. Familiar with WordPress for content management and website development.</p>

                            </div>
                            <div data-aos="flip-up"
                                className="glass p-4 rounded-lg shadow-lg cursor-default hover:-translate-y-0.5 transition-transform"
                            >
                                <h1 className="text-2xl font-semibold mb-2">Backend Web Development</h1>
                                <p>
                                    Proficient in backend development using PHP (Laravel), Go, and Node.js, with experience designing and consuming RESTful APIs. Skilled in PowerShell and Linux shell scripting to automate workflows, streamline server operations, and optimize system performance, resulting in high-performance backend systems and faster integration between services.</p>
                            </div>
                            <div data-aos="flip-up"
                                className="glass p-4 rounded-lg shadow-lg cursor-default hover:-translate-y-0.5 transition-transform"
                            >
                                <h1 className="text-2xl font-semibold mb-2">Data Analytics & Databases</h1>
                                <p>
                                    Skilled in data analysis and business intelligence using Crystal Reports, Microsoft Excel, Power BI, and DAX queries, with experience extracting actionable insights and generating reports. Designed, queried, and optimized relational databases (MySQL, MSSQL, PostgreSQL, MariaDB) and implemented non-relational solutions (MongoDB) to support flexible data storage and improve decision-making efficiency.</p>
                            </div>
                            <div data-aos="flip-up"
                                className="glass p-4 rounded-lg shadow-lg cursor-default hover:-translate-y-0.5 transition-transform"
                            >
                                <h1 className="text-2xl font-semibold mb-2">Tools & Technologies</h1>
                                <p>
                                    Experienced in leveraging Git, GitHub, and Bitbucket for version control, Postman and Axios for API testing, and Figma, Adobe XD, and Canva for UI/UX design. Managed project workflows with Jira and Kanban, utilized Zoho and Microsoft 365 for productivity, and configured local and cloud environments using Laragon, XAMPP, Apache, Vercel, AWS (EC2 – Windows and Ubuntu), Node-RED, and Hostinger. Explored AI tools such as Claude and OpenAI to optimize processes, enabling faster development cycles and reliable project delivery.</p>
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