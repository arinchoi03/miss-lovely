import React, { Component } from 'react';
import './Carousel.css';
import carouselPic from "./../images/lights.jpeg"

class Carousel extends Component {
  render() {
    return (
      <div>
        <div id="main-carousel" className="carousel slide" data-ride="carousel">

          <ol className="carousel-indicators">
            <li data-target="carousel-indicator" data-slide-to="0" className="active"></li>
            <li data-target="carousel-indicator" data-slide-to="1"></li>
            <li data-target="carousel-indicator" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img className="d-block img-fluid" src={ carouselPic } alt="First slide"/>
              <div className="carousel-caption d-md-block text-left">
                <h3>GET READY FOR</h3>
                <h3><strong>ROCK COLLECTION</strong></h3>
                <h6>GLAMOUROUS, UNIQUE AND BEAUTIFUL PIECES</h6>
                <button type="button" className="info-btn view-more">VIEW MORE</button>
                </div>
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src="..." alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src="..." alt="Third slide"/>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
    </div>
    );
  }
}

export default Carousel;
