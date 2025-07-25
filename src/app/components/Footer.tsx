import React from 'react';
import Link from 'next/link';
import {
    AiOutlineGithub,
    AiOutlineTwitter,
    AiOutlineLinkedin,
    AiOutlineYoutube,
} from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl '>
            <hr className='w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0'></hr>
            <div className='mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between'>
                <div className='flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100'>
                    © 2025 JKGC<Link href='/' className='hover:underline'></Link>
                </div>
                <div className='flex flex-row items-center justify-center space-x-2 mb-1'>
                    <Link href='https://github.com/ohmypotato' rel='noreferrer' target='_blank'>
                        <AiOutlineGithub
                            className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
                            size={30}
                        />
                    </Link>
                    {/* <Link
                        href='https://twitter.com/hqasmei'
                        rel='noreferrer'
                        target='_blank'
                    >
                        <AiOutlineTwitter
                            className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
                            size={30}
                        />
                    </Link> */}

                    <Link
                        href='https://www.linkedin.com/in/janzenncruz5679'
                        rel='noreferrer'
                        target='_blank'
                    >
                        <AiOutlineLinkedin
                            className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
                            size={30}
                        />
                    </Link>
                    {/* <Link
                        href='https://www.youtube.com/channel/UCQBMkSDgbxDb8usMeXmOZyA'
                        rel='noreferrer'
                        target='_blank'
                    >
                        <AiOutlineYoutube
                            className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
                            size={30}
                        />
                    </Link> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
