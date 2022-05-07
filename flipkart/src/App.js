import React from 'react'
import Apiimg from './Components/Apiimg/Apiimg'
import Ccarousel from './Components/Carousel/Ccarousel'
import DivCorousel from './Components/DivCorousel/DivCorousel'
import Header from './Components/Header/Header'

export default function App() {
  return (
    <div>
      <Header />
      <Apiimg />
      <Ccarousel />
      <DivCorousel />
    </div>
  )
}
