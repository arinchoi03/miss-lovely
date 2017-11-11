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
    }

    return (
      <div className="footer col-md-12" style={ footerStyle } >
        <div className="col-md-6">
          <span>2017 MeyersHolum Sample SCA Store. All Rights Reserved.</span>
          <span>Implemented by MyersHolum.</span>
        </div>
        <div className="col-md-6">
          Visa MS AMEX Discover
        </div>
      </div>
    );
  }
}

export default Footer;
