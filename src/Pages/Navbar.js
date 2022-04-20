import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Navstyle from '../Styles/Navbar.module.scss';

const Menu = () => {
  return (
    <div >
      <Navbar collapseOnSelect expand="lg" bg="white" >
        <Container className={Navstyle.Container} >
          <Navbar.Brand href="/Home" > DoList </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="me-auto" >
              <Nav.Link href="/NewList" > CreateList</Nav.Link>
              <Nav.Link href="/MyLists" > My Collections </Nav.Link>
              <Nav.Link href="/Analytics" > Focus time </Nav.Link>
            </Nav>
            <Nav >
              <Nav.Link href="/Profile" > Profile </Nav.Link>
              <Nav.Link eventKey={2} href="/About" > About </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Menu;