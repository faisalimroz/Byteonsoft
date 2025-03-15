"use client"

import React from 'react';
import Link from 'next/link'; // Importing Link from Next.js
import Image from 'next/image'; // Importing Image from Next.js
import Logo from '../../assets/logo/logo_orange.png';
import { FaLocationDot } from 'react-icons/fa6'
import { MdCall, MdMail } from 'react-icons/md'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { handleWhatsApp } from '@/utils';

const Footer = () => {



    return (
        <div className="mt-10">
            <footer className="bg-[#042C4C] shadow p-4">
                <div className="w-full p-4 md:py-8">
                    <div className="flex items-start justify-start lg:justify-between lg:flex-row flex-col w-full md:w-4/5 mx-auto">
                        <div className='flex flex-col justify-start items-start space-y-3 text-white'>
                            <Link href="/" className="flex items-center space-x-3">
                                <Image src={Logo} width={250} height={250} className="rounded-full" alt="Logo" /> {/* Using Image from Next.js */}
                                {/* <span className="self-center text-2xl font-semibold text-white">IT PORI</span> */}
                            </Link>
                            <div className='flex flex-row justify-center items-center space-x-3 cursor-pointer pt-5'>
                                <FaLocationDot className='w-5 h-5 text-white' />
                                <p>House #12 (Lift 5), Road-12, <br />
                                    DIT Project, Merul Badda, Dhaka, <br />
                                    Bangladesh</p>
                            </div>
                            <div className='flex flex-row justify-center items-center space-x-3 cursor-pointer'>
                                <MdCall className='w-5 h-5 text-white' />
                                <p>+880 15336 33913</p>
                            </div>
                            <div className='flex flex-row justify-center items-center space-x-3 cursor-pointer'>
                                <MdMail className='w-5 h-5 text-white' />
                                <a href='mailto:byteonsoft@gmail.com'>byteonsoft@gmail.com</a>
                            </div>
                        </div>

                        <div className='text-white flex flex-col justify-start items-start'>
                            <h2 className='uppercase text-lg md:text-xl font-semibold'>Services</h2>
                            <ul className='list-disc pl-5 mt-3'>
                                <li>Web Design & Development</li>
                                <li>WordPress Development</li>
                                <li>E-Commerce Development</li>
                                <li>Mobile App Development</li>
                                <li>UI/UX Design</li>
                                <li>Custom Software Development</li>
                            </ul>
                        </div>
                        <div className='text-white flex flex-col justify-start items-start'>
                            <h2 className='uppercase text-lg md:text-xl font-semibold'>Useful Links</h2>
                            <ul className='list-disc pl-5 mt-3'>
                                <Link href="/about"><li className='cursor-pointer hover:underline hover:text-lg transition ease-in duration-500'>About Us</li></Link>
                                <Link href="/services"><li className='cursor-pointer hover:underline hover:text-lg transition ease-in duration-500'>Services</li></Link>
                                <Link href="/contact"><li className='cursor-pointer hover:underline hover:text-lg transition ease-in duration-500'>Contact Us</li></Link>
                                <Link href="/career"><li className='cursor-pointer hover:underline hover:text-lg transition ease-in duration-500'>Career</li></Link>
                                <Link href="/privacy-policy"><li className='cursor-pointer hover:underline hover:text-lg transition ease-in duration-500'>Privacy Policy</li></Link>
                                <Link href="/terms-&-condition"><li className='cursor-pointer hover:underline hover:text-lg transition ease-in duration-500'>Terms & Conditions</li></Link>
                            </ul>
                        </div>
                        <div className='text-white flex flex-col justify-start items-start'>
                            <h2 className='uppercase text-lg md:text-xl font-semibold mb-3'>Social Links</h2>
                            <div className='flex flex-row justify-start items-center space-x-3'>
                                <div className='bg-white p-2 rounded-md flex m-auto cursor-pointer'>
                                    <a target='_blank' href="https://www.facebook.com/byteonsoft"><FaFacebook className='w-6 h-6 text-[var(--color-primary)]' /></a>
                                </div>
                                <div className='bg-white p-2 rounded-md flex m-auto cursor-pointer'>
                                    <a href=""><FaTwitter className='w-6 h-6 text-[var(--color-primary)]' /></a>
                                </div>
                                <div className='bg-white p-2 rounded-md flex m-auto cursor-pointer'>
                                    <a target='_blank' href="https://www.linkedin.com/company/byte-on-soft"><FaLinkedin className='w-6 h-6 text-[var(--color-primary)]' /></a>
                                </div>
                                <div className='bg-white p-2 rounded-md flex m-auto cursor-pointer'>
                                    <a target='_blank' href="https://www.youtube.com/@ByteOnSoft"><FaYoutube className='w-6 h-6 text-[var(--color-primary)]' /></a>
                                </div>
                                <div onClick={()=>{handleWhatsApp(
                                    'Hello, I want to contact with you.'
                                )}} className='bg-white p-2 rounded-md flex m-auto cursor-pointer'>
                                    <FaWhatsapp className='w-6 h-6 text-[var(--color-primary)]' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-white sm:mx-auto lg:my-8" />
                    <span className="block text-sm text-white sm:text-center">
                        © 2024 <Link href="/" className="hover:underline text-white">ByteOnSoft</Link>. All Rights Reserved.
                    </span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
