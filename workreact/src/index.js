import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Header from "./components/Header";
import NewsList from "./components/News_list";


class App extends React.Component{
	constructor(){
		super()
	
		this.state = {
			news : []
		}
	}

	componentDidMount(){
		axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=aea52f7305d24e5c9b1fbb8edddd80aa')
			.then(response => this.setState({ news : response.data.articles }))
	}

	render(){
		return (
		<div>
			<Header />
			<NewsList news={this.state.news}>
				<h3> The News are :</h3>
			</NewsList>
		</div>
	)
}
	
}

ReactDOM.render(<App />, document.getElementById("root"));
