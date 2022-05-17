import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Navstyle from './navbar.module.scss';
import Moon from '@iconscout/react-unicons/icons/uil-moon';
import User from '@iconscout/react-unicons/icons/uil-user';

const Menu = () => {
  return (

    <Navbar collapseOnSelect expand="lg" bg="white" className={`${Navstyle.nav} && ${Navstyle.navbar_light} && ${Navstyle.navbar_expand_sm}`}>
      <Container>
        <Navbar.Brand className={Navstyle.navbar_brand} href="/home">
          <i>
            <User className={`${Navstyle.uil}`} />
          </i>
          DoList </Navbar.Brand>
        <Navbar.Toggle className={Navstyle.navbar_toggler} aria-controls="navbarNav" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false">
          <span className={Navstyle.navbar_toggler_icon}></span>
          <span className={Navstyle.navbar_toggler_icon}></span>
          <span className={Navstyle.navbar_toggler_icon}></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarNav" className={Navstyle.navbar_collapse} >

          <Nav className={`${Navstyle.navbar_nav} && mx-auto `}>
            <Nav.Link className={Navstyle.nav_link} href="/newList" > New List</Nav.Link>
            <Nav.Link className={Navstyle.nav_link} href="/myLists" > My Lists </Nav.Link>
            <Nav.Link className={Navstyle.nav_link} href="/analytics" > Analytics </Nav.Link>

            <Nav.Link className={Navstyle.nav_link} href="/profile" > Profile </Nav.Link>
            <Nav.Link className={Navstyle.nav_link} eventKey={2} href="/about" > About </Nav.Link>
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