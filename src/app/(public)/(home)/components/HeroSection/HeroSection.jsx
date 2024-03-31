import React from 'react';
import img from '@/assets/image 2.png';
import Image from 'next/image';
import { Icons } from '@/components/Icons';

const HeroSection = () => {
    return (
        <div className='w-full bg-red-700 h-screen mt-10 rounded-xl flex justify-around'>
            <div className='py-16 text-white '>
                <h1 className='text-[48px] uppercase font-bold'>Get affordable, <br /> same-day coverage <br /> in no time.</h1>

                <p className='pt-4'>With roots over a century deep in the birthplace of the automobile <br /> industry, USA Underwriters has the knowledge and expertise to help tailor <br /> a policy to suit your lifestyle, your budget, and your priorities.</p>

               <div className='mt-12 flex items-center gap-8'>
               <button className='px-8 py-4 rounded-full  bg-white text-black font-medium hover:bg-red-300'>Report a Claim</button>
               
               <button className='text-white font-medium whitespace-nowrap flex items-center gap-1'>Learn More <Icons.MoveRight /> </button>
               </div>
            </div>
            <div>
            <Image
            src={img}
            alt='image'
            width={400}
            height={300}
            className='h-full w-auto'
            />
            </div>
        </div>
    );
};

export default HeroSection;