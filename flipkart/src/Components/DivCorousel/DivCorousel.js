import React from 'react'
import offer1 from '../../Assets/offer1.jpeg'
import offer2 from '../../Assets/offer2.jpeg'
import Ccarousel2 from '../Carousel/Ccarousel2'

export default function DivCorousel() {
  return (
    <div style={{height:"363px", width:"100%"}}>
        <div style={{width:"20%",height:"363px", float:"left"}}><img src={offer1} alt="" style={{width:"100%",height:"363px"}}/></div>
        <div style={{width:"60%",height:"363px", backgroundColor:"green", float:"left"}}><Ccarousel2 /></div>
        <div style={{width:"20%",height:"363px", float:"left"}}><img src={offer2} alt="" style={{width:"100%",height:"363px"}}/></div>
    </div>
  )
}
