import React, { Component } from 'react';
import './WeeklySpecials.css';
import bear from './images/bear.jpeg'
import owl from './images/owl.jpeg'
import Special from './WeeklySpecial'

class WeeklySpecials extends Component {
  render() {
    return (
      <div className="weekly-specials">
        <div className="weekly-title">
          <h4>WEEKLY SPECIALS</h4></div>
        <div className="special-panels">
          <Special imageUrl={ bear }/>
          <Special imageUrl={ owl }/>
          <Special imageUrl={ bear }/>
          <Special imageUrl={ owl }/>
        </div>
      </div>
    );
  }
}

export default WeeklySpecials;
