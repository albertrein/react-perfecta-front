import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Admin from './components/Admin';

export default class AdminPage extends Component{
    render(){
        return(
        	<div>Admin Component
	        	<BrowserRouter>
	        		<Switch>
	        			<Route path="/admin/login" exact={true} component={Login}/>
	        			<Route path="/admin/admin" exact={true} component={() => <Admin teste="guilherme" />} />
	        		</Switch>
	        	</BrowserRouter>
        	</div>
        )
    }
}
