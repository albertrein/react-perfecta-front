import React, {Component} from 'react';

export default class JobForm extends Component {
    render(){
        return(
            <div className="insert-form-content">
                <p className="title">Nova Vaga</p>
                <form className="content-form">
                    <input placeholder="Título da Vaga ..." type="text" />
                    <input placeholder="Descrição da Vaga ..." type="text" />
                    <select placeholder="Categoria da Vaga ..." >
                    	<option>Categoria 1</option>
                    </select>
                    <button onClick="">Salvar Vaga!</button>
                </form>
            </div>
        );
    }
} 