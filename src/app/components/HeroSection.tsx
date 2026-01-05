"use client";

import React, { useEffect, useRef, ReactNode } from "react"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from 'react-icons/hi'
import { TypeAnimation } from 'react-type-animation';
import { useAOS } from "../hooks/UseAOS"

const HeroSection = () => {
  useAOS();
  return (
    <section id='home'>
      <div data-aos="fade-up" className='flex flex-col text-center gap-4 lg:gap-8 items-center justify-center my-16 lg:my-14 xl:my-24 py-24 md:py-28 xl:py-36 md:flex-row md:text-left'>
        <div className='md:w-1/2 md:mt-2 grid justify-center'>
          <div className="relative w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-128 xl:h-128">
            {/* <Image
              src={'/zen.png'}
              alt='profile'
              layout="fill"
              objectFit="cover"
              className='rounded-full shadow-2xl'
            /> */}
            <img src="/zen.png" alt="profile" className='rounded-full shadow-2xl' />
          </div>
        </div>
        <div className='md:w-3/5 md:mt-2 '>
          <TypeAnimation
            sequence={[
              'Hi,',
              1000,
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
            className='font-bold text-4xl lg:text-5xl mt-6 md:mt-0'
            repeat={Infinity}
          />
          <p className='text-lg mt-4 mb-6 md:text-xl lg:text-2xl'>
            I am {" "}
            <span className='font-semibold text-teal-600 dark:text-teal-400'>
              Computer Science Graduate{" "}
            </span>
            at Bulacan State University. I began as a self-taught developer and progressed to become the lead developer for my studies projects. To fuel my interest for this industry, I develop web and software applications and seek out diverse digital experiences.
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <Link
              to="projects"
              className={
                "text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer hover:-translate-y-1 transition-transform"
              }
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            ><p>My Projects</p></Link>
            <a
              className={
                "text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer hover:-translate-y-1 transition-transform"
              }
              href={'/static/documents/Cruz_Janzenn_Kyle_G_Resume.pdf'}
              target='_blank'
            // download="Cruz_Janzenn_Kyle_G_Resume.pdf"
            >
              <p className="hidden md:block">My Resume</p>
              <p className="block md:hidden">Resume</p>
            </a>
          </div>

        </div>
      </div>

      {/* <div className='hidden md:flex flex-row justify-center'>
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        ><HiArrowDown size={35} className='animate-bounce' /></Link>
      </div> */}
    </section>
  )
}

export default HeroSection