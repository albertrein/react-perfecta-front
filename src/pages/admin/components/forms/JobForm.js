import React, {Component} from 'react';
import PerfectaApi from '../../../../services/perfecta-api';


export default class JobForm extends Component {
    constructor(){
        super();
        let categories = PerfectaApi.getCategories();
    }
    
    async saveJob(evt){
        evt.preventDefault();
        //let out = await PerfectaApi.setNewJob();
        console.log('out',evt);
    }

    render(){
        return(
            <div className="insert-form-content">
                <p className="title">Nova Vaga</p>
                <form className="content-form" onSubmit={this.saveJob}>
                    <input id="title" placeholder="Título da Vaga ..." type="text" />
                    <input id="desc" placeholder="Descrição da Vaga ..." type="text" />
                    <select placeholder="Categoria da Vaga ..." >
                    	<option></option>
                        <option value="Teste">Teste</option>
                    </select>
                    <button >Salvar Vaga!</button>
                </form>
            </div>
        );
    }
} 