import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <Container>
    <Row>
      <Col>
        <h1>Routines</h1>
      </Col>
    </Row>
    <Row>
      <Col>
        <Outlet />
      </Col>
    </Row>
  </Container>
);

export default Layout;
