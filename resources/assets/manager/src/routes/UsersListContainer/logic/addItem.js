import httpfetch from 'httpfetch.js';

export default (self, form, id) => {
    // document.getElementById('form-add-validation').click();
    const formData = new FormData(document.getElementById(form));
    const data = {};
    // console.log(formData.serialize());

    const { userListPageLoading, userListPageErrorMessage, catchedErrorMessage } = self.props;
    const { displayAlert } = self.state;

    for (let pair of formData.entries()) {
        data[pair[0]] = pair[1];
    }

    return httpfetch('/user', 'POST', data)
        .then(() => {
            self.setState({
                addNewItemFlag: false
            });
        })
        .catch((err) => {
            const data = JSON.parse(err.message);
            userListPageErrorMessage(data.message);

            self.setState({
                displayAlert: data.message,
            });
        });
}