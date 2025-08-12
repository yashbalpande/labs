import Image from 'next/image';
import React from 'react';

interface Props {
  icon: string;
  index: string;
  heading: string;
  para: string;
  imageSize?: number; 
}

const Card = ({ icon, index, heading, para, imageSize = 150 }: Props) => {
  return (
    <div className="bg-[#4E3B34] rounded-md p-4 w-[300px] h-[350px] text-white text-center shadow-lg sm:w-[90vw] sm:h-auto sm:p-2">
      <div className="flex justify-center mb-2 sm:mb-1 relative w-full" style={{aspectRatio: '1/1'}}>
        <Image src={icon} alt="icon" fill sizes="100vw" style={{objectFit: 'contain'}} />
      </div>
      <div className="mt-3 sm:mt-1 text-left">
        <h1 className="text-sm sm:text-xs opacity-80">{index}</h1>
        <h2 className="text-2xl sm:text-lg font-bold mt-3 sm:mt-1 mb-3 sm:mb-1">{heading}</h2>
        <p className="text-sm sm:text-xs opacity-80">{para}</p>
      </div>
    </div>
  );
};

export default Card;
