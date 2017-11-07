import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Carousel from './Carousel';
import WeeklySpecials from './WeeklySpecials';
import Collection from './Collection';
import Misc from './Misc';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Carousel />
        <WeeklySpecials />
        <Collection />
        <Misc />
      </div>
    );
  }
}

export default App;
