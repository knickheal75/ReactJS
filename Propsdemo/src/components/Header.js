import React from "react";

class Header extends React.Component{
    render(){
        return(
            <div>
                <div>
                HEY {this.props.name} FROM header
            </div>
            <p> Hobbies are {this.props.user.hobbies.map((hobby)=> <li>{hobby}</li>)}</p>
            </div>
        )
    }
}

export default Header;