import ListGroup from "react-bootstrap/ListGroup";
import { useHistory } from "react-router-dom";

function RoutineList({ routines }) {
  const history = useHistory();

  return (
    <ListGroup>
      {routines.map((routine) => (
        <ListGroup.Item
          key={routine.id}
          action
          onClick={() => {
            history.push(`/routines/${routine.id}`);
          }}
        >
          {routine.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default RoutineList;
