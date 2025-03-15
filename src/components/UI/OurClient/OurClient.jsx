import React from 'react';
import Image from 'next/image';
import image1 from '../../../assets/client image/client-1.png';
import image2 from '../../../assets/client image/client-2.png';
import image3 from '../../../assets/client image/client-3.png';
import image4 from '../../../assets/client image/client-4.png';
import image5 from '../../../assets/client image/client-5.png';
import image6 from '../../../assets/client image/client-6.png';
import image7 from '../../../assets/client image/client-7.png';
import image8 from '../../../assets/client image/client-8.png';
import image9 from '../../../assets/client image/client-9.png';
import tutor_agency from '../../../assets/client image/Tutor_Agency.jpg'
import DB_news from '../../../assets/client image/DB_News.jpg'
import SectionTitle from '@/components/SectionTitle/SectionTitle';

const OurClient = () => {
    return (
        <div className='mt-16 w-full md:w-4/5 mx-auto'>
            {/* Title Section */}
            <SectionTitle
                heading={'OUR CLIENTS'}
                subHeading={'Trusted By Over 15'}
            />

            {/* Image Grid Section */}
            <div className="flex flex-wrap justify-center gap-3 px-6">
                {/* Image 1 */}
                <div className="h-[100px] rounded-lg border border-gray-300 shadow-lg flex justify-center items-center">
                    <Image
                        src={tutor_agency}
                        alt="Client 1"
                        width={150}
                        height={100}
                        className=""
                    />
                </div>
                <div className="h-[100px] rounded-lg border border-gray-300 shadow-lg flex justify-center items-center">
                    <Image
                        src={DB_news}
                        alt="Client 1"
                        width={150}
                        height={150}
                        // className="rounded-lg border border-gray-300 shadow-lg "
                    />
                </div>

                {/* Image 2 */}
                {/* <div className="flex justify-center items-center">
                    <Image
                        src={image5}
                        alt="Client 5"
                        width={150}
                        height={150}
                        className="rounded-lg border border-gray-300 shadow-lg "
                    />
                </div> */}

                {/* Image 3 */}
                {/* <div className="flex justify-center items-center">
                    <Image
                        src={image3}
                        alt="Client 3"
                        width={150}
                        height={150}
                        className="rounded-lg border border-gray-300 shadow-lg "
                    />
                </div> */}

                {/* Image 4 */}
                {/* <div className="flex justify-center items-center">
                    <Image
                        src={image4}
                        alt="Client 4"
                        width={150}
                        height={150}
                        className="rounded-lg border border-gray-300 shadow-lg "
                    />
                </div> */}

                {/* Image 5 */}
                {/* <div className="flex justify-center items-center">
                    <Image
                        src={image2}
                        alt="Client 2"
                        width={150}
                        height={150}
                        className="rounded-lg border border-gray-300 shadow-lg "
                    />
                </div> */}

                {/* Image 6 */}
                {/* <div className="flex justify-center items-center">
                    <Image
                        src={image6}
                        alt="Client 6"
                        width={150}
                        height={150}
                        className="rounded-lg border border-gray-300 shadow-lg "
                    />
                </div> */}

                {/* Image 7 */}
                {/* <div className="flex justify-center items-center">
                    <Image
                        src={image7}
                        alt="Client 7"
                        width={150}
                        height={150}
                        className="rounded-lg border border-gray-300 shadow-lg "
                    />
                </div> */}

                {/* Image 8 */}
                {/* <div className="flex justify-center items-center">
                    <Image
                        src={image8}
                        alt="Client 8"
                        width={150}
                        height={150}
                        className="rounded-lg border border-gray-300 shadow-lg "
                    />
                </div> */}

                {/* Image 9 */}
                {/* <div className="flex justify-center items-center">
                    <Image
                        src={image9}
                        alt="Client 9"
                        width={150}
                        height={150}
                        className="rounded-lg border border-gray-300 shadow-lg "
                    />
                </div> */}
            </div>
          
        </div>
    );
};

export default OurClient;
