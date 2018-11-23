import React from 'react';
import withStyles from 'react-jss';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    newsListPageCreatedAt,
    newsListPageLoading,
    newsListPageErrorMessage
} from 'actions/newsListPageActions.js';
import {
    catchedErrorMessageSelector,
    createdAtFilterValueSelector,
    selectedRowsIdsArraySelector,
    dataLoadingFlagSelector
} from 'selectors.js';

import Header from 'components/Header';
import Button from 'components/Button';
import Aside from 'components/Aside';
import Typography from 'components/Typography';
import Link from 'components/Link';
import Search from 'components/Search';
import Input from 'components/Input';
import Dialog from 'components/Dialog';
import Alert from 'components/Alert';
import Select from 'components/Select';
import PageLoadingProcess from 'components/PageLoadingProcess';

import NewsListTable from './NewsListTable.jsx';
import NewsListFilters from './NewsListFilters.jsx';
import NewsEditForm from './NewsEditForm.jsx';

import {
    clearFilters,
} from './logic';

import moment from 'moment';
import fetchData from "./logic/fetchData";

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

/**
 * News list page
 * Страница пользователей
 * @extends React.PureComponent
 */
class NewsListContainer extends React.PureComponent {

    state = {
        displayCopySeveralRows: false,
        displayDeleteSeveralRows: false,
        displayAlert: false,
        currentAddRowCreatedAt: moment(),
        addNewItemFlag: false

    };

    render = () => {
        const {displayAlert, displayDeleteSeveralRows, displayCopySeveralRows, addNewItemFlag} = this.state;
        const {classes, selectedRowsIdsArray, catchedErrorMessage, createdAtFilterValue, newsListPageCreatedAt, dataLoadingFlag} = this.props;

        return <React.Fragment>
            {dataLoadingFlag && <PageLoadingProcess/>}

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
                            <i className="fa fa-news-plus"></i>
                            Добавить новость
                        </React.Fragment>
                    }
                    onClick={() => this.setState({
                        addNewItemFlag: true
                    })}/>

            </div>

            <NewsListTable/>

            {/*<NewsListFilters>*/}
                {/*<Typography*/}
                    {/*variant="label"*/}
                    {/*text="Search news"/>*/}
                {/*<Search*/}
                    {/*inputProperties={{*/}
                        {/*form: 'news-data-fetch-form'*/}
                    {/*}}*/}
                    {/*submitProperties={{*/}
                        {/*form: 'news-data-fetch-form'*/}
                    {/*}}/>*/}

                {/*<Typography*/}
                    {/*variant="label"*/}
                    {/*text="Filter by sign up date"/>*/}
                {/*<Input showTimeSelect*/}
                       {/*variant="date"*/}
                       {/*name="created_at"*/}
                       {/*form="news-data-fetch-form"*/}
                       {/*timeIntervals={10}*/}
                       {/*dateFormat="YYYY-MM-DD LT"*/}
                       {/*selected={createdAtFilterValue}*/}
                       {/*onChange={(newValue) => {*/}
                           {/*newsListPageCreatedAt(newValue);*/}
                           {/*document.getElementById('news-data-fetch-submit').click();*/}
                       {/*}}/>*/}

                {/*<Button*/}
                    {/*variant="tab" text="Clear filters properties"*/}
                    {/*onClick={clearFilters(this)}/>*/}
            {/*</NewsListFilters>*/}

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
                                text="OK"/>
                            <Button
                                variant="tab"
                                text="Cancel"
                                onClick={() => this.setState({
                                    displayCopySeveralRows: false
                                })}/>
                        </React.Fragment>
                    }>

                    <Typography
                        text="Are you sure you want to copy selected news?"/>
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
    newsListPageCreatedAt: bindActionCreators(newsListPageCreatedAt, dispatch),
    newsListPageLoading: bindActionCreators(newsListPageLoading, dispatch),
    newsListPageErrorMessage: bindActionCreators(newsListPageErrorMessage, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NewsListContainer));