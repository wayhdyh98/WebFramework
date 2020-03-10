import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Header from "./Header";
import Content from "./Content";

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h1 className="title">Biodata</h1>
            </Col>
          </Row>
          <Header></Header>
        </Container>
        <Content></Content>
      </div>
    );
  }
}

export default App;
