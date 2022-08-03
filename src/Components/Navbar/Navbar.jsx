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
      className="nav navbar-expand-sm navbar-light"
    >
      <Container>
        <Navbar.Brand href="/" className="mb-5">
          DoList
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" navbar-nav mx-auto">
            <Nav.Link href="/newList" className="nav-link">
              {" "}
              New List
            </Nav.Link>
            <Nav.Link href="/myCollections" className="nav-link">
              {" "}
              My Lists{" "}
            </Nav.Link>
            <Nav.Link href="/analytics" className="nav-link">
              {" "}
              Analytics{" "}
            </Nav.Link>
            <Nav.Link href="/about" className="nav-link">
              {" "}
              About
            </Nav.Link>
            <Nav.Link href="/login" className="nav-link">
              {" "}
              Login
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              id="collasible-nav-dropdown"
              title={
                <i>
                  <User className="color-mode-icon" />
                </i>
              }
              href="/profile"
            >
              <Nav.Link href="/profile" className="nav-link">
                {" "}
                Account{" "}
              </Nav.Link>
              <Nav.Link href="/logout" className="nav-link">
                {" "}
                Log out{" "}
              </Nav.Link>
              <Nav.Link href="/" className="nav-link">
                {" "}
              </Nav.Link>
            </NavDropdown>
          </Nav>

          <Nav className="nav-item">
            <Nav.Link className="navbar-nav nav-link ml-lg-auto">
              <div className="ml-lg-4">
                <div
                  className={` color-mode d-lg-flex justify-content-center align-items-center `}
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
