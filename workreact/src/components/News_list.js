import React,{Component} from "react";
import NewsItem from "./News_list_item"

class News_list extends Component{
    render(){
       
        const items=this.props.news.map((item,index)=>{
        return(
            <NewsItem item ={item} key={index}/>
        )
    })
    return(
        <div>
        {this.props.children}
        {items}
        </div>
    )
}
}
export default News_list;