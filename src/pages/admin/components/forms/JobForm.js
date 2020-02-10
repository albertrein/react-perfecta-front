import React, {Component} from 'react';
import PerfectaApi from '../../../../services/perfecta-api';


export default class JobForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            jobTitle: '',
            jobDesc: '',
            jobCateg: '',
            showFailMessage: "false"
        }

        //Bind this object to functions
        this.handlerChange = this.handlerChange.bind(this);
        this.saveJob = this.saveJob.bind(this);
    }

    handlerChange = async (inputDataEvent) => {        
        //setValue        
        this.setState({
            [inputDataEvent.target.name]: inputDataEvent.target.value
        });
    }

    checkIsAvailableInput(data){
        if(data == "" || data.length <= 1 || data.includes('#')){
            return false;
        }
        return true;
    }

    saveJob = async (evt) => {
        evt.preventDefault();
        if(!this.checkIsAvailableInput(this.state.jobTitle) || !this.checkIsAvailableInput(this.state.jobDesc) || !this.checkIsAvailableInput(this.state.jobCateg) ){
            this.setState({showFailMessage: "true"});
            return false;
        }
        this.setState({showFailMessage: "false"});
        let out = await PerfectaApi.setNewJob(this.state.jobTitle, this.state.jobDesc, this.state.jobCateg);
        
        console.log('out',out);
    }

    render(){
        return(
            <div className="insert-form-content">
                <p className="title">Nova Vaga</p>
                <form className="content-form" onSubmit={this.saveJob}>
                    <input name="jobTitle" placeholder="Título da Vaga ..." type="text" onChange={this.handlerChange} />
                    <textarea name="jobDesc" placeholder="Descrição da Vaga ..." type="text" onChange={this.handlerChange} />
                    <select name="jobCateg" placeholder="Categoria da Vaga ..." onChange={this.handlerChange} >
                    	<option></option>
                        {this.props.arrayCategories.map((value, i) => <option value={value} key={i}>{value}</option> )}
                    </select>
                    <button id={this.state.availableToSubmit} onClick={this.saveJob}>Salvar Vaga!</button>
                </form>
                <p id={this.state.showFailMessage}>Campos não preenchidos corretamente!</p>
            </div>
        );
    }
} 