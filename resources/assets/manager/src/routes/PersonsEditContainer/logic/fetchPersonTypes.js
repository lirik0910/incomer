import httpfetch from 'httpfetch.js';

export default (self = {}, type_id = 1) => {

    return httpfetch('/person_type/' + type_id, 'GET')
        .then((type) => {
            const fields = type.fields
                .slice(0)
                .reverse()
                .map((i) => ({
                    title: i.title,
                    field_id: i.id,
                    value: '',
                    content_type: i.content_type,
                }));

            self.setState({type, fields});
        })
        .catch((err) => {
            const {newsListPageErrorMessage} = self.props;
            newsListPageErrorMessage(err.message);
            setTimeout(() => {
                newsListPageErrorMessage('');
            }, 2600);

        });

}