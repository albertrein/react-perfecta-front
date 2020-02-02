import React, {Component} from 'react';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import './style/Admin.css';
import CategoryForm from './forms/CategoryForm';
import General from './forms/General';

export default class Admin extends Component{
	state = {};
	constructor(props){
		super(props);


		this.state.teste = props.teste;
		console.log(this.state);
	}
	render(){
		return(
			<div id="container-admin">
				<div className="column lateral-links">
					
					<Link to="/admin">Página Inicial</Link>
					<Link to="/admin/newcategorie">Nova Categoria</Link>
					<Link to="/vaga">Nova Vaga</Link>
					
				</div>
				<div className="column content">
					<BrowserRouter>
						<Switch>							
							<Route path="/admin/newjob"  component={CategoryForm} />
							<Route path="/admin/newcategorie"  component={CategoryForm} />
						</Switch>
					</BrowserRouter>
				</div>
			</div>
		)
	}
}