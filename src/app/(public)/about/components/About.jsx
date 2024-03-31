import { Icons } from '@/components/Icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import home from '@/assets/home.png'

const About = () => {
    return (
        <div className='mt-7'>
            <h1 className='text-4xl font-medium text-center'>About us</h1>
            <p className='flex justify-center gap-5 items-center mt-5'>
                <Image src={home} alt='home' width={100} height={100} className='w-4 h-4'/>
                <Link href="/">Home</Link>
                <Icons.ChevronRight  className='w-5 h-5'/>
                <span>About us</span>
            </p>
        </div>
    );
};

export default About;