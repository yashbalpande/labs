import Link from 'next/link'
import React from 'react'
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
            <div className="w-full h-[55vh] bg-[url('/footer-image.png')] bg-cover bg-center flex flex-col items-center justify-center">
                <h1 className='font-bold text-center mt-10 text-[#54453E] font-lilita text-3xl font-bold text-outline-[#000000]'>Ready to cook up your next growth experiment?</h1>
                <h1 className='font-bold text-center text-[#54453E] font-lilita text-4xl '>Let’s get in the lab — strategy goggles on, results incoming.</h1>
                <Link href={'/contact'} className='mt-4 px-6 py-2 bg-[#54453E] rounded-md text-white'>Let's Talk</Link>
            </div>

            <div className="bg-[#4DD1F4] w-full py-10 px-8 flex justify-between">
                
                {/* Social Icons */}
                <div className="flex flex-col space-y-4">
                    <div className="flex space-x-3">
                        <div className="bg-white p-2 rounded-full"><FaLinkedinIn className="text-[#4DD1F4]" /></div>
                        <div className="bg-white p-2 rounded-full"><FaInstagram className="text-[#4DD1F4]" /></div>
                        <div className="bg-white p-2 rounded-full"><FaYoutube className="text-[#4DD1F4]" /></div>
                        <div className="bg-white p-2 rounded-full"><FaFacebookF className="text-[#4DD1F4]" /></div>
                    </div>
                    <p className="text-xs text-[#54453E] font-montserrat mt-2">The Strategy Lab is a trademark.<br />All rights reserved</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className=" text-[#54453E] font-lilita text-2xl mb-2">Quick Links</h3>
                    <ul className="space-y-1 font-montserrat text-lg text-[#54453E]">
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Case Studies</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Get in Touch */}
                <div className='w-[15%]'>
                    <h3 className="font-black text-[#54453E] font-lilita text-2xl mb-2">Get in Touch</h3>
                    <p className="mb-2  font-montserrat text-lg text-[#54453E]">Have a question, a project, or just wanna nerd out over strategy?</p>
                    <p>Dhruv@thestrategylab.in</p>
                    <p>+91 98765 43210</p>
                </div>

                {/* Stay in the Lab Loop */}
                <div className="max-w-xs">
                    <h3 className="font-black text-[#54453E] font-lilita text-2xl mb-2">Stay in the Lab Loop</h3>
                    <p className="mb-3  font-montserrat text-lg text-[#54453E]">Want in on our experiments, strategies, and marketing breakthroughs? Drop your email below — we’ll only send stuff worth testing!</p>
                    <div className="flex space-x-2 mb-3">
                        <input type="text" placeholder="Name" className="w-1/2 px-3 py-2 rounded-md bg-white border border-gray-300 placeholder:text-gray-700" />
                        <input type="email" placeholder="Email" className="w-1/2 px-3 py-2 rounded-md bg-white border border-gray-300 placeholder:text-gray-700" />
                    </div>
                    <button className="w-full bg-[#5A3C2D] text-white py-2 rounded-md">Ready for the experiment!</button>
                </div>
            </div>
        </div>
    )
}

export default Footer
