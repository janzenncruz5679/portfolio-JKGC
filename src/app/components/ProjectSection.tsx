"use client"
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'
import SlideUp from './SlideUp'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
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
    longDescription: string;
    image: string;
    imageModal: string[];
    github: string;
    link: string;
    isHidden: boolean;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>[];
}

const initialProjects: Project[] = [
    {
        name: "San Miguel District Hospital EMR",
        description: "San Miguel District Hospital EMR is our capstone project that can handle patient records, bills, and medical history. My role in this project is a fullstack developer. ",
        longDescription: "San Miguel District Hospital EMR is our capstone project that can handle patient records, bills, and medical history. For the frontend, we used HTML, CSS, and Javascript. For the backend, we used PHP and Laravel. For the database, we used MySQL. My role in this project is a fullstack developer. ",
        image: "/smdh-emr.jpg",
        imageModal: [
            "/smdh-emr.jpg",
            "/appointment-system.jpg",
            "/portfolio-ss.png",
        ],
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
        description: "A Laravel CRUD-based hospital appointment system. The admin side uses Corona admin template with Bootstrap while the user side, I use One-health template with HTML and CSS.",
        longDescription: "A Laravel CRUD-based hospital appointment system. The admin side uses Corona admin template with Bootstrap while the user side, I use One-health template with HTML and CSS. I changed the template to make the system flow according to the patient's and doctor's appointment needs. It also served as practice for building our EMR system, which is the theme of our thesis. It also helps me grasp the fundamentals of Laravel and recommended practices.",
        image: "/appointment-system.jpg",
        imageModal: [
            "/boy.png",
            "/portfolio-ss.png",
            "/portfolio-ss.png",
        ],
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
    // {
    //     name: "JKGC Portfolio",
    //     description: "A Laravel CRUD-based hospital appointment system. The admin side uses Corona admin template with Bootstrap while the user side, I use One-health template with HTML and CSS.",
    //     longDescription: "A Laravel CRUD-based hospital appointment system. The admin side uses Corona admin template with Bootstrap while the user side, I use One-health template with HTML and CSS. I changed the template to make the system flow according to the patient's and doctor's appointment needs. It also served as practice for building our EMR system, which is the theme of our thesis. It also helps me grasp the fundamentals of Laravel and recommended practices.",
    //     image: "/portfolio-ss.png",
    //     github: "https://github.com/ohmypotato/hospital-appointment-system",
    //     link: "https://github.com/ohmypotato/hospital-appointment-system",
    //     isHidden: true,
    //     icon: [
    //         SiHtml5,
    //         SiCss3,
    //         SiBootstrap,
    //         SiLaravel,
    //         SiMysql,
    //     ],
    // },
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

    const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);
    const currentProject = initialProjects[currentProjectIndex];
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const prevSlide = () => {
        const newSlide = (currentSlide - 1 + currentProject.imageModal.length) % currentProject.imageModal.length;
        setCurrentSlide(newSlide);
    };

    const nextSlide = () => {
        const newSlide = (currentSlide + 1) % currentProject.imageModal.length;
        setCurrentSlide(newSlide);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentSlide(slideIndex);
    };

    const resetSlide = () => {
        setCurrentSlide(0); // Reset to initial value
    };



    return (
        <section id='projects'>
            <div className='h-24'>
                <h1 className='text-center font-bold text-4xl'>
                    My Projects
                    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>
            </div>
            <div className='flex flex-col space-y-14'>
                {/* use map function to call const projects which is a dictionary */}
                {/* Map over projects */}
                {projects.map((project, idx) => (
                    <div key={idx}>
                        {/* adding slideup animation */}
                        <SlideUp offset="-300px 0px -300px 0px">
                            <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                                <div className='glass sm:flex sm:flex-col lg:grid lg:grid-cols-2 p-6 gap-4 lg:gap-6 rounded-3xl lg:hover:-translate-y-3 lg:transition-transform'>
                                    <div className="aspect-video">
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
                                            {/* <Link href={project.link} target="_blank">
                                                <BsArrowUpRightSquare size={30} className="hover:-translate-y-1 transition-transform cursor-pointer" />
                                            </Link> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {project.isHidden === false && (
                                <div className="fixed top-0 left-0 z-50 h-full w-full flex items-center justify-center backdrop-blur-sm">
                                    <div
                                        className="h-fit w-2/3  xl:w-2/4 flex flex-col gap-2 md:gap-4 transform overflow-hidden p-6 md:p-10 lg:p-12 bg-neutral-100 dark:bg-neutral-900 rounded-2xl"
                                    >
                                        {/* <div className='relative aspect-video md:aspect-[21/9]'>
                                            <Image
                                                src={project.imageModal[0]}
                                                alt=''
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div> */}
                                        <div className='relative aspect-video md:aspect-[21/9]'>
                                            <div className='w-full h-full flex justify-between rounded-2xl bg-center'>
                                                <Image
                                                    src={project.imageModal[currentSlide]}
                                                    alt=''
                                                    layout='fill'
                                                    objectFit='cover'
                                                />
                                                <div className='relative grid place-items-center m-1 md:m-2 w-6 md:w-8 lg:w-14'>
                                                    <BsChevronCompactLeft
                                                        onClick={prevSlide}
                                                        className='h-6 md:h-8 lg:h-14 p-1 w-full rounded-full bg-neutral-900 dark:bg-neutral-100 opacity-10 hover:opacity-75 text-neutral-100 dark:text-neutral-900 cursor-pointer'
                                                    />
                                                </div>
                                                <div className='relative grid place-items-center m-1 md:m-2 w-6 md:w-8 lg:w-14'>
                                                    <BsChevronCompactRight
                                                        onClick={nextSlide}
                                                        className='h-6 md:h-8 lg:h-14 p-1 w-full rounded-full bg-neutral-900 dark:bg-neutral-100 opacity-10 hover:opacity-75 text-neutral-100 dark:text-neutral-900 cursor-pointer'
                                                    />
                                                </div>
                                            </div>
                                            <div className='hidden md:flex justify-center'>
                                                {currentProject.imageModal.map((_, index) => (
                                                    <div
                                                        key={index}
                                                        onClick={() => goToSlide(index)}
                                                        className={`text-2xl cursor-pointer ${currentSlide === index ? 'text-teal-600 dark:text-teal-400' : 'text-neutral-500 dark:text-neutral-100'}`}
                                                    >
                                                        <RxDotFilled />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <AiFillCloseCircle
                                            onClick={() => {
                                                toggleVisibility(idx);
                                                resetSlide();
                                            }}
                                            className="absolute top-2 right-2 lg:hover:-translate-y-1 lg:transition-transform cursor-pointer h-4 w-4 md:h-8 md:w-8" />
                                        <div className='grid gap-2'>
                                            <p className='text-[10px] md:text-base lg:hidden'>{project.description}</p>
                                            <p className='hidden lg:block text-[10px] md:text-base lg:text-lg'>{project.longDescription}</p>
                                            <div className='grid gap-1 md:gap-2'>
                                                <h2 className='text-[10px] md:text-base lg:text-lg'>Stack used: </h2>
                                                <div className='flex flex-wrap gap-2 md:gap-4'>
                                                    {project.icon.map((IconComponent, iconIndex) => (
                                                        <IconComponent key={iconIndex} className='h-4 w-4 md:h-8 md:w-8' />
                                                    ))}
                                                </div>
                                            </div>
                                            <a
                                                className={
                                                    "text-neutral-100 font-semibold text-center p-2 text-sm lg:text-xl bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer lg:hover:-translate-y-1 lg:transition-transform"
                                                }
                                                href={project.link}
                                                target='_blank'
                                            >View Repository</a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </SlideUp>
                    </div>
                ))
                }
            </div >
        </section >
    )
}

export default ProjectSection