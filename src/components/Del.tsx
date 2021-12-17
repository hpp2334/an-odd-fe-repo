import { styled } from '@mui/material'
import React from 'react'

const Del = styled('span')(({ theme }) => ({
  textDecoration: 'line-through',
  color: theme.palette.text.disabled
}))

export default Del
