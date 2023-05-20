'use client'

import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import HospitalCleaning from '../../public/spitandspan_hospital_cleaning.jpg'
import HomeCleaning from '../../public/spitandspan_home_cleaning.jpg'
import Constructioncleaning from '../../public/spitandspan_construction_cleaning.jpg'
import Image from 'next/image'



const cardData = [
    {title:'Hospital Cleaning',description:'',photo: HospitalCleaning},
    {title:'HomeCleaning',description:'',photo: HomeCleaning},
    {title:'Construction Cleaning',description:'',photo: Constructioncleaning}
]

const ServiceCards = () => {
  return (
    <Container>
        <Box mb={10}>
            <Grid container spacing={2} >
                <Grid item xs={12} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                <Image src={HospitalCleaning} alt='Hospital Cleaning' width={345} height={230}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Hospital Cleaning
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Our hospital cleaning service prioritizes health and safety, employing trained professionals, advanced protocols, and specialized disinfection to maintain a sterile and hygienic environment.
                    </Typography>
                </CardContent>
                </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                <Image src={HomeCleaning} alt='Home Cleaning' width={345} height={230}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Home Cleaning
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Our home cleaning solutions are thorough, reliable, and affordable. We offer customizable, professional, and eco-friendly cleaning services, personalized to meet your specific needs.
                    </Typography>
                </CardContent>
                </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                <Image src={Constructioncleaning} alt='Construction Cleaning' width={345} height={230}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Construction Cleaning
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    From debris to pristine spaces, our specialized construction cleaning service ensures a thorough and efficient cleanup, leaving your site ready for the next phase.
                    </Typography>
                </CardContent>
                </Card>
                </Grid>
        </Grid>
        </Box>
  </Container>
  )
}

export default ServiceCards


