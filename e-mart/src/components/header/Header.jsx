import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <Navbar
        className={styles.headerBg}
        bg="default"
        variant="dark"
        expand="lg"
        sticky="top"
      >
        <Container>
          <Link className="navbar-brand fw-bold" to="/">
            E-MART
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-link text-white" to="/">
                SHOP
              </Link>
              <Link className="nav-link text-white" to="/cart">
                CART <FontAwesomeIcon icon={faShoppingCart} />
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
