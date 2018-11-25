import httpfetch from 'httpfetch.js';

export default (self, form) => {
    const formData = new FormData(document.getElementById(form));

    const { tagsListPageLoading, tagsListPageErrorMessage, catchedErrorMessage } = self.props;
    const { displayAlert } = self.state;

    console.log(666,formData);

    const object = {};
    formData.forEach(function(value, key){
        object[key] = value;
    });


    return httpfetch('/tags', 'POST', object)
        .then(() => {
            self.setState({
                addNewItemFlag: false
            });
        })
        .catch((data) => {
            self.setState({
                displayAlert: data.message,
            });
        });
}