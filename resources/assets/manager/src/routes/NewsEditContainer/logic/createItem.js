import httpfetch from 'httpfetch.js';

export default (self, data) => {
    console.log(self.props);

    data.tags = data.tags && data.tags.map((i) => i.id);
    // data.tags = JSON.stringify(data.tags);
    data.images = [];
    if(data.top_preview_img) data.images.push(data.top_preview_img);
    if(data.preview_img) data.images.push(data.preview_img);



    return httpfetch('/news', 'POST', data)
        .then((data) => {
            data.images = data.images.map((img) => ({type: img.pivot.type, id: img.id, url: img.url}));
            data.images.forEach((img) => {
                if(img.type === 'top_preview')
                    data.top_preview_img = img;
                if(img.type === 'preview')
                    data.preview_img = img;
            });
            self.setState({data})
            const { newsListPageErrorMessage } = self.props;
            newsListPageErrorMessage('Успешно добавлено');
            setTimeout(() => {
                newsListPageErrorMessage('');
            }, 2600);
            self.props.history.push('/news/'+data.id);

        })
        .catch((err) => {
            const { newsListPageErrorMessage } = self.props;
            newsListPageErrorMessage(err.message);
            setTimeout(() => {
                newsListPageErrorMessage('');
            }, 2600);

        });
}