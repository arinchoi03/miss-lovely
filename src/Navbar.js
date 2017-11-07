import React, { Component } from 'react';
import logo from './logo.svg';

class Navbar extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <div className="topmost-nav">call us +123 123 456 789</div>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Navbar;
