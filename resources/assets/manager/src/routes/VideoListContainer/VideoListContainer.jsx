import React from 'react';
import withStyles from 'react-jss';

import {
    catchedErrorMessageSelector,
    createdAtFilterValueSelector,
    dataLoadingFlagSelector,
    selectedRowsIdsArraySelector
} from 'selectors.js';

import Header from 'components/Header';
import Button from 'components/Button';
import Typography from 'components/Typography';
import Dialog from 'components/Dialog';
import Alert from 'components/Alert';
import PageLoadingProcess from 'components/PageLoadingProcess';
import moment from "moment";
import VideoListTable from "./VideoListTable";
import VideoEditForm from "./VideoEditForm";

import {addItem, fetchPersons,} from './logic';
//
// import moment from 'moment';
// import editItem from "./logic/editItem";
// import fetchData from "./logic/fetchData";

const styles = ({Global, Palette}) => ({
    '@global': {
        ...Global,
        '#root': {
            ...Global['#root'],
            display: 'grid',
            gridTemplateAreas: `
				'header header'
				'page-title control-elements'
				'video-table video-filters'
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

/**
 * Users list page
 * Страница пользователей
 * @extends React.PureComponent
 */
class VideoListContainer extends React.PureComponent {

    state = {
        displayCopySeveralRows: false,
        displayDeleteSeveralRows: false,
        displayAlert: false,
        currentAddRowCreatedAt: moment(),
        addNewItemFlag: false,
        persons: [],
    };
    componentDidMount() {
    }


    render = () => {
        const {displayAlert, displayDeleteSeveralRows, displayCopySeveralRows, addNewItemFlag, persons} = this.state;
        const {classes, selectedRowsIdsArray, catchedErrorMessage, createdAtFilterValue, userListPageCreatedAt, dataLoadingFlag} = this.props;

        return <React.Fragment>
            {dataLoadingFlag && <PageLoadingProcess/>}

            <Header/>

            <Typography
                text="Видео"
                variant="title"/>

            <div className={classes.control}>
                <Button
                    variant="link"
                    color="secondary"
                    text={
                        <React.Fragment>
                            <i className="fa fa-plus"></i>
                            Добавить видео
                        </React.Fragment>
                    }
                    onClick={() => {
                        this.setState({
                            addNewItemFlag: true
                        })
                    }}/>

            </div>

            <VideoListTable
                persons={persons}
            />


            {addNewItemFlag === true ?
                <Dialog
                    title="Добавить видео"
                    onClose={() => this.setState({
                        addNewItemFlag: false
                    })}
                    control={
                        <React.Fragment>
                            <Button
                                variant="tab"
                                text="OK"
                                onClick={() => {
                                    addItem(this, 'video-add-form')
                                        .then(() => {
                                            document.getElementById('video-data-fetch-submit').click();
                                        });
                                }}/>
                            <Button
                                variant="tab"
                                text="Cancel"
                                onClick={() => this.setState({
                                    addNewItemFlag: false
                                })}/>
                        </React.Fragment>
                    }>

                    <VideoEditForm
                        persons={persons}
                    />
                </Dialog> : ''}

            {displayAlert ?
                <Alert text={displayAlert}/> : ''}
        </React.Fragment>
    }
}


export default withStyles(styles)(VideoListContainer);