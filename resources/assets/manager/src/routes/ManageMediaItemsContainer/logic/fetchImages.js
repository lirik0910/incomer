import httpfetch from 'httpfetch.js';

export default (self = {}, dataForFetch = {}) => {
    // const { filesListPageLoading, filesListPageSelectedRowsIDsArray } = self.props;
    //
    // filesListPageSelectedRowsIDsArray([]);
    // filesListPageLoading(true);
    httpfetch('/image', 'GET', dataForFetch)
        .then(({ data, total = 0 }) => {
            // filesListPageLoading(false);
            self.setState({
                total,
                images:data
            })
        })
        .catch((err) => {
            const { filesListPageErrorMessage } = self.props;
            filesListPageErrorMessage(err.message);
            setTimeout(() => {
                filesListPageErrorMessage('');
            }, 2600);
            //
            // filesListPageLoading(false);
        });
}