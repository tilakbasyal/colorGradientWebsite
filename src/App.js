import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import TextDescribed from './TextDescribed';

// import ColorPalette from './ColorPalette';

class App extends Component {
  render() {
    return (
      <Header />
      <TextDescribed />
      <div className="App">
          <ColorPalette /> 
          <ColorPalette /> 
          <ColorPalette /> 
          <ColorPalette /> 
          <ColorPalette /> 
          <ColorPalette /> 
          <ColorPalette /> 
          <ColorPalette /> 
        </div>
    );
  }
}

export default App;
