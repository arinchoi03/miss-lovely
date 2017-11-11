import React, { Component } from 'react';

class KeepInTouch extends Component {
  render() {
    return (
      <div className="keep-in-touch col-md-3">
        <h6 className="misc-title">
          KEEP IN TOUCH
        </h6>
        <div className="item">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          89 Sky Tower, NY
        </div>
        <div className="item">
          <i className="fa fa-phone" aria-hidden="true"></i>
          +123 123456 789
        </div>
        <div className="item">
          <i className="fa fa-envelope" aria-hidden="true"></i>
          contact@misslovely.com
        </div>
        <div className="buttons">
          <div className="item button-container">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </div>
          <div className="item button-container">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </div>
          <div className="item button-container">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </div>
          <div className="item button-container">
            <i className="fa fa-google-plus" aria-hidden="true"></i>
          </div>
      </div>
    </div>
    );
  }
}

export default KeepInTouch;
