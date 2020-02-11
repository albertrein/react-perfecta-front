import React, {Component} from 'react';
import PerfectaApi from '../../../../services/perfecta-api';


export default class General extends Component {
    constructor(props){
    	super(props);
    	this.state = {
    		allJobs: []
    	}
    }

    async componentDidMount(){
    	let arrayAll = [];
    	this.props.arrayCategories.map(async value => {
	    	let out = await PerfectaApi.getJobByCategorie(value);
	    	let object = {
	    		jobTitle: '',
	    		arrayJobs: []
	    	};

	    	object.jobTitle = value;

	    	if(out.data === ""){
	    		object.arrayJobs = [];	
	    	}else{
	    		object.arrayJobs = Object.keys(out.data);
	    	}

	    	arrayAll.push(object);
    	});
    	this.setState({"allJobs": arrayAll});
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
                {this.props.arrayCategories.map((value, i) => <p key={i}>{value}</p>)}
                {this.state.allJobs.map((val, i) => <a key={i}>{val.jobTitle}</a>)}
            </div>
        );
    }
    
}
