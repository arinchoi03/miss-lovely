import React, { Component } from 'react';
import './Collection.css';

class Collection extends Component {
  render() {
    return (
      <div className="collection">
        <div className="collection-left">
          <h4>MISS LOVELY</h4>
          <h4>ROCK COLLECTION</h4>
          <h6>INCREDIBLE PIECES FOR EVERY OCCASSION, FIND</h6>
          <h6>OUT MORE ABOUT THESE AMAZING PRODUCTS</h6>
          <button type="button" className="btn btn-primary">VIEW COLLECTION</button>
        </div>
        <div className="collection-right">
        </div>
      </div>
    );
  }
}

export default Collection;
