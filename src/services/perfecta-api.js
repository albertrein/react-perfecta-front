import axios from 'axios';

class PerfectaAPI{
	//const atribute - url base
	//urlBase = "http://localhost:3001/";
	urlBase = "https://perfecta-api-node-firebase.herokuapp.com/";
	headers = {
		'Accept': 'application/json',
        'Content-Type': 'application/json'
	}

	async setNewCategory(categoryName){
		let out = await axios.post(this.urlBase + 'new/category/' + categoryName);
		return out;
	}

	async setNewJob(jobTitle, jobDescription, jobCategorie){
		let params = {
			"jobCategory" : jobCategorie,
			"jobTitle" : jobTitle,
			"jobDescription" : jobDescription
		};

		let out = await axios.post(this.urlBase + 'new/job/', params, {
			headers: this.headers
		});

		return out;
	}

	async getCategories(){}

	async getJobByCategorie(){}

	


	teste(){console.log('teste',this.urlBase);}
}

export default new PerfectaAPI();
