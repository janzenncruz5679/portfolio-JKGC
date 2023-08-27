"use client";

import React from 'react'
import Image from 'next/image'
import { Link } from "react-scroll/modules"
import { HiArrowDown } from 'react-icons/hi'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section id='home'>
      <div className='flex flex-col text-center gap-4 md:gap-8 items-center justify-center mb-12 py-24 md:py-36 md:flex-row md:space-x-4 md:text-left'>
        <div className='md:w-1/2 md:mt-2'>
          <div className="relative w-48 h-48 md:w-96 md:h-96 xl:w-128 xl:h-128">
            <Image
              src={'/zen.png'}
              alt='profile'
              layout="fill"
              objectFit="cover"
              className='rounded-full shadow-2xl'
            />
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
            className='font-bold text-4xl mt-6 md:text-6xl md:mt-0'
            repeat={Infinity}
          />
          <p className='text-lg mt-4 mb-6 md:text-2xl'>
            I am {" "}
            <span className='font-semibold text-teal-600 dark:text-teal-400'>
              Computer Science Graduate{" "}
            </span>
            based in Guiguinto Bulacan. Aspiring to be a part of a dynamic organization giving a motivational working environment and looking for a responsible and challenging assignment that will foster my advancement and long-term relationship in an organization where my experience, education, and talent could make a significant contribution towards corporate objectives.
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
              href={'/Janzenn_Cruz_CV.pdf'}
              target='_blank'
              download="Janzenn-Kyle-Cruz-CV.pdf"
            >
              <p className="hidden md:block">Download CV</p>
              <p className="block md:hidden">View CV</p>
            </a>
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