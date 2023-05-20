'use client'
import LoadingSpinner from '@/app/components/Layout/LoadingSpinner'
import PageTitle from '@/app/components/PageTitle'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Photo from '../../../public/shutterstock_2145825939.jpg'
import Content from './Content'

const Content2 = () => {
  return (
    <Box>
        <PageTitle title={'Our Services'}/>
          <Typography variant="body1" mb={5}>
            Our professional cleaning services are tailored to meet the unique needs of our clients. With a focus on quality and attention to detail, we offer a comprehensive range of services to ensure a clean and inviting environment. 
          </Typography>
      <Grid container>
        <Grid item xs={12} lg={6}>
            <Box   
                mb={5}        
                textAlign='center'
                component="div"
                sx={{
                    py: 5,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: '#CAD52D'
                }}>
                <Typography gutterBottom>
                    <b>Commercial Kitchen Cleaning</b>
                </Typography>
                <Typography gutterBottom>
                    <b>Floor Cleaning and Polishing</b>
                </Typography>
                <Typography gutterBottom>
                    <b>General Residential Cleaning</b>
                </Typography>
                <Typography gutterBottom>
                    <b>Post-Construction Cleaning</b>
                </Typography>
                <Typography gutterBottom>
                    <b>Post-Event Cleaning</b>
                </Typography>
                <Typography gutterBottom>
                    <b>Move-out cleaning</b>
                </Typography>
                <Typography gutterBottom>
                    <b>Pressure Washing</b>
                </Typography>

                <Typography gutterBottom>
                    <b>Hospital Cleaning</b>
                </Typography>
                <Typography gutterBottom>
                    <b>Airbnb Cleaning</b>
                </Typography>
                <Typography gutterBottom>
                    <b>Carpet Cleaning</b>
                </Typography>

                <Typography gutterBottom>
                    <b>Office Cleanup</b>
                </Typography>
                <Typography gutterBottom>
                    <b>Deep Cleaning</b>
                </Typography>
                <Typography gutterBottom>
                    <b>Venues</b>
                </Typography>
                <Typography gutterBottom variant='h3'>
                    <b>And More</b>
                </Typography>


            </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
            <Box height={538} width={570}>
                <Image src={Photo} alt='Cleaning Floor' height={538} width={570}/>
            </Box>
        </Grid>
      </Grid>
      <Content/>
    </Box>
  )
}

export default Content2
