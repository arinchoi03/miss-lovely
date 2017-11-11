import React, { Component } from 'react';
import './WeeklySpecials.css';

const WeeklySpecial = (props) => {
    return (
      <div className="special">
        <div className="special-image">
          <img className="image-square" src={ props.imageUrl } />
        </div>
        <p>Pink Teddy</p>
        <p>$200</p>
        <button type="button" className="btn btn-default">SEE MORE</button>
      </div>
    );
}

export default WeeklySpecial;


