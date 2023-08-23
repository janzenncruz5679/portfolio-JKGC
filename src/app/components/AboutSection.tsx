"use client";

import React from 'react'
import Image from 'next/image'
import { Link } from "react-scroll/modules"
import { HiArrowDown } from 'react-icons/hi'
import { motion } from "framer-motion"


const skills = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "Python" },
    { skill: "React" },
    { skill: "Next.js" },
    { skill: "Tailwind CSS" },
    { skill: "PHP" },
    { skill: "Laravel" },
    { skill: "Git" },
    { skill: "GitHub" },
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
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                            >
                                <h1 className="text-2xl font-semibold mb-4">Web Development</h1>
                                <p>This is a div with an enhanced glassmorphism design using Tailwind CSS.</p>
                            </motion.div>
                            <motion.div
                                className="glass p-4 rounded-lg shadow-lg cursor-default"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                            >
                                <h1 className="text-2xl font-semibold mb-4">Web Development</h1>
                                <p>This is a div with an enhanced glassmorphism design using Tailwind CSS.</p>
                            </motion.div>
                            <motion.div
                                className="glass p-4 rounded-lg shadow-lg cursor-default"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                            >
                                <h1 className="text-2xl font-semibold mb-4">Web Development</h1>
                                <p>This is a div with an enhanced glassmorphism design using Tailwind CSS.</p>
                            </motion.div>
                        </div>
                    </div>
                    <div className='md:w-1/2'>
                        <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>My Skills</h1>
                        <div className='flex flex-wrap gap-2 flex-row justify-center md:justify-start cursor-default'>
                            {skills.map((item, idx) => {
                                return (
                                    <motion.div
                                        key={idx}
                                        className='glass px-4 py-2 mr-2 mt-2 rounded font-semibold'
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                    >
                                        <p key={idx} className="">{item.skill}</p>
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