import React from 'react';
import Ccard from './Components/Card/Ccard';
import Ccarousel from './Components/Carousel/Ccarousel';
import Header from './Components/Header/Header';
import Header2 from './Components/Header2/Header2';
import img1 from "./Assets/img1.JPG";
import img2 from "./Assets/img2.JPG";
import img3 from "./Assets/img3.JPG";
import img4 from "./Assets/img4.JPG";

export default function App() {
  return (
    <>
      <Header />
      <Header2 />
      <Ccarousel />
      <Ccard title="Up to 70% off + 10% instant discount* | Furniture & Home" img={img1}/>
      <Ccard title="Up to 50% off | TVs & appliances" img={img2}/>
      <Ccard title="Up to 40% off | Mobiles & accessories" img={img3}/>
      <Ccard title="Sign in for your best experience" img={img4}/>
    </>
  );
}
