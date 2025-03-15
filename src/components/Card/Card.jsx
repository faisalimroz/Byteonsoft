import React from 'react';
import Image from 'next/image';

const Card = ({ title, image, description }) => {
    return (
        <div className='w-full h-full p-3 md:p-5 rounded-lg flex flex-col items-center' style={{ boxShadow: '6px 6px 6px 0px rgba(0, 0, 0, 0.2)' }}>
            <div className='flex items-center'>
                <Image
                    className='py-3'
                    src={image}
                    alt={title}
                    width={100}
                    height={100}
                />
            </div>
            <h2 className='text-lg md:text-xl font-semibold text-center'>{title}</h2>
            <p className='px-3 text-gray-500 text-center'>{description}</p>
            <p className='px-3 text-[var(--color-primary)] text-center flex items-center space-x-2 py-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /> 
            </svg>
            <span>Learn More</span>
            </p>
        </div>
    );
};

export default Card;