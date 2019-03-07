import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import TextDescribed from './TextDescribed';
import ColorPalette from './ColorPalette';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />  
        <TextDescribed /> 
        <ColorPalette /> 
      </div>
    );
  }
}

export default App;
