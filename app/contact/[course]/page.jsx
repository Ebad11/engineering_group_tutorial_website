"use client"
import ContactForm from '@/components/forms/ContactForm';
import Head from 'next/head';
import { useParams } from 'next/navigation';
import React from 'react'



const page = () => {
  const {course}= useParams();
  return (
    <>
   <Head>
        <title>Contact Us</title>
        <meta name="description" content="Empowering engineers through knowledge and innovation. Join our platform to excel in the field of engineering." />
      </Head>
    <div>
      <ContactForm course={course} />
    </div>
    </>
  )
}

export default page;