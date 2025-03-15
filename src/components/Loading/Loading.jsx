import Image from 'next/image';
import React from 'react';
import Logo from '../../assets/logo/Byte on Soft Icon-09.png';

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center space-y-4">
        {/* Logo */}
        <Image 
          className="rounded-full" 
          src={Logo} 
          width={200} 
          height={200} 
          alt="loading logo" 
        />

    
        <h2 className="text-2xl font-semibold text-gray-800 lg:text-3xl md:text-2xl sm:text-xl">
        ByteOnSoft
        </h2>
        
      
        <div className="w-10 h-10 border-4 border-gray-300 border-t-[var(--color-primary)] rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
