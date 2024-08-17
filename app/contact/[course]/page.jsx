import ContactForm from '@/components/forms/ContactForm';
import { useParams } from 'next/navigation';
import React from 'react'

export const metadata = {
  title: "Contact Us",
  description: "Empowering engineers through knowledge and innovation. Join our platform to excel in the field of engineering.",
};

const page = () => {
  const {course}= useParams();
  return (
    <div>
      <ContactForm course={course} />
    </div>
  )
}

export default page;