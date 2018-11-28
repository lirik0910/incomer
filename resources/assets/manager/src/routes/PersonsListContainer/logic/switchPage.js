/**
 * Switch current table page for paggination
 * @param {Number} page
 * @param {Boolean} flag
 * @return {Function}
 */
export default (self, type_id) => (page = 1, flag = true) => (e) => {
	if (flag) {
		self.setState({ page: page < 1 ? 1 : page }, () => {
			document.getElementById('persons-data-fetch-submit').click();
		});
	}
}