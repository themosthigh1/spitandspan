'use client'
import { Typography } from '@mui/material'
import React from 'react'

type Props = {
    title: string
}

const PageTitle = ({title}: Props) => {
  return (
    <Typography variant="h3" mb={2}>
        {title}
    </Typography>
  )
}

export default PageTitle
