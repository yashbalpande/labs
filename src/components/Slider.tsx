import React from "react";

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

  return (
    <div className="flex w-full  m-0 p-0 h-full w-full  gap-5 relative z-0">
      <div className="h-[309px] w-[10%] bg-white border-2 flex items-center justify-center p-2">
        <div className="text-center">
          <h4 className="font-bold text-[#54453E] text-xs">{testimonials[0].name}</h4>
          <p className="text-xs text-[#54453E]/70">{testimonials[0].title}</p>
        </div>
      </div>
      <div className="h-[309px] w-[40%] bg-white border-2 flex items-center justify-center p-4">
        <div className="text-center">
          <h4 className="font-bold text-[#54453E] text-sm">{testimonials[1].name}</h4>
          <p className="text-xs text-[#54453E]/70">{testimonials[1].title}</p>
          <p className="text-xs text-[#54453E]/60 mt-2 line-clamp-4">{testimonials[1].content}</p>
        </div>
      </div>
      <div className="h-[309px] w-[41%] bg-white border-2 flex items-center justify-center p-4">
        <div className="text-center">
          <h4 className="font-bold text-[#54453E] text-sm">{testimonials[2].name}</h4>
          <p className="text-xs text-[#54453E]/70">{testimonials[2].title}</p>
          <p className="text-xs text-[#54453E]/60 mt-2 line-clamp-4">{testimonials[2].content}</p>
        </div>
      </div>
      <div className="h-[309px] w-[9%] bg-white border-2 flex items-center justify-center p-2">
        <div className="text-center">
          <h4 className="font-bold text-[#54453E] text-xs">{testimonials[3].name}</h4>
          <p className="text-xs text-[#54453E]/70">{testimonials[3].title}</p>
        </div>
      </div>
    </div>
    
  );
};