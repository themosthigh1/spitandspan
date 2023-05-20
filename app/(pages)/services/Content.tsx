'use client'
import PageTitle from '@/app/components/PageTitle'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Content = () => {
  return (
    <Box mb={5}>
            <Box>
              <Typography variant='body1' mb={2} >
              <span><b>Construction and Post-Construction Cleaning:</b> Our expert team is equipped to handle the cleaning challenges that come with construction projects, providing a thorough cleanup to remove debris, dust, and any other construction-related mess.
              </span>
              </Typography>
              <Typography variant='body1' mb={2}>
              <span><b>
              Office Cleanup:</b> We understand the importance of a clean and organized workspace. Our office cleaning services create a pristine environment, enhancing productivity and leaving a positive impression on clients and employees.
              </span>
              </Typography>
              <Typography variant='body1' mb={2}>
              <span><b>Airbnb Cleaning:</b> We help Airbnb hosts maintain impeccable cleanliness standards. Our dedicated cleaners ensure that every guest enjoys a fresh and sanitized space, leaving positive reviews and repeat bookings.
              </span>
              </Typography>
              <Typography variant='body1' mb={2}>
              <span><b>General Residential Cleaning:</b> Our residential cleaning services cover every corner of your home. From living rooms to bathrooms, bedrooms to kitchens, we leave no stone unturned, delivering a sparkling clean and comfortable living space.
              Move-Out Cleaning: Moving can be stressful, but our move-out cleaning service takes the burden off your shoulders. We meticulously clean your former residence, ensuring a smooth transition for you and leaving the property in pristine condition.
              </span>
              </Typography>
          </Box>
    </Box>
  )
}

export default Content
