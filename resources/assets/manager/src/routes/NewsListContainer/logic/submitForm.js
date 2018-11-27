import {setObjectToQueryString} from 'url.js';
import fetchData from './fetchData.js';

export default (self) => (e) => {
	e.preventDefault();
	
	let dataForFetch = {
		page: 1,
		limit: 20,
		sort_direction: 'desc',
		sort_column: 'created_at'
	};

	for (let i in e.target.elements) {
		e.target.elements[i].value && (dataForFetch = { 
			...dataForFetch, 
			[e.target.elements[i].name]: e.target.elements[i].value 
		});
	}

	// save props in url string
	// сохранить параметры в строке url запроса
	setObjectToQueryString('News', 'news', dataForFetch);

	// send request to server
	// отправить запрос на сервер
	fetchData(dataForFetch, '', self);
}