import React, { useState } from "react";
import { Card, Col, Form, InputGroup, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faAt } from "@fortawesome/free-solid-svg-icons";
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";

function SignUp() {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const updateState = (event, controlName) => {
    setUserData({ ...userData, [controlName]: event.target.value });
  };
  const signUphandle = (event) => {
    event.preventDefault();
    console.log(userData);
  };
  return (
    <>
      <Row className="" style={{ justifyContent: "center" }}>
        <Col xxl={6} xl={6}>
          <Card className={`m-5 ${styles.card}`}>
            <Card.Header className={`text-center p-4 ${styles.cardHeader}`}>
              <h2>Sign Up Here</h2>
            </Card.Header>
            <Card.Body className="mx-5">
              <Form onSubmit={signUphandle}>
                <Form.Group className="mb-3">
                  <InputGroup>
                    <InputGroup.Text className={`${styles.input1}`}>
                      <FontAwesomeIcon icon={faUser} />
                    </InputGroup.Text>
                    <Form.Control
                      className={`${styles.input2}`}
                      type="text"
                      placeholder="First Name"
                      value={userData.firstname}
                      onChange={(e) => updateState(e, "firstname")}
                    />
                    <Form.Control
                      className={`${styles.input2}`}
                      type="text"
                      placeholder="Last Name"
                      value={userData.lastname}
                      onChange={(e) => updateState(e, "lastname")}
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3">
                  <InputGroup>
                    <InputGroup.Text className={`${styles.input1}`}>
                      <FontAwesomeIcon icon={faAt} />
                    </InputGroup.Text>
                    <Form.Control
                      className={`${styles.input2}`}
                      type="email"
                      placeholder="Email"
                      value={userData.email}
                      onChange={(e) => updateState(e, "email")}
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3">
                  <InputGroup>
                    <InputGroup.Text className={`${styles.input1}`}>
                      <FontAwesomeIcon icon={faLock} />
                    </InputGroup.Text>
                    <Form.Control
                      className={`${styles.input2}`}
                      type="password"
                      placeholder="Password"
                      value={userData.password}
                      onChange={(e) => updateState(e, "password")}
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3">
                  <InputGroup>
                    <InputGroup.Text className={`${styles.input1}`}>
                      <FontAwesomeIcon icon={faLock} />
                    </InputGroup.Text>
                    <Form.Control
                      className={`${styles.input2}`}
                      type="password"
                      placeholder="Confirm Password"
                      value={userData.confirmpassword}
                      onChange={(e) => updateState(e, "confirmpassword")}
                    />
                  </InputGroup>
                </Form.Group>
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
                    <Link className={styles.link} to="/login">
                      Existing User? Log in
                    </Link>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default SignUp;
