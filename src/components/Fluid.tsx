import React from 'react'
import { Container as MuiContainer } from '@mui/material'

export const Fluid: React.FC<{}> = ({
  children
}) => {
  return (
    <MuiContainer sx={{ position: 'relative' }}>
      {children}
    </MuiContainer>
  )
}
