"use client";

import { Box, Grid,Typography } from "@mui/material"
import { RiseLoader } from "react-spinners"



const LoadingSpinner = () => {
  return (
    <Grid 
      container 
      height="100vh" 
      alignItems="center" 
      justifyContent="center" 
      direction="column"
    >
        <RiseLoader 
            color="#CAD52D"
            loading
        />
    </Grid>
  )
}

export default LoadingSpinner