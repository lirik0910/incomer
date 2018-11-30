import httpfetch from 'httpfetch.js';

export default (self, form, id) => {
    const formData = new FormData(document.getElementById(form));
    const data = {};
    // console.log(formData.serialize());

    const { videoListPageLoading, videoListPageErrorMessage } = self.props;

    for (let pair of formData.entries()) {
        data[pair[0]] = pair[1];
    }

    data.on_index = !!data.on_index;

    return httpfetch('/video/' + id, 'PUT', data)
        .then(() => {
            self.setState({
                currentEditRowIndex: -1
            });
        })
        .catch((err) => {
            videoListPageLoading(false);
            videoListPageErrorMessage(err.message);

            self.setState({
                currentEditRowIndex: -1
            });
            setTimeout(() => {
                videoListPageErrorMessage(err.message);
            }, 2600);
        });
}