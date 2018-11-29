/**
 * Switch current table page for paggination
 * @param {Number} page
 * @param {Boolean} flag
 * @return {Function}
 */
export default (self) => (page = 1, flag = true) => (e) => {
	if (flag) {
		self.setState({ page: page < 1 ? 1 : page }, () => {
			document.getElementById('rss-data-fetch-submit').click();
		});
	}
}