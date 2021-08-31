import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Link className="navbar-brand fw-bold" to="/">
            E-MART
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-link text-white" to="/cart">
                CART 🛒
              </Link>
              <Link className="nav-link text-white" to="/login">
                LOGIN
              </Link>
              {/* <Link className="nav-link text-white" to="/signup">
                SIGN IN
              </Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
