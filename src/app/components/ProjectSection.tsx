"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'
import SlideUp from './SlideUp'


interface Project {
    name: string;
    description: string;
    image: string;
    github: string;
    link: string;
    isHidden: boolean;
    svg: string[];
}

const initialProjects: Project[] = [
    {
        name: "San Miguel District Hospital EMR",
        description: "ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.",
        image: "/thankfulthoughts.png",
        github: "https://github.com/ohmypotato/SMDH-EMR",
        link: "https://github.com/ohmypotato/SMDH-EMR",
        isHidden: true,
        svg: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        ],
    },
    {
        name: "San Miguel District Hospital EMR",
        description: "ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.",
        image: "/thankfulthoughts.png",
        github: "https://github.com/ohmypotato/SMDH-EMR",
        link: "https://github.com/ohmypotato/SMDH-EMR",
        isHidden: true,
        svg: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
        ],
    },
    {
        name: "San Miguel District Hospital EMR",
        description: "ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.",
        image: "/thankfulthoughts.png",
        github: "https://github.com/ohmypotato/SMDH-EMR",
        link: "https://github.com/ohmypotato/SMDH-EMR",
        isHidden: true,
        svg: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
        ],
    },
    {
        name: "San Miguel District Hospital EMR",
        description: "ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.",
        image: "/thankfulthoughts.png",
        github: "https://github.com/ohmypotato/SMDH-EMR",
        link: "https://github.com/ohmypotato/SMDH-EMR",
        isHidden: true,
        svg: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
        ],
    },
    {
        name: "San Miguel District Hospital EMR",
        description: "ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.",
        image: "/thankfulthoughts.png",
        github: "https://github.com/ohmypotato/SMDH-EMR",
        link: "https://github.com/ohmypotato/SMDH-EMR",
        isHidden: true,
        svg: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
        ],
    },
    {
        name: "San Miguel District Hospital EMR",
        description: "ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.",
        image: "/thankfulthoughts.png",
        github: "https://github.com/ohmypotato/SMDH-EMR",
        link: "https://github.com/ohmypotato/SMDH-EMR",
        isHidden: true,
        svg: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
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
            <h1 className='text-center font-bold text-4xl'>
                Projects
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <div className='flex flex-col space-y-28'>
                {/* use map function to call const projects which is a dictionary */}
                <div>
                    {/* Map over projects */}
                    {projects.map((project, idx) => (
                        <div key={idx}>
                            {/* adding slideup animation */}
                            <SlideUp offset="-300px 0px -300px 0px">
                                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                                    <div className="mt-8 md:w-1/2">
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
                                        {project.isHidden === false && (
                                            <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center transform transition-all backdrop-blur-sm">
                                                <div
                                                    className="absolute h-2/4 w-2/3 grid md:grid-cols-2  gap-4 transform overflow-hidden p-12 bg-neutral-100 dark:bg-neutral-900 rounded-2xl"
                                                >
                                                    <div className="relative min-w-full min-h-full">
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
                                                            className="absolute top-4 right-4 hover:-translate-y-1 transition-transform cursor-pointer"
                                                            size={40} />
                                                        <div>
                                                            <p>{project.description}</p>
                                                        </div>
                                                        <div className='flex gap-4'>
                                                            {project.svg.map((svgLink, svgIdx) => (
                                                                <Image
                                                                    key={svgIdx} // Key for each Image component
                                                                    src={svgLink}
                                                                    alt={`SVG ${svgIdx}`}
                                                                    height={40}
                                                                    width={40}
                                                                    className='hover:-translate-y-1 transition-transform'
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="mt-12 md:w-1/2">
                                        <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                                        <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">{project.description}</p>
                                        <div className="flex flex-row align-bottom space-x-4">
                                            <a href={project.github} target="_blank" className="hover:-translate-y-1 transition-transform cursor-pointer">
                                                <BsGithub size={30} />
                                            </a>
                                            <Link href={project.link} target="_blank">
                                                <BsArrowUpRightSquare size={30} className="hover:-translate-y-1 transition-transform cursor-pointer" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectSection