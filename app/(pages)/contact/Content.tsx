'use client'
import PageTitle from '@/app/components/PageTitle'
import { Box, Typography } from '@mui/material'
import React from 'react'
import ContactForm from './ContactForm'

const Content = () => {
  return (
    <Box>
        <PageTitle title={'Contact Us'}/>
            <Typography  variant='body1' mb={5}>
            We would love to hear from you! If you have any questions, inquiries, or would like to request our cleaning services, please feel free to get in touch with us using the contact form below or the provided contact information.
            </Typography>
        <Box>
        <ContactForm/>
            <Typography  variant='body1' mb={5}>
            Thank you for considering Spit and Span Corporate Cleaning. We are committed to providing exceptional cleaning services and ensuring your complete satisfaction. We look forward to hearing from you and serving your cleaning needs.
            </Typography>
        </Box>
    </Box>
  )
}

export default Content
