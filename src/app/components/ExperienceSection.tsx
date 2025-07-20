"use client";

import React, { useEffect, useRef, ReactNode } from "react"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from 'react-icons/hi'
import { motion } from "framer-motion"
import AOS from "aos"
// import "aos/dist/aos.css"

type TimelineItem = {
    title: string;
    company: string;
    date: string;
    description: string;
    latest?: boolean;
};

const timelineData: TimelineItem[] = [
    {
        title: "Full Stack Developer",
        company: "Freelance",
        date: "Jan 2023 – Present",
        description:
            "Built and deployed client systems from scratch using Laravel, Tailwind CSS, and MySQL.",
        latest: true,
    },
    {
        title: "IT Intern",
        company: "Tech Co.",
        date: "Jun 2022 – Dec 2022",
        description:
            "Assisted in maintaining internal systems and deploying minor features.",
    },
];

const AboutSection = () => {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                duration: 1000,
            });
        });
    }, [])
    return (
        <section id='experience'>
            <div className='my-12 pb-12 md:pb-48'>
                <h1 className='text-center font-bold text-4xl'>
                    Work Experience
                    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>
                <div className='grid gap-12 space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0'>
                    <div className='w-full'>
                        <div className='grid gap-8'>
                            <div data-aos="fade-right"
                                className="glass p-4 rounded-lg shadow-lg cursor-default hover:-translate-y-0.5 transition-transform"
                            >
                                <h1 className="text-2xl font-semibold mb-2">Web Development</h1>
                                <p>I started my journey in web development during my time as a Senior High School student. Despite the challenges that come with it, I am committed to this path because of the immense satisfaction I derive from creating and improving websites. The process of coding and designing fascinates me, and I am excited to continually learn and refine my skills.</p>
                            </div>
                            <div data-aos="fade-right"
                                className="glass p-4 rounded-lg shadow-lg cursor-default hover:-translate-y-0.5 transition-transform"
                            >
                                <h1 className="text-2xl font-semibold mb-2">Software Development</h1>
                                <p>
                                    During college, I learned software development and grew my skills. A key moment was my third-year internship, which boosted my progress. Working on real projects with experts taught me industry norms, workflows, and development processes. These experiences improved my problem-solving, teamwork, and adaptability, readying me for my career.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection