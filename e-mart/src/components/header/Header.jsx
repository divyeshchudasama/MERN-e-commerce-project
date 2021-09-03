import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import styles from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addUser, addCart } from "../../action/index";
import axios from "axios";

function Header() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.addUserData);
  const cartdata = useSelector((state) => state.addCartData);
  const history = useHistory();

  const [cart, setcart] = useState(0);
  const getCartProducts = () => {
    const uID = JSON.parse(localStorage.getItem("user"));
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    axios
      .get(`http://localhost:8000/api/v1/cart/cartprod/${uID.email}`, {
        headers: headers,
      })
      .then((res) => {
        if (res.status === 200) {
          const data = res.data.details;
          let num = data.length;
          setcart(num);
          console.log(num, "cart num");
          dispatch(addCart(num));
        }
      });
  };
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(addUser(user)); // adding to redux
      getCartProducts();
    } else {
      dispatch(addUser({}));
    }
  }, []);
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
                  {cartdata > 0 ? (
                    <>
                      <span className="badge rounded-pill bg-light text-dark ms-1">
                        {cartdata}
                      </span>
                    </>
                  ) : (
                    ""
                  )}
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
                  <Link className="nav-link text-white" to="/signup">
                    SIGN UP
                  </Link>
                  <Link className="nav-link text-white ms-5" to="/login">
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
