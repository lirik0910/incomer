
export default (self) => (e) => {
	const { newsListPageSelectedRowsIDsArray } = self.props;
	const collections = document.getElementsByClassName('row-news-table-checkbox');
		
	const selectedRowsIdsArray = [];
	for (let i in collections) {
		collections[i].type && (() => {
			collections[i].checked = e.target.checked;
			e.target.checked && selectedRowsIdsArray.push(collections[i].dataset['rowItemId'])
		})();
	}
	newsListPageSelectedRowsIDsArray(selectedRowsIdsArray);
}