import React from 'react'
import HeroImg from './HeroImg';
import ActionAreaCard from './Card'
import Carrousel from './Carrousel'

function Main() {
  return (
    <main>
      <HeroImg />
      <h1>Popular MyTineraries:</h1>
      <Carrousel />
      {/* <ActionAreaCard /> */}
    </main>
  )
}

export default Main