import React from 'react'
import Hero from './Sections/Hero'
import Navbar from './components/Navbar'
import Machines from './Sections/Machines'

const App = () => {
  return (
    <>
    <Navbar/>
      <Hero />
      <Machines/>
    </>
  )
}

export default App