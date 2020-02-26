import React, { Component } from "react";
import { Container, Row, Col, Card, Media, ProgressBar } from "react-bootstrap";
import "./App.css";

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
                    <Media
                      as="li"
                      style={{ width: "90%", textAlign: "center" }}
                    >
                      <img
                        width={40}
                        height={40}
                        className="mg-img"
                        src="birthday-left.svg"
                        style={{ marginLeft: "20px", marginRight: "0px" }}
                      />
                      <Media.Body>
                        <h3
                          className="subcontent"
                          style={{ margin: "18px 0px" }}
                        >
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
        </Container>
        <Row className="body-content" style={{ paddingBottom: "0px" }}>
          <Col>
            <Container>
              <Row>
                <Col className="br-dash" lg="6">
                  <h3 className="subtitle">About Me</h3>
                  <p className="content">
                    Halo, perkenalkan aku adalah mahasiswa Teknik Informatika
                    dari kampus Politeknik Negeri Malang. Di sini aku sedang
                    mengerjakan tugas web biodata untuk mata kuliah Pemrograman
                    Berbasis Framework.
                  </p>
                  <h3 className="subtitle">My Dream</h3>
                  <p className="content" style={{ textAlign: "right" }}>
                    Menjadi seorang Programmer dan Dosen.
                  </p>
                </Col>
                <Col lg="6">
                  <Row>
                    <Col>
                      <h3 className="subtitle left">Quotes</h3>
                      <p className="content">
                        <i className="fas fa-quote-left quotes-icon" />
                        <span className="i">
                          No One Can Hurt You When I In Your Heart.
                        </span>
                        <i className="fas fa-quote-right quotes-icon" />
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="5">
                      <h3 className="subtitle left">Social Media</h3>
                      <i className="fab fa-facebook fa-2x white-icon" />
                      <i className="fab fa-instagram fa-2x white-icon" />
                      <i className="fab fa-github fa-2x white-icon" />
                      <i className="fab fa-pinterest fa-2x white-icon" />
                    </Col>
                    <Col lg="6">
                      <h3 className="subtitle left">Phone Number</h3>
                      <p className="content" style={{ letterSpacing: "2px" }}>
                        <i className="fas fa-phone fa-flip-horizontal icon" />
                        <a className="bb-white">+62</a> 895-6307-71532
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h3 className="subtitle left">Address</h3>
                      <p className="content">
                        <i className="fas fa-home icon" />
                        Jl. Pondok Pesantren Al-Ghozali No.138 Pakis Kembar
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3 className="subtitle bt-dash">End.</h3>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
