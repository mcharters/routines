import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";

const Routine = ({ routine }) => (
  <>
    <Row>
      <Col>
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{routine.name}</Breadcrumb.Item>
        </Breadcrumb>
      </Col>
    </Row>
    <Row>
      <Col>
        <ListGroup>
          {routine.tasks.map((task, idx) => (
            <ListGroup.Item key={idx}>
              <Form.Check
                type="checkbox"
                label={task.name}
                // checked={task.complete}
                // onChange={() => {
                // }}
              />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </Row>
  </>
);

export default Routine;
