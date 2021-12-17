import { Alert, AlertTitle, styled, Typography } from '@mui/material'
import React from 'react'
import { Fluid } from '../components/Fluid'
import { SectionBlock } from '../components/Section'
import { Strong } from '../components/Strong'

const Header = styled('div')(({ theme }) => ({
  fontSize: theme.typography.h5.fontSize,
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
  marginTop: theme.spacing(5),
}))

export const Intro = () => {
  return (
    <SectionBlock>
      <Fluid>
        <Typography variant='h4' sx={{ marginTop: 8, marginBottom: 4 }}>前端职责与缺点</Typography>
      </Fluid>
      <Fluid>
        <Header>特点</Header>
        <ul>
          <li>工作一般与<Strong>如何显示</Strong>有关</li>
          <li>更靠近用户，关注<Strong>用户体验</Strong></li>
        </ul>
      </Fluid>
      <Fluid>
      <Alert severity="error">
        <AlertTitle>关于前端，需要考虑一些 drawback</AlertTitle>
        <ul>
          <li>不被重视是常态，论重视程度，一般 服务端 {'>'} 客户端 {'>'} 前端</li>
          <li>要学的东西比较杂，同时对某些方面要求会精</li>
          <li>普遍被认为技术天花板低，尤其是中后台系统 (B 端系统)</li>
        </ul>
      </Alert>
      </Fluid>
    </SectionBlock>
  )
}
