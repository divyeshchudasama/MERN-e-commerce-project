import React, { useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import styles from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../../action/index";

function Header() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.addUserData);
  const history = useHistory();
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(addUser(user)); // adding to redux
    } else {
      dispatch(addUser({}));
    }
  }, [dispatch]);
  const logout = () => {
    localStorage.removeItem("user");
    history.push("/");
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
            <Nav className="ms-auto">
              <Link className="nav-link text-white me-5" to="/">
                SHOP
              </Link>
            </Nav>
            {data.firstname ? (
              <>
                <Link className="nav-link text-white me-5" to="/cart">
                  CART <FontAwesomeIcon icon={faShoppingCart} />
                  {/* <span className="badge rounded-pill bg-light text-dark ms-1">
                    {cartRedux.length}
                  </span> */}
                </Link>
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
