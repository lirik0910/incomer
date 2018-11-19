
export default (self) => () => {
	const colletction = document.getElementById('users-data-fetch-form').elements;

	colletction['query'].value = '';
	colletction['created_at'].value = '';

	self.setState({
		createdAtFilterValue: null
	});
	
	document.getElementById('users-data-fetch-submit').click();
}