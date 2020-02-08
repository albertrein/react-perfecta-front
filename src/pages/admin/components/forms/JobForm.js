import React, {Component} from 'react';
import PerfectaApi from '../../../../services/perfecta-api';


export default class JobForm extends Component {
    constructor(){
        super();
        this.state = {
            arrayObject: []
        }
    }

    async componentDidMount(){
        let categoriesOfApi = await PerfectaApi.getCategories();
        categoriesOfApi = Object.entries(categoriesOfApi.data)
        
        let arrayOfCategories = [];
        categoriesOfApi.map( value => arrayOfCategories.push(value[1].category) );

        this.setState({arrayObject: arrayOfCategories})
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
                    <select id="select" placeholder="Categoria da Vaga ..." >
                    	<option></option>
                        {this.state.arrayObject.map((value, i) => <option value={value} key={i}>{value}</option> )}
                    </select>
                    <button >Salvar Vaga!</button>
                </form>
            </div>
        );
    }
} 