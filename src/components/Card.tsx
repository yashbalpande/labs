import Image from 'next/image';
import React from 'react';

interface Props {
  icon: string;
  index: string;
  heading: string;
  para: string;
  imageSize?: number; // Optional prop for custom image size
}

const Card = ({ icon, index, heading, para, imageSize = 150 }: Props) => {
  return (
    <div className="bg-[#4E3B34] rounded-md p-4 w-[300px] h-[350px] text-white text-center shadow-lg">
      <div className="flex justify-center mb-4">
        <Image src={icon} alt="icon" height={imageSize} width={imageSize} />
      </div>
      <div className="mt-3 text-left">

      <h1 className="text-sm  opacity-80">{index}</h1>
      <h2 className="text-2xl font-bold mt-3 mb-3">{heading}</h2>
      <p className="text-sm opacity-80">{para}</p>
      </div>
    </div>
  );
};

export default Card;