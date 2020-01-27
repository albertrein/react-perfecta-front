import React, {Component} from 'react';
import ReactDOM from 'react-dom';
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
		}else{
			console.warn('else')
			this.props.history.push('/admin');
		}
	}
	componentDidMount(){
		
	}
    render(){
        return(
        	<div>Admin Component
	        	<BrowserRouter>
	        		<Switch>
	        			<Route path="/admin/login" exact={true} component={Login}/>
	        			<Route path="/admin"  component={() => <Admin teste="guilherme" />} />
	        		</Switch>
	        	</BrowserRouter>
        	</div>
        )
    }
}
