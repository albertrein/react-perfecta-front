import React, {Component} from 'react';

export default class CategoryForm extends Component {
    render(){
        return(
            <div className="insert-form-content">
                <p className="title">Nova Categoria</p>
                <form className="content-form">
                    <input placeholder="Título da Categoria ..." type="text" />
                    <button onClick="">Salvar Categoria!</button>
                </form>
            </div>
        );
    }
    
}
 