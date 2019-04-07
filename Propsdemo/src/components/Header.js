import React from "react";

class Header extends React.Component{
    constructor(props){
        super();
        this.state={
            age:props.initialAge
        };
    }
    onMakeOlder(){
        this.setState({
            age:this.state.age+3
        })
    }
    render(){
        return(
            <div>
                HEY {this.props.name} FROM header and age is {this.state.age}
            
            <hr/>
            <button onClick={() => this.onMakeOlder()}>
                make me older
            </button></div>
        )
    }
}

export default Header;