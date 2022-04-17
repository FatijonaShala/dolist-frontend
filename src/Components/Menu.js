import React from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

const Menu = () => {
  return (
    <div>
<Navbar collapseOnSelect expand="lg" bg="white">
  <Container>
  <Navbar.Brand href="#home">DoList</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">TBD soon</Nav.Link>
      <Nav.Link href="#pricing">TBD soon</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">TBD soon</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">TBD soon</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">TBD soon</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">TBD soon</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">TBD soon</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
      TBD soon
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    

        
        
    </div>
  )
}

export default Menu