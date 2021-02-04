//dependency imports
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//component imports
import WelcomePage from "./Components/WelcomePage/WelcomePage";
import DashboardPage from "./Components/DashboardPage/DashboardPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomePage/>
        </Route>
        <Route exact path="/dashboard">
          <DashboardPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
