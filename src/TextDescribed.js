import React, { Component } from 'react';
import './App.css';

class TextDescribed extends Component {
  render() {
    return (
      <div className="TextDescribed">
        <h2 className="web-gradients">Web Gradients</h2>
        <p>Do you often look for cool background gradients for your UI?</p>
        <p><a href='#' className='to-color'>WebGradients</a> is a free collection of 180 linear gradients that you can use as<br />
            content backdrops in any part of your website. Easy copy CSS3 crossbrowser code<br />
            and use it in a moment! We've also prepared a .PNG version of each gradient.<br />
            As a bonus, there are packs for <a href='#' className='to-color'>Sketch</a> and <a href='#' className='to-color'>Photoshop</a>.</p>          
      </div>
    );
  }
}

export default TextDescribed;
