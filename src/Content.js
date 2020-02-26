import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

export default class Content extends Component {
  render() {
    return (
      <div>
        <Row
          className="body-content"
          style={{
            paddingBottom: "0px",
            marginLeft: "0px",
            marginRight: "0px"
          }}
        >
          <Col style={{ padding: "0px" }}>
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
                    <Col lg="7">
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
