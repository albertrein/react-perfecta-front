import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default class Admin extends Component{
    render(){
        return(
        	<BrowserRouter>
        		<Switch>
        			<Route path="/login" component={Login}/>
        			<Route path="/admin" component={Admin}/>
        		</Switch>
        	</BrowserRouter>
        )
    }
}
