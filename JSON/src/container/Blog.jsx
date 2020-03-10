import React, { Component } from "react";
import "./BlogPost/BlogPost.css";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import BlogPost from "./BlogPost/BlogPost";
import Mahasiswa from "./BlogPost/Mahasiswa";

export default class Blog extends Component {
  render() {
    return (
      <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="second">
          {/* <Container fluid> */}
          <Row>
            <Col className="sidenav" lg="2">
              <Nav className="flex-column nav-side">
                <Nav.Item>
                  <Nav.Link eventKey="first">Artikel</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Mahasiswa</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col className="content" lg="10">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <BlogPost />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Mahasiswa />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
          {/* </Container> */}
        </Tab.Container>
      </div>
    );
  }
}
