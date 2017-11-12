import React, { Component } from 'react';
import './Navbar.css';
import Menu from './Menu';

class Navbar extends Component {
  render() {
    return (
      <div>
        <header className="app-header">
          <div className="topmost-nav">
            <div>
              <span><i className="fa fa-phone" aria-hidden="true"></i>
              Call Us +123 123 456 789</span>
            </div>
            <div>
              <span className="top-bar-middle">Summer Sale! Get 10% off on </span>
              <span className="top-bar-middle"> your next order with code SUMMER17</span>
            </div>
            <div>
              <i className="fa fa-user" aria-hidden="true"></i>
              <span>LOGIN | REGISTER</span>
            </div>
          </div>
          <Menu />
        </header>
      </div>
    );
  }
}

export default Navbar;
