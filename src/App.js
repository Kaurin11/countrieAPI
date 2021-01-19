import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import {
  getCountrieHomeRoute,
  getOneCountriRoute,
  getStartRoute,
} from "./constants/routes/routes";
import Start from "./view/start/start";
import CountrieHome from "./view/countrieHome/countrieHome";
import CountrieDetail from "./view/countrieDetail/countrieDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={getStartRoute()} component={Start} />
          <Route exact path={getCountrieHomeRoute()} component={CountrieHome} />
          <Route path={getOneCountriRoute()} component={CountrieDetail} />
          <Redirect to={getStartRoute()} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
