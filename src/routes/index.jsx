import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/store/configureStore';
import connectedHomeView from '../views/homeView';
import MenuView from '../views/menuView';

const store = configureStore();

const Routes = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={connectedHomeView} />
        <Route path="/menu" component={MenuView} />
      </Switch>
    </Router>
  </Provider>
);

export default Routes;
