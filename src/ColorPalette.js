import React, { Component } from 'react';
import { COLORS } from './COLORS';

class ColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: COLORS
    }
  }
  render() {
    const list = this.state.colors.map((item) => {
      return(
        <div className="gradientsInMapping">
          <div key= {item.id} className="gradients" style={ item.background }>        
          </div>
          <div className="gradientsName">
            <p>{item.color[0]} --> {item.color[1]}</p>
          </div>

          <div className="gradientsLink">
            <button>Copy CSS</button>
            <button>Get .PNG</button>
         </div>       
        </div>
        
      )
    })
    return (
      <div className="ColorPalette">
        {list}
      </div>
    );
  }
}


export default ColorPalette;
