import React from 'react';
import chose1 from '../../../assets/image2/choose-1.png';
import chose2 from '../../../assets/image2/choose-2.png';
import Image from 'next/image';

const WhyChooseUs = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row items-center justify-center md:justify-between lg:justify-between w-full md:w-4/5 p-5 md:p-10 lg:p-16 mx-auto'>
            <div className='justify-center'>
                <Image src={chose1} width={500} height={500} alt='work image' />
            </div>
            <div className='text-left md:px-3 px-4 w-11/12 md:w-1/2'>
                <p className='uppercase  text-[var(--color-secondary)] py-2 text-xl font-semibold'>Why Choose Us?</p>
                <h2 className='text-2xl md:text-3xl font-semibold text-[#404040]'>Safeguard Your Brand with Cyber Security <br /> and IT Solutions</h2>
                <p className='py-7  font-light'>Elevate Your Business with ByteonSoft’s Premier Software and IT Solutions
                    At ByteonSoft, we are dedicated to being your strategic partner in navigating the complexities of technology.</p>
                <ul className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-3">
                    <li className="relative before:absolute before:z-[-1] before:left-0 before:bottom-0 before:w-0 before:h-full before:rounded before:bg-[var(--color-primary)] before:transition-all before:duration-500 hover:before:w-full shadow-lg p-4 rounded-lg hover:text-white transition-all border-l-2 border-[var(--color-primary)]">
                    Tailored Solutions
                    </li>
                    <li className="relative before:absolute before:z-[-1] before:left-0 before:bottom-0 before:w-0 before:h-full before:rounded before:bg-[var(--color-primary)]  before:transition-all before:duration-500 hover:before:w-full shadow-lg p-4 rounded-lg hover:text-white transition-all border-l-2 border-[var(--color-primary)]">
                    Expert Team
                    </li>
                    <li className="relative before:absolute before:z-[-1] before:left-0 before:bottom-0 before:w-0 before:h-full before:rounded before:bg-[var(--color-primary)]  before:transition-all before:duration-500 hover:before:w-full shadow-lg p-4 rounded-lg hover:text-white transition-all border-l-2 border-[var(--color-primary)]">
                    Commitment to Excellence
                    </li>
                    <li className="relative before:absolute before:z-[-1] before:left-0 before:bottom-0 before:w-0 before:h-full before:rounded before:bg-[var(--color-primary)]  before:transition-all before:duration-500 hover:before:w-full shadow-lg p-4 rounded-lg hover:text-white transition-all border-l-2 border-[var(--color-primary)]">
                    Seamless Collaboration
                    </li>
                    <li className="relative before:absolute before:z-[-1] before:left-0 before:bottom-0 before:w-0 before:h-full before:rounded before:bg-[var(--color-primary)]  before:transition-all before:duration-500 hover:before:w-full shadow-lg p-4 rounded-lg hover:text-white transition-all border-l-2 border-[var(--color-primary)]">
                    Proactive Support
                    </li>
                    <li className="relative before:absolute before:z-[-1] before:left-0 before:bottom-0 before:w-0 before:h-full before:rounded before:bg-[var(--color-primary)]  before:transition-all before:duration-500 hover:before:w-full shadow-lg p-4 rounded-lg hover:text-white transition-all border-l-2 border-[var(--color-primary)]">
                    Comprehensive Services
                    </li>
                </ul>

            </div>

        </div>
    );
};

export default WhyChooseUs;
