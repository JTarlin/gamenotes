//dependency imports
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//component imports
import WelcomePage from "./Components/WelcomePage/WelcomePage";
import DashboardPage from "./Components/DashboardPage/DashboardPage";
import GamenotePage from "./Components/GamenotePage/GamenotePage";

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
        <Route exact path="/gamenote">
          <GamenotePage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
