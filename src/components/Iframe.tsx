import { Box, styled } from '@mui/material'
import React from 'react'

export interface IFrameProps {
  src: string;
  width?: string;
  height?: string;
}

const Header = styled('div')({
  padding: 10,
  paddingLeft: 20,
  backgroundColor: '#ddd',
  borderLeft: '10px solid #bbb',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-all'
})

const IFrameStyled = styled('iframe')({
  border: 'none',
  outline: 'none',
})

const IFrameContainer = styled('div')({
  marginTop: 20,
  marginBottom: 20,
})

export const IFrame = ({
  src,
  width = '100%',
  height = '500px'
}: IFrameProps) => {
  return (
    <IFrameContainer>
      <Header>{src}</Header>
      <IFrameStyled src={src} height={height} width={width} />
    </IFrameContainer>
  )
}
