import React, {Component} from 'react';
import "style.css";

export default class Login extends Component{
    render(){
        return (
            <div class="login_content">
                <div class="input_box">
                    <span>Login:</span> 
                    <input type="text" name="login" id="login" />
                </div>
                <div class="input_box">
                    <span>Senha:</span> 
                    <input type="text" name="pass" id="pass" />
                </div>
                <button>Entrar!</button>
            </div>
        )
    }
}