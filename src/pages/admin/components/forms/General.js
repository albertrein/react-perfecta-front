import React, {Component} from 'react';
import PerfectaApi from '../../../../services/perfecta-api';


export default class General extends Component {
    constructor(props){
    	super(props);
    	this.state = {
    		allJobs: [],
    		teste1: ''
		}		
	}
	
	componentDidMount(){
		setTimeout(() => {
			this.setState({
				allJobs: [
					{ id: '1', age: [{title: "t1"}, {title: "t2"}] },
					{ id: '2', age: [{title: "t3"}, {title: "t4"}] },
					{ id: '3', age: [{title: "t5"}, {title: "t6"}] }
				]
			});
		}, 4000);
		
	}

/*	async componentDidMount(){
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
    }*/


    render(){
        return(
            <div className="insert-form-content">
                <h1>General</h1>
                {this.state.allJobs.map((vv) => {
					return <p key={vv.id}>{vv.age.map((vvv) => <a key={vvv.title}>{vvv.title}</a> )}</p>
				})}
            </div>
        );
    }
    
}
