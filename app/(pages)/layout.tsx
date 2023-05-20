"use client"

import { Box, Container } from "@mui/material"



export default function PageLayout({children,}: {children: React.ReactNode}) {

  return (
    <Container>
        <Box mt={5}>
            {children}
        </Box>
    </Container>
  )
}