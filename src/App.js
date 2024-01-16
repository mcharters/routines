import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routine from "./Routine";
import routines from "./routines";
import RoutinePeriod from "./RoutinePeriod";

const App = () => {
  const [localRoutines, setLocalRoutines] = useState(null);

  useEffect(() => {
    if (!localRoutines) {
      // check to see if we have daily routines in local storage
      const storedRoutines = localStorage.getItem("routines");
      if (storedRoutines) {
        setLocalRoutines(JSON.parse(storedRoutines));
      } else {
        setLocalRoutines(routines);
      }
    } else {
      // save daily routines to local storage
      localStorage.setItem("routines", JSON.stringify(localRoutines));
    }
  }, [localRoutines]);

  if (!localRoutines) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Router>
        <Row>
          <Col>
            <h1>Routines</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Switch>
              <Route
                path="/routines/:period/:id"
                render={({ match }) => (
                  <Routine
                    routine={localRoutines[match.params.period].find(
                      (routine) => routine.id === parseInt(match.params.id, 10),
                    )}
                    onChange={(routine) => {
                      const newRoutines = localRoutines[
                        match.params.period
                      ].map((r) => (r.id === routine.id ? routine : r));

                      setLocalRoutines({
                        ...localRoutines,
                        [match.params.period]: newRoutines,
                      });
                    }}
                  />
                )}
              />
              <Route path="/">
                {Object.keys(localRoutines).map((period) => (
                  <RoutinePeriod
                    key={period}
                    period={period}
                    localRoutines={localRoutines}
                    setLocalRoutines={setLocalRoutines}
                  />
                ))}
              </Route>
            </Switch>
          </Col>
        </Row>
      </Router>
    </Container>
  );
};

export default App;
