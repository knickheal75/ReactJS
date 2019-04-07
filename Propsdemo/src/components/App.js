import React, { Component } from 'react';
import Header from "./Header";
import Home from "./Home";

class App extends Component {
    render() {
      return (
      <div>
        <Header name={"nikhil"} initialAge={"27"}/>
        <h1>
          HAYLOW
        </h1>
        <Home/>
      </div>
    );
  }
}

export default App;
