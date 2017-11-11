import React, { Component } from 'react';
// import './Misc.css';

class Newsletter extends Component {
  render() {
    return (
      <div className="newsletter col-md-3">
        <h6 className="misc-title">
          NEWSLETTER
        </h6>
        <div>
          <input placeholder={'Email Address'}></input>
        </div>
        <div>
          <button className="btn btn-lg btn-default">SUBMIT</button>
        </div>
      </div>
    );
  }
}

export default Newsletter;
