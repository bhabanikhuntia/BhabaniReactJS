import React from "react";
import { Button, Container, Dropdown, DropdownButton, Nav, Navbar } from "react-bootstrap";
import logo from "../../Assets/logo.JPG";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";


export default function Header() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" style={{ width: 75 }} />
        </Navbar.Brand>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for products, brands and more"
          />
          <div className="input-group-append">
            <Button className="class3">
              <FaSearch />
            </Button>
          </div>
        </div>
        <Button type="button" className="class2">
          Login
        </Button>
        <Button type="button" className="class1">
          Became a Seller
        </Button>
        <DropdownButton id="dropdown-basic-button" title="More">
          <Dropdown.Item href="#/action-1">Notification Prederence</Dropdown.Item>
          <Dropdown.Item href="#/action-2">24*7 Customercare</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Advertise</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Download the App</Dropdown.Item>

        </DropdownButton>
        <Button type="button" className="class5"><BsCart3 />Cart</Button>
      </Container>
    </Navbar>
  );
}
