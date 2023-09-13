import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routine from "./Routine";
import RoutineList from "./RoutineList";
import routines from "./routines";
import { Button } from "react-bootstrap";

const App = () => {
  const [dailyRoutines, setDailyRoutines] = useState(null);

  useEffect(() => {
    if (!dailyRoutines) {
      // check to see if we have daily routines in local storage
      const storedRoutines = localStorage.getItem("dailyRoutines");
      if (storedRoutines) {
        setDailyRoutines(JSON.parse(storedRoutines));
      } else {
        setDailyRoutines(routines);
      }
    } else {
      // save daily routines to local storage
      localStorage.setItem("dailyRoutines", JSON.stringify(dailyRoutines));
    }
  }, [dailyRoutines]);

  if (!dailyRoutines) {
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
                path="/routines/:id"
                render={({ match }) => (
                  <Routine
                    routine={dailyRoutines.find(
                      (routine) => routine.id === parseInt(match.params.id, 10),
                    )}
                    onChange={(routine) => {
                      const newRoutines = dailyRoutines.map((r) =>
                        r.id === routine.id ? routine : r,
                      );

                      setDailyRoutines(newRoutines);
                    }}
                  />
                )}
              />
              <Route path="/">
                <RoutineList routines={dailyRoutines} />
                <Button onClick={() => setDailyRoutines(routines)}>
                  New Day
                </Button>
              </Route>
            </Switch>
          </Col>
        </Row>
      </Router>
    </Container>
  );
};

export default App;
