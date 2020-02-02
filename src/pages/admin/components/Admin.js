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
				<div className="column lateral-links" style={{display:'grid'}}>
					
					<Link to="/admin">Página Inicial</Link>
					<Link to="/admin/logged/newcategorie">Nova Categoria</Link>
					<Link to="/admin/logged/newjob">Nova Vaga</Link>
					
				</div>
				<div className="column content">
					<BrowserRouter>
						<Switch>							
							<Route path="/admin/logged/newjob" component={JobForm} />
							<Route path="/"  component={CategoryForm} />
						</Switch>
					</BrowserRouter>
				</div>
			</div>
		)
	}
}