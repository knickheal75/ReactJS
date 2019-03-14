import React from "react";
import ReactDOM from "react-dom";

import JSON from "./db.json";

import Header from "./components/Header";
import NewsList from "./components/News_list";


class App extends React.Component{

	state = {
		news : JSON
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
