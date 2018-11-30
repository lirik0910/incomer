import httpfetch from 'httpfetch.js';

export default (self, form) => {
    const formData = new FormData(document.getElementById(form));

    const { videoListPageLoading, videoListPageErrorMessage, catchedErrorMessage } = self.props;
    const { displayAlert } = self.state;


    const object = {};
    formData.forEach(function(value, key){
        object[key] = value;
    });


    return httpfetch('/video', 'POST', object)
        .then(() => {
            self.setState({
                addNewItemFlag: false
            });
        })
        .catch((err) => {
            self.setState({
                displayAlert: err.message,
            });
            setTimeout(() => {
                self.setState({
                    displayAlert: '',
                });
            }, 2600);
        });
}