'use client';

import React from 'react'
import { useAOS } from '../hooks/UseAOS'
// import 'aos/dist/aos.css'



const ExperienceSection = () => {
    useAOS();
    return (
        <section id='experience'>
            <div className='my-12 pb-12 md:pb-48'>
                <h1 className='text-center font-bold text-4xl'>
                    Work Experience
                    <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
                </h1>
                <div className='grid gap-12 space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0'>
                    <div className='w-full'>
                        <div className='grid gap-8'>
                            <div data-aos='zoom-in'
                                className='glass p-4 rounded-lg shadow-lg cursor-default hover:-translate-y-0.5 transition-transform'
                            >
                                <div className='mb-2'>
                                    <div className='lg:flex justify-between'>
                                        <h1 className='text-lg font-bold underline underline-offset-4'>Web Developer</h1>
                                        <h1 className='hidden lg:block text-lg font-semibold'>February 2024 - Present(1 year and 7 months)</h1>
                                    </div>
                                    <div className='mb-2'>
                                        <h1 className='text-lg font-semibold italic'>OGIS Philippines (formerly Fasttrack Solutions Inc.)</h1>
                                        <h1 className='text-md font-semibold'>Projects Involved</h1>
                                    </div>
                                </div>

                                <div className='mb-2'>
                                    <h1 className='text-md font-semibold'>
                                        Smartbooks Web Application (
                                        <a
                                            href='https://sbapp.smartbooks.ph/sbindex.php'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-blue-600 underline hover:text-blue-800'
                                        >
                                            Link
                                        </a>
                                        )
                                    </h1>
                                    <ul className='list-disc list-inside space-y-2 text-sm'>
                                        <li>
                                            Improved a cloud-based accounting system built on a custom PHP framework with unified login, and enhanced the Data Transfer Workbench for flexible transaction uploads.
                                        </li>
                                        <li>
                                            Redesigned the transaction flow with a new “Addons” menu for client-specific features like Lease Contract and Consolidation Addons, and embedded Power BI reports to deliver detailed insights across departments.
                                        </li>
                                    </ul>
                                </div>
                                <div className='mb-2'>
                                    <h1 className='text-md font-semibold'>
                                        Smartbooks Portal Web Application(
                                        <a
                                            href='https://smartbooks.com.ph'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-blue-600 underline hover:text-blue-800'
                                        >
                                            Link
                                        </a>
                                        )
                                    </h1>
                                    <ul className='list-disc list-inside space-y-2 text-sm'>
                                        <li>
                                            Improved a cloud-based accounting system built on a custom PHP framework with unified login, and enhanced the Data Transfer Workbench for flexible transaction uploads.
                                        </li>
                                        <li>
                                            Redesigned the transaction flow with a new “Addons” menu for client-specific features like Lease Contract and Consolidation Addons, and embedded Power BI reports to deliver detailed insights across departments.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div data-aos='zoom-in'
                                className='glass p-4 rounded-lg shadow-lg cursor-default hover:-translate-y-0.5 transition-transform'
                            >
                                <div className='mb-2'>
                                    <div className='lg:flex justify-between'>
                                        <h1 className='text-lg font-bold underline underline-offset-4'>Associate Software Engineer</h1>
                                        <h1 className='hidden lg:block text-lg font-semibold'>April 2023 - December 2023 (8 months)</h1>
                                    </div>
                                    <div className='mb-2'>
                                        <h1 className='text-lg font-semibold italic'>Project Alpha Web Corporation Incorporated(Guiguinto, Bulacan)</h1>
                                        <h1 className='text-md font-semibold'>Projects Involved</h1>
                                    </div>
                                </div>

                                <div className='mb-2'>
                                    <h1 className='text-md font-semibold'>
                                        Project Alpha Website (
                                        <a
                                            href='https://www.theprojectalpha.net/'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-blue-600 underline hover:text-blue-800'
                                        >
                                            Link
                                        </a>
                                        )
                                    </h1>
                                    <ul className='list-disc list-inside space-y-2 text-sm'>
                                        <li>
                                            Maintained and debugged the Project Alpha Website, handled frontend/backend tickets, and converted Figma designs into responsive web interfaces using HTML, CSS, and JavaScript.
                                        </li>
                                        <li>
                                            Developed an entire dormancy mechanism enabling administrators to identify and flag users who won't renew their registration, streamlining the process for managing inactive accounts within the system.
                                        </li>
                                    </ul>
                                </div>
                                <div className='mb-2'>
                                    <h1 className='text-md font-semibold'>
                                        Banico Group of Companies Landing Page (
                                        <a
                                            href='https://banicogroupofcompanies.com'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-blue-600 underline hover:text-blue-800'
                                        >
                                            Link
                                        </a>
                                        )
                                    </h1>
                                    <ul className='list-disc list-inside space-y-2 text-sm'>
                                        <li>
                                            Design and create a dynamic Single Page Application tailored for the Banico Group of Companies, integrating PHP for backend functionality and utilizing Sass and Bootstrap for enhanced frontend aesthetics and responsiveness.
                                        </li>
                                        <li>
                                            Implement the nodemailer package to enable potential clients to send emails to the company's HR department regarding potential business proposals.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div data-aos='zoom-in'
                                className='glass p-4 rounded-lg shadow-lg cursor-default hover:-translate-y-0.5 transition-transform'
                            >
                                <div className='mb-2'>
                                    <div className='lg:flex justify-between'>
                                        <h1 className='text-lg font-bold underline underline-offset-4'>Software Engineer Intern</h1>
                                        <h1 className='hidden lg:block text-lg font-semibold'>July 2022 - August 2022 (1 month)</h1>
                                    </div>
                                    <div className='mb-2'>
                                        <h1 className='text-lg font-semibold italic'>Hooli Software (Marilao, Bulacan)</h1>
                                        <h1 className='text-md font-semibold'>Projects Involved</h1>
                                    </div>

                                </div>

                                <div className='mb-2'>
                                    <h1 className='text-md font-semibold'>
                                        Ready Agent Mobile App
                                    </h1>
                                    <ul className='list-disc list-inside space-y-2 text-sm'>
                                        <li>
                                            Trained in Flutter and Golang with Scrum and Jira, contributed to the ReadyAgent app by integrating Google Maps for broker-client directions and gained system operations knowledge.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection