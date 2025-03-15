import Image from 'next/image';
import React from 'react';

const TeamMemberCard = ({ image, name, position }) => {
    return (
        <div className='bg-transparent py-3 md:p-5 flex flex-col justify-center items-center space-y-7'>
            <Image
                src={image}
                alt={name}
                width={300}
                height={300}
            />

            <div className='flex flex-col justify-center items-center font-rubik'>
                <h1 className='text-lg md:text-xl font-semibold'>{name}</h1>
                <h2 className='text-center md:text-lg text-[var(--color-primary)]'>{position}</h2>
            </div>
        </div>
    );
};

export default TeamMemberCard;