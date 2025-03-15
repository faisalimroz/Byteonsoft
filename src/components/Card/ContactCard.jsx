"use client";

import { handleWhatsApp } from '@/utils';
import React from 'react';

const ContactCard = ({ title, btnTxt }) => {
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents form from reloading the page

        const form = e.target;

        // Fetching form data
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phoneNumber.value;
        const needs = form.needs.value;
        const budget = form.projectBudget.value; // Correct name for budget field
        const message = form.message.value;

        // Preparing the data object
        const messageData = `
        Name: ${name}, 
        Email: ${email},
        Phone: ${phone},
        Needs: ${needs},
        Budget: ${budget},
        Message: ${message}
        `;

        handleWhatsApp(messageData);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-full md:w-5/12 bg-white rounded-lg p-3 md:p-5" style={{ boxShadow: '6px 6px 6px 0px rgba(0, 0, 0, 0.2)' }}>
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-[var(--color-primary)] mb-3">{title}</h2>
            
            {/* Full Name Field */}
            <div className="relative w-full mb-3">
                <input
                    type="text"
                    name="name"
                    placeholder=" "
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:border-black peer"
                    required
                />
                <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                    Full Name*
                </label>
            </div>
            
            {/* Email Field */}
            <div className="relative w-full mb-3">
                <input
                    type="email"
                    name="email"
                    placeholder=" "
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:border-black peer"
                    required
                />
                <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black  peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                    Email*
                </label>
            </div>

            {/* Phone Number Field */}
            <div className="relative w-full mb-3">
                <input
                    type="text"
                    name="phoneNumber"
                    placeholder=" "
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:border-black peer"
                    required
                />
                <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                    Phone Number*
                </label>
            </div>

            {/* Needs Field */}
            <div className="relative w-full mb-3">
                <select name="needs" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:border-black peer" required>
                    <option disabled selected value="">Select one</option>
                    <option value="Web Design and Development">Web Design and Development</option>
                    <option value="WordPress Development">WordPress Development</option>
                    <option value="E-Commerce Development">E-Commerce Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Custom Software Development">Custom Software Development</option>
                </select>
                <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-focus:font-semibold  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                    Your Needs*
                </label>
            </div>

            {/* Project Budget Field */}
            <div className="relative w-full mb-3">
                <input
                    type="text"
                    name="projectBudget"
                    placeholder=" "
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:border-black peer"
                    required
                />
                <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-focus:font-semibold  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                    Your Project Budget*
                </label>
            </div>

            {/* Message Field */}
            <div className="relative w-full mb-3">
                <textarea
                    name="message"
                    placeholder=" "
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:border-black peer h-28"
                    required
                />
                <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                    Message*
                </label>
            </div>

            <button type="submit" className="text-white text-lg md:text-xl font-semibold px-4 py-3 rounded-lg bg-[var(--color-primary)] w-full">
                {btnTxt}
            </button>
        </form>
    );
};

export default ContactCard;
