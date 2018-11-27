import React from 'react';
import withStyles from 'react-jss';

import Header from 'components/Header';
import Typography from 'components/Typography';
import PageLoadingProcess from 'components/PageLoadingProcess';
import FilesManager from "./FilesManager";

const styles = ({Global, Palette}) => ({
    '@global': {
        ...Global,
        '#root': {
            ...Global['#root'],
            display: 'grid',
            gridTemplateAreas: `
				'header header'
				'page-title control-elements'
				'files-list-manager folders-list-manager '
			`,
            gridTemplateRows: '30px 50px auto',
            gridTemplateColumns: '50% 50%'
        }
    },
    primaryButtons: {
        right: 12,
        lineHeight: '30px',
        position: 'absolute',
        '& a': {
            marginLeft: 12
        }
    },
    asdieAppHeader: {
        display: 'flex',
        marginBottom: 12
    }
});

class ManageMediaItemsContainer extends React.Component {

    render = () => {
        const {dataLoadingFlag} = this.props;

        return <React.Fragment>
            {dataLoadingFlag && <PageLoadingProcess/>}

            <Header/>

            <Typography
                text="Files manager"
                variant="title"/>

            <FilesManager/>
        </React.Fragment>
    }
}


export default withStyles(styles)(ManageMediaItemsContainer);