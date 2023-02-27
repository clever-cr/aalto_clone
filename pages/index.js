import React from 'react'

import NavBar from '../components/layout/NavBar'
import AltoCampuses from '../components/sections/AltoCampuses'
import Campus from '../components/sections/Campus'
import Community from '../components/sections/Community'
import Events from '../components/sections/Events'
import Explore from '../components/sections/Explore'
import Hero from '../components/sections/Hero'
import Schools from '../components/sections/Schools'
import SpotLight from '../components/sections/spotLight'
import Studies from '../components/sections/Studies'
import Information from '../components/sections/Informatio'
const index = () => {

  return (
    <div>
      <NavBar />
      <Hero />
      <SpotLight />
      <Events />
      <Explore />
      <Schools />
      <Campus />
      <AltoCampuses />
      <Community />
      <Studies />
      <Information />

    </div>
  )
}

export default index