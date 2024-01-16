import Button from "react-bootstrap/Button";
import RoutineList from "./RoutineList";
import routines, { names } from "./routines";

const RoutinePeriod = ({ period, localRoutines, setLocalRoutines }) => (
  <div style={{ paddingBottom: "25px" }}>
    <RoutineList routines={localRoutines[period]} period={period} />
    <Button
      onClick={() =>
        setLocalRoutines({
          ...localRoutines,
          [period]: routines[period],
        })
      }
    >
      New {names[period].singular}
    </Button>
  </div>
);

export default RoutinePeriod;
