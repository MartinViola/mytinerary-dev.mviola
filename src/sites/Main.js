import React from 'react'
import HeroImg from '../components/HeroImg';
import Carrousel from '../components/Carrousel'

function Main() {
  return (
    <main>
      <HeroImg />
      <h1>Popular MyTineraries:</h1>
      <Carrousel />
    </main>
  )
}

export default Main