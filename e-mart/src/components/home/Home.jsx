import React, { useEffect } from "react";
import { CardGroup, Card, Button } from "react-bootstrap";
import styles from "./Home.module.css";
import { ToastContainer, toast } from "react-toastify";
// import { useLocation } from "react-router-dom";

function Home() {
  // const location = useLocation();
  // let msg = location.state;
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (user) {
      toast.success(`${""} Logged in Successfully!`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, []);
  return (
    <>
      <CardGroup className="mt-5">
        <Card>
          <Card.Img
            variant="top"
            className={styles.imgheight}
            src="https://res.cloudinary.com/devatchannel/image/upload/v1598287781/ecommerce/t5ycokodqfoe9dkqgaf7.jpg"
          />
          <Card.Body>
            <Card.Title>Man Glass</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="row_btn">
              <a id="btn_buy">
                <Button variant="success">Add to Cart</Button>{" "}
              </a>
              <a id="btn_view">
                <Button variant="dark">View Item</Button>{" "}
              </a>
            </div>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            className={styles.imgheight}
            src="https://res.cloudinary.com/devatchannel/image/upload/v1598287748/ecommerce/ds52cjkcr4t0fvrnt6y6.jpg"
          />
          <Card.Body>
            <Card.Title>Man Vest</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="row_btn">
              <a id="btn_buy">
                <Button variant="success">Add to Cart</Button>{" "}
              </a>
              <a id="btn_view">
                <Button variant="dark">View Item</Button>{" "}
              </a>
            </div>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            className={styles.imgheight}
            src="https://res.cloudinary.com/devatchannel/image/upload/v1598287704/ecommerce/kqu2ktbrfmb5cjqbom2n.jpg"
          />
          <Card.Body>
            <Card.Title>Man Cool</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="row_btn">
              <a id="btn_buy">
                <Button variant="success">Add to Cart</Button>{" "}
              </a>
              <a id="btn_view">
                <Button variant="dark">View Item</Button>{" "}
              </a>
            </div>
          </Card.Footer>
        </Card>
      </CardGroup>
      <CardGroup className="mt-5">
        <Card>
          <Card.Img
            variant="top"
            className={styles.imgheight}
            src="https://res.cloudinary.com/devatchannel/image/upload/v1598287781/ecommerce/t5ycokodqfoe9dkqgaf7.jpg"
          />
          <Card.Body>
            <Card.Title>Man Glass</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="row_btn">
              <a id="btn_buy">
                <Button variant="success">Add to Cart</Button>{" "}
              </a>
              <a id="btn_view">
                <Button variant="dark">View Item</Button>{" "}
              </a>
            </div>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            className={styles.imgheight}
            src="https://res.cloudinary.com/devatchannel/image/upload/v1598287748/ecommerce/ds52cjkcr4t0fvrnt6y6.jpg"
          />
          <Card.Body>
            <Card.Title>Man Vest</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="row_btn">
              <a id="btn_buy">
                <Button variant="success">Add to Cart</Button>{" "}
              </a>
              <a id="btn_view">
                <Button variant="dark">View Item</Button>{" "}
              </a>
            </div>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            className={styles.imgheight}
            src="https://res.cloudinary.com/devatchannel/image/upload/v1598287704/ecommerce/kqu2ktbrfmb5cjqbom2n.jpg"
          />
          <Card.Body>
            <Card.Title>Man Cool</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="row_btn">
              <a id="btn_buy">
                <Button variant="success">Add to Cart</Button>{" "}
              </a>
              <a id="btn_view">
                <Button variant="dark">View Item</Button>{" "}
              </a>
            </div>
          </Card.Footer>
        </Card>
      </CardGroup>
      <CardGroup className="mt-5">
        <Card>
          <Card.Img
            variant="top"
            className={styles.imgheight}
            src="https://res.cloudinary.com/devatchannel/image/upload/v1598287781/ecommerce/t5ycokodqfoe9dkqgaf7.jpg"
          />
          <Card.Body>
            <Card.Title>Man Glass</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="row_btn">
              <a id="btn_buy">
                <Button variant="success">Add to Cart</Button>{" "}
              </a>
              <a id="btn_view">
                <Button variant="dark">View Item</Button>{" "}
              </a>
            </div>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            className={styles.imgheight}
            src="https://res.cloudinary.com/devatchannel/image/upload/v1598287748/ecommerce/ds52cjkcr4t0fvrnt6y6.jpg"
          />
          <Card.Body>
            <Card.Title>Man Vest</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="row_btn">
              <a id="btn_buy">
                <Button variant="success">Add to Cart</Button>{" "}
              </a>
              <a id="btn_view">
                <Button variant="dark">View Item</Button>{" "}
              </a>
            </div>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            className={styles.imgheight}
            src="https://res.cloudinary.com/devatchannel/image/upload/v1598287704/ecommerce/kqu2ktbrfmb5cjqbom2n.jpg"
          />
          <Card.Body>
            <Card.Title>Man Cool</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="row_btn">
              <a id="btn_buy">
                <Button variant="success">Add to Cart</Button>{" "}
              </a>
              <a id="btn_view">
                <Button variant="dark">View Item</Button>{" "}
              </a>
            </div>
          </Card.Footer>
        </Card>
      </CardGroup>
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
