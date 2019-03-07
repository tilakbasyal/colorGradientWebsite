import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
          <ul>
            {/* <img src = "http://lorempixel.com/50/50/" /> */}
            <li><a>Home</a></li>            
          </ul>     
          <hr />
      </div>
    );
  }
}

export default Header;
