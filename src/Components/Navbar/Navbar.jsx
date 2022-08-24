import React from "react";
import { Navbar, Nav, Container, NavDropdown, Image } from "react-bootstrap";
import Navstyle from "./navbar.module.scss";
import User from "@iconscout/react-unicons/icons/uil-user";

import DoList from "@iconscout/react-unicons/icons/uil-check";
import ColorMode from "./ThemeChangeButton";

import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="nav navbar-expand-sm navbar-light"
    >
      <Container>
        <Navbar.Brand className="navbar-brand" to="/">
          <i className="">
            <DoList />
            DoList
          </i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-nabar-nav">
          <Nav className=" navbar-nav mx-auto">
            <Nav.Link as={Link} to="/newList" className="nav-link">
              {" "}
              New List
            </Nav.Link>
            <Nav.Link as={Link} to="/myCollections" className="nav-link">
              {" "}
              My Lists{" "}
            </Nav.Link>
            <Nav.Link as={Link} to="/analytics" className="nav-link">
              {" "}
              Analytics{" "}
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">
              {" "}
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="nav-link">
              {" "}
              Login
            </Nav.Link>
          </Nav>

          <Nav>
            <NavDropdown
              className="navv-dropdown"
              id="collasible-nav-dropdown"
              title={
                <i>
                  <User className="color-mode-icon" />
                </i>
              }
              as={Link}
              to="/profile"
            >
              <Nav.Link as={Link} to="/profile" className="nav-link">
                {" "}
                Account{" "}
              </Nav.Link>
              <Nav.Link as={Link} to="/logout" className="nav-link">
                {" "}
                Log out{" "}
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="nav-link">
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
