'use client'
import React, { useState } from 'react';
import Heroimage from '../../../assets/image2/home-font.png';
import Image from 'next/image';
const HeroImage = () => {
    const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

    const handleMouseMove = (e) => {
        // Get the size and position of the element
        const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - left; // Get the X position within the element
        const y = e.clientY - top;  // Get the Y position within the element

        // Calculate the rotation angles
        const rotateY = ((x / width) * 30) - 15; // Rotate between -15deg to 15deg on Y axis
        const rotateX = -((y / height) * 30) + 15; // Rotate between -15deg to 15deg on X axis

        setRotation({ rotateX, rotateY });
    };
    return (
        
              <div
                    className=""
                    style={{
                        willChange: 'transform',
                        transform: `perspective(1000px) rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg) scale3d(1, 1, 1)`,
                        transition: '300ms cubic-bezier(0.03, 0.98, 0.52, 0.99) '
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => {
                        setRotation({ rotateX: 0, rotateY: 0 });
                    }}
                >
                    <Image
                        src={Heroimage}
                        width={600}
                        height={600}
                        alt="Hero image"
                    />
                </div>
       
    );
};

export default HeroImage;