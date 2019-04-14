import React from "react";
import "../css/styles.css"

class Header extends React.Component{
  constructor(){
    super()
    this.state={
      title:"",
    }
  }
 
  render(){
    return(
      <header>
      
        <input type="text" onChange={this.props.keywords}/>
        <div> {this.state.title} </div>
      </header>
    )
  }
}
export default Header;