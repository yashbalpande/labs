'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  const handleHomeClick = () => {
    console.log('Home button clicked, navigating to /');
  }

  return (
    <div className=" flex items-center justify-between p-3 bg-white">
      <div>
        <Image src={'/logo.png'} alt="logo" height={80} width={80} />
      </div>

      <div className="flex gap-6 text-gray-800 text-lg">
        <Link 
          href="/" 
          onClick={handleHomeClick}
          className={`hover:text-black transition font-montserrat cursor-pointer  px-2  pb-2 ${
            pathname === '/' ? 'font-bold' : ''
          }`}
        >
          Home
        </Link>
        <Link 
          href="/services"
          className={`hover:text-black transition font-montserrat cursor-pointer px-2  ${
            pathname === '/services' ? 'font-bold' : ''
          }`}
        >
          Services
        </Link>
      </div>

      <div>
        <Link href="/contact">
        <button className="text-white bg-[#54453E] px-4 py-1 rounded-lg cursor-pointer font-montserrat">
          Let's Talk
        </button>
        </Link>
      </div>


    </div>
  )
}

export default Navbar
