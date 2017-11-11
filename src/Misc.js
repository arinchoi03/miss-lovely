import React, { Component } from 'react';
import KeepInTouch from './KeepInTouch';
import Informational from './Informational';
import Newsletter from './Newsletter';
import './Misc.css';

const informationTitle = "INFORMATION"
const informationItems = ['Contact Us', 'About Us', 'Ring Size Chart', 'Necklace Size Chart']

const myAccountTitle = "MY ACCOUNT"
const myAccountItems = ['My Account', 'View Cart', 'Login', 'Register']

class Misc extends Component {
  render() {
    return (
      <div className="section misc">
        <KeepInTouch />
        <Informational items={ informationItems } title={ informationTitle } />
        <Informational items={ myAccountItems } title={ myAccountTitle } />
        <Newsletter />
      </div>
    );
  }
}

export default Misc;
