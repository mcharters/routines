import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import { useHistory } from "react-router-dom";

function RoutineList({ routines }) {
  const history = useHistory();

  return (
    <>
      <ListGroup>
        {routines.map((routine) => (
          <ListGroup.Item
            key={routine.id}
            action
            className="d-flex justify-content-between align-items-start"
            onClick={() => {
              history.push(`/routines/${routine.id}`);
            }}
          >
            <div>{routine.name}</div>
            <div className="pull-right">
              <Badge pill bg="primary">
                {routine.tasks.filter((t) => t.complete).length}
              </Badge>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h4 className="status">
        Tasks Completed:{" "}
        {routines.reduce((currComplete, routine) => {
          return currComplete + routine.tasks.filter((t) => t.complete).length;
        }, 0)}
      </h4>
    </>
  );
}

export default RoutineList;
