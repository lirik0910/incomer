import React from 'react';
import withStyles from 'react-jss'

import Header from 'components/Header';

import NewsEditForm from "./NewsEditForm";


const styles = ({Global, Palette}) => ({
    '@global': {
        ...Global,
        '#root': {
            ...Global['#root'],
            display: 'grid',
            gridTemplateAreas: `
				'header header'
				'page-title control-elements'
				'news-table news-filters'
			`,
            gridTemplateRows: '30px 50px auto',
            gridTemplateColumns: 'auto 352px'
        }
    },

    title: {
        gridArea: 'page-title'
    },
    formContainer: {

        margin: 20,
    }
});

class NewsEditContainer extends React.PureComponent {

    render = () => {

        return <React.Fragment>
            <Header/>

            <NewsEditForm
                id={this.props.match.params.id}
            />

        </React.Fragment>
    }
}

export default withStyles(styles)(NewsEditContainer);
