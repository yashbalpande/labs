'use client'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SuccessPage = () => {
    return (
        <div className='min-h-screen bg-white'>
            <div className="relative z-10">
                <Navbar />
            </div>

            <div className="min-h-[50vh] flex items-center justify-center px-4">
                <div className="max-w-2xl mx-auto text-center">
                

                    {/* Success Message */}
                    <h1 className="text-4xl font-lilita text-[#54453E] mb-6">
                    Submitted!
                    </h1>
                    <h1 className="text-4xl font-lilita text-[#54453E] mb-6">
                    Here’s what to expect
                    </h1>
                    
                    <p className="text-lg text-[#54453E] font-montserrat mb-8 leading-relaxed">
                    Once your form lands in our inbox, we’ll circle back <br />
                    within 24–48 hours with brainpower locked and loaded.
                    </p>

                    </div>
            </div>
            <div className='flex justify-end m-0 p-0'>
                <Image 
                    src="/scope.png" 
                    alt="diagram" 
                    width={300} 
                    height={200}
                    className="object-contain"
                />
            </div>
            
            <div className='h-[2vh] w-full m-0 p-0 flex items-center justify-start gap-2 overflow-hidden'>
                <div className='bg-[#4DD1F4] w-[15%] h-full rounded-r-md '> </div>
                <div className='bg-[#4DD1F4] w-[15%] h-full rounded-md'> </div>
                <div className='bg-[#4DD1F4] w-[15%] h-full rounded-md'> </div>
                <div className='bg-[#4DD1F4] w-[15%] h-full rounded-md'> </div>
                <div className='bg-[#4DD1F4] w-[15%] h-full rounded-md'> </div>
                <div className='bg-[#4DD1F4] w-[15%] h-full rounded-md'> </div>
                <div className='bg-[#4DD1F4] w-[15%] h-full rounded-md'> </div>
                <div className='bg-[#4DD1F4] w-[15%] h-full rounded-l-md'> </div>
            </div>
            
            <div className='flex mt-[5%] gap-[10%] justify-center items-center text-[#54453E] p-6'>
                <h1 className='text-2xl  border-black text-center font-black text-[#54453E] font-lilita mb-2'>Inside Our 5-Step Growth Engine</h1>
                <p className='text-lg text-center text-[#54453E] font-montserrat font-light'>Growth isn't guessed. It's engineered</p>
            </div>
            
            <div className="h-[70vh]  flex items-center justify-center">
                <Image 
                    src="/digram.png" 
                    alt="diagram" 
                    width={900} 
                    height={600}
                    className="object-contain"
                />
            </div>
            <div className="bg-[#4DD1F4] w-full h-[15vh]"></div>

      <div className="h-screen w-full flex items-center">
        <div className="w-[50%] h-full flex flex-col justify-center ml-[20%]">
          <h1 className="text-6xl font-extralight text-[#54453E] font-montserrat">Experiment.</h1>
          <br />
          <h1 className="text-6xl font-extralight text-[#54453E] font-montserrat">Evolve.</h1>
          <br />
          <h1 className="text-6xl font-extralight text-[#54453E] font-montserrat">Expand.</h1>

          <p className="mt-6 text-sm text-[#54453E] font-montserrat leading-relaxed w-[70%]">
            We believe that brands deserve more than <br />just ‘social media management’ or ‘ad <br /> campaigns’.
            <br /><br />
            So, we built a LAB for it.
          </p>

          <div className="mt-6">
            <h2 className="text-[#4DD1F4] font-bold text-2xl inline-block">Dhruv Tewari</h2>
            <span className="text-[#4DD1F4] font-bold text-lg ml-1">›</span>
            <div className="text-[#4DD1F4] text-sm">Founder</div>
          </div>
        </div>

        <div className="w-[50%] h-full">
          <div
            className="mt-[34%] w-72 h-84 rounded-md  bg-[url('/ceo.png')] bg-cover bg-center"
          ></div>
        </div>


      </div>
      

            <Footer />
        </div>
    )
}

export default SuccessPage
