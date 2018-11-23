
/**
 * Sort data by column
 * Сортировка данных по определенной колонке
 * @param {String} newSortColumn - Название колонки
 * @param {String} newSortColumn - Column name
 * @return {Function}
 */
export default (self) => (newSortColumn = '') => () => {
	const { direction, sort } = self.state;

	self.setState({
		sort: newSortColumn,
		direction: sort !== newSortColumn ? 'asc' : 
			direction === 'desc' ?
				'asc' :
				'desc'
	}, () => {
		document.getElementById('news-data-fetch-submit').click();
	});
}