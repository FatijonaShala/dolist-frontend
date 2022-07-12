import React from "react";
import { Navbar, Nav, Container, NavDropdown, Image } from "react-bootstrap";
import Navstyle from "./navbar.module.scss";
import User from "@iconscout/react-unicons/icons/uil-user";
import ColorMode from "./ThemeChangeButton";

const Menu = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`nav navbar-expand-sm navbar-light`}
    >
      <Container>
        <Navbar.Brand href="/">DoList </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/newList"> New List</Nav.Link>
            <Nav.Link href="/myCollections"> My Lists </Nav.Link>
            <Nav.Link href="/analytics"> Analytics </Nav.Link>
            <Nav.Link href="/about"> About</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              id="collasible-nav-dropdown"
              title={
                <i>
                  <User className={Navstyle.color_mode_icon} />
                </i>
              }
              href="/profile"
            >
              <Nav.Link href="/profile"> Account </Nav.Link>
              <Nav.Link href="/logout"> Log out </Nav.Link>
              <Nav.Link href="/"> </Nav.Link>
            </NavDropdown>
          </Nav>

          <Nav>
            <Nav.Link className={`${Navstyle.navbar_nav} ml-lg-auto `}>
              <div className="ml-lg-4">
                <div
                  className={` ${Navstyle.color_mode} d-lg-flex justify-content-center align-items-center`}
                >
                  <i>
                    <ColorMode />
                  </i>
                </div>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
