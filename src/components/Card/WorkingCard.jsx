import React from 'react';
import Image from 'next/image';

const WorkingCard = ({ title, image, description }) => {
    return (
        <div className='h-full p-3 md:p-5 rounded-lg flex flex-col items-center' style={{ boxShadow: '6px 6px 6px 0px rgba(0, 0, 0, 0.2)' }}>
           

                <div className='bg-gray-300 border-[3px] border-gray-400 rounded-lg px-2 my-2'>
                    <Image
                        className='py-3'
                        src={image}
                        alt={title}
                        width={50}
                        height={50}
                    />
                </div>
           
            <h2 className='text-lg md:text-xl font-semibold text-center'>{title}</h2>
            <p className='px-3 text-gray-500 text-center'>{description}</p>
        </div>
    );
};

export default WorkingCard;
