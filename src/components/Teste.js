import React, { Component } from 'react';
import api from '../model/perfecta-api';

export default class Teste extends Component{
	componentDidMount(){
		let out = api.newCategory('testeReact');
		console.log('>>',out);
	}
	render(){
		return( <div>Hello React</div> );
		
	}
}