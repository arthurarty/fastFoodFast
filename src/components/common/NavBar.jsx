import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/menu">Fast Food Fast</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Menu</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Orders</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
