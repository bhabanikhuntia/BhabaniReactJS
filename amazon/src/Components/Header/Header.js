import React from "react";
import { Button, Dropdown, Form, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";
import logo1 from "../../Assets/logo1.JPG";
import logo2 from "../../Assets/logo2.JPG";
import {BsSearch} from "react-icons/bs";
import india from "../../Assets/india.jpeg";
import logo3 from "../../Assets/logo3.JPG";
import logo4 from "../../Assets/logo4.JPG";
import {MdOutlineAddShoppingCart} from "react-icons/md";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand>
        <Image src={logo1} className="class1" />
      </Navbar.Brand>
      <Navbar.Brand>
        <Image src={logo2} className="class2" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              All
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">All Categories</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Alexa Skill</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Amazon Devices</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Amazon Fashion</Dropdown.Item>
              <Dropdown.Item href="#/action-5">Amazon Pharmacy</Dropdown.Item>
              <Dropdown.Item href="#/action-6">Appliances</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        <Form.Control type="search" placeholder="" />
        <Button>
          <BsSearch />
        </Button>
        <div>
        <NavDropdown title={<Image src={india} style={{height:"1rem", width:"1.5rem"}} />} id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Hindi</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Odia</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Other</NavDropdown.Item>
        </NavDropdown>
      </div>
      <div>
        <NavDropdown title={<Image src={logo3} style={{height:"2.5rem", width:"7rem"}} />} id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </div>
        <Nav>
          <Nav.Link href=""><Image src={logo4} style={{height:"2rem", width:"5rem"}} /></Nav.Link>
          <Nav.Link eventKey={2} href="">
            <MdOutlineAddShoppingCart style={{height:"2rem", width:"3rem", color:"white"}}/>Cart
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
