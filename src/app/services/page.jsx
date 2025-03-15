import React from 'react';
import webDevelopmentImage from '../../assets/service image/website-codes (2).png'
import wordPressDevelopmentImage from '../../assets/service image/social.png'
import ECommerceDevelopmentImage from '../../assets/service image/ecommerce.png'
import mobileAppDevelopmentImage from '../../assets/service image/mobile-app (2).png'
import UIUXDesignImage from '../../assets/service image/ui.png'
import customSoftwareDevelopmentImage from '../../assets/service image/coding (1).png'
import ServiceCard from '@/components/Card/ServiceCard';
import PageIttle from '@/components/PageItile/PageIttle';
import axios from 'axios';




export const metadata = {
    title: "SERVICES | ByteOnSoft",
    description: " ByteOnSoft specializes in web development, UX/UI design, and  software development, delivering innovative digital solutions tailored to client needs. Our team focuses on creating seamless user experiences and high-performing applications to enhance business growth.",
  };


const Services = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-all-services`);
    const services=res.data
    return (
        <div>
            <PageIttle pageTitle={"Services"} pageSubTitle={'Services'}></PageIttle>
            <div className='text-center mx-auto w-full md:w-4/5 p-5 md:p-10 lg:p-16'>
          
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
        </div>
    );
};

export default Services;