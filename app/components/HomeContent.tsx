'use client'

import { Box, Button, Container, Link, Typography } from "@mui/material"
import ServiceCards from "./ServiceCards"

const HomeContent = () => {

    const message = <Typography variant="h4">Spit and Span Corporate Cleaning</Typography>

    const para1 = "Welcome to Spit and Span Corporate Cleaning, your premier choice for top-quality cleaning services. Our team of experienced cleaners provides reliable, efficient, and affordable cleaning solutions for businesses and homeowners throughout the area. From construction and post-construction cleaning to office cleanup, Airbnb cleaning, move-out cleaning, and more, we have the expertise and tools necessary to tackle any cleaning job, big or small."

    const para2 = '"Experience the difference with our cleaning services"'

    const para3 = "DISINFECTING SERVICES - COMMERCIAL CLEANING - JANITORIAL SERVICES"

  return (
    <Box>
      <Container>
        <Box textAlign='center' mt={5} mb={5}>
          {message}
        </Box>
        <Box mb={5}>
          <Typography>
          {para1}
          </Typography>
        </Box>
      </Container>
      <Box textAlign='center' mt={5} mb={5} sx={{backgroundColor: 'black'}} paddingY={15} paddingX={5}>
        <Typography variant="h4" color={'white'}>
          {para2}
        </Typography>
        <Box mt={5}>
          <Link href={'/services'}>
                <Button variant="contained" color="secondary">Services</Button>
          </Link>
        </Box>
      </Box>
      <Box mb={5}>
       
      </Box>
    </Box>
  )
}

export default HomeContent
