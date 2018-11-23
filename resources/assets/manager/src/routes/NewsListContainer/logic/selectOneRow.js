
export default (self) => (e) => {
	const { selectedRowsIdsArray, newsListPageSelectedRowsIDsArray } = self.props;
	let index = 0;

	(index = selectedRowsIdsArray.indexOf(e.target.dataset['rowItemId'])) > -1 ?
		selectedRowsIdsArray.splice(index, 1) : 
		selectedRowsIdsArray.push(e.target.dataset['rowItemId']);

	newsListPageSelectedRowsIDsArray(selectedRowsIdsArray);
}