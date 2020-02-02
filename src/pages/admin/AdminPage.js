import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Login from './components/Login';
import Admin from './components/Admin';

export default class AdminPage extends Component{
	constructor(props){
		super(props);
		let isLogged = localStorage.getItem("isLogged");
		console.warn('>>',isLogged);
		if(isLogged === 'false' || isLogged == null){
			console.warn('if')
			this.props.history.push('/admin/login');
		}
	}
    render(){
        return(
        	<div>Admin Component
	        	<BrowserRouter>
	        		<Switch>
	        			<Route path="/admin/login" exact={true} component={Login}/>
	        			<Route path="/admin/logged" component={Admin} />
	        		</Switch>
	        	</BrowserRouter>
        	</div>
        )
    }
}
