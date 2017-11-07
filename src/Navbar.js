import React, { Component } from 'react';
import './Navbar.css';
import Menu from './Menu';

class Navbar extends Component {
  render() {
    return (
      <div>
        <header className="app-header">
          <div className="topmost-nav">
            <div className="col-lg-3 col-md-12">
              <p>Call Us +123 123 456 789</p>
            </div>
            <div className="col-lg-6 col-md-12">
              <p>Summer Sale! Get 10% off on your next order with code SUMMER17</p>
            </div>
            <div className="col-lg-3 col-md-12">
              <p>LOGIN | REGISTER</p>
            </div>
          </div>
          <Menu />
        </header>
      </div>
    );
  }
}

export default Navbar;
