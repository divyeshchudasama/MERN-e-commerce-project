import React, { useState, useEffect } from "react";
// import styles from "./Details.module.css";
import { useLocation } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import galaxy from "../../images/galaxy.jpg";
import { ToastContainer, toast } from "react-toastify";

function Details() {
  const [product, setProduct] = useState({});
  const location = useLocation().state;
  let productData = location;
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
  }, [getOneProducts()]);
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
        <Col xxl={5}>
          <Card>
            <Card.Img src={galaxy} draggable="false" />
          </Card>
        </Col>
        <Col className="ms-5" xxl={6}>
          <div>
            <h2>{product.name}</h2>
          </div>
          <div>Price: {product.price}</div>
          <div>{product.description}</div>
          <div className="mt-4">
            {uID ? (
              <>
                <Button variant="dark" onClick={addToCart}>
                  Add to cart
                </Button>
              </>
            ) : (
              <div className="text-danger fw-bold">
                <p>Please login to add products in cart!</p>
              </div>
            )}
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
