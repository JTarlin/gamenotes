//dependency imports
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//component imports
import WelcomePage from "./Components/WelcomePage/WelcomePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomePage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
