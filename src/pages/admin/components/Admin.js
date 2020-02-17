import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import './style/Admin.css';
import CategoryForm from './forms/CategoryForm';
import JobForm from './forms/JobForm';
import General from './forms/General';
import PerfectaApi from '../../../services/perfecta-api';

export default class Admin extends Component{
	constructor(props){
		super(props);
		this.state = {
            arrayObject: []
        }	
	}

	async componentDidMount(){
        let categoriesOfApi = await PerfectaApi.getCategories();
        categoriesOfApi = Object.entries(categoriesOfApi.data)
        
        let arrayOfCategories = [];
        categoriesOfApi.map( value => arrayOfCategories.push(value[1].category) );

        this.setState({arrayObject: arrayOfCategories})
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
					<Route path="/admin" exact component={ () => <General arrayCategories={this.state.arrayObject} />} />
					<Route path="/admin/newjob" exact="true" component={ () => <JobForm arrayCategories={this.state.arrayObject} />} />
					<Route path="/admin/newcategorie" exact="true" component={CategoryForm} />						
				</div>
			</div>
		)
	}
}