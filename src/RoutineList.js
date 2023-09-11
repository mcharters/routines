import ListGroup from "react-bootstrap/ListGroup";
import { useLoaderData, useNavigate } from "react-router-dom";

function RoutineList() {
  const routines = useLoaderData();
  const navigate = useNavigate();

  return (
    <ListGroup>
      {routines.map((routine) => (
        <ListGroup.Item
          key={routine.id}
          action
          onClick={() => {
            navigate(`/routines/${routine.id}`);
          }}
        >
          {routine.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default RoutineList;
