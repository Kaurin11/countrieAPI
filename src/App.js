import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import {getMainViewRoute, getStartRoute } from './constants/routes/routes';
import Start from './view/start/start';
import MainView from './view/mainView/mainView';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={getStartRoute()} component={Start} />
          <Route exact path={getMainViewRoute()} component={MainView} />
          <Redirect to={getStartRoute()} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
