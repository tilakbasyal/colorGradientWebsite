import React, { Component } from 'react';
import './App.css';

import ColorPalette from './ColorPalette';
import Header from './Header';
import TextDescribed from './TextDescribed';

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
