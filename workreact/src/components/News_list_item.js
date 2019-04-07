import React,{Component} from 'react';

class  NewsItem extends Component {
	render(){
	return(
		<div> 
			<div> 
				<h3> {this.props.item.title}</h3>
				<div> {this.props.item.description} </div>

			</div>
		</div>
	)	
}}

export default NewsItem;