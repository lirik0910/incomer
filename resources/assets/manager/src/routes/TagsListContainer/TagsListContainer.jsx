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
import TagsListTable from "./TagsListTable";
import TagsEditForm from "./TagsEditForm";

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
				'tags-table tags-filters'
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
class TagsListContainer extends React.PureComponent {

    state = {
        displayCopySeveralRows: false,
        displayDeleteSeveralRows: false,
        displayAlert: false,
        currentAddRowCreatedAt: moment(),
        addNewItemFlag: false,
        persons: [],
    };
    componentDidMount() {
        fetchPersons(this);
    }


    render = () => {
        const {displayAlert, displayDeleteSeveralRows, displayCopySeveralRows, addNewItemFlag, persons} = this.state;
        const {classes, selectedRowsIdsArray, catchedErrorMessage, createdAtFilterValue, userListPageCreatedAt, dataLoadingFlag} = this.props;

        return <React.Fragment>
            {dataLoadingFlag && <PageLoadingProcess/>}

            <Header/>

            <Typography
                text="Тэги"
                variant="title"/>

            <div className={classes.control}>
                <Button
                    variant="link"
                    color="secondary"
                    text={
                        <React.Fragment>
                            <i className="fa fa-plus"></i>
                            Добавить тэг
                        </React.Fragment>
                    }
                    onClick={() => {
                        this.setState({
                            addNewItemFlag: true
                        })
                    }}/>

            </div>

            <TagsListTable
                persons={persons}
            />

            {/*<UsersListFilters>*/}
                {/*<Typography*/}
                    {/*variant="label"*/}
                    {/*text="Search tags"/>*/}
                {/*<Search*/}
                    {/*inputProperties={{*/}
                        {/*form: 'tags-data-fetch-form'*/}
                    {/*}}*/}
                    {/*submitProperties={{*/}
                        {/*form: 'tags-data-fetch-form'*/}
                    {/*}}/>*/}

                {/*<Typography*/}
                    {/*variant="label"*/}
                    {/*text="Filter by sign up date"/>*/}
                {/*<Input showTimeSelect*/}
                       {/*variant="date"*/}
                       {/*name="created_at"*/}
                       {/*form="tags-data-fetch-form"*/}
                       {/*timeIntervals={10}*/}
                       {/*dateFormat="YYYY-MM-DD LT"*/}
                       {/*selected={createdAtFilterValue}*/}
                       {/*onChange={(newValue) => {*/}
                           {/*userListPageCreatedAt(newValue);*/}
                           {/*document.getElementById('tags-data-fetch-submit').click();*/}
                       {/*}}/>*/}

                {/*<Button*/}
                    {/*variant="tab" text="Clear filters properties"*/}
                    {/*onClick={clearFilters(this)}/>*/}
            {/*</UsersListFilters>*/}

            {/*{displayCopySeveralRows ?*/}
                {/*<Dialog*/}
                    {/*title="Copy rows"*/}
                    {/*onClose={() => this.setState({*/}
                        {/*displayCopySeveralRows: false*/}
                    {/*})}*/}
                    {/*control={*/}
                        {/*<React.Fragment>*/}
                            {/*<Button*/}
                                {/*variant="tab"*/}
                                {/*text="OK"*/}
                                {/*onClick={copySelectedRows(this)}/>*/}
                            {/*<Button*/}
                                {/*variant="tab"*/}
                                {/*text="Cancel"*/}
                                {/*onClick={() => this.setState({*/}
                                    {/*displayCopySeveralRows: false*/}
                                {/*})}/>*/}
                        {/*</React.Fragment>*/}
                    {/*}>*/}

                    {/*<Typography*/}
                        {/*text="Are you sure you want to copy selected tags?"/>*/}
                {/*</Dialog> : ''}*/}

            {/*{displayDeleteSeveralRows ?*/}
                {/*<Dialog*/}
                    {/*title="Delete rows"*/}
                    {/*onClose={() => this.setState({*/}
                        {/*displayDeleteSeveralRows: false*/}
                    {/*})}*/}
                    {/*control={*/}
                        {/*<React.Fragment>*/}
                            {/*<Button*/}
                                {/*variant="tab"*/}
                                {/*text="OK"*/}
                                {/*onClick={() => deleteSelectedRows(this).then(() => {*/}
                                    {/*document.getElementById('tags-data-fetch-submit').click();*/}
                                {/*})}/>*/}
                            {/*<Button*/}
                                {/*variant="tab"*/}
                                {/*text="Cancel"*/}
                                {/*onClick={() => this.setState({*/}
                                    {/*displayDeleteSeveralRows: false*/}
                                {/*})}/>*/}
                        {/*</React.Fragment>*/}
                    {/*}>*/}

                    {/*<Typography*/}
                        {/*text="Are you sure you want to delete selected tags?"/>*/}
                {/*</Dialog> : ''}*/}

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
                                    addItem(this, 'tags-add-form')
                                        .then(() => {
                                            document.getElementById('tags-data-fetch-submit').click();
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

                    <TagsEditForm
                        persons={persons}
                    />
                </Dialog> : ''}

            {displayAlert ?
                <Alert text={catchedErrorMessage}/> : ''}
        </React.Fragment>
    }
}
//
// const mapStateToProps = (state) => ({
//     catchedErrorMessage: catchedErrorMessageSelector(state),
//     createdAtFilterValue: createdAtFilterValueSelector(state),
//     selectedRowsIdsArray: selectedRowsIdsArraySelector(state),
//     dataLoadingFlag: dataLoadingFlagSelector(state)
// });
//
// const mapDispatchToProps = (dispatch) => ({
//     userListPageCreatedAt: bindActionCreators(userListPageCreatedAt, dispatch),
//     userListPageLoading: bindActionCreators(userListPageLoading, dispatch),
//     userListPageErrorMessage: bindActionCreators(userListPageErrorMessage, dispatch)
// });

export default withStyles(styles)(TagsListContainer);