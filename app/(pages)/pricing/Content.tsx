'use client'
import PageTitle from "@/app/components/PageTitle"
import { Box, Divider, Typography } from "@mui/material"


const Content = () => {

  const escChar = "Customized Packages: We can create a tailored cleaning plan to accommodate your project's unique needs. Contact us for a personalized quote."

  const escChar2 = ""

  return (
    <section>
      <PageTitle title={'Pricing'}/>
      <Box mb={5}>
        <Typography variant="body1" mb={2}>
          At Spit and Span Corporate Cleaning, we offer competitive pricing for our professional cleaning services. Our pricing is transparent, straightforward, and tailored to meet your specific needs. Whether you require construction cleaning, office cleanup, Airbnb cleaning, or general residential venue move-out cleaning, we have options that fit your budget.
        </Typography>
        <Typography variant="body1" mb={2}>
          Please note that the following prices are estimates and may vary based on the size, condition, and specific requirements of your space. For an accurate quote, we recommend contacting us directly to discuss your cleaning needs in detail.
        </Typography>
    </Box>
   <Box>
   <Typography variant="body1" mb={2}>
     <Box mb={5}>
      <b>Construction and Post Construction Cleaning:</b>
     <ul>
      <li>Small to Medium-sized Projects: Starting from $500</li>
       <li>Large Projects: Starting from $800</li>
       <li>{escChar}</li>
     </ul>
     <Divider/>
     </Box>
     <Box mb={5}>
     <b>Office Cleanup:</b>
     <ul>
       <li>Customized Plans: We understand that every office has its own requirements. Contact us to discuss your specific cleaning needs and receive a customized pricing quote.</li>
     </ul>
     <Divider/>
     </Box>
     <Box mb={5}>
     <b>Airbnb Cleaning:</b>
     <ul>
       <li>Customized Plans: We understand that every office has its own requirements. Contact us to discuss your specific cleaning needs and receive a customized pricing quote.</li>
       <li>Additional Services: We offer optional add-on services such as linen/towel change, restocking supplies, and more. Please inquire for pricing.</li>
     </ul>
     </Box>
     <Divider/>
     <Box mb={5} mt={5}>
     <b>General Residential:</b>
     <ul>
       <li>One-Bedroom Homes/Apartments: Starting from $XXX</li>
       <li>Two-Bedroom Homes/Apartments: Starting from $XXX</li>
       <li>Three-Bedroom Homes/Apartments: Starting from $XXX</li>
       <li>Customized Packages: If you have specific requirements or larger properties, we can create a personalized cleaning plan. Contact us for a detailed quote.
       </li>
     </ul>
     </Box>
     <b>Other Services:</b>
   </Typography>
   <Typography variant="body1" mb={2}>
     We also provide a range of additional cleaning services, including carpet cleaning, window cleaning, deep cleaning, and more. Please contact us to discuss your needs and receive a customized pricing quote.
   </Typography>
   <Typography variant="body1" mb={2}>
     At Spit and Span Corporate Cleaning, we strive to offer excellent value for your investment. Our team of professional cleaners is dedicated to delivering outstanding results and ensuring your satisfaction. Contact us today to get a detailed quote and book your cleaning service.
   </Typography>
   <Typography variant="body1" mb={2}>
   Please note that prices are subject to change and may vary based on location and specific circumstances.
   </Typography>
   </Box>
 </section>
  )
}

export default Content
