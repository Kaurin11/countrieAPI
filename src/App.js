import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import {getMainViewRoute, getOneCountriRoute, getStartRoute } from './constants/routes/routes';
import Start from './view/start/start';
import MainView from './view/mainView/mainView';
import CountrieInfo from './view/countrieInfo/countrieInfo';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={getStartRoute()} component={Start} />
          <Route exact path={getMainViewRoute()} component={MainView} />
          <Route path={getOneCountriRoute()} component={CountrieInfo} />
          <Redirect to={getStartRoute()} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
