import React, { useState } from "react";
import "../container/Form.css";
import Foto from "../login.png";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const FormStateless = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
    remember: false
  });
  function handleChange(value, name) {
    setInput({ ...input, [name]: value });
  }

  function submitForm(e) {
    console.log(input);
  }
  return (
    <div>
      <Container>
        <Row>
          <Col lg="3"></Col>
          <Col lg="6">
            <h1 className="title">
              Form <span className="first">Login</span>
            </h1>
            <Card className="card-content">
              <Card.Img variant="top" src={Foto} className="img" />
              <Card.Body className="cb">
                <Form>
                  <Form.Group as={Row}>
                    <Form.Label column sm="3">
                      Username
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={input.username}
                        onChange={event =>
                          handleChange(event.target.value, "username")
                        }
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                    <Form.Label column sm="3">
                      Password
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={input.password}
                        onChange={event =>
                          handleChange(event.target.value, "password")
                        }
                      />
                    </Col>
                  </Form.Group>

                  <Button className="button-login" onClick={submitForm}>
                    Login
                  </Button>

                  <Form.Group className="form-content">
                    <Form.Check
                      type="checkbox"
                      label="Remember Me"
                      onChange={event =>
                        handleChange(event.target.checked, "remember")
                      }
                    />
                  </Form.Group>

                  <div className="cancel-area">
                    <Button className="button-cancel" type="submit">
                      Cancel
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3"></Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormStateless;
