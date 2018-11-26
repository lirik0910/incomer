import httpfetch from 'httpfetch.js';

export default (self, data, id) => {
    const fields = ['title', 'description', 'path', 'image'];
    const formData = new FormData();

    for(let key in data){
        if(fields.indexOf(key) !== -1) formData.append(key, data[key]);
    }

    return httpfetch('/image/' + id, 'PUT', formData)
        .then(() => {

        })
        .catch((err) => {
            // userListPageLoading(false);
            // userListPageErrorMessage(err.message);
            //
            // self.setState({
            //     currentEditRowIndex: -1
            // });
            // setTimeout(() => {
            //     userListPageErrorMessage(err.message);
            // }, 2600);
        });
}