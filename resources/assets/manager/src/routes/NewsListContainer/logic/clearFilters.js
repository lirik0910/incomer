
export default (self) => () => {
	const colletction = document.getElementById('users-data-fetch-form').elements;

	colletction['query'].value = '';
	colletction['created_at'].value = '';

	const { userListPageCreatedAt } = self.props;

	userListPageCreatedAt(null);
	document.getElementById('users-data-fetch-submit').click();
}