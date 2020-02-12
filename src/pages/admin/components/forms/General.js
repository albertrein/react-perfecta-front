import React, {Component} from 'react';
import PerfectaApi from '../../../../services/perfecta-api';


export default class General extends Component {
    constructor(props){
    	super(props);
    	this.state = {
    		allJobs: [
    			{jobTitle: "Gerenciamento"},
				{jobTitle: "Teste"},
				{jobTitle: "Marketing"},
				{jobTitle: "teste"},
				{jobTitle: "TI"},
				{jobTitle: "qweqwe"}
    		],
    		teste1: ''
    	}
    	this.teste = this.teste.bind(this);
    }

    async componentDidMount(){
    	await this.teste();
    	console.log('>',this.state.allJobs);
    }

    async teste(){
    	let arrayAll = [];
    	this.props.arrayCategories.map(async value => {
	    	let out = await PerfectaApi.getJobByCategorie(value);
	    	let object = {
	    		jobTitle: '',
	    		arrayJobs: [
	    			{ id: '1', age: 42 },
        			{ id: '2', age: 33 },
        			{ id: '3', age: 68 },
	    		]
	    	};

	    	object.jobTitle = value;

	    	if(out.data === ""){
	    		object.arrayJobs = [];	
	    	}else{
	    		object.arrayJobs = Object.keys(out.data);
	    	}

	    	arrayAll.push(object);
    	});
    	//console.log(arrayAll)
    	//await this.setState({"allJobs": arrayAll});
    	//this.setState({teste1: 'guilherme'});
    }

    /*temp1.map(v => {
    	console.log(v.jobTitle)
    	v.arrayJobs.map(vv => console.log(vv))
	})*/

    /*async teste(categorieTitle){
    	let jobsByCategorie = await PerfectaApi.getJobByCategorie(categorieTitle);
    	return Object.entries(jobsByCategorie.data);
    	//console.log('>>',jobsByCategorie);
    }
    teste2(v){
    	let out = this.teste(v);
    	if(out === ""){
    		return [];
    	}
    	return out; 
    }*/
    render(){
        return(
            <div className="insert-form-content">
                <h1>General</h1>
                <p>{this.state.teste1}</p>
                {this.state.allJobs.filter((vv) => <p key={vv.id}>{vv.age}</p>)}
            </div>
        );
    }
    
}
