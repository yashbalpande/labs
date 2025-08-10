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
    <div className="w-full relative">
      <div 
        className="flex pb-6 overflow-x-auto scroll-smooth snap-x snap-mandatory"
        role="list"
        aria-label="Testimonials"
      >
        {testimonials.map((t) => (
          <div
            key={t.id}
            role="listitem"
            className="flex-none w-[90vw] sm:w-[50vw] lg:w-[35%] h-[50vh] bg-white border-2 border-black mx-4 rounded-md p-4 snap-start"
          >
            <div className="h-[80%] w-full flex flex-col gap-3">
              <div className="w-full">
                <h1 className="text-black font-bold text-3xl">{t.name}</h1>
                <h2 className="text-zinc-500 text-2xl font-extralight">{t.title}</h2>
              </div>
              <div className="w-full h-full pt-4 pr-2 overflow-y-auto">
                <p className="text-sm">{t.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};