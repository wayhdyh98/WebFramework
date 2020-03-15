import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { Container, Row, Col, Card, Nav, ListGroup } from "react-bootstrap";
import "./App.css";

export default function Marketplace() {
  return (
    <Router>
      <div>
        <Nav
          className="justify-content-center"
          activeKey="/home"
          onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link>
              <Link className="nav-atas" to="/home">
                Home
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link className="nav-atas" to="/barang">
                Barang
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-atas">
            <Nav.Link className="info">
              <AuthButton />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <Switch>
        <Route path="/home">
          <PublicPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <PrivateRoute path="/barang">
          <ProtectedPage />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome Admin{" "}
      <button
        className="signout"
        onClick={() => {
          fakeAuth.signout(() => history.push("/barang"));
        }}
      >
        Sign Out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
}

function PublicPage() {
  return <h3 className="title">Hi.</h3>;
}

function ProtectedPage() {
  return <Barang />;
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <Container>
        <Row>
          <Col lg="3"></Col>
          <Col lg="6">
            <h1 className="title">
              Button <span className="first">Login</span>
            </h1>
            <Card className="card-content">
              <Card.Body className="cb">
                <button className="button-login" onClick={login}>
                  Login
                </button>
                <p className="alert-p">
                  You must log in to view the page at{" "}
                  <span className="first">{from.pathname}</span>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function Barang() {
  return (
    <Router>
      <div>
        <h3 className="title bb">Kategori</h3>
        <Nav className="justify-content-center" defaultActiveKey="/buku">
          <Nav.Item>
            <Nav.Link>
              <Link className="nav-atas" to="/buku">
                Buku
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link disabled>Segera Hadir..</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <Switch>
        <Route path="/buku">
          <Buku />
        </Route>
      </Switch>
    </Router>
  );
}

function Buku() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h3 className="title bb">Buku</h3>
      <ListGroup horizontal={"lg"} className="justify-content-center">
        <Link className="nav-atas list" to={`${url}/Romansa`}>
          <ListGroup.Item>Romansa</ListGroup.Item>
        </Link>
        <Link className="nav-atas list" to={`${url}/Aksi`}>
          <ListGroup.Item>Aksi</ListGroup.Item>
        </Link>
        <Link className="nav-atas list" to={`${url}/Horror`}>
          <ListGroup.Item>Horror</ListGroup.Item>
        </Link>
      </ListGroup>
      <Switch>
        <Route exact path={path}>
          <h4 className="title">Pilihan Buku</h4>
        </Route>
        <Route
          path={`${path}/:bukuId`}
          render={props => {
            if (props.match.params.bukuId == "Romansa") return <Romansa />;
            else if (props.match.params.bukuId == "Aksi") return <Aksi />;
            else return <Horror />;
          }}
        ></Route>
      </Switch>
    </div>
  );
}

function Romansa() {
  let { bukuId } = useParams();

  return (
    <div>
      <Container>
        <Row className="justify-content-lg-center">
          <Col lg="auto">
            <Card className="card-p">
              <Card.Body>
                <h4 className="title" id="card">
                  Kue Apes
                </h4>
                <h4 className="subtitle">Kategori: {bukuId}</h4>
                <button className="button-buy">Buy</button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="auto">
            <Card className="card-p">
              <Card.Body>
                <h4 className="title" id="card">
                  Ketika Nolep Bertasbih
                </h4>
                <h4 className="subtitle">Kategori: {bukuId}</h4>
                <button className="button-buy">Buy</button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function Aksi() {
  let { bukuId } = useParams();

  return (
    <div>
      <Container>
        <Row className="justify-content-lg-center">
          <Col lg="auto">
            <Card className="card-p">
              <Card.Body>
                <h4 className="title" id="card">
                  Petualangan Dora di Alam Barzah
                </h4>
                <h4 className="subtitle">Kategori: {bukuId}</h4>
                <button className="button-buy">Buy</button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="auto">
            <Card className="card-p">
              <Card.Body>
                <h4 className="title" id="card">
                  Revenger: Karma
                </h4>
                <h4 className="subtitle">Kategori: {bukuId}</h4>
                <button className="button-buy">Buy</button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function Horror() {
  let { bukuId } = useParams();

  return (
    <div>
      <Container>
        <Row className="justify-content-lg-center">
          <Col lg="auto">
            <Card className="card-p">
              <Card.Body>
                <h4 className="title" id="card">
                  Sebelum Ibis Menjemput
                </h4>
                <h4 className="subtitle">Kategori: {bukuId}</h4>
                <button className="button-buy">Buy</button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="auto">
            <Card className="card-p">
              <Card.Body>
                <h4 className="title" id="card">
                  Pemain Palsu
                </h4>
                <h4 className="subtitle">Kategori: {bukuId}</h4>
                <button className="button-buy">Buy</button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
