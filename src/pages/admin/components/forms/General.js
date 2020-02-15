import React, {Component} from 'react';
import PerfectaApi from '../../../../services/perfecta-api';
import LoadingGif from '../../../../assets/loading/loading.gif'

export default class General extends Component {
    constructor(props){
    	super(props);
    	this.state = {
    		allJobs: [],
    		loading: 'true',
    		showContent: 'false'
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
	    	this.setState({loading: 'false'});
	    	this.setState({showContent: 'true'});
		});
    }


    render(){
        return(
            <div className="insert-form-content">
            	<div id={this.state.loading}><img src={LoadingGif} /></div>
                <div id={this.state.showContent}>
                	<h1>General</h1>
                	{this.state.allJobs.map((vv) => {
					return <div className="grid_data" key={vv.category}><span>{vv.category}</span>{vv.jobs.map((vvv) => <a key={vvv.title}>{vvv.title}<button>X</button></a> )}</div>
					})}
				</div>	
            </div>
        );
    }
    
}
