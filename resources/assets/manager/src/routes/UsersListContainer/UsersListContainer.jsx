import React from 'react';
import withStyles from 'react-jss';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {userListPageCreatedAt, userListPageErrorMessage, userListPageLoading} from 'actions/usersListPageActions.js';
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

import UsersListTable from './UsersListTable.jsx';
import UserEditForm from './UsersEditForm.jsx';

import {addItem, copySelectedRows, deleteSelectedRows} from './logic';

import moment from 'moment';

const styles = ({Global, Palette}) => ({
    '@global': {
        ...Global,
        '#root': {
            ...Global['#root'],
            display: 'grid',
            gridTemplateAreas: `
				'header header'
				'page-title control-elements'
				'users-table users-filters'
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
class UsersListContainer extends React.PureComponent {

    state = {
        displayCopySeveralRows: false,
        displayDeleteSeveralRows: false,
        displayAlert: false,
        currentAddRowCreatedAt: moment(),
        addNewItemFlag: false

    };

    render = () => {
        const {displayAlert, displayDeleteSeveralRows, displayCopySeveralRows, addNewItemFlag} = this.state;
        const {classes, selectedRowsIdsArray, catchedErrorMessage, createdAtFilterValue, userListPageCreatedAt, dataLoadingFlag} = this.props;

        return <React.Fragment>
            {dataLoadingFlag && <PageLoadingProcess/>}

            <Header/>

            <Typography
                text="Пользователи"
                variant="title"/>

            <div className={classes.control}>
                <Button
                    variant="link"
                    color="secondary"
                    text={
                        <React.Fragment>
                            <i className="fa fa-user-plus"></i>
                            Добавить пользователя
                        </React.Fragment>
                    }
                    onClick={() => this.setState({
                        addNewItemFlag: true
                    })}/>

            </div>

            <UsersListTable/>

            {/*<UsersListFilters>*/}
                {/*<Typography*/}
                    {/*variant="label"*/}
                    {/*text="Search users"/>*/}
                {/*<Search*/}
                    {/*inputProperties={{*/}
                        {/*form: 'users-data-fetch-form'*/}
                    {/*}}*/}
                    {/*submitProperties={{*/}
                        {/*form: 'users-data-fetch-form'*/}
                    {/*}}/>*/}

                {/*<Typography*/}
                    {/*variant="label"*/}
                    {/*text="Filter by sign up date"/>*/}
                {/*<Input showTimeSelect*/}
                       {/*variant="date"*/}
                       {/*name="created_at"*/}
                       {/*form="users-data-fetch-form"*/}
                       {/*timeIntervals={10}*/}
                       {/*dateFormat="YYYY-MM-DD LT"*/}
                       {/*selected={createdAtFilterValue}*/}
                       {/*onChange={(newValue) => {*/}
                           {/*userListPageCreatedAt(newValue);*/}
                           {/*document.getElementById('users-data-fetch-submit').click();*/}
                       {/*}}/>*/}

                {/*<Button*/}
                    {/*variant="tab" text="Clear filters properties"*/}
                    {/*onClick={clearFilters(this)}/>*/}
            {/*</UsersListFilters>*/}

            {displayCopySeveralRows ?
                <Dialog
                    title="Copy rows"
                    onClose={() => this.setState({
                        displayCopySeveralRows: false
                    })}
                    control={
                        <React.Fragment>
                            <Button
                                variant="tab"
                                text="OK"
                                onClick={copySelectedRows(this)}/>
                            <Button
                                variant="tab"
                                text="Cancel"
                                onClick={() => this.setState({
                                    displayCopySeveralRows: false
                                })}/>
                        </React.Fragment>
                    }>

                    <Typography
                        text="Are you sure you want to copy selected users?"/>
                </Dialog> : ''}

            {displayDeleteSeveralRows ?
                <Dialog
                    title="Delete rows"
                    onClose={() => this.setState({
                        displayDeleteSeveralRows: false
                    })}
                    control={
                        <React.Fragment>
                            <Button
                                variant="tab"
                                text="OK"
                                onClick={() => deleteSelectedRows(this).then(() => {
                                    document.getElementById('users-data-fetch-submit').click();
                                })}/>
                            <Button
                                variant="tab"
                                text="Cancel"
                                onClick={() => this.setState({
                                    displayDeleteSeveralRows: false
                                })}/>
                        </React.Fragment>
                    }>

                    <Typography
                        text="Are you sure you want to delete selected users?"/>
                </Dialog> : ''}

            {addNewItemFlag === true ?
                <Dialog
                    title="Добавить пользователя"
                    onClose={() => this.setState({
                        addNewItemFlag: false
                    })}
                    control={
                        <React.Fragment>
                            <Button
                                variant="tab"
                                text="OK"
                                onClick={() => {
                                    addItem(this, 'users-add-form')
                                        .then(() => {
                                            document.getElementById('users-data-fetch-submit').click();
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

                    <UserEditForm/>
                </Dialog> : ''}

            {displayAlert ?
                <Alert text={catchedErrorMessage}/> : ''}
        </React.Fragment>
    }
}

const mapStateToProps = (state) => ({
    catchedErrorMessage: catchedErrorMessageSelector(state),
    createdAtFilterValue: createdAtFilterValueSelector(state),
    selectedRowsIdsArray: selectedRowsIdsArraySelector(state),
    dataLoadingFlag: dataLoadingFlagSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    userListPageCreatedAt: bindActionCreators(userListPageCreatedAt, dispatch),
    userListPageLoading: bindActionCreators(userListPageLoading, dispatch),
    userListPageErrorMessage: bindActionCreators(userListPageErrorMessage, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UsersListContainer));