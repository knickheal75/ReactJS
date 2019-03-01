import React, { Component } from 'react';
class Header extends Component {
  render() {
    return (
        <div className="intro">
        <div className="container">
          <div className="row">
            <div className="intro-text">
              <h1>Magnum</h1>
              <hr/>
              <p>Graphic Design • Illustration • Photography</p>
              <a href="#about" className="btn btn-default btn-lg page-scroll">Learn More</a> </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
