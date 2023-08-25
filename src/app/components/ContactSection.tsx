'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/src/app/utils/send-email';


export type FormData = {
    name: string;
    email: string;
    message: string;
};


const ContactSection: FC = () => {
    const { register, handleSubmit } = useForm<FormData>();

    function onSubmit(data: FormData) {
        sendEmail(data);
    }

    return (

        <section id='contact'>
            <div className='my-28 pb-12 md:py-12'>
                <h1 className='text-center font-bold text-4xl'>
                    Contact Me
                    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-5'>
                    <label
                        htmlFor='name'
                        className='mb-3 block text-base font-medium'
                    >
                        Full Name
                    </label>
                    <input
                        type='text'
                        placeholder='Full Name'
                        className='w-full rounded-md border-2 border-neutral-900 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-teal-500 focus:shadow-md'
                        {...register('name', { required: true })}
                    />
                </div>
                <div className='mb-5'>
                    <label
                        htmlFor='email'
                        className='mb-3 block text-base font-medium'
                    >
                        Email Address
                    </label>
                    <input
                        type='email'
                        placeholder='example@domain.com'
                        className='w-full rounded-md border-2 border-neutral-900 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-teal-500 focus:shadow-md'
                        {...register('email', { required: true })}
                    />
                </div>
                <div className='mb-5'>
                    <label
                        htmlFor='message'
                        className='mb-3 block text-base font-medium'
                    >
                        Message
                    </label>
                    <textarea
                        rows={4}
                        placeholder='Type your message'
                        className='w-full resize-none rounded-md border-2 border-neutral-900 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-teal-500 focus:shadow-md'
                        {...register('message', { required: true })}
                    ></textarea>
                </div>
                <div>
                    <button className='hover:shadow-form rounded-md bg-teal-600 rounded shadow hover:bg-teal-700  py-3 px-8 text-neutral-100 font-semibold cursor-pointer hover:-translate-y-1 transition-transform'>
                        Submit
                    </button>
                </div>
            </form>
                </div>
        </section>
    )
}

export default ContactSection