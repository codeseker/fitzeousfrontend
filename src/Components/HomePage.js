import React from 'react'
import SliderSection from './HomeComponents/SliderSection'
import OurServices from './HomeComponents/OurServices'
import Testimonial from './HomeComponents/Testimonial'
import Gallery from './HomeComponents/Gallery'
import Contact from './HomeComponents/Contact'

export default function HomePage() {
  return (
    <div>
      <SliderSection/>
      <OurServices/>
      <Testimonial/>
      <Gallery/>
      <Contact/>
    </div>
  )
}
