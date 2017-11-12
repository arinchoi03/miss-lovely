import React, { Component } from 'react';
// import './Misc.css';

class Newsletter extends Component {
  render() {
    const btnStyle = {
      width: '80%'
      , background: '#797979'
      , border: '1px solid #656565'
      , padding: '5px'
    }
    const inputStyle = {
      width: '80%'
      , background: '#F9F9F9'
      , border: '0.5px solid #656565'
      , padding: '5px 5px 5px 12px'
      , color: '#B1B1B1'
      , textAlign: 'left'
      , marginBottom: '7px'
    }

    return (
      <div className="newsletter misc-panel col-md-3">
        <h6 className="misc-title">
          NEWSLETTER SIGN UP
        </h6>
        <div>
          <button className="info-btn" style={ inputStyle }>Email Address</button>
        </div>
        <div>
          <button className="info-btn" style={ btnStyle }>SUBMIT</button>
        </div>
      </div>
    );
  }
}

export default Newsletter;
