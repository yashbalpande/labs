import React from "react";
import Image from "next/image";

type Feature = {
  title: string;
  icon: string; // path to image
};

type ServiceProps = {
  number: string | number;
  title: string;
  features: Feature[];
};

const Service: React.FC<ServiceProps> = ({ number, title, features }) => {
  return (
    <div className="border-t border-gray-300 py-10 w-[80%] mx-auto mt-5 font-montserrat">
      <div className="flex flex-col md:flex-row md:gap-10">
        {/* Left Section */}
        <div className="flex-1">
          <div className="text-3xl text-gray-500 font-semibold">{number}</div>
          <h2 className="text-3xl font-bold text-[#3A2E2B] mt-1 ml-20">{title}</h2>
          <p className="text-sm italic text-gray-500 mt-1 ml-20">
            A site that performs 24/7 — so you don’t have to.
          </p>
          <p className="mt-4 text-[#3A2E2B]/80 ml-20">Whether it’s paid ads, SEO, or web development, each service is optimized to connect, convert, and compound results over time.</p>
        </div>

        {/* Right Section - Features */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 ml-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 border rounded-lg shadow-sm bg-white"
            >
              <span className="text-sm text-[#3A2E2B]">{feature.title}</span>
              <div className="w-16 h-16 relative">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
