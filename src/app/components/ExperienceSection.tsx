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
                                        <h1 className='hidden lg:block text-lg font-semibold'>February 2024 - Present</h1>
                                    </div>
                                    {/* <div className='mb-2'>
                                        <h1 className='text-lg font-semibold italic'>OGIS Philippines (formerly Fasttrack Solutions Inc.)</h1>
                                        <h1 className='text-md font-semibold'>Projects Involved</h1>
                                    </div> */}

                                    <div className='flex flex-row justify-between'>
                                        <div>
                                            <h1 className='text-lg font-semibold italic'>OGIS Philippines (formerly Fasttrack Solutions Inc.)</h1>
                                        </div>
                                        <div>
                                            <h1 className='hidden lg:block text-lg font-semibold'>Makati City, Metro Manila, Philippines</h1>
                                        </div>
                                    </div>
                                </div>

                                <div className='mb-2'>
                                    {/* <h1 className='text-md font-semibold'>
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
                                    </h1> */}
                                    <ul className='list-disc list-inside space-y-2 text-sm'>
                                        <li>
                                            Developed and maintained features for the Smartbooks web application using a custom PHP framework, JavaScript, HTML, and CSS, leveraging MySQL stored procedures to streamline data flow. Tasked with improving system performance and reliability, I optimized backend processes and frontend interactions to ensure smoother operations. As a result, the application handled data more efficiently, reduced processing delays, and delivered a more responsive and reliable experience for users.
                                        </li>
                                        <li>
                                            Implemented a centralized login system for the Smartbooks web app to address inconsistent user authentication and simplify multi-user access. Tasked with improving security and usability, I developed a solution that allowed secure access via a single URL for multiple users. This improvement enhanced authentication consistency, streamlined user access management, and reduced login-related issues, providing a smoother and more secure experience for all users.
                                        </li>
                                        <li>
                                            Redesigned transaction workflows and implemented new menu modules in the Smartbooks web app, including Lease Contract Maintenance and data consolidation features, to better align with client-specific business processes. Tasked with improving system usability and operational efficiency, I restructured workflows and developed intuitive modules that enhanced system navigation, reduced user errors, and supported client requirements more effectively, resulting in a smoother, more efficient experience for end users.
                                        </li>
                                        <li>
                                            Refactored a PHP-based data upload tool for the Smartbooks web app to convert Excel files into multiple transaction types, including AP/AR invoices, journal entries, and vouchers. Tasked with improving the efficiency and flexibility of user data processing, I optimized the tool to handle large datasets reliably and accurately. As a result, users experienced faster data uploads, smoother processing across transaction types, and greater flexibility in managing financial data, enhancing overall operational efficiency.
                                        </li>
                                        <li>
                                            Developed and integrated Power BI dashboards and paginated reports from MySQL data into the Smartbooks web app to address slow reporting for large transactions. By optimizing data flows and leveraging Power BI features, data reading performance improved by up to 40%, enabling users to generate reports faster and make more informed decisions.
                                        </li>
                                        <li>
                                            Migrated the Smartbooks web app from Windows Server to Linux (Ubuntu) to improve system efficiency and reliability. Tasked with modernizing automation, I used Node-RED to rebuild all scheduled tasks, including automatically creating ODBC connections and new databases via the Smartbooks portal for reading stored procedures. This migration reduced storage usage, enhanced system stability, and delivered a smoother, more reliable user experience, enabling faster and consistent data processing for Finance, Inventory, and Production modules.
                                        </li>
                                    </ul>
                                </div>
                                {/* <div className='mb-2'>
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
                                </div> */}
                            </div>
                            <div data-aos='zoom-in'
                                className='glass p-4 rounded-lg shadow-lg cursor-default hover:-translate-y-0.5 transition-transform'
                            >
                                <div className='mb-2'>
                                    <div className='lg:flex justify-between'>
                                        <h1 className='text-lg font-bold underline underline-offset-4'>Associate Software Engineer</h1>
                                        <h1 className='hidden lg:block text-lg font-semibold'>April 2023 - December 2023</h1>
                                    </div>
                                    <div className='mb-2'>
                                        <div className='flex flex-row justify-between'>
                                            <div>
                                                <h1 className='text-lg font-semibold italic'>Project Alpha Web Corporation Inc.</h1>
                                            </div>
                                            <div>
                                                <h1 className='hidden lg:block text-lg font-semibold'>Guiguinto, Bulacan, Philippines</h1>
                                            </div>
                                        </div>

                                        {/* <h1 className='text-md font-semibold'>Projects Involved</h1> */}
                                    </div>
                                </div>

                                <div className='mb-2'>
                                    {/* <h1 className='text-md font-semibold'>
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
                                    </h1> */}
                                    <ul className='list-disc list-inside space-y-2 text-sm'>
                                        <li>
                                            Built a lightweight Single Page Application for the Project Alpha website with a responsive frontend using Sass and Bootstrap, connected to a PHP backend, to address the need for a smoother user interface and faster data interaction. Tasked with improving user experience, I implemented responsive design and seamless data integration, resulting in improved navigation, faster page rendering, and more intuitive interactions for users.
                                        </li>
                                        <li>
                                            Maintained and enhanced the Project Alpha website by building responsive React/Tailwind interfaces and improving reporting with custom PDFs and React-based data tables. Tasked with improving usability and reporting efficiency, I optimized frontend components and interactive reports, resulting in a smoother, more intuitive user experience and faster access to actionable data.
                                        </li>
                                        <li>
                                            Developed a dormancy mechanism for the Smartbooks web app that flags inactive users and automatically sends notifications via SMTP. Tasked with improving user engagement and account management, I implemented automated alerts that notify users when their accounts are inactive. This solution increased user responsiveness, ensured timely communication, and helped clients manage inactive accounts more effectively.
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
                                        <h1 className='hidden lg:block text-lg font-semibold'>July 2022 - August 2022</h1>
                                    </div>
                                    {/* <div className='mb-2'>
                                        <h1 className='text-lg font-semibold italic'>Hooli Software (Marilao, Bulacan)</h1>
                                        <h1 className='text-md font-semibold'>Projects Involved</h1>
                                    </div> */}

                                    <div className='mb-2'>
                                        <div className='flex flex-row justify-between'>
                                            <div>
                                                <h1 className='text-lg font-semibold italic'>Hooli Software</h1>
                                            </div>
                                            <div>
                                                <h1 className='hidden lg:block text-lg font-semibold'>Marilao, Bulacan, Philippines</h1>
                                            </div>
                                        </div>

                                        {/* <h1 className='text-md font-semibold'>Projects Involved</h1> */}
                                    </div>

                                </div>

                                <div className='mb-2'>
                                    {/* <h1 className='text-md font-semibold'>
                                        Ready Agent Mobile App
                                    </h1> */}
                                    <ul className='list-disc list-inside space-y-2 text-sm'>
                                        <li>
                                            Trained as a software engineer in Flutter and Golang, gaining hands-on experience in system operations. Tasked with applying agile practices, I used Scrum methodology with Jira to manage tasks and track project progress efficiently. This training and practical experience enhanced my development skills, improved team collaboration, and ensured timely delivery of project milestones.
                                        </li>
                                        <li>
                                            Implemented star rating displays using a Flutter package and enhanced broker-to-client directions with the Google Maps API in the ReadyAgent App, a real estate platform. Tasked with improving usability and client interactions, I integrated interactive ratings and dynamic navigation features, resulting in a more intuitive app experience and smoother property browsing for users.
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