import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Admin from './components/Admin';

export default class AdminPage extends Component{
    render(){
        return(
        	<BrowserRouter>
        		<Switch>
        			<Route path="/admin/login" component={Login}/>
        			<Route path="/admin" component={Admin}/>
        		</Switch>
        	</BrowserRouter>
        )
    }
}
