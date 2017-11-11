import React, { Component } from 'react';
import './WeeklySpecials.css';
import purpleDiamond from './images/purple_diamond.png'
import purpleGem from './images/purple_gem_ring.png'
import blueStone from './images/blue_stone_necklace.png'
import greenRing from './images/green_ring.png'
import Special from './WeeklySpecial'

const titles = [
  'Purple Diamond Ring'
  , 'Blue Stone Necklace'
  , 'Purple Amethyst Ring'
  , 'Emerald Ring'
]

class WeeklySpecials extends Component {
  render() {
    return (
      <div className="weekly-specials">
        <div className="weekly-title">
          <h4>WEEKLY SPECIALS</h4></div>
        <div className="special-panels">
          <Special imageUrl={ purpleDiamond } title={titles[0]}/>
          <Special imageUrl={ blueStone } title={titles[1]}/>
          <Special imageUrl={ purpleGem } title={titles[2]}/>
          <Special imageUrl={ greenRing } title={titles[3]}/>
        </div>
      </div>
    );
  }
}

export default WeeklySpecials;
