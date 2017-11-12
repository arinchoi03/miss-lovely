import React from 'react';

const Informational = (props) => {
  return (
    <div className="informational misc-panel col-md-3">
      <h6 className="misc-title">
        { props.title }
      </h6>
      <div className="item">
        <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
        { props.items[0]}
      </div>
      <div className="item">
        <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
        { props.items[1]}
      </div>
      <div className="item">
        <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
        { props.items[2]}
      </div>
      <div className="item">
        <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
        { props.items[3]}
      </div>
    </div>
  );
}

export default Informational;
