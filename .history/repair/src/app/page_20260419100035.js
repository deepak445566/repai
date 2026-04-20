import AboutUs from '@/components/About'
import HeroPage from '@/components/heroPage'
import SimpleGallery from '@/components/image'
import ServicesPage from '@/components/Service'
import WhyChooseUs from '@/components/whyChooseUs'
import HowItWorks from '@/components/work'
import React from 'react'

function page() {
  return (
   <>
   <HeroPage/>

   <ServicesPage/>
   <SimpleGallery/>
   <WhyChooseUs/>
   <HowItWorks/>
   </>
  )
}

export default page