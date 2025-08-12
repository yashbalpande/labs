'use client'
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import GrowthEngine from "@/components/Growth";
import { Slider } from "@/components/Slider";
import { Carme } from "next/font/google";
import Footer from "@/components/Footer";
import React from "react";

export default function Home() {
  const [animateLogos, setAnimateLogos] = React.useState(false);
  const logosRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setAnimateLogos(false);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateLogos(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (logosRef.current) {
      observer.observe(logosRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div key="home-page" className="min-h-screen w-full bg-white text-[#54453E]">
        <div
          className="w-full h-[70vh] bg-cover bg-center relative"
          style={{ backgroundImage: "url('/vector.png')" }}
        >
          <div className="relative z-50">
            <Navbar />
          </div>
          <div className="mt-10 h-[35%] flex flex-col items-center justify-between text-center px-4">
            <h1 className="text-4xl font-lilita text-[#54453E]     ">Welcome to the Lab</h1>
            <h1 className="text-2xl   text-[#54453E] font-montserrat  max-w-[600px]">Where strategy is tested, results are proven,<br />and growth is the only constant.</h1>
            <button className="text-white font-montserrat bg-[#54453E] px-12 py-3 rounded-lg ">Begin the Experiment!</button>
          </div>
          <div className="absolute left-1/2 bottom-[-40px] transform -translate-x-1/2 z-20">
            <div className=" p-2 w-60 h-30 flex items-center justify-center ">
              <Image src="/logo.png" alt="logo" width={180} height={180} className="object-contain" />
            </div>
          </div>
        </div>
        <div className="mt-10 mb-10 flex flex-col justify-center items-center w-full px-2 sm:px-1">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-3">
            <div className="text-center md:text-left md:w-1/2 w-full mb-2">
              <h1 className="text-2xl sm:text-xl font-lilita text-[#54453E] font-bold mb-2">The Lab's Core Experiments</h1>
              <Link href="/services"><button className="bg-sky-300 text-[#54453E] font-montserrat px-4 py-2 rounded-md cursor-pointer text-base sm:text-sm">All Services</button></Link>
            </div>
            <div className="text-sm sm:text-xs text-[#54453E] font-montserrat text-center md:text-left md:w-1/2 w-full">
              <p>This isn't a list of services. <br />It's a set of controlled experiments <br />designed to engineer real growth.</p>
            </div>
          </div>
        </div>
        <div className="relative mt-10 sm:mt-6 w-full">
          <div className="bg-[#4DD1F4] w-full h-[120px] sm:h-[60px]"></div>
          <div className="w-full flex flex-col sm:flex-col gap-4 items-center justify-center px-2">
            <Card icon="/mark-icon.png" index="01" heading="Performance Advertising" para="Results that aren't just impressive. They're profitable." imageSize={70} />
            <Card icon="/development.png" index="02" heading="Website Development & Maintenance" para="A site that performs 24/7 — so you don't have to." imageSize={70} />
            <Card icon="/seo-site.png" index="03" heading="On-Page & Off-Page SEO" para="Get found by the right people, at the right time, for the right reasons." imageSize={70} />
          </div>
        </div>
        <div className="w-[70%] h-auto border border-[#4DD1F4] border-t-0 mt-0 mx-auto rounded-b-lg pb-7">
          <div className="flex flex-col items-center justify-center mt-0 text-center pt-20">
            <h2 className="text-4xl md:text-4xl text-[#54453E] font-montserrat font-thin">Real Brands. Real Experiments.</h2>
            <h2 className="text-2xl md:text-2xl font-bold text-[#54453E] font-montserrat font-semibold mb-4">Real Results.</h2>
            <Link href="/services"><button className="bg-sky-400 text-white px-6 py-2 rounded-md hover:bg-sky-500 transition cursor-pointer">All Services</button></Link>
          </div>
          <div ref={logosRef} className={`mt-[7%] ${animateLogos ? "animate-in" : ""}`}>
            <div className="flex items-center justify-between mb-4">
              <div className="fall-in" style={{ animationDelay: '200ms' }}>
                <div className="h-36 w-36 border border-[#4DD1F4] rounded-md ml-30 rotate-[-63deg] bg-cover bg-center">
                  <Image src="/ARADHANA.png" alt="aradhana" height={500} width={500} className="rotate-[63deg] object-cover " />
                </div>
              </div>
              <div className="fall-in" style={{ animationDelay: '800ms' }}>
                <div className="h-36 w-36 border-1 rounded-md border-[#4DD1F4] transform rotate-[120.12deg] mr-7">
                  <Image src="/Little-tag.png" alt="little-tag" height={300} width={300} className="rotate-[-120deg] object-cover mr-5 " />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-5 mr-10 mb-0">
              <div className="h-36 w-36 border-1 rounded-md border-[#4DD1F4] transform rotate-[34.85deg] ml-10  mr-0 fall-in" style={{ animationDelay: '1s' }}>
                <Image src="/one-teacher.png" alt="one-teacher" height={500} width={500} className="rotate-[34.85deg] object-cover " />
              </div>
              <div className="h-36 w-36 border-1 rounded-md border-[#4DD1F4] transform rotate-[14.96deg] fall-in" style={{ animationDelay: '1s' }}><Image src="/Payal Jain.png" alt="payal-jain" height={500} width={500} className="rotate-[14.96deg] object-cover mt-10 " /></div>
              <div className="h-36 w-36 border-1 rounded-md border-[#4DD1F4] transform rotate-[29deg] m-0 fall-in" style={{ animationDelay: '1.2s' }}><Image src="/shades.png" alt="shades" height={500} width={500} className="rotate-[-20deg] object-cover mt-5" /></div>
              <div className="h-36 w-36 border-1 rounded-md border-[#4DD1F4] transform rotate-[-29deg] fall-in" style={{ animationDelay: '1.4s' }}><Image src="/Vaishali.png" alt="vaishali" height={500} width={500} className="rotate-[20deg] object-cover mt-10" /></div>
              <div className="h-36 w-36 border-1 rounded-md border-[#4DD1F4] transform rotate-[-20deg] fall-in" style={{ animationDelay: '1.6s' }}><Image src="/Ksafe.png" alt="ksafe" height={500} width={500} className="rotate-[20deg] object-cover " /></div>
            </div>
          </div>
        </div>
        <div className="w-full relative bg-white mt-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-8 max-w-6xl mx-auto mb-2">
            <h2 className="text-xl md:text-2xl font-lilita text-[#54453E] font-bold text-center md:text-left">Client Observations and <br /> Inference</h2>
            <p className="text-[#54453E] font-montserrat text-center md:text-left text-base leading-relaxed mt-2">Hear from the brands that trusted our process — <br />and saw the results.</p>
          </div>
          <div className="w-full relative h-[120px]">
            <div className="absolute left-0 top-0 w-[120px] h-[120px] sm:w-[80px] sm:h-[80px] relative">
              <Image src="/cloud-left.png" alt="clouds-left" fill sizes="100vw" style={{objectFit: 'contain'}} />
            </div>
            <div className="absolute right-0 top-0 w-[120px] h-[120px] sm:w-[80px] sm:h-[80px] relative">
              <Image src="/cloud-right.png" alt="clouds-right" fill sizes="100vw" style={{objectFit: 'contain'}} />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-4 mt-8 mb-8 px-2 sm:px-1 overflow-x-hidden">
            <Slider />
          </div>
          <div className='flex mt-[10%] gap-[10%] justify-center items-center text-[#54453E] p-6'>
            <h1 className='text-2xl border-black text-center font-black text-[#54453E] font-lilita mb-2'>Inside Our 5-Step Growth Engine</h1>
            <p className='text-lg text-center text-[#54453E] font-montserrat font-light'>Growth isn't guessed. It's engineered</p>
          </div>
        </div>
        <div className="h-[50vh] mb-20 flex items-center justify-center">
          <Image src="/digram.png" alt="diagram" width={900} height={600} className="object-contain" />
        </div>
        <div className="bg-[#4DD1F4] w-full h-[20vh]"></div>
        <div className="h-auto w-full flex flex-col items-center justify-center">
          <div className="w-full flex flex-col justify-center items-center px-4 sm:px-2">
            <div className="w-40 h-40 sm:w-32 sm:h-32 rounded-md bg-[url('/ceo.png')] bg-cover bg-center mx-auto mb-2"></div>
            <h1 className="text-4xl sm:text-2xl font-normal text-[#54453E] font-montserrat">Experiment.</h1>
            <h1 className="text-4xl sm:text-2xl font-normal text-[#54453E] font-montserrat">Evolve.</h1>
            <h1 className="text-4xl sm:text-2xl font-normal text-[#54453E] font-montserrat">Expand.</h1>
            <p className="mt-4 text-sm sm:text-xs text-[#54453E] font-montserrat leading-relaxed w-full text-center">We believe that brands deserve more than <br />just ‘social media management’ or ‘ad <br /> campaigns’.<br /><br />So, we built a LAB for it.</p>
            <div className="mt-4">
              <h2 className="text-[#4DD1F4] font-bold text-xl sm:text-lg inline-block">Dhruv Tewari</h2>
              <span className="text-[#4DD1F4] font-bold text-lg ml-1">›</span>
              <div className="text-[#4DD1F4] text-sm">Founder</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
