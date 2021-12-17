import React from 'react'
import { CssBaseline } from '@mui/material'
import { Intro } from './pages/Intro'
import { OfferSkills } from './pages/OfferSkills'
import { WebApplication } from './pages/WebApplication'
import { Home } from './pages/Home'
import { Roadmap } from './pages/Roadmap'
import { Suggestion } from './pages/Suggestion'

export const App = () => {
  return (
    <div>
      <CssBaseline />

      <Home />
      <WebApplication />
      <Intro />
      <OfferSkills />
      <Roadmap />
      <Suggestion />
    </div>
  )
}
