import React from 'react'

import NavBar from '../components/layout/NavBar'
import AltoCampuses from '../components/sections/AltoCampuses'
import Campus from '../components/sections/Campus'
import Community from '../components/sections/Community'
import Events from '../components/sections/Events'
import Explore from '../components/sections/Explore'
import Hero from '../components/sections/Hero'
import Schools from '../components/sections/Schools'
import SpotLight from '../components/sections/SpotLight'
import Studies from '../components/sections/Studies'
import Information from '../components/sections/Informatio'
import Read from '../components/sections/Read'
import Follow from '../components/sections/Follow'
import Footer from '../components/layout/Footer';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] });
const index = () => {

  return (
    <div className={`bg-white ${inter.className}`}>
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
      <Read />
      <Follow />
      <Footer />

    </div>
  )
}

export default index