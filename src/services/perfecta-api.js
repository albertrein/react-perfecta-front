import axios from 'axios';

class PerfectaAPI{
	//const atribute - url base
	urlBase = "https://perfecta-api-node-firebase.herokuapp.com/";
	

	async setNewCategory(categoryName){
		let out = await axios.post(this.urlBase + 'new/category/' + categoryName);
		return out;
	}

	async setNewJob(){
		

		let out = await axios.post(this.urlBase + 'new/job/', {
			"jobCategory" : "Teste",
			"jobTitle" : "Teste #1",
			"jobDescription" : "Teste React Front #1"
		});
		//let out = await axios.post(this.urlBase + 'new/job/');
		return out;
	}


	teste(){console.log('teste',this.urlBase);}
}

export default new PerfectaAPI();
