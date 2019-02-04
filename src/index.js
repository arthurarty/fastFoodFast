import React from "react";
import ReactDOM from "react-dom";
import Routes from './routes/index';

class Index extends React.Component {
  render() {
    return (
      <Routes />
    );
  }
}
ReactDOM.render(<Index />, document.getElementById("root"));
