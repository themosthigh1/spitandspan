'use client'
import { Box, Typography } from '@mui/material'
import React from 'react'
import Logo from '../../../public/Spit&Span.png'
import Image from 'next/image'
import PageTitle from '../../components/PageTitle'

const Content = () => {

  const para1 = "At Spit and Span Corporate Cleaning, we are dedicated to providing our clients with exceptional cleaning services that exceed their expectations. Our team of experienced and trained cleaners are fully licensed, insured, and equipped with the latest cleaning tools and techniques to ensure your space is left spotless every time."

  const para2 = "Founded by Rodney Bell Jr., a veteran of the cleaning industry, Spit and Span Corporate Cleaning has built a solid reputation for providing top-quality cleaning services with unmatched customer satisfaction. Our mission is to create a clean and healthy environment for our clients, one space at a time."

  const para3 = "We take pride in our work and approach each cleaning job with the utmost care and attention to detail. Our goal is to make sure that your space is not only clean, but also fresh, healthy, and inviting. We value our clients' trust and strive to build long-lasting relationships with each and every one of them."

  const para4 = "At Spit and Span Corporate Cleaning, we believe that a clean workplace is a healthy workplace. That's why we are committed to using environmentally friendly cleaning products and methods that are safe for both people and the planet. We are also fully insured and bonded, giving you peace of mind knowing that your property is in good hands."

  const para5 = "Thank you for considering Spit and Span for all of your cleaning needs. Contact us today to learn more about our services and how we can help keep your workplace clean and safe."
  
  return (

      <Box>
        <PageTitle title={'About Us'}/>
        <Typography variant="body1" mb={2}>
          {para1}
        </Typography>
        <Typography variant="body1" mb={2}>
          {para2}
        </Typography>
        <Typography variant="body1" mb={2}>
          {para3}
        </Typography>
        <Typography variant="body1" mb={2}>
          {para4}
            </Typography>
            <Typography variant="body1" mb={2}>
            {para5}
          </Typography>
          <Box  sx={{display: 'flex', alignItems:'center', height: '30vh', flexDirection: 'column'}} mb={10}>
            <Image src={Logo} alt='Spit & Span Logo' height={300} width={300}/>
          </Box>
      </Box>
  )
}

export default Content

