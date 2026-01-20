import React from 'react'

import Navbar from './Components/Navbar.jsx'
import Banner from './Components/Banner.jsx'
import Footer from './Components/Footer.jsx'

import Acsesuars from './Components/Acsesuars.jsx'

import Konfigurator from './Components/Konfigurator.jsx'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      
      <Acsesuars/>
      <Konfigurator/>
      <Footer/>

    </div>
  )
}

