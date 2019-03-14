import React from "react";
import "../css/styles.css"

class Header extends React.Component{
  constructor(){
    super()
    this.state={
      title:"",
    }
  }
  onChangeHandler = (e)=>{
    this.setState({
      title:e.target.value
    })
  }
  render(){
    return(
      <header>
        <div className="logo">logo</div>
        <input type="text" onChange={this.onChangeHandler}/>
        <div> {this.state.title} </div>
      </header>
    )
  }
}
export default Header;