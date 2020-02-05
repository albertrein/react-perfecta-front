import axios from 'axios';

class PerfectaAPI{
	async newCategory(categoryName){
		let out = await axios.post('https://perfecta-api-node-firebase.herokuapp.com/new/category/'+categoryName);
		return out;
	}

	teste(){console.log('teste');}
}

export default new PerfectaAPI();
