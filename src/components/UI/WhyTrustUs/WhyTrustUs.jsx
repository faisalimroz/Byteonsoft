import React from 'react';
import chose2 from '../../../assets/image2/choose-2.png';
import Image from 'next/image';

const WhyTrustUs = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center md:justify-between lg:justify-between w-full md:w-4/5 p-5 md:p-10 lg:p-16 mx-auto'>
            <div className='text-left md:px-3 px-4 w-11/12 md:w-1/2'>
                <p className='uppercase  text-[var(--color-secondary)] py-2 text-xl font-semibold'>Why Trust Us?</p>
                <h2 className='text-2xl md:text-3xl font-semibold text-[#404040]'>Achieve Digital Transformation For <br /> Your Retail Business Services</h2>
                <p className='py-7  font-light'>Your Trusted Partner in Software and IT Solutions
                    At ByteonSoft, we recognize that trust is the cornerstone of successful partnerships.</p>
                <ul className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-3">
                    <li className="relative before:absolute before:z-[-1] before:left-0 before:bottom-0 before:w-0 before:h-full before:rounded before:bg-[var(--color-primary)] before:transition-all before:duration-500 hover:before:w-full shadow-lg p-4 rounded-lg hover:text-white transition-all border-l-2 border-[var(--color-primary)]">
                        Proven Expertise
                    </li>
                    <li className="relative before:absolute before:z-[-1] before:left-0 before:bottom-0 before:w-0 before:h-full before:rounded before:bg-[var(--color-primary)]  before:transition-all before:duration-500 hover:before:w-full shadow-lg p-4 rounded-lg hover:text-white transition-all border-l-2 border-[var(--color-primary)]">
                        Client-Centric Approach
                    </li>
                    <li className="relative before:absolute before:z-[-1] before:left-0 before:bottom-0 before:w-0 before:h-full before:rounded before:bg-[var(--color-primary)]  before:transition-all before:duration-500 hover:before:w-full shadow-lg p-4 rounded-lg hover:text-white transition-all border-l-2 border-[var(--color-primary)]">
                        Transparent Communication
                    </li>
                    <li className="relative before:absolute before:z-[-1] before:left-0 before:bottom-0 before:w-0 before:h-full before:rounded before:bg-[var(--color-primary)]  before:transition-all before:duration-500 hover:before:w-full shadow-lg p-4 rounded-lg hover:text-white transition-all border-l-2 border-[var(--color-primary)]">
                        Uncompromising Quality
                    </li>
                    <li className="relative before:absolute before:z-[-1] before:left-0 before:bottom-0 before:w-0 before:h-full before:rounded before:bg-[var(--color-primary)]  before:transition-all before:duration-500 hover:before:w-full shadow-lg p-4 rounded-lg hover:text-white transition-all border-l-2 border-[var(--color-primary)]">
                        Dedicated Support
                    </li>
                    <li className="relative before:absolute before:z-[-1] before:left-0 before:bottom-0 before:w-0 before:h-full before:rounded before:bg-[var(--color-primary)]  before:transition-all before:duration-500 hover:before:w-full shadow-lg p-4 rounded-lg hover:text-white transition-all border-l-2 border-[var(--color-primary)]">
                        Scalable Solutions
                    </li>
                </ul>

            </div>
            <div className='justify-center'>
                <Image src={chose2} width={500} height={500} alt='work image' />
            </div>

        </div>
    );
};

export default WhyTrustUs;