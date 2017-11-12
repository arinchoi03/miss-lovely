import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="menu">
        <div className="title">
          <h1 className="app-title">MISS LOVELY</h1>
        </div>
        <div className="links">
          <div className="link">MANTRA</div>
          <div className="link">ROCK</div>
          <div className="link">FINE</div>
          <div className="link">GOLDEN</div>
          <div className="link">ALL</div>
          <div className="link link-btn"><i className="fa fa-search" aria-hidden="true"></i></div>
          <div className="link link-btn">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <p>0 items</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
