import React from 'react';
import withStyles from 'react-jss';

import Header from 'components/Header';
import Button from 'components/Button';
import Typography from 'components/Typography';
import Alert from 'components/Alert';

import NewsListTable from './NewsListTable.jsx';
import {Link} from "react-router-dom";


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
    control: {
        lineHeight: '48px',
        gridArea: 'control-elements',
        '& button, & a': {
            margin: '0 18px 0 0'
        },
        '& .fa': {
            margin: '0 6px 0 0'
        }
    },
    title: {
        gridArea: 'page-title'
    }
});


class NewsListContainer extends React.PureComponent {

    state = {
        displayAlert: false,
        addNewItemFlag: false
    };

    render = () => {
        const {displayAlert} = this.state;
        const {classes, dataLoadingFlag} = this.props;

        return <React.Fragment>


            <Header/>

            <Typography
                text="Новости"
                variant="title"/>

            <div className={classes.control}>
                <Button
                    variant="link"
                    color="secondary"
                    text={
                        <React.Fragment>
                            <Link to="/news/create">
                            <i className="fa fa-plus"></i>
                            Добавить новость
                            </Link>
                        </React.Fragment>
                    }
                  />

            </div>

            <NewsListTable/>

            {displayAlert ?
                <Alert text={displayAlert}/> : ''}
        </React.Fragment>
    }
}



export default withStyles(styles)(NewsListContainer);