import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Navstyle from './navbar.module.scss';

const Menu = () => {
  return (
    <div >
      <Navbar collapseOnSelect expand="lg" bg="white" className={Navstyle.nav}>
        <Container className={Navstyle.Container} >
          <Navbar.Brand href="/home" > DoList </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="me-auto" >
              <Nav.Link href="/newList" > CreateList</Nav.Link>
              <Nav.Link href="/myLists" > My Collections </Nav.Link>
              <Nav.Link href="/analytics" > Focus time </Nav.Link>
            </Nav>
            <Nav >
              <Nav.Link href="/profile" > Profile </Nav.Link>
              <Nav.Link eventKey={2} href="/about" > About </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Menu;