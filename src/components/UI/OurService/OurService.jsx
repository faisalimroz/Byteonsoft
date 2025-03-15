import React from 'react';
import {
  Carousel,
  CarouselButtons,
  CarouselControl,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides,
} from 'keep-react';
import Image from 'next/image';

import webDevelopmentImage from '../../../assets/service image/website-codes (2).png'
import wordPressDevelopmentImage from '../../../assets/service image/social.png'
import ECommerceDevelopmentImage from '../../../assets/service image/ecommerce.png'
import mobileAppDevelopmentImage from '../../../assets/service image/mobile-app (2).png'
import UIUXDesignImage from '../../../assets/service image/ui.png'
import customSoftwareDevelopmentImage from '../../../assets/service image/coding (1).png'
import ServiceCard from '@/components/Card/ServiceCard';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import axios from 'axios';

const OurService =async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-all-services`);
  const services=res.data
  
  return (
    <div className='text-center mx-auto w-full md:w-4/5 p-5 md:p-10 lg:p-16'>
      <SectionTitle
      heading={'Our Services'}
      subHeading={'Safeguard Your Brand with Cyber Security and IT Solutions'}
      />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            image={service?.image} // Use predefined images
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default OurService;
