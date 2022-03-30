import React, { useEffect } from 'react'
import HeroImg from '../components/HeroImg';
import Carrousel from '../components/Carrousel'

function Main() {
  
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[]);

  return (
    <main>
      <HeroImg />
      <h1>Popular MyTineraries:</h1>
      <Carrousel />
    </main>
  )
}

export default Main