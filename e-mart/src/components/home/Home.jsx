import { Button, Card, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import galaxy from "../../images/galaxy.jpg";
import { ToastContainer, toast } from "react-toastify";

function Home() {
  const uID = JSON.parse(localStorage.getItem("user"));
  const [product, setProduct] = useState([]);
  const getProducts = () => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    axios
      .get(`http://localhost:8000/api/v1/products/allproducts`, {
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
    getProducts();
  }, []);
  const history = useHistory();
  const showDetails = (p) => {
    history.push({ pathname: "/details", state: p });
  };
  const addTocart = (p) => {
    const uID = JSON.parse(localStorage.getItem("user"));
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    const pInfo = {
      userid: uID.email,
      pid: p.id,
      pname: p.name,
      pprice: p.price,
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
        {product.map((p) => (
          <Col key={p.id} xxl={3}>
            <Card className="mb-4">
              <Card.Img variant="top" src={galaxy} draggable="false" />
              <Card.Body className="text-center">
                <Card.Title>{p.name}</Card.Title>
                <p>Price: {p.price}</p>
                {/* <Card.Text>{p.description}</Card.Text> */}
                <div>
                  <Button variant="primary" onClick={() => showDetails(p)}>
                    View Details
                  </Button>
                  {uID ? (
                    <>
                      <Button
                        className="ms-3"
                        variant="dark"
                        onClick={() => addTocart(p)}
                      >
                        Add to cart
                      </Button>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
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

export default Home;
