import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routine from "./Routine";
import RoutineList from "./RoutineList";
import routines from "./routines";

const App = () => {
  const [dailyRoutines, setDailyRoutines] = useState(routines);

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
                path="/routines/:id"
                render={({ match }) => (
                  <Routine
                    routine={dailyRoutines.find(
                      (routine) => routine.id === parseInt(match.params.id, 10),
                    )}
                  />
                )}
              />
              <Route path="/">
                <RoutineList routines={dailyRoutines} />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Router>
    </Container>
  );
};

export default App;
