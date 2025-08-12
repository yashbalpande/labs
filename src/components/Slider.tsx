import React from "react";
import SliderLib from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  content: string;
}

export const Slider: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Vaishali Gupta",
      title: "Founder of OTOS",
      content: "Working with Dhruv was both strategic and seamless. He brought much-needed structure to our digital initiatives, was deeply involved in execution, and helped us achieve tangible results in a short period. Dhruv is a natural problem solver — he quickly identifies what's not working and proposes clear, actionable plans to move forward."
    },
    {
      id: 2,
      name: "Garima Goel",
      title: "Shades of India - Marketing Head",
      content: "Working with Dhruv is like being in a true partnership. During our engagement, he demonstrated remarkable expertise in both strategic planning and tactical execution that directly contributed to our business growth and helped us break the stagnant cycle we were stuck in. What makes Dhruv particularly effective is how he approaches each campaign not just as a job, but as a personal mission to deliver outstanding outcomes."
    },
    {
      id: 3,
      name: "Dhruv Sharma",
      title: "Product Manager",
      content: "Dhruv's leadership and strategic vision have propelled our product's success. His ability to understand user needs and translate them into actionable features is unparalleled."
    },
    {
      id: 4,
      name: "Anita Desai",
      title: "Chief Marketing Officer",
      content: "Working alongside Dhruv brought clarity and focus to our marketing efforts. His dedication and expertise ensured we consistently hit our growth targets."
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-2 py-8 flex justify-center items-center">
      <div className="w-full max-w-6xl">
        <SliderLib {...settings}>
          {testimonials.map((t) => (
            <div key={t.id} className="flex items-stretch justify-center h-full">
              <div className="bg-white border-2 w-full max-w-md min-w-0 flex flex-col items-center justify-center p-6 mx-auto shadow-lg rounded-xl transition-all duration-300">
                <h4 className="font-bold text-[#54453E] text-lg mb-1 text-center">{t.name}</h4>
                <p className="text-xs text-[#54453E]/70 mb-2 text-center">{t.title}</p>
                <p className="text-xs text-[#54453E]/60 mt-2 line-clamp-4 text-center">{t.content}</p>
              </div>
            </div>
          ))}
        </SliderLib>
      </div>
    </div>
  );
};