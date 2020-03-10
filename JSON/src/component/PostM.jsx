import React from "react";
import "../container/BlogPost/BlogPost.css";
import { Button, Row, Col } from "react-bootstrap";

const PostM = props => {
  return (
    <div>
      <Row className="mahasiswa">
        <Col className="br" lg={2}>
          <h4 className="title">{props.nama}</h4>
          <h5 className="subtitle">{props.nim}</h5>
        </Col>
        <Col className="br-w" lg={2}>
          <h6 className="konten">{props.alamat}</h6>
          <h6 className="konten">{props.hp}</h6>
        </Col>
        <Col className="br-w" lg={1}>
          <h6 className="title">{props.angkatan}</h6>
        </Col>
        <Col className="br-w" lg={1}>
          <h6 className="title">{props.status}</h6>
        </Col>
        <Col lg={3}>
          <Button
            style={{ marginTop: "10px" }}
            variant="danger"
            onClick={props.hapusMahasiswa.bind(this, props.idMahasiswa)}
          >
            Hapus
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default PostM;
