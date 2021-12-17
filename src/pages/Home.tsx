import { Typography, Box } from '@mui/material'
import React from 'react'
import Del from '../components/Del'

export const Home = () => {
  return (
    <Box sx={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <Typography variant='h2'>从学生到前端开发者</Typography>
      <Typography variant='caption'>本文由 houzaj 委托 hpp2334 <Del>杜撰</Del> 编写</Typography>
    </Box>
  )
}
