import React from 'react'
import './style.css'
import Herosection from './Components/herosection'
import Tracksection from './Components/tracksection'
import Learnsection from './Components/learnsection'
import Students from './Components/students'
import Ourtracks from './Components/ourtracks'
import Subscribe from './Components/subscribe'

const HomePage = () => {
  return (
    <div>
      <Herosection />
      <Tracksection />
      <Learnsection />
      <Students />
      <Ourtracks />
      <Subscribe />
    </div>
  )
}

export default HomePage
