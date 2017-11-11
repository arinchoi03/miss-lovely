import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Carousel from './Carousel';
import WeeklySpecials from './WeeklySpecials';
import Collection from './Collection';
import Misc from './Misc';
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
