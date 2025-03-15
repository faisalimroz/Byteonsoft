import Image from 'next/image';
import HomeBottom from '../../../assets/image2/home-bottom-shape.png';
import axios from 'axios';
import HeroImage from './HeroImage';
const FinalHero =async () => {

      const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-all-typographies`)
      const typos=await res.data
      const typographies=typos.find(typo=>typo.sectionName==='Hero Section')
    return (
        <div className='bg-custom-gradient lg:bg-none pb-10 md:pb-4 lg:pb-14 pt-24 relative mb-16'>

            <div className='hidden lg:block absolute  w-full h-full top-0'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" version="1.1">
                    <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: 'rgba(0,0,36,1)', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: 'rgba(0,212,255,1)', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#gradient1)"
                        strokeLinecap="round"
                        strokeLinejoin="miter"
                        fillOpacity="1"
                        d="M0 437L25 419.5C50 402 100 367 150 358C200 349 250 366 300 373.2C350 380.3 400 377.7 450 339C500 300.3 550 225.7 600 207.2C650 188.7 700 226.3 750 236.3C800 246.3 850 228.7 875 219.8L900 211L900 0L875 0C850 0 800 0 750 0C700 0 650 0 600 0C550 0 500 0 450 0C400 0 350 0 300 0C250 0 200 0 150 0C100 0 50 0 25 0L0 0Z"
                    />
                </svg>
            </div>



            {/* Main Content Section */}
            <div className='flex lg:flex-row md:flex-row flex-col items-center justify-around px-5 gap-3 relative z-10'>
                {/* Text Section */}
                <div className='text-white w-11/12 md:w-1/2 xl:w-1/3 md:-mt-24 xl:mt-0'>
                    <h2 className=' lg:text-4xl md:text-3xl text-xl lg:text-left md:text-left sm:text-left text-center font-semibold'>
                       {typographies.title}
                    </h2>
                    <p className='py-6 lg:text-left md:text-left sm:text-left text-center'>
                      {typographies.subtitle}
                    </p>
                    <div className='flex items-center justify-center lg:justify-start gap-3'>
                        <button className='bg-white py-3 px-3 text-[var(--color-secondary)] rounded-lg font-semibold hover:bg-[var(--color-secondary)] hover:text-white transition duration-500'>
                            Our Service
                        </button>
                        <button className='bg-[var(--color-secondary)] py-3 px-3 text-white rounded-lg font-semibold hover:text-[var(--color-secondary)] hover:bg-white transition duration-500'>
                            Contact Us
                        </button>
                    </div>
                </div>

                {/* Hero Image */}
              <HeroImage></HeroImage>
            </div>

            {/* Bottom Image */}
            <div className='absolute block lg:hidden -bottom-1'>
                <Image
                    src={HomeBottom}
                    width={500}
                    height={500}
                    className='w-screen'
                    alt="Bottom shape image"
                />
            </div>
        </div>
    );
};

export default FinalHero;