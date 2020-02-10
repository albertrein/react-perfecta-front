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
    	this.props.arrayCategories.map(async value => {
	    	let out = await PerfectaApi.getJobByCategorie(value);
    		console.log(out.data);
    	});

    }

    render(){
        return(
            <div className="insert-form-content">
                <h1>General</h1>
                {this.props.arrayCategories.map((value, i) => <p key={i}>{value}</p>)}
            </div>
        );
    }
    
}
