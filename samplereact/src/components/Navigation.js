import React, { Component } from 'react';
class Navigation extends Component {
  render() {
    return (
    
    <nav className="navbar navbar-custom">
    <div className="container">
      <div class="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse"> <i className="fa fa-bars"></i> </button>
      </div>
      
      
      <div className="collapse navbar-collapse navbar-main-collapse">
        <ul className="nav navbar-nav">
         
          <li className="hidden"> <a href="#page-top"></a> </li>
          <li> <a className="page-scroll" href="#about">About</a> </li>
          <li> <a className="page-scroll" href="#portfolio">Portfolio</a> </li>
          <li> <a className="page-scroll" href="#contact">Contact</a> </li>
        </ul>
      </div>
    </div>
  </nav>
   );
  }
}

export default Navigation;