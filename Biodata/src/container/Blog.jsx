import React, { Component } from "react";
import "./BlogPost/BlogPost.css";
import { Container, Row, Col } from "react-bootstrap";
import BlogPost from "./BlogPost/BlogPost";

export default class Blog extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col className="sidenav" lg="2">
              Sidebar
            </Col>
            <Col className="content" lg="10">
              <BlogPost />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
