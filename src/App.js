import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import {getStartRoute } from './constants/routes/routes';
import Start from './view/start/start';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={getStartRoute()} component={Start} />
          <Redirect to={getStartRoute()} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
