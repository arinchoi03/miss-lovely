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
          <div className="link link-btn">search</div>
          <div className="link link-btn">cart</div>
        </div>
      </div>
    );
  }
}

export default Navbar;
