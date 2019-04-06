import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Link, NavLink, Switch } from "react-router-dom"

import Profile from "./components/profile"
import Posts from "./components/posts"
import Contact from "./components/contact"
import Home from "./components/home"
import PostItem from "./components/post_item"
import Life from "./components/lifecycles"

const App=()=>{
    return(
        
           
            <BrowserRouter>
                <div>
                <header>
                    <NavLink to="/">Home</NavLink><br/>
                    <NavLink to="/posts" activeStyle={{color:"red"}} activeClassName="selected">Posts</NavLink><br/>
                    <NavLink to={{pathname:"/profile"}}>Profile</NavLink><br/>
                    <NavLink to="/contact">Contact</NavLink><br/>
                    <NavLink to="/life">Life</NavLink><br/>


                </header>
                
                
                    <Switch>
                        <Route path="/posts/:id/:username" component={PostItem}/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/posts" component={Posts}/>
                        <Route path="/life" component={Life}/>
                        <Route path="/" exact component={Home}/>
                        <Route render={()=><h3>404</h3>}/>
                    </Switch>
                </div>

        
            
            </BrowserRouter>
          
        
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

