'use client'
import { CloudArrowUp } from 'phosphor-react';
import {
    Button,
    Modal,
    ModalAction,
    ModalContent,
    ModalDescription,
    ModalFooter,
    ModalHeader,
    ModalTitle,
} from 'keep-react';
import { HiOutlineBriefcase } from 'react-icons/hi';
import Apply from '../Apply/Apply';
import { useState } from 'react';

const CareerModal = ({
    title,
    description,
    keyResponsibilities,
    requirements,
    submitResume,
    jobType,
    location,
    jobCategory,
    salary,
    additionalNote
}) => {
    return (
        <Modal>
            <ModalAction asChild>
                <div className='p-3 md:p-5 bg-white text-gray-700 font-rubik rounded-lg w-full flex flex-col cursor-pointer' style={{ boxShadow: '6px 6px 6px 0px rgba(0, 0, 0, 0.2)' }}>
                    <div className='flex flex-row justify-between items-center w-full'>
                        <div className='flex flex-row justify-start items-center w-2/3 space-x-5'>
                            <div className='bg-gray-100 p-3 rounded-lg'>
                                <HiOutlineBriefcase className='w-5 h-5 ' />
                            </div>
                            <h1 className='text-lg md:text-xl font-semibold'>{title}</h1>
                        </div>

                        <div className='flex flex-row justify-center items-center space-x-3 w-1/3'>
                            <div className="border-2 border-[var(--color-primary)] rounded-full py-1 px-2 font-semibold text-[var(--color-primary)]">
                                ৳
                            </div>
                            <h2 className='font-semibold'>{salary}</h2>
                        </div>
                    </div>

                    <div className='flex flex-row justify-between items-center w-full mt-3'>
                        <div className='flex flex-row justify-start items-center space-x-4 w-2/3'>
                            <div className='bg-gray-100 p-3 rounded-lg font-semibold'>
                                {jobType}
                            </div>
                            <div className='bg-gray-100 p-3 rounded-lg font-semibold'>
                                {jobCategory}
                            </div>
                            <div className='bg-gray-100 p-3 rounded-lg font-semibold'>
                                {location}
                            </div>
                        </div>

                        <div className='w-1/3 flex mx-auto justify-center'>
                            <Apply
                                jobTitle={title}
                                id={1}
                            />
                        </div>
                    </div>
                </div>
            </ModalAction>

            <ModalContent className='w-11/12 md:w-4/5'>
                <ModalHeader className="mb-6 space-y-3">
                    <div className="space-y-1">
                        <ModalTitle>{title}</ModalTitle>
                        <div className='font-rubik flex flex-col justify-start items-start w-full mx-auto'>
                            <p className='mb-3'><span className='font-semibold text-lg'>Job Type:</span> {jobType}</p>
                            <p className='mb-3'>{description}</p>

                            <p className='font-semibold text-lg'>Key Responsibilities:</p>
                            <ul className='pl-8 md:pl-10 list-decimal mt-1 mb-3'>
                                {keyResponsibilities.map((responsibility, index) => (
                                    <li key={index}>{responsibility}</li>
                                ))}
                            </ul>

                            <p className='font-semibold text-lg'>Requirements:</p>
                            <ul className='pl-8 md:pl-10 list-decimal mt-1 mb-3'>
                                {requirements.map((requirement, index) => (
                                    <li key={index}>{requirement}</li>
                                ))}
                            </ul>

                            <p className='mb-3'><span className='text-lg font-semibold'>Location:</span> {location}</p>
                            <p className='mb-3'><span className='text-lg font-semibold'>Submit Resume:</span> {submitResume.email}</p>
                            <p className='text-lg font-semibold'>{additionalNote}</p>
                        </div>
                    </div>
                </ModalHeader>

                <ModalFooter>
                    <ModalAction asChild>
                        <Button variant="outline">Cancel</Button>
                    </ModalAction>
                    <ModalAction asChild={false}>
                        <Apply />
                    </ModalAction>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default CareerModal;