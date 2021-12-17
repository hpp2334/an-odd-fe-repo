import { styled, Typography } from '@mui/material'
import React from 'react'

export const SectionBlock = styled('div')(({ theme }) => ({
  padding: theme.spacing(5),
}))

export const SectionTitle: React.FC<{}> = ({ children }) => {
  return (
    <Typography variant="h4" sx={{ marginTop: 4, marginBottom: 4 }}>
      {children}
    </Typography>
  )
}