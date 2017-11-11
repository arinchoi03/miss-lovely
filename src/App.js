import React, { Component } from 'react';
import './App.css';
import Navbar from './1-nav/Navbar';
import Carousel from './2-carousel/Carousel';
import WeeklySpecials from './3-weekly/WeeklySpecials';
import Collection from './4-collection/Collection';
import Misc from './5-misc/Misc';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Carousel />
        <WeeklySpecials />
        <Collection />
        <Misc />
        <Footer />
      </div>
    );
  }
}

export default App;
