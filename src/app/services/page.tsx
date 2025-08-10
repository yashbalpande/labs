import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Service from '@/components/Service'
import Link from 'next/link'

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
                    <Link href={'/contact'}><button className="mt-10 px-6 py-3 bg-[#3A2E2B] text-white rounded-md">Get In Touch!</button>
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
                <h1 className='text-3xl font-extrabold ml-[10%]'>Our Service Include</h1>
                <Service
                    number="01"
                    title="SEO"
                    features={[
                        { title: "Site Health & Technical SEO", icon: "/icons/site-health.png" },
                        { title: "Keyword-Led Content Optimization", icon: "/icons/keyword.png" },
                        { title: "Backlink Strategy & Authority Building", icon: "/icons/backlink.png" },
                        { title: "Rank Tracking & SEO Analytics", icon: "/icons/rank-tracking.png" },
                    ]}
                />



                <Service
                    number="02"
                    title="Paid Marketing"
                    features={[
                        { title: "Performance & Funnel Audit", icon: "/icons/performance.png" },
                        { title: "Digital Brand Visibility", icon: "/icons/brand-visibility.png" },
                        { title: "Customer Journey Engagement", icon: "/icons/customer-journey.png" },
                        { title: "Revenue & Lead Generation", icon: "/icons/revenue.png" },
                    ]}
                />



                <Service
                    number="03"
                    title="Website Development"
                    features={[
                        { title: "End-to-End Web Development", icon: "/icons/web-dev.png" },
                        { title: "UI/UX Optimization", icon: "/icons/uiux.png" },
                        { title: "Tool & Analytics Setup", icon: "/icons/analytics.png" },
                        { title: "Website Maintenance", icon: "/icons/maintenance.png" },
                    ]}
                />
            </div>
        </div>
    )
}

export default Page
