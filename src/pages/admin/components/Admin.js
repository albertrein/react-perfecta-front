import React, {Component} from 'react';

export default class Admin extends Component{
	state = {};
	constructor(props){
		super(props);


		this.state.teste = props.teste;
		console.log(this.state);
	}
	render(){
		return(
			<div>Admin Component = {this.state.teste}</div>
		)
	}
}