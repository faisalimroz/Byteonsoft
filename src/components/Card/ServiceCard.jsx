import React from 'react';
import Image from 'next/image';

const ServiceCard = ({ title, image, description }) => {
    return (
        <div className='w-full py-3 px-5 md:p-5 rounded-lg flex flex-col justify-start items-start hover:scale-105 transition ease-in-out' style={{ boxShadow: '6px 6px 6px 0px rgba(0, 0, 0, 0.2)' }}>
            <Image className='w-16 mb-4' src={image} alt={title} width={100} height={100}  />
            <h2 className='text-lg md:text-xl font-semibold mb-3'>{title}</h2>
            <p className='text-gray-500 mt-3 text-start'>{description}</p>
        </div>
    );
};

export default ServiceCard;
