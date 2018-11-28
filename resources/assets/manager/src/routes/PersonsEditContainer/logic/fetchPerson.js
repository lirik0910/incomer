import httpfetch from 'httpfetch.js';

export default (self = {}, id = 0) => {

    return httpfetch('/person/'+id, 'GET')
        .then((data) => {
            let fields = self.state.fields;
            fields  = fields.map((f) => {
                let res = f;
                data.fields.forEach((cur) => {
                    if(cur.field_id === f.field_id){
                        res.value = cur.value;
                    }
                });
                return res;
            });

            self.setState({data, fields});
        })
        .catch((err) => {
            const { newsListPageErrorMessage } = self.props;
            newsListPageErrorMessage(err.message);
            setTimeout(() => {
                newsListPageErrorMessage('');
            }, 2600);

        });

}