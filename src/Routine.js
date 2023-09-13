import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";

const Routine = ({ routine, onChange }) => {
  const taskChecked = (idx) => {
    const newRoutine = {
      ...routine,
      tasks: routine.tasks.map((t, i) =>
        i === idx ? { ...t, complete: !t.complete } : t,
      ),
    };

    onChange(newRoutine);
  };

  return (
    <>
      <Row>
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/routines" }}>
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
              <ListGroup.Item
                key={idx}
                action
                onClick={() => {
                  taskChecked(idx);
                }}
              >
                <Form.Check
                  type="checkbox"
                  label={task.name}
                  checked={task.complete}
                  onChange={() => {
                    taskChecked(idx);
                  }}
                />
              </ListGroup.Item>
            ))}
          </ListGroup>
          <h4 className="status">
            Tasks Completed: {routine.tasks.filter((t) => t.complete).length}
          </h4>
        </Col>
      </Row>
    </>
  );
};

export default Routine;
