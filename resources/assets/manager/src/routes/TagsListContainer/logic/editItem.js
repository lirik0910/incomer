import httpfetch from 'httpfetch.js';

export default (self, form, id) => {
    const formData = new FormData(document.getElementById(form));
    const data = {};
    // console.log(formData.serialize());

    const { userListPageLoading, userListPageErrorMessage } = self.props;

    for (let pair of formData.entries()) {
        data[pair[0]] = pair[1];
    }

    return httpfetch('/tags/' + id, 'PUT', data)
        .then(() => {
            self.setState({
                currentEditRowIndex: -1
            });
        })
        .catch((err) => {
            userListPageLoading(false);
            userListPageErrorMessage(err.message);

            self.setState({
                currentEditRowIndex: -1
            });
            setTimeout(() => {
                userListPageErrorMessage(err.message);
            }, 2600);
        });
}