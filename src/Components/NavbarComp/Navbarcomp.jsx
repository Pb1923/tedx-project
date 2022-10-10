import React from 'react'
import "./navbarcomp.css";
import logo from "../../Assets/image 18.png";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button ,Container} from 'react-bootstrap'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
const Navbarcomp = () => {
  return (
    <div>
      
        <Navbar  variant='dark' expand="lg">
      <Container >
        <Container >
        <Navbar.Brand href="#home" className='logo-img ml-auto'>
          <img src={logo}  ></img>
        </Navbar.Brand>
        </Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home"className='text-color'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-color'>About</Nav.Link>
            <Nav.Link href="#link" className='text-color'>Speaker</Nav.Link>
            <Nav.Link href="#link" className='text-color'>Team</Nav.Link>

            <NavDropdown title="Contact us " id="basic-nav-dropdown" className='text-color'>
              <NavDropdown.Item href="#action/3.1">contact us </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                whatsapp
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">instagram</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                linkedin
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  )
}

export default Navbarcomp