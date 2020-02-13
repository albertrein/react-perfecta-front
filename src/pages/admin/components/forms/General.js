import React, {Component} from 'react';
import PerfectaApi from '../../../../services/perfecta-api';


export default class General extends Component {
    constructor(props){
    	super(props);
    	this.state = {
    		allJobs: [],
    		teste1: ''
		}
		this.teste = this.teste.bind(this);
	}
	async componentDidMount(){
		await this.teste()
		//console.log('V>',this.state.allJobs);
	}

	async teste(){
    	await this.props.arrayCategories.map(async value => {
	    	let out = await PerfectaApi.getJobByCategorie(value);
			
			let object = {
				id: '',
				age: []
	    	};

	    	object.id = value;
			
			Object.keys(out.data).map(job => object.age.push({title: job}) );

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
				return <p key={vv.id}><span>{vv.id}</span>{vv.age.map((vvv) => <a key={vvv.title}>{vvv.title}</a> )}</p>
				})}
            </div>
        );
    }
    
}
