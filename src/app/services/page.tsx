import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Service from '@/components/Service'
import Link from 'next/link'
import Footer from '@/components/Footer'

const Page = () => {
    return (
        <div className="min-h-screen bg-white">
            <div
                className="absolute bottom-[31%] left-0 w-full h-[100vh] bg-cover bg-center"
                style={{ backgroundImage: "url('/services-hero-image.png')" }}
            ></div>



            <div className="relative z-10">
                <Navbar />
            </div>




            <div className="relative z-10 flex items-center justify-between px-16 pt-20">
                <div className="max-w-xl">
                    <h1 className="text-2xl font-extrabold text-[#3A2E2B]">
                        Services That Power Up Your Performance.
                    </h1>
                    <p className="mt-4 text-lg text-[#3A2E2B]/80 leading-relaxed">
                        Whether it’s paid ads, SEO, or web development,
                        each service is optimized to connect, convert, and
                        compound results over time.
                    </p>
                    <Link href={'/contact'}><button className="mt-10 px-6 py-3 bg-[#54453E] text-white rounded-md cursor-pointer">Get In Touch!</button>
                    </Link>
                </div>



                <div>
                    <Image
                        src={'/service-header.png'}
                        alt="vector"
                        width={900}
                        height={900}
                        className="object-contain absolute bottom-[-25%] right-6"
                    />
                </div>



                
            </div>

            <div className="min-h-screen text-black mt-[20%] ml-[5%]">
                <h1 className='text-3xl font-montserrat ml-[10%]'>Our Service Include</h1>
                <Service
                    number="01"
                    title="SEO"
                    features={[
                        { title: "Site Health & Technical SEO", icon: "/site-health.png" },
                        { title: "Keyword-Led Content Optimization", icon: "/seos.png" },
                        { title: "Backlink Strategy & Authority Building", icon: "/sixone.png" },
                        { title: "Rank Tracking & SEO Analytics", icon: "/sixtwo.png" },
                    ]}
                />



                <Service
                    number="02"
                    title="Paid Marketing"
                    features={[
                        { title: "Performance & Funnel Audit", icon: "/sixthree.png" },
                        { title: "Digital Brand Visibility", icon: "/sixfive.png" },
                        { title: "Customer Journey Engagement", icon: "/sixfour.png" },
                        { title: "Revenue & Lead Generation", icon: "/sixsix.png" },
                    ]}
                />



                <Service
                    number="03"
                    title="Website Development"
                    features={[
                        { title: "End-to-End Web Development", icon: "/sixseven.png" },
                        { title: "UI/UX Optimization", icon: "/sixnine.png" },
                        { title: "Tool & Analytics Setup", icon: "/sixeight.png" },
                        { title: "Website Maintenance", icon: "/sevenzero.png" },
                    ]}
                />
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
                                                    <div className='bg-[#4DD1F4]w-[15%] h-full rounded-md'> </div>
                                                    <div className='bg-[#4DD1F4] w-[15%] h-full rounded-md'> </div>
                                                    <div className='bg-[#4DD1F4] w-[15%] h-full rounded-md'> </div>
                                                    <div className='bg-[#4DD1F4] w-[15%] h-full rounded-l-md'> </div>
              
   
                </div>
                <div className='flex mt-40 gap-[10%] justify-center items-center text-[#54453E] p-6'>
                  <h1 className='text-2xl  border-black text-center font-black text-[#54453E] font-lilita mb-2'>Inside Our 5-Step Growth Engine</h1>
                  <p className='text-lg text-center text-[#54453E] font-montserrat font-light'>Growth isn't guessed. It's engineered</p>
                </div>
            <div className="h-screen mt-[5%] flex items-center justify-center">
                
        <Image 
          src="/digram.png" 
          alt="diagram" 
          width={900} 
          height={600}
          className="object-contain"
        />
      </div>


      <div className="bg-[#4DD1F4] w-full h-[20vh]"></div>

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
            className="mt-[20%] w-72 h-84 rounded-md  bg-[url('/ceo.png')] bg-cover bg-center"
          ></div>
        </div>


      </div>
      <Footer />

        </div>
    )
}

export default Page
