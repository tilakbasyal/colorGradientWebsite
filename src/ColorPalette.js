import React, { Component } from 'react';
import './App.css';

class ColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : ['Chitwan Sunset', 'Sunwal Sunset', 'Ktm Sunset', 'Parasi Sunset', 'Dang Sunset', 'Pokhara Sunset', 'Lalitpur Sunset', 'Heaven Sunset'],
      startEnd :  ['#CCFFFF -> #FFCCCC', '#CCFFFF -> #FFCCCC', '#CCFFFF -> #FFCCCC', '#CCFFFF -> #FFCCCC', '#CCFFFF -> #FFCCCC', '#CCFFFF -> #FFCCCC', '#CCFFFF -> #FFCCCC', '#CCFFFF -> #FFCCCC']
      }
      //bind this here
  }
  render() {
    return (
      <div className="ColorPalette">        
            <div className="gradients">

            </div>
            <div className="gradientsName">
              <p>{mappingName}</p>
              <p>{mappingStartEnd}</p>
            </div>
            <div className="gradientsLink">
              <button>Copy CSS</button>
              <button>Get .PNG</button>
            </div>             
      </div>
    );
  }
}

export default ColorPalette;
