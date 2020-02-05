import React, {Component} from 'react';
import PerfectaApi from '../../../../services/perfecta-api';


export default class JobForm extends Component {
    constructor(){
        let categories = PerfectaApi.getCategories();
    }
    
    async saveJob(){
        let out = await PerfectaApi.setNewJob();
        console.log(out);
    }

    render(){
        return(
            <div className="insert-form-content">
                <p className="title">Nova Vaga</p>
                <div className="content-form">
                    <input placeholder="Título da Vaga ..." type="text" />
                    <input placeholder="Descrição da Vaga ..." type="text" />
                    <select placeholder="Categoria da Vaga ..." >
                    	<option>Categoria 1</option>
                    </select>
                    <button onClick={this.saveJob}>Salvar Vaga!</button>
                </div>
            </div>
        );
    }
} 