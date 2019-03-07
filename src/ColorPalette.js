import React, { Component } from 'react';
import './App.css';

class ColorPalette extends Component {
  render() {
    return (
      <div className="ColorPalette">
        <div className="ColorPaletteWrapper">
            <div className="gradients">

            </div>
            <div className="gradientsName">
              <p>001 Chitwan Sunset</p>
              <p>#CCFFFF -> #FFCCCC</p>
            </div>
            <div className="gradientsLink">
              <button>Copy CSS</button>
              <button>Get .PNG</button>
            </div>
        </div>         
      </div>
    );
  }
}

export default ColorPalette;
