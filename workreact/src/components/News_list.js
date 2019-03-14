import React from "react";
import NewsItem from "./News_list_item"

const News_list=(props)=>{
    const items=props.news.map((item)=>{
        return(
            <NewsItem item ={item} key={item.id}/>
        )
    })
    return(
        <div>
        {props.children}
        {items}
        </div>
    )
}
export default News_list;