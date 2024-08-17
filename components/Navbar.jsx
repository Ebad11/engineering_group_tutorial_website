"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);
  const pathname=usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 || pathname !=='/') {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return (

    <div className={`bg-transparent sticky top-0 z-20 w-full`}>
      <div className={`absolute w-full transition-bg duration-500 ease-in  ${scrolled ? 'bg-black shadow-sm shadow-yellow-600' : 'bg-transparent'}`}>
      <div className={`container font-merriweather p-3 mx-auto w-full flex items-center gap-5 h-full text-white`}>
      <Link href={'/'}><Image src={`/assets/logo.jpeg`} alt='logo' className='rounded-full' width={50} height={50}/></Link>
      <Link href={`/`}>Overview</Link>
      <Link href={`/contact`}>Contact</Link>
    </div>
    </div>
    </div>
  )
}

export default Navbar