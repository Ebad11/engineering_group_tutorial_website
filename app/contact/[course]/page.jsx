"use client"
import ContactForm from '@/components/forms/ContactForm';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'



const page = () => {
  const {course}= useParams();
  return (
    <div>
      <ContactForm course={course} />
    </div>
  )
}

export default page;