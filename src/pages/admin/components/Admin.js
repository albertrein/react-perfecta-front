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
				<div class="column lateral-links">
					<BrowserRouter>
						<Link to="/admin">Página Inicial</Link>
						<Link to="/admin/newcategorie">Nova Categoria</Link>
						<Link to="/vaga">Nova Vaga</Link>
					</BrowserRouter>
				</div>
				<div class="column content">
					<BrowserRouter>
						<Switch>
							<Route path="/admin" exact="true" component={General} />
							<Route path="/admin/newcategorie" exact="true" component={CategoryForm} />
							<Route path="/admin/newjob" component={CategoryForm} />
						</Switch>
					</BrowserRouter>
				</div>
			</div>
		)
	}
}