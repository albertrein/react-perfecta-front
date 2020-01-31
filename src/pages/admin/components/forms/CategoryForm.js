import React, {Component} from 'react';

export default class CategoryForm extends Component {
    render(){
        return(
            <div className="insert-form-content">
                <form className="content-form">
                    <input type="text" />
                    <button onClick="">Salvar!</button>
                </form>
            </div>
        );
    }
    
}
