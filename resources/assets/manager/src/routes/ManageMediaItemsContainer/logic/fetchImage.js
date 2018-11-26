import httpfetch from 'httpfetch.js';

export default (self = {}, id = false) => {
    // const { filesListPageLoading, filesListPageSelectedRowsIDsArray } = self.props;
    //
    // filesListPageSelectedRowsIDsArray([]);
    // filesListPageLoading(true);
    if(id) httpfetch('/image/'+id, 'GET')
        .then((data) => {
            // filesListPageLoading(false);
            self.setState({
                currentItem:data
            })
        })
        .catch((err) => {
            // const { filesListPageErrorMessage } = self.props;
            // filesListPageErrorMessage(err.message);
            // setTimeout(() => {
            //     filesListPageErrorMessage('');
            // }, 2600);
            //
            // filesListPageLoading(false);
        });
    else  self.setState({
        currentItem: false
    })
}