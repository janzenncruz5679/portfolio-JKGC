"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'
import SlideUp from './SlideUp'
import {
    SiHtml5,
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
    SiAndroidstudio,
} from 'react-icons/si'
import {
    BiLogoJava,
    BiLogoAndroid,
    BiLogoPython,
    BiLogoFlutter,
    BiLogoGoLang,
} from 'react-icons/bi'


interface Project {
    name: string;
    description: string;
    image: string;
    github: string;
    link: string;
    isHidden: boolean;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>[];
}

const initialProjects: Project[] = [
    {
        name: "San Miguel District Hospital EMR",
        description: "San Miguel District Hospital EMR is our capstone project that can handle patient records, bills, and medical history. My role in this project is a fullstack developer. ",
        image: "/smdh-emr.jpg",
        github: "https://github.com/ohmypotato/SMDH-EMR",
        link: "https://github.com/ohmypotato/SMDH-EMR",
        isHidden: true,
        icon: [
            SiHtml5,
            SiCss3,
            SiJquery,
            SiBootstrap,
            SiTailwindcss,
            SiJavascript,
            SiPhp,
            SiLaravel,
            SiMysql,
        ],
    },
    {
        name: "Hospital Appointment System",
        description: "A hospital appointment system using Laravel CRUD. Admin side utilized Corona admin template with Bootstrap, and user side employed One-health template with HTML/CSS styling.",
        image: "/appointment-system.jpg",
        github: "https://github.com/ohmypotato/hospital-appointment-system",
        link: "https://github.com/ohmypotato/hospital-appointment-system",
        isHidden: true,
        icon: [
            SiHtml5,
            SiCss3,
            SiBootstrap,
            SiLaravel,
            SiMysql,
        ],
    },
];


const ProjectSection: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>(initialProjects);

    const toggleVisibility = (index: number) => {
        setProjects((prevProjects) =>
            prevProjects.map((project, idx) =>
                idx === index ? { ...project, isHidden: !project.isHidden } : project
            )
        );
    };
    return (
        <section id='projects'>
            <div className='h-24'>
                <h1 className='text-center font-bold text-4xl'>
                    My Projects
                    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>
            </div>
            <div className='flex flex-col space-y-12'>
                {/* use map function to call const projects which is a dictionary */}
                {/* Map over projects */}
                {projects.map((project, idx) => (
                    <div key={idx}>
                        {/* adding slideup animation */}
                        <SlideUp offset="-300px 0px -300px 0px">
                            <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                                <div className='glass sm:flex sm:flex-col lg:grid lg:grid-cols-2 p-6 gap-4 lg:gap-6 rounded-3xl lg:hover:-translate-y-3 lg:transition-transform'>
                                    <div className="h-full w-full">
                                        <button
                                            onClick={() => toggleVisibility(idx)} // Click handler for the button
                                            className="rounded-xl shadow-xl hover:opacity-70 cursor-pointer"
                                        >
                                            <Image
                                                src={project.image}
                                                alt=""
                                                width={1000}
                                                height={1000}
                                            />
                                        </button>
                                    </div>
                                    <div className="flex flex-col gap-2 md:gap-4 text-center md:text-start">
                                        <h1 className="text-2xl md:text-3xl font-bold">{project.name}</h1>
                                        <p className="text-lg md:text-xl leading-7 text-neutral-600 dark:text-neutral-400">{project.description}</p>
                                        <div className="flex flex-row space-x-4 justify-center md:justify-start">
                                            <a href={project.github} target="_blank" className="hover:-translate-y-1 transition-transform cursor-pointer">
                                                <BsGithub size={30} />
                                            </a>
                                            <Link href={project.link} target="_blank">
                                                <BsArrowUpRightSquare size={30} className="hover:-translate-y-1 transition-transform cursor-pointer" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {project.isHidden === false && (
                                <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center backdrop-blur-sm">
                                    <div
                                        className="absolute h-2/4 w-2/3 md:h-2/3 lg:h-3/4 grid gap-4 transform overflow-hidden p-6 md:p-12 lg:p-14 bg-neutral-100 dark:bg-neutral-900 rounded-2xl"
                                    >
                                        <div className='flex flex-col gap-2 md:gap-4 xl:grid-cols-2'>
                                            <div className="relative h-24 w-full md:h-3/5 lg:h-4/5 xl:h-[90%]">
                                                <Image
                                                    src={project.image}
                                                    alt=''
                                                    layout="fill"
                                                    objectFit="cover"
                                                    className=''
                                                />
                                            </div>
                                            <div>
                                                <AiFillCloseCircle
                                                    onClick={() => toggleVisibility(idx)}
                                                    className="absolute top-2 right-2 lg:hover:-translate-y-1 lg:transition-transform cursor-pointer h-4 w-4 md:h-8 md:w-8" />
                                                <div className='grid gap-2'>
                                                    <p className='text-[10px] md:text-base lg:text-xl'>{project.description}</p>
                                                    <div>
                                                    <h2 className='text-[10px] md:text-base lg:text-xl'>Stack used: </h2>
                                                    <div className='flex flex-wrap gap-2 md:gap-4'>
                                                        {project.icon.map((IconComponent, iconIndex) => (
                                                            <IconComponent key={iconIndex} className='h-4 w-4 md:h-8 md:w-8' />
                                                        ))}
                                                    </div>
                                                    </div>
                                                    <a
                                                        className={
                                                            "text-neutral-100 font-semibold text-center my-2 text-sm lg:text-xl bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer lg:hover:-translate-y-1 lg:transition-transform"
                                                        }
                                                        href={project.link}
                                                        target='_blank'
                                                    >View Project</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </SlideUp>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProjectSection