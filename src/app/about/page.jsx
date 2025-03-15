import PageIttle from '@/components/PageItile/PageIttle';
import Image from 'next/image';
import React from 'react';
// image import
import feature1 from '../../assets/image2/feature-icon-1.jpg';
import feature2 from '../../assets/image2/feature-icon-2.jpg';
import feature3 from '../../assets/image2/feature-icon-3.jpg';

// working image import
import workprocess1 from '../../assets/image2/workprocess-icon-1.jpg';
import workprocess2 from '../../assets/image2/workprocess-icon-2.jpg';
import workprocess3 from '../../assets/image2/workprocess-icon-3.jpg';
import workprocess4 from '../../assets/image2/workprocess-icon-4.jpg';

import Card from '@/components/Card/Card';
import Performance from '@/components/UI/Performance/Performance';
import TeamMember from '@/components/UI/TeamMember/TeamMember';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import WorkingCard from '@/components/Card/WorkingCard';
import OurClient from '@/components/UI/OurClient/OurClient';

export const metadata = {
  title: "ABOUT US | ByteOnSoft",
  description: "ByteOnSoft specializes in web development, UX/UI design, and software development, delivering innovative digital solutions tailored to client needs. Our team focuses on creating seamless user experiences and high-performing applications to enhance business growth.",
};

const AboutPage = () => {
  return (
    <>
      <PageIttle pageTitle={'About Us'} pageSubTitle={'about'}></PageIttle>
      <div className='w-full'>

          <div className='w-11/12 md:w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-8 mt-20'>
            <Card title={'Flexibility & Responsive'} description={'At ByteonSoft, we understand that flexibility and responsiveness are crucial for thriving in today’s fast-paced business environment. Our commitment to adaptability ensures that we can meet your evolving needs and help your business succeed.'} image={feature1} />
            <Card title={'Dedicated Teams'} description={'At ByteonSoft, our dedicated teams are the backbone of our success. Committed to delivering excellence, each team is composed of experienced professionals who collaborate to ensure your projects are handled with the utmost care and expertise.'} image={feature2} />
            <Card title={'Focusing on Business'} description={'At ByteonSoft, we prioritize your business objectives above all else. Our mission is to empower your organization through innovative technology solutions that drive growth, efficiency, and success.'} image={feature3} />
          </div>

        <div className='mt-28'>
          <Performance></Performance>
        </div>
        <div className='mt-28 w-11/12 md:w-4/5 mx-auto'>
          <TeamMember></TeamMember>
        </div>
        <div className='mt-28 w-11/12 md:w-4/5 mx-auto'>
          <SectionTitle
            heading={'4 Step Work Process'}
            subHeading={'Working Process'}
          />
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 py-3'>
            <WorkingCard title={'Discovery & Planning'} description={'We begin by understanding your business objectives and gathering detailed requirements. Through consultations and discussions, we define the project scope, timeline, and deliverables, ensuring alignment with your goals.'} image={workprocess1} />
            <WorkingCard title={'Design & Development'} description={'Once the planning phase is complete, our dedicated teams move into the design and development stage. Here, we create prototypes and develop the solution, focusing on user experience and functionality. Regular feedback loops ensure that we stay aligned with your vision.'} image={workprocess2} />
            <WorkingCard title={'Testing & Quality Assurance'} description={'After development, our rigorous testing phase begins. We conduct thorough testing to identify and resolve any issues, ensuring that the final product meets our high standards of quality and reliability. This step is crucial for delivering a flawless user experience.'} image={workprocess3} />
            <WorkingCard title={'Project Delivery & Support'} description={'Once testing is complete, we deploy the solution and ensure a smooth transition for your team. Our commitment doesn’t end here; we provide ongoing support and maintenance, helping you to maximize the benefits of our solutions and adapt to any future needs. Our goal is to ensure that your project is delivered on time and exceeds your expectations.'} image={workprocess4} />
          </div>

        </div>
        <div className='mt-28 w-11/12 md:w-4/5 mx-auto'>

          <OurClient></OurClient>

        </div>
      </div>
    </>
  );
};

export default AboutPage;