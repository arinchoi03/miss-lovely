import React, { Component } from 'react';
import './Navbar.css';
import Menu from './Menu';

class Navbar extends Component {
  render() {
    return (
      <div>
        <header className="app-header">
          <div className="topmost-nav">
            <div className="col-lg-3 col-md-4 col-xs-12">
              <span><i className="fa fa-phone" aria-hidden="true"></i>
              Call Us +123 123 456 789</span>
            </div>
            <div className="col-lg-6 col-md-4 col-xs-12">
              <span className="top-bar-middle">Summer Sale! Get 10% off on</span>
              <span className="top-bar-middle">your next order with code SUMMER17</span>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-12">
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
