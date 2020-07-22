import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store, { history } from './store';


// Use at the root of your app

import LandingPage from './pages/LandingPage';
import PrivateRoute from './components/commons/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import protectedLogin from './components/auth/protectedLogin';

function App() {

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/login' component={protectedLogin} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
        </Switch>
      </ConnectedRouter>
    </Provider>

  );
}

export default App;
