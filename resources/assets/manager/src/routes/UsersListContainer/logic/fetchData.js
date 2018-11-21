import httpfetch from 'httpfetch.js';

export default (dataForFetch = {}, self = {}) => {
    self.setState({
        dataLoadingFlag: true
    }, () => {
        self.selectedRowsIdsArray = [];
        httpfetch('/user', 'GET', dataForFetch)
            .then((data) => {
                self.setState({
                    dataLoadingFlag: false,
                    data
                })
            })
            .catch((err) => {
                const {displayFetchErrorMessage} = self.props;
                displayFetchErrorMessage(err.message);
                setTimeout(() => {
                    displayFetchErrorMessage('');
                }, 2600);

                self.setState({dataLoadingFlag: false});
            });
    });
}