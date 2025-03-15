"use client"

import React, { useEffect, useState } from 'react';
import TeamMemberCard from '@/components/Card/TeamMemberCard';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import image1 from  "../../../assets/Team-Image/dipak_roy.jpg"
import image2 from "../../../assets/Team-Image/nimur_rahman_nirob.jpg"
import image3 from "../../../assets/Team-Image/Sahinur_islam.jpg"
import image4 from "../../../assets/Team-Image/Dipu_Debnath.jpg"
import image5 from "../../../assets/Team-Image/md_sadiqul_islam.jpg"
import image6 from "../../../assets/Team-Image/abu-abdullah.jpg"
import image7 from "../../../assets/Team-Image/al_saif_ratul.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Parallax } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import axios from 'axios';

const teamMembers = [
    {
        id: 1,
        name: "Dipok Roy",
        position: "MERN Stack Developer",
        image: image1
    },
    {
        id: 2,
        name: "Nimur Rahman Nerob",
        position: "CTO - Chief Technology Officer",
        image: image2
    },
    {
        id: 3,
        name: "Sahinur Islam",
        position: "Co-Founder, CTO",
        image: image3
    },
    {
        id: 4,
        name: "Dipu Debnath",
        position: "Full Stack Developer",
        image: image4
    },
    {
        id: 5,
        name: "Md. Sadiqul Islam",
        position: "Senior Backend Developer",
        image: image5
    },
    {
        id: 6,
        name: "Md. Abu Abdullah",
        position: "Full Stack Developer",
        image: image6
    },
    {
        id: 7,
        name: "Al Saef Ratul",
        position: "Frontend Developer",
        image: image7
    }
];


const TeamMember = () => {

    const [members, setMembers] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchingMembers = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-all-team-members`);
               
                setMembers(res.data);
                setLoading(false);
                console.log(res.data);
            } catch (error) {
                setError(error.message || 'Failed to fetch team members');
                setLoading(false);
            }
        };

        fetchingMembers();
    }, []);

    if (loading) {
        return loading
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div className='mt-16 w-11/12 md:w-4/5 mx-auto'>

            <SectionTitle
                heading={'our team members'}
                subHeading={'Those are Experts'}
            />
            
            <Swiper
                modules={[Autoplay, Parallax]}
                spaceBetween={50}
                slidesPerView={3}
                autoplay={{
                    delay: 3000, // delay between slides
                    pauseOnMouseEnter: true, // pause on hover
                }}
                parallax
                breakpoints={{
                    // when the window width is >= 640px
                    350: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    // when the window width is >= 768px
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    // when the window width is >= 1024px
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
            >
              
                {members.map((member) => (
                    <SwiperSlide key={member.id}>
                        <TeamMemberCard
                            image={member.image}
                            name={member.name}
                            position={member.position}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto w-full'>
                <TeamMemberCard
                    image={image1}
                    name={'Ava Farrington'}
                    position={'Founder, CEO'}
                />
                <TeamMemberCard
                    image={image2}
                    name={'Kevin Haley'}
                    position={'Co-Founder, CTO'}
                />
                <TeamMemberCard
                    image={image3}
                    name={'Alishia Fulton'}
                    position={'Chief Creative Officer'}
                />
                <TeamMemberCard
                    image={image4}
                    name={'Lucas Martinez'}
                    position={'Creative Director'}
                />

            </div> */}
        </div>
    );
};

export default TeamMember;