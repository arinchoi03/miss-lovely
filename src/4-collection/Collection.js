import React, { Component } from 'react';
import './Collection.css';

class Collection extends Component {
  render() {
    return (
      <div className="collection">
        <div className="collection-left">
          <h4><strong>MISS LOVELY</strong></h4>
          <h4>ROCK COLLECTION</h4>
          <p className="collection-blurb">INCREDIBLE PIECES FOR EVERY OCCASSION, FIND</p>
          <p className="collection-blurb">OUT MORE ABOUT THESE AMAZING PRODUCTS</p>
          <button type="button" className="info-btn view-collection">VIEW COLLECTION</button>
        </div>
        <div className="collection-right">
        </div>
      </div>
    );
  }
}

export default Collection;
