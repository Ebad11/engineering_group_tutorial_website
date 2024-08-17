import ContactForm from '@/components/forms/ContactForm';
import React from 'react'

export const metadata = {
  title: "Contact Us",
  description: "Empowering engineers through knowledge and innovation. Join our platform to excel in the field of engineering.",
};

const page = () => {
  return (
    <div>
      <ContactForm course=''/>
    </div>
  )
}

export default page;