import React,{ Component } from "react";

export default class Life extends Component{
    // 1. get default props
    
    // 2. set default state 
    state={
        title:" Lifecycle"
    }
     
    // 5 after jsx
     componentDidMount(){
        console.log("after render")
        document.querySelector("h3").style.color="red"
    }


    // 3. before render
    componentWillMount(){
        console.log("before render")
    }
    //render JSX 

    componentWillUpdate(){
        console.log("before update")
    }

    componentDidUpdate(){
        console.log("after update")
    }

    shouldComponentUpdate(nextProps,nextState){
        if (nextState.title === "something else"){
            return false 
        }
        return true;
    }


    componentWillReceiveProps(){
        console.log("before receive props")
    }

    componentWillUnmount(){
        console.log("UNmount")
    }

    render(){
        console.log("RENDER")
        return(
            <div>
                <h3>{this.state.title}</h3>
                <div onClick={()=> this.setState({title:"something else1"})}>CLICK TO CHANGE</div>
            </div>
        )
    }
   
    
}