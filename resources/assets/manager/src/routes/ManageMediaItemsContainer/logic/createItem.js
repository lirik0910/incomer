import httpfetch from 'httpfetch.js';

export default (self, data) => {
    const fields = ['title', 'description', 'path', 'image'];
    const formData = new FormData();

    for (let key in data) {
        if (fields.indexOf(key) !== -1) formData.append(key, data[key]);
    }

    return httpfetch('/image', 'POST', formData)
        .then(() => {
            self.setState({
                currentItem: {},
                newItem: {
                    title: '',
                    description: '',
                    path: '',
                    image: undefined,
                }
            })
        })
        .catch((err) => {
            // userListPageLoading(false);
            self.props.filesListPageErrorMessage(err.message);


            setTimeout(() => {
                self.props.filesListPageErrorMessage(err.message);
            }, 2600);
        });
}