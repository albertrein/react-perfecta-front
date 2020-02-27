import React, {Component} from 'react';
import Navbar from './components/Navbar';
import Header from './components/Head';
import About from './components/About';
import Services from './components/Services';


export default class Home extends Component{
	render(){
		return (
			<div>
				<Navbar />
				<Header />
				<About />
				<Services />
			</div>
		);
	}
}