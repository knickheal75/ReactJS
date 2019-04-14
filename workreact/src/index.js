import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Header from "./components/Header";
import NewsList from "./components/News_list";


class App extends React.Component{
	constructor(){
		super()
	
		this.state = {
			news : [],
			filtered:[]
		}
	}
	
	componentDidMount(){
		axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=aea52f7305d24e5c9b1fbb8edddd80aa')
			.then(response => this.setState({ news : response.data.articles }))
	}




	getKeyword = (event) => {
        //console.log(event.target.value)
        let keyword = event.target.value;
        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keyword) > -1
        });
		
		this.setState({
            filtered
		})
	}

	

	render(){
		let newsFiltered = this.state.filtered;
        let newsWhole = this.state.news
		return (
		<div>
			<Header keywords={this.getKeyword}/>
                 <NewsList news={newsFiltered.length === 0 ? newsWhole : newsFiltered}>
				<h3> The News are :</h3>
			</NewsList>
		</div>
	)
}
	
}

ReactDOM.render(<App />, document.getElementById("root"));
