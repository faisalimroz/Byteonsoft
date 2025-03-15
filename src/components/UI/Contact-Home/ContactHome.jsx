import dynamic from 'next/dynamic';
import React from 'react';

const ContactHome = () => {
    const ContactCard = dynamic(() => import('@/components/Card/ContactCard'), { ssr: false })
    return (
        <div className='mt-16 bg-[var(--color-primary)] py-8 md:py-12 '>
             <div className='my-5'>
                <h2 className="text-white lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-center py-2 relative uppercase">
                Schedule a free 30 minute meeting
                </h2>
            </div>
            <div className=' flex flex-col md:flex-row justify-center md:justify-evenly items-center w-full space-y-5 md:space-y-0 px-3'>
                <ContactCard title={"Send message via email"} btnTxt={"SEND MESSAGE"} />
                <ContactCard title={"Send message via whatsapp"} btnTxt={"SEND MESSAGE"} />
            </div>
        </div>
    );
};

export default ContactHome;