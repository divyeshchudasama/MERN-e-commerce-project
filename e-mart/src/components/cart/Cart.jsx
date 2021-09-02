import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Row, Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import cart from "../../images/emptycart.png";
import { Link } from "react-router-dom";

function Cart() {
  const [cartProd, setCartProd] = useState([]);
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
          setCartProd(data);
        }
      });
  };
  useEffect(() => {
    getCartProducts();
    window.scrollTo(0, 0);
  }, []);
  const deleteFromCart = (pid) => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    axios
      .delete(`http://localhost:8000/api/v1/cart/delete/${pid}`, {
        headers: headers,
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success(`Removed from cart.`, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          getCartProducts();
        }
      });
  };
  return (
    <>
      <div style={{ minHeight: "70vh" }}>
        <div className="mt-4">
          <h4>Cart</h4>
        </div>
        {cartProd.length === 0 ? (
          <>
            <div className="text-center">
              <img alt="" src={cart} style={{ width: "auto" }} />
            </div>
            <div className="text-center">
              <Link to="/">
                <Button variant="success">
                  Continue Shopping <FontAwesomeIcon icon={faCartPlus} />
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <Row className="my-4">
              <Col xxl={8}>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th className="text-end">Price</th>
                      <th className="text-end">Quantity</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartProd.map((p) => (
                      <tr key={p._id}>
                        <td>{p.pname}</td>
                        <td className="text-end">{p.pprice}</td>
                        <td className="text-end">{p.pquantity}</td>
                        <td className="text-center">
                          <Button
                            variant="dark"
                            className="px-3"
                            onClick={() => deleteFromCart(p._id)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
              <Col xxl={4}>
                <Card>
                  <Card.Body>
                    <div>
                      <h6>Billing Details</h6>
                    </div>
                    <Table>
                      <thead></thead>
                      <tbody>
                        <tr>
                          <td>Items Total:</td>
                          <td>Rs. 500/-</td>
                        </tr>
                        <tr>
                          <td>Delevery Fee:</td>
                          <td>Rs. 00/-</td>
                        </tr>
                        <tr>
                          <td>Total Tax:</td>
                          <td>Rs. 00/-</td>
                        </tr>
                        <tr className="fw-bold">
                          <td>Total Price:</td>
                          <td>Rs. 500/-</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </>
        )}
      </div>

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

export default Cart;
