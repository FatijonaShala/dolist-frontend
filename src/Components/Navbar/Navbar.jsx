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


/* <Nav className="navbar navbar-expand-sm navbar-light">
    <Container>
        <a className={}"navbar-brand" href="/home"><i className='uil uil-user'></i> DoList</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                    <a href="/newList" className="nav-link"><span data-hover="CreateList">New List</span></a>
                </li>
                <li className="nav-item">
                    <a href="/myLists" className="nav-link"><span data-hover="myLists">My Lists</span></a>
                </li>
                <li className="nav-item">
                    <a href="/Analytics" className="nav-link"><span data-hover="Analytics">Analytics</span></a>
                </li>
                <li className="nav-item">
                    <a href="/profile" className="nav-link"><span data-hover="Profile">Contact</span></a>
                </li>
                <li className="nav-item">
                    <a href="/about" className="nav-link"><span data-hover="About">About</span></a>
                </li>
            </ul>

            <ul className="navbar-nav ml-lg-auto">
                <div className="ml-lg-4">
                  <div className="color-mode d-lg-flex justify-content-center align-items-center">
                    <i className="color-mode-icon"></i>
                    
                  </div>
                </div>
            </ul>
        </div>
    </Container>
</Nav> */






  








  )
}

export default Menu;