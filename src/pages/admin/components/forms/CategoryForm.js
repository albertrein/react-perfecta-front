import React, {Component} from 'react';
import PerfectaApi from '../../../../services/perfecta-api';

export default class CategoryForm extends Component {
    async saveCategory(){
        let categorieTitle = document.querySelector('input').value;
        if(!categorieTitle){
            console.error('Não foi possivel registrar!');
            return ;
        }
        //Implent here loading gif        
        let out = await PerfectaApi.setNewCategory(categorieTitle);
        if(out.data.OK === 'Sucess'){
            alert('Saved!');
        }
    }

    async teste(){
        let saida = await PerfectaApi.getCategories();
        console.log(saida);
    }

    render(){
        return(
            <div className="insert-form-content">
                <p className="title">Nova Categoria</p>
                <div className="content-form">
                    <input placeholder="Título da Categoria ..." type="text" />
                    <button onClick={this.saveCategory}>Salvar Categoria!</button>
                </div>
                <br/><br/><br/><br/>
                <button onClick={this.teste}>Teste Aqui!!!</button>
            </div>
        );
    }
    
}
 