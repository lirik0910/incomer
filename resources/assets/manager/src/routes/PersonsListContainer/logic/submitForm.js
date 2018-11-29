import {setObjectToQueryString} from 'url.js';
import fetchData from './fetchData.js';

export default (self, type_id) => (e) => {
	e.preventDefault();
	
	let dataForFetch = {
		page: 1,
		limit: 10,
		type_id,
		sort_direction: 'asc',
		sort_column: 'name'
	};

	for (let i in e.target.elements) {
		e.target.elements[i].value && (dataForFetch = { 
			...dataForFetch, 
			[e.target.elements[i].name]: e.target.elements[i].value 
		});
	}

	// save props in url string
	// сохранить параметры в строке url запроса
	setObjectToQueryString('News', 'persons', dataForFetch);

	// send request to server
	// отправить запрос на сервер
	fetchData(dataForFetch, '', self);
}