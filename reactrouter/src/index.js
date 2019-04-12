import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Link } from "react-router-dom"

import Profile from "./components/profile"
import Posts from "./components/posts"
import Contact from "./components/contact"
import Home from "./components/home"


const App=()=>{
    return(
        <div>
           
            <BrowserRouter>
            
            <header>
            <Link to="/">Home</Link><br/>
            <Link to="/posts">Posts</Link><br/>
            <Link to={{
                pathname:"/profile"
            }}>Profile</Link><br/>
            <Link to="/contact">Contact</Link><br/>


            </header>
            
            <div>
                <Route path="/" exact component={Home}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/posts" component={Posts}/>
                <Route path="/contact" component={Contact}/>

            </div>
    
            
            </BrowserRouter>
          
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

