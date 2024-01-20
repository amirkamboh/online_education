import React from 'react'
import './style.css'
import Herosection from './Components/herosection'
import Tracksection from './Components/tracksection'
import Learnsection from './Components/learnsection'

const HomePage = () => {
  return (
    <div>
      <Herosection />
      <Tracksection />
      <Learnsection />
    </div>
  )
}

export default HomePage
