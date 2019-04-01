import React from "react";

class Header extends React.Component{
    render(){
        return(
            <div>
                HEY {this.props.name} FROM header
            </div>
        )
    }
}

export default Header;