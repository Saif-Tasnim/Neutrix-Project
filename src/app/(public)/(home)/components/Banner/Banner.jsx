import React from 'react';
import img from '@/assets/Rectangle 11.png'
import Image from 'next/image';

const Banner = () => {
    return (
       <div className='mt-24 relative '>
        <Image src={img} alt='img' width={300} height={300} className='w-full h-auto'/>

        <div className='bg-red-700 text-gray-200 px-8 py-6 border border-red-700 rounded-xl w-fit absolute bottom-14 left-24'>
            <h1 className='text-lg font-bold mb-5'>Obtain cost-effective same-day insurance <br /> coverage quickly.</h1>
            <p className='text-xs font-medium mb-5'>Lorem ipsum dolor sit amet consectetur. Ut nisi risus ipsum urna leo. <br /> Etiam enim varius dictum amet hac imperdiet facilisis malesuada.</p>
            <button className="px-9 py-4 bg-gray-900 rounded-full font-medium text-base">Report a Claim</button>
        </div>
       </div>
    );
};

export default Banner;