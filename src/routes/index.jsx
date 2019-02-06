import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/store/configureStore';
import HomeView from '../views/homeView';

const store = configureStore();

const Routes = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={HomeView} />
      </Switch>
    </Router>
  </Provider>
);

export default Routes;
