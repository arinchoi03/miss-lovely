import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const footerStyle = {
      backgroundColor: '#ECECEC'
      , borderTop: '1px solid #e6e6e6'
      , height: '5vh'
      , width: '100vw'
      , display: 'flex'
      , justifyContent: 'space-between'
      , fontSize: '8px'
      , alignText: 'left'
      , left: '0'
      , right: '0'
      , bottom: '0'
    }

    const cardsStyle = {
      width: '150px'
      , alignSelf: 'center'
    }

    return (
      <div className="footer col-md-12" style={ footerStyle } >
        <div className="col-md-6" id="trademark">
          <div>2017 MeyersHolum Sample SCA Store. All Rights Reserved.</div>
          <div>Implemented by MyersHolum.</div>
        </div>
        <div className="col-md-6" id="cards">
        <img style={ cardsStyle } src="https://www.merchantequip.com/image/?logos=v|m|a|d&height=32" alt="Merchant Equipment Store Credit Card Logos"/>        </div>
      </div>
    );
  }
}

export default Footer;
