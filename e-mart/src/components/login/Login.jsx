import React, { useState } from "react";
import { Card, Col, Form, InputGroup, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import styles from "./Login.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../../action/index";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const loginHandle = (event) => {
    event.preventDefault();
    let userDetails = {
      email: email,
      password: password,
    };
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    axios
      .post(`http://localhost:8000/api/v1/users/login`, userDetails, {
        headers: headers,
      })
      .then((res) => {
        if (res.status === 200) {
          const data = res.data.details;
          if (data) {
            dispatch(addUser(data));
            localStorage.setItem("user", JSON.stringify(data));
            history.push({ pathname: "/", state: "" });
          }
        } else {
          console.log("check email password");
        }
      });
  };
  return (
    <>
      <Row className="" style={{ justifyContent: "center" }}>
        <Col xxl={6} xl={6}>
          <Card className={`m-5 ${styles.card}`}>
            <Card.Header className={`text-center p-4 ${styles.cardHeader}`}>
              <h2>Login Here</h2>
            </Card.Header>
            <Card.Body className="mx-5">
              <Form onSubmit={loginHandle}>
                <Form.Group className="mb-3">
                  <InputGroup>
                    <InputGroup.Text className={`${styles.input1}`}>
                      <FontAwesomeIcon icon={faUser} />
                    </InputGroup.Text>
                    <Form.Control
                      className={`${styles.input2}`}
                      type="text"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3">
                  <InputGroup>
                    <InputGroup.Text className={`${styles.input1}`}>
                      <FontAwesomeIcon icon={faKey} />
                    </InputGroup.Text>
                    <Form.Control
                      className={`${styles.input2}`}
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </InputGroup>
                  <Row>
                    <Col className="text-center mt-3">
                      <Button
                        variant="success"
                        className={`${styles.btn}`}
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-center mt-3 pt-4">
                      <Link className={styles.link} to="/signup">
                        New to E-Mart? Create an account
                      </Link>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
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

export default Login;
