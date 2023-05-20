'use client'

import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import HeaderImage from '../../public/header2.png'
import Link from "next/link";



export default function Header() {

  const headerImage = <Image src={HeaderImage} alt="header"/>

  return (
    <Box 
      sx={{minHeight: '60vh', backgroundColor:'black', backgroundImage:'url(header.png)', backgroundPosition:'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}
    >
      <Box 
        component='div' 
        sx={{display: 'flex', justifyContent: 'center', alignItems:'center', height: '60vh', flexDirection: 'column'}}>
          <Box mt={20}>
          <Stack spacing={2} direction="row">
            <Link href={'/contact'}>
              <Button variant="contained">Contact</Button>
            </Link>
            <Link href={'/pricing'}>
              <Button variant="contained" color="secondary">Pricing</Button>
            </Link>
          </Stack>
          </Box>
          
      </Box>

    </Box>
  );
}