import React, { Component } from 'react';

class Informational extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="informational col-md-3">
        <h6 className="misc-title">
          { this.props.title }
        </h6>
        <div className="item">
          <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
          { this.props.items[0]}
        </div>
        <div className="item">
          <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
          { this.props.items[1]}
        </div>
        <div className="item">
          <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
          { this.props.items[2]}
        </div>
        <div className="item">
          <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
          { this.props.items[3]}
        </div>
      </div>
    );
  }
}

export default Informational;
