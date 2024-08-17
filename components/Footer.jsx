"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Footer = () => {
  let year = new Date().getFullYear();

  const [isWideScreen, setIsWideScreen] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-[#273758] w-full">
    <div className='container max-md:flex-col max-md:h-[310px] max-md:items-start max-md:gap-5 mx-auto max-2xl:pl-4 max-2xl:pr-4 text-[#6D7D8B] h-[280px] flex justify-between pt-8 pb-8 items-center text-xs font-merriweather font-bold'>
      { isWideScreen >768 &&
        <div className="flex justify-between flex-col h-full">
              <div className="flex flex-col gap-4">
              <Link href={'/'}><Image src={`/assets/logo.jpeg`} alt='logo' className='rounded-full' width={30} height={30}/></Link>
              <div>
              Engineering Group Tutorial
              </div>
              </div>
              <div className='leading-6'>
               Copyright Engineering Group Tutorial &copy; {year}.<br/>All rights reserved.
              </div>
        </div>
        }

        { isWideScreen>768 &&
          <div className="flex flex-col gap-5 h-full">
           <div className="text-base font-playfairSC">Links</div>
           <Link href={'/'}>Overview</Link>
           <Link href={'/'}>Contact</Link>
        </div>
        }


        <div className="flex flex-col gap-5 h-full">
           <div className="text-base font-playfairSC">Contact Us</div>
           <Link href={'mailto:engineeringgrouptutorial@gmail.com'}>engineeringgrouptutorial@gmail.com</Link>
           <Link href={'tel:+918169115798'}>+91 8169115798</Link>
           <Link href={'tel:+919137386857'}>+91 9137386857</Link>
           <Link href={'https://maps.app.goo.gl/fPkehRnCtz9X84Za8'} target='_blank' className='leading-6'>Kausa Mumbra<br/>Thane 400 612</Link>
        </div>


      {isWideScreen >=1280 &&
        <div className="flex h-full justify-center items-center">

        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.6397870908477!2d73.01986357346217!3d19.167238682056183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf6b575de4df%3A0xbbaf855c53881860!2sSalman%20Farsi%20English%20%26%20Urdu%20High%20School!5e0!3m2!1sen!2sin!4v1723884592343!5m2!1sen!2sin" width="350" height="220" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='rounded-lg  max-lg:hidden'></iframe>
         
        </div>
        
        }

      {
        isWideScreen <=768
        &&
        <div className='leading-6 text-center self-center'>
               Copyright Engineering Group Tutorial &copy; {year}.<br/>All rights reserved.
            </div>
      }
        
    </div>
    </div>
  )
}

export default Footer
   