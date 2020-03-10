import React, { Component } from "react";
import { Row, Col, Card, Media, ProgressBar } from "react-bootstrap";
import "./App.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col className="my-img">
            <Card className="box-name">
              <Card.Body>
                <a className="bb-white">W</a>ahyu Hidayah
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Row>
              <Col lg="6">
                <Card className="box-subtitle">
                  <Card.Body>
                    <h2 className="subtitle">Ability</h2>
                  </Card.Body>
                </Card>
                <ul className="list-unstyled br-b" style={{ width: "90%" }}>
                  <Media as="li">
                    <img
                      width={45}
                      height={45}
                      className="mg-img"
                      src="coding.png"
                    />
                    <Media.Body>
                      <h3 className="subcontent">Coding</h3>
                    </Media.Body>
                  </Media>
                  <Media as="li">
                    <img
                      width={45}
                      height={45}
                      className="mg-img"
                      src="gaming.svg"
                    />
                    <Media.Body>
                      <h3 className="subcontent">Gaming</h3>
                    </Media.Body>
                  </Media>
                  <Media as="li">
                    <img
                      width={45}
                      height={45}
                      className="mg-img"
                      src="drawing.svg"
                    />
                    <Media.Body>
                      <h3 className="subcontent">Drawing</h3>
                    </Media.Body>
                  </Media>
                </ul>
              </Col>
              <Col lg="6">
                <Card className="box-subtitle">
                  <Card.Body>
                    <h2 className="subtitle">Skill</h2>
                  </Card.Body>
                </Card>
                <h3 className="subcontent" style={{ margin: "12px 0px" }}>
                  Public Speaking
                </h3>
                <ProgressBar className="prog-bar" now={40} label={"40%"} />
                <h3 className="subcontent" style={{ margin: "12px 0px" }}>
                  Creativity
                </h3>
                <ProgressBar className="prog-bar" now={60} label={"60%"} />
                <h3 className="subcontent" style={{ margin: "12px 0px" }}>
                  Time Management
                </h3>
                <ProgressBar className="prog-bar" now={70} label={"70%"} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="box-subtitle" style={{ width: "90%" }}>
                  <Card.Body>
                    <h2 className="subtitle">Birthday</h2>
                  </Card.Body>
                </Card>
                <ul className="list-unstyled" style={{ marginBottom: "0px" }}>
                  <Media as="li" style={{ width: "90%", textAlign: "center" }}>
                    <img
                      width={40}
                      height={40}
                      className="mg-img"
                      src="birthday-left.svg"
                      style={{ marginLeft: "20px", marginRight: "0px" }}
                    />
                    <Media.Body>
                      <h3 className="subcontent" style={{ margin: "18px 0px" }}>
                        1998, September 26 at Pasuruan
                      </h3>
                    </Media.Body>
                    <img
                      width={40}
                      height={40}
                      className="mg-img"
                      src="birthday-right.svg"
                      style={{ marginLeft: "0px", marginRight: "20px" }}
                    />
                  </Media>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
