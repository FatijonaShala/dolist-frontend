import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Navstyle from './navbar.module.scss';
import Moon from '@iconscout/react-unicons/icons/uil-moon';

const Menu = () => {
  return (
    
      <Navbar collapseOnSelect expand="lg" bg="white" className={`${Navstyle.nav} && navbar-expand-sm && navbar-light`}>
        <Container>
          <Navbar.Brand href="/home"> DoList </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="mx-auto" >
              <Nav.Link href="/newList" > New List</Nav.Link>
              <Nav.Link href="/myLists" > My Lists </Nav.Link>
              <Nav.Link href="/analytics" > Analytics </Nav.Link>
              
              <Nav.Link href="/profile" > Profile </Nav.Link>
              <Nav.Link eventKey={2} href="/about" > About </Nav.Link>
            </Nav>
            <Nav>
          <Nav.Link className={`${Navstyle.navbar_nav} ml-lg-auto `}>
          <div className="ml-lg-4">
              <div className={` ${Navstyle.color_mode} d-lg-flex justify-content-center align-items-center`}>
                <i >
                  <Moon className={Navstyle.color_mode_icon} />
                </i>
              </div>
              </div>
          </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>




  








  )
}

export default Menu;