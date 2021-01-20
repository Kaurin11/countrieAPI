import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import {
  getCountrieByLetterRoute,
  getCountrieHomeRoute,
  getOneCountriRoute,
  getStartRoute,
} from "./constants/routes/routes";
import Start from "./view/start/start";
import CountrieHome from "./view/countrieHome/countrieHome";
import CountrieDetail from "./view/countrieDetail/countrieDetail";
import BorderCountrie from './view/borderCountie/borderCountrie';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={getStartRoute()} component={Start} />
          <Route exact path={getCountrieHomeRoute()} component={CountrieHome} />
          <Route path={getOneCountriRoute()} component={CountrieDetail} />
          <Route path={getCountrieByLetterRoute()} component={BorderCountrie} />
          <Redirect to={getStartRoute()} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
