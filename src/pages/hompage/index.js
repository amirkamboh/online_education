import React from 'react'
import './style.css'
import Herosection from './Components/herosection'
import Tracksection from './Components/tracksection'
import Learnsection from './Components/learnsection'
import Students from './Components/students'

const HomePage = () => {
  return (
    <div>
      <Herosection />
      <Tracksection />
      <Learnsection />
      <Students />
    </div>
  )
}

export default HomePage
