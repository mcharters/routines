import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import routines from "./routines";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Routines</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            {routines.map((routine) => (
              <ListGroup.Item key={routine.id} action>
                {routine.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
