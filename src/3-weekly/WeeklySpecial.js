import React from 'react';
import './WeeklySpecials.css';

const WeeklySpecial = (props) => {
    return (
      <div className="special">
        <div className="special-image">
          <img className="image-square" src={ props.imageUrl } alt={"special"} />
        </div>
        <p className="product-title">{props.title}</p>
        <p className="price">$200</p>
        <button type="button" className="info-btn see-more">SEE MORE</button>
      </div>
    );
}

export default WeeklySpecial;


