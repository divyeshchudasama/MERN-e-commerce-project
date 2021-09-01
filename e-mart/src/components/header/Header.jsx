import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Dropdown, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../../action/index";

function Header() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.addUserData);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (user) {
      dispatch(addUser(user));
    } else {
      dispatch(addUser({}));
    }
  }, []);
  const logout = () => {
    localStorage.removeItem("user");
    dispatch(addUser({}));
  };
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
            <Nav className="mx-auto">
              <Link className="nav-link text-white mx-4" to="/">
                SHOP
              </Link>
              <Link className="nav-link text-white mx-4" to="/cart">
                CART <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
            </Nav>
            {data.firstname ? (
              <>
                <FontAwesomeIcon className="text-white" icon={faUserCheck} />
                <Nav className="me-0">
                  <NavDropdown
                    id="nav-dropdown-dark-example"
                    title={data.firstname + " "}
                    menuVariant="dark"
                  >
                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </>
            ) : (
              <>
                <Nav className="me-0">
                  <Link className="nav-link text-white" to="/login">
                    LOGIN
                  </Link>
                </Nav>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
