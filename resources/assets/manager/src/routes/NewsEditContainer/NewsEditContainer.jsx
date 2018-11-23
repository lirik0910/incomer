import React from 'react';
import withStyles from 'react-jss'

import Header from 'components/Header';
import Button from 'components/Button';
import Typography from 'components/Typography';
import Input from 'components/Input';
import Alert from 'components/Alert';


import {
    fetchData,
} from './logic/index';
import NewsEditForm from "./NewsEditForm";
import Panel from "../../components/Panel/Panel";


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

    state = {
        data: {},
        catchedErrorMessage: '',
    };

    componentDidMount() {

    }



    render = () => {
        const {catchedErrorMessage, data} = this.state;
        const {classes} = this.props;

        return <React.Fragment>
            <Header/>

            <NewsEditForm
                id={this.props.match.params.id}
                data={data}
            />




            {catchedErrorMessage && <Alert
                text={catchedErrorMessage}/>}
        </React.Fragment>
    }
}

export default withStyles(styles)(NewsEditContainer);
