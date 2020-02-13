import React, {Component} from 'react';
import PerfectaApi from '../../../../services/perfecta-api';


export default class General extends Component {
    constructor(props){
    	super(props);
    	this.state = {
    		allJobs: [],
    		teste1: ''
		}
		this.getJobsByCategories = this.getJobsByCategories.bind(this);
	}
	async componentDidMount(){
		await this.getJobsByCategories()
	}

	async getJobsByCategories(){
    	await this.props.arrayCategories.map(async value => {
	    	let out = await PerfectaApi.getJobByCategorie(value);
			
			let object = {
				category: '',
				jobs: []
	    	};

	    	object.category = value;
			
			Object.keys(out.data).map(job => object.jobs.push({title: job}) );

			let alljobs = this.state.allJobs;
			alljobs.push(object);

			this.setState({allJobs: alljobs});
	    	
		});
    }


    render(){
        return(
            <div className="insert-form-content">
                <h1>General</h1>
                {this.state.allJobs.map((vv) => {
				return <p key={vv.category}><span>{vv.category}</span>{vv.jobs.map((vvv) => <a key={vvv.title}>{vvv.title}</a> )}</p>
				})}
            </div>
        );
    }
    
}
