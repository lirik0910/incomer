
export default (self) => (e) => {
	const { userListPageSelectedRowsIDsArray } = self.props;
	const collections = document.getElementsByClassName('row-users-table-checkbox');
		
	const selectedRowsIdsArray = [];
	for (let i in collections) {
		collections[i].type && (() => {
			collections[i].checked = e.target.checked;
			e.target.checked && selectedRowsIdsArray.push(collections[i].dataset['rowItemId'])
		})();
	}
	userListPageSelectedRowsIDsArray(selectedRowsIdsArray);
}