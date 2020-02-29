import React, {Component} from 'react';


export default class Home extends Component{
	mekeRedirectToFrontPage(){
		//Here set location to website front home page
		window.location.href = "http://github.com/albertrein";
	}
	render(){
		return (
			<div className="container-home">
				<h1>Redirecionando para página inicial do site ...</h1>
			</div>
		);
	}
}