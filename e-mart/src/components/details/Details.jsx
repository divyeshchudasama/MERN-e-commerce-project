import React, { useState, useEffect } from "react";
import styles from "./Details.module.css";
import { Link, useLocation } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import galaxy from "../../images/galaxy.jpg";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../../action/index";

function Details() {
  const [product, setProduct] = useState({});
  const location = useLocation().state;
  let productData = location;

  const cartdata = useSelector((state) => state.addCartData);
  const dispatch = useDispatch();

  const uID = JSON.parse(localStorage.getItem("user"));
  const getOneProducts = () => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    axios
      .get(`http://localhost:8000/api/v1/products/getone/${productData.id}`, {
        headers: headers,
      })
      .then((res) => {
        if (res.status === 200) {
          const data = res.data.details;
          setProduct(data);
        }
      });
  };
  useEffect(() => {
    getOneProducts();
    window.scrollTo(0, 0);
  }, []);
  const addToCart = () => {
    const uID = JSON.parse(localStorage.getItem("user"));
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    const pInfo = {
      userid: uID.email,
      pid: product.id,
      pname: product.name,
      pprice: product.price,
      pquantity: 1,
    };
    axios
      .post(`http://localhost:8000/api/v1/cart/addtocart`, pInfo, {
        headers: headers,
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(addCart(cartdata + 1));
          // const data = res.data.details;
          toast.success(`Product added to cart.`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };
  return (
    <>
      <Row className="my-4">
        <Col md={5} lg={5} xl={5} xxl={5}>
          <Card>
            <Card.Img src={galaxy} draggable="false" />
          </Card>
        </Col>
        <Col className="ms-5" md={6} lg={6} xl={6} xxl={6}>
          <div className="my-2">
            <h2>{product.name}</h2>
          </div>
          <div className="fw-bold my-2">Price: {product.price}</div>
          <div className="my-2 fw-bold">Description:</div>
          <div className="lh-lg" style={{ textAlign: "justify" }}>
            {product.description}
          </div>
          <div className="mt-4">
            {uID ? (
              <>
                <Button
                  variant="dark"
                  className={styles.buttonStyle}
                  onClick={addToCart}
                >
                  Add to cart
                </Button>
              </>
            ) : (
              <div className="text-danger fw-bold">
                <p>Please login to add products in cart!</p>
              </div>
            )}
            <Link className="text-muted ms-4" to="/">
              Back
            </Link>
          </div>
        </Col>
      </Row>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default Details;
