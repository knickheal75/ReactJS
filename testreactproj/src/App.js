import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <div>
        <form id="dd"s>
                    <label>
                    First name:<br/>
                    <input type="text" name="firstname"/><br/>
                    Last name:<br/>
                    <input type="text" name="lastname"/><br/><br/>
                    </label>
                     <input type="submit" value="Submit"/>
                    </form>
        </div> 
         
        </header>
      </div>
    );
  }
}

export default App;
