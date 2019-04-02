import React, { Component } from 'react';
import Header from "./Header";
import Home from "./Home";

class App extends Component {
  render() {
    var user={
      "one":"1",
      "hobbies":["football","cricket"]
    }
    return (
      <div>
        <Header name={"nikhil"} user={user}/>
        <h1>
          HAYLOW
        </h1>
        <Home />
      </div>
    );
  }
}

export default App;
