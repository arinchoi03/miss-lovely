import React, { Component } from 'react';
// import './Misc.css';

class Newsletter extends Component {
  render() {
    const btnStyle = {
      width: '80%'
      , background: '#797979'
      , border: '1px solid #656565'
      , padding: '2px'
    }
    const inputStyle = {
      width: '80%'
      , background: '#F9F9F9'
      , border: '1px solid #656565'
      , padding: '2px 2px 2px 12px'
      , color: '#B1B1B1'
      , textAlign: 'left'
    }

    return (
      <div className="newsletter col-md-3">
        <h6 className="misc-title">
          NEWSLETTER
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
