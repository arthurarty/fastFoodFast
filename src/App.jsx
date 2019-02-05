import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Routes from './routes/index';

class Index extends React.Component {
  render() {
    return (
      <Routes />
    );
  }
}

export default Index;
