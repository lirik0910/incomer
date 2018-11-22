import httpfetch from 'httpfetch.js';

export default (self, form, id) => {
    const formData = new FormData(document.getElementById(form));

    const { userListPageLoading, userListPageErrorMessage, catchedErrorMessage } = self.props;
    const { displayAlert } = self.state;

    return httpfetch('/user', 'POST', formData)
        .then(() => {
            self.setState({
                addNewItemFlag: false
            });
        })
        .catch((data) => {
            userListPageErrorMessage(data.message);

            self.setState({
                displayAlert: data.message,
            });
        });
}