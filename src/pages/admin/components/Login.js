import React, {Component} from 'react';

export default class Login extends Component{
	state = {
		login: '',
		pass: '',
	}

	form_submit_handler = (evt) => {
		evt.preventDefault();
		let nullValue = document.querySelector('#nullValue');
		let failLogin = document.querySelector('#failLogin');
		
		nullValue.style.display = 'none';
		failLogin.style.display = 'none';


		if(!this.state.login || !this.state.pass){
			console.error('Tente Novamente');
			nullValue.style.display = 'block';
			localStorage.setItem("isLogged", false);
			return false;
		}

		if(this.state.login !== 'admin' && this.state.pass !== '123'){
			console.error('Tente Novamente');
			failLogin.style.display = 'block';
			localStorage.setItem("isLogged", false);
			return false;
		}
		alert("Sucesso!");
		localStorage.setItem("isLogged", true);
		this.props.history.push('/admin'); //This set url actual
		return true;

	}

	render(){
		return(
			<div className="login-content">
				<form id="login-form" onSubmit={this.form_submit_handler}>
					<input type="text" onChange={e => this.setState({ login: e.target.value })} />
					<input type="password" onChange={e => this.setState({ pass: e.target.value })} />
					<button className="login-form-submit" type="submit">Entrar!</button>
				</form>
				<p style={{display: 'none', color:'yellow'}} id='nullValue'>Você não Preenceu os campos!</p>
				<p style={{display: 'none', color:'red'}} id='failLogin'>Credenciais Inválidas!</p>
			</div>
		)
	}
}