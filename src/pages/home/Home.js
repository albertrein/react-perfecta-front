import React, {Component} from 'react';
import Navbar from './components/Navbar';
import Header from './components/Head';
import About from './components/About';
import Services from './components/Services';
import { Route } from 'react-router-dom';
import '../../assets/style.css'
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/responsive.css';
import '../../assets/css/custom.css';

export default class Home extends Component{
	render(){
		return (
			<div className="container-home">
				<Route path="/" component={Navbar} />
				<Route path="/" component={Header} />
				<Route path="/" component={About} />
				<Route path="/" component={Services} />
			</div>
		);
	}
}