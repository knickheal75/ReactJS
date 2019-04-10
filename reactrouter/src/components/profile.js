import React from "react"
import { Link, Redirect} from "react-router-dom"


const Profile=(props)=>{
    const redi=()=> {
            props.history.push("/")
    }
    
    
    return(
        <div>
           <Link to={{ pathname: `${props.match.url}/posts`}}> to /profile/posts</Link>
            {redi()}    
        </div>
    )
}
export default Profile