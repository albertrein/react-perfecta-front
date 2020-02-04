import React, {Component} from 'react';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import './style/Admin.css';
import CategoryForm from './forms/CategoryForm';
import JobForm from './forms/JobForm';
import General from './forms/General';

export default class Admin extends Component{
	constructor(props){
		super(props);
		console.log('Admin');
	}
	render(){
		return(
			<div id="container-admin">
				<div className="column lateral-links">
					
					<Link to="/admin">Página Inicial</Link>
					<Link to="/admin/newcategorie">Nova Categoria</Link>
					<Link to="/admin/newjob">Nova Vaga</Link>
					
				</div>
				<div className="column content">									
					<Route path="/admin" exact component={General} />
					<Route path="/admin/newjob" exact="true" component={JobForm} />
					<Route path="/admin/newcategorie" exact="true" component={CategoryForm} />						
				</div>
			</div>
		)
	}
}