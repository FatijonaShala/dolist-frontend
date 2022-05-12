import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Navstyle from './navbar.module.scss';

const Menu = () => {
  return (
    
      <Navbar collapseOnSelect expand="lg" bg="white" className={`${Navstyle.nav} && navbar-expand-sm && navbar-light`}>
        <Container>
          <Navbar.Brand href="/home"> DoList </Navbar.Brand>
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
            <Nav>
                <div className="ml-lg-4">
                  <div className={` ${Navstyle.color_mode}&& d-lg-flex justify-content-center align-items-center` }>
                    <i className={Navstyle.color_mode_icon}></i>
                  </div>
                </div>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>




  








  )
}

export default Menu;