import React from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';
import "./Header2.css";
import {HiMenu} from 'react-icons/hi';
import logo5 from "../../Assets/logo5.JPG";
// import Sidebar from '../Sidebar/Sidebar';
// import { Link } from 'react-router-dom';

export default function Header2() {
  return (
    <Navbar bg="secondary" variant="dark">
    <Navbar.Brand><HiMenu />All</Navbar.Brand>
    {/* <Navbar.Brand><Link src={<Sidebar />}><HiMenu />All</Link></Navbar.Brand> */}
    <Nav className="me-auto">
      <Nav.Link href="">Best Sellers</Nav.Link>
      <Nav.Link href="">Mobiles</Nav.Link>
      <Nav.Link href="">Today's Deal</Nav.Link>
      <Nav.Link href="">Customer Service</Nav.Link>
      <Nav.Link href="">Fashion</Nav.Link>
      <Nav.Link href="">Electronics</Nav.Link>
      <Nav.Link href="">Prime</Nav.Link>
      <Nav.Link href="">Home & Kitchen</Nav.Link>
      <Nav.Link href="">New Releases</Nav.Link>
      <Nav.Link href="">Amazon Pay</Nav.Link>
      <Nav.Link href="">Computers</Nav.Link>
      <Nav.Link href=""><Image src={logo5} style={{width:"18rem"}}/></Nav.Link>
    </Nav>
  </Navbar>
  );
}
