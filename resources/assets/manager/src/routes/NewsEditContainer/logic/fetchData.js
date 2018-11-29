import httpfetch from 'httpfetch.js';

export default (id = false, self = {}) => {
    if (id) {

        return httpfetch('/news/' + id, 'GET')
            .then((data) => {
                data.images = data.images.map((img) => ({type: img.pivot.type, id: img.id, url: img.url}));
                data.images.forEach((img) => {
                    if(img.type === 'top_preview')
                        data.top_preview_img = img;
                    if(img.type === 'preview')
                        data.preview_img = img;
                });


                console.log(data);
                self.setState({data});
            })
            .catch((err) => {
                const { newsListPageErrorMessage } = self.props;
                newsListPageErrorMessage(err.message);
                setTimeout(() => {
                    newsListPageErrorMessage('');
                }, 2600);

            });
    }
}