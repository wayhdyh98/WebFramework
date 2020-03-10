import React, { Component } from "react";
import "./Form.css";
import Foto from "../login.png";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export default class FormTugas extends Component {
  state = {
    username: "",
    password: "",
    remember: false
  };

  handleChange = (value, name) => {
    this.setState({ ...this.state, [name]: value });
  };

  submitForm = e => {
    console.log(this.state);
  };

  render() {
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
                          value={this.state.username}
                          onChange={event =>
                            this.handleChange(event.target.value, "username")
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
                          value={this.state.password}
                          onChange={event =>
                            this.handleChange(event.target.value, "password")
                          }
                        />
                      </Col>
                    </Form.Group>

                    <Button className="button-login" onClick={this.submitForm}>
                      Login
                    </Button>

                    <Form.Group className="form-content">
                      <Form.Check
                        type="checkbox"
                        label="Remember Me"
                        onChange={event =>
                          this.handleChange(event.target.checked, "remember")
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
  }
}
