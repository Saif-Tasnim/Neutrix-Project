import { Icons } from '@/components/Icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import home from '@/assets/home.png'

const About = () => {
    return (
        <div className='mt-7'>
            <h1 className='text-xl font-semibold lg:text-4xl lg:font-medium text-center'>About us</h1>
            <p className='flex justify-center items-center gap-1 lg:gap-5 mt-2 lg:mt-5'>
                <Image src={home} alt='home' width={100} height={100} className='w-4 h-4'/>
                <Link href="/" className='hover:underline'>Home</Link>
                <Icons.ChevronRight  className='w-5 h-5'/>
                <span>About us</span>
            </p>
        </div>
    );
};

export default About;