"use client";

import React from 'react'
import Image from 'next/image'
import { Link } from "react-scroll/modules"
import { HiArrowDown } from 'react-icons/hi'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section id='home'>
      <div className='flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-48'>
        <div className='md:w-1/2 md:mt-2'>
          <Image src={'/zen.png'} width={325} height={325} alt='profile' className='rounded-full shadow-2xl' />
        </div>
        <div className='md:w-3/5 md:mt-2 '>
          {/* <h1 className='font-bold text-4xl mt-6 md:text-7xl md:mt-0'>Hi, I am Janzenn!</h1> */}
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Hi,',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'Hi, I ',
              1000,
              'Hi, I am',
              1000,
              'Hi, I am Janzenn',
              1000,
              '',
              1000
            ]}
            wrapper="span"
            speed={25}
            className='font-bold text-4xl mt-6 md:text-6xl md:mt-0'
            repeat={Infinity}
          />
          <p className='text-lg mt-4 mb-6 md:text-2xl'>
            I am {" "}
            <span className='font-semibold text-teal-600'>
              Computer Science Graduate{" "}
            </span>
            based in Philippines. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et possimus neque consequuntur ipsa pariatur odit, harum expedita ullam ratione!
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <Link
              to="projects"
              className={
                "text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer"
              }
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >My Projects</Link>
            <a
              className={
                "text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer"
              }
              href={'/Janzenn_Cruz_CV.pdf'}
              target='_blank'
              download="Janzenn-Kyle-Cruz-CV.pdf"
            >Download CV</a>
          </div>

        </div>
      </div>
      <div className='flex flex-row justify-center'>
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        ><HiArrowDown size={35} className='animate-bounce' /></Link>
      </div>
    </section>
  )
}

export default HeroSection