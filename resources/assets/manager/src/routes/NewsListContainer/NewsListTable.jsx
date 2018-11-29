import React from 'react';
import withStyles from 'react-jss';

import {newsListPageErrorMessage, newsListPageLoading,} from 'actions/newsListPageActions.js';

import Panel from 'components/Panel';
import Table from 'components/Table';
import TableHeader from 'components/TableHeader';
import TableRow from 'components/TableRow';
import Button from 'components/Button';
import Pagination from 'components/Pagination';
import Typography from 'components/Typography';
import Dialog from 'components/Dialog';

import {deleteForeverOneItem, deleteOneItem, restoreItem, sortNews, submitForm, switchPage,} from './logic';

import {defineQueryProps} from 'url.js';
import Link from "../../components/Link/Link";
import PageLoadingProcess from "../../components/PageLoadingProcess/PageLoadingProcess";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import Alert from "../../components/Alert/Alert";

const styles = () => ({
    root: {
        margin: 12,
        gridArea: 'news-table',
        '& table': {
            marginBottom: 56
        }
    },
    pagePaginationButtons: {
        position: 'absolute',
        bottom: 12,
        left: 12
    },
    pagePaginationInfo: {
        position: 'absolute',
        bottom: 12,
        right: 12
    }
});

class NewsListTable extends React.PureComponent {

    state = {
        ...{...defineQueryProps(), limit: 10, page: 1},

        /**
         * Data on news who will be in the table
         * Данные по пользователям, которые будут в таблице
         * @type {Array}
         */
        data: [],
        total: 20,
        prepareDeleteRowID: 0,
        currentEditRowIndex: -1,
        currentEditRowCreatedAt: null,
        prepareDeleteForeverRowID: 0,
    };

    componentDidMount = () => {
        document.getElementById('news-data-fetch-submit').click();
    };

    render = () => {
        const {classes, dataLoadingFlag, catchedErrorMessage} = this.props;
        const {data = [], sort = '', direction = '', page = 0, limit = 20, total = 0, prepareDeleteRowID = 0, prepareDeleteForeverRowID = 0} = this.state;

        return <React.Fragment>
            <Panel className={classes.root}>
                {dataLoadingFlag && <PageLoadingProcess/>}
                <Table>
                    <TableHeader columns={[
                        //<input type="checkbox" onChange={selectAllRows(this)}/>,
                        <React.Fragment>
                            <Typography
                                variant="simple"
                                text="Заголовок"/>
                            <Button
                                variant="icon"
                                text={<span
                                    className={sort === 'title' && direction === 'asc' ?
                                        'fa fa-sort-up' :
                                        'fa fa-sort-down'}>
							</span>}
                                onClick={sortNews(this)('title')}
                                className={sort === 'title' ?
                                    'active' :
                                    ''}/>
                        </React.Fragment>,
                        <React.Fragment>
                            <Typography
                                variant="simple"
                                text="Категория"/>
                            <Button
                                variant="icon"
                                text={<span
                                    className={sort === 'category' && direction === 'asc' ?
                                        'fa fa-sort-up' :
                                        'fa fa-sort-down'}>
							</span>}
                                onClick={sortNews(this)('category')}
                                className={sort === 'category' ?
                                    'active' :
                                    ''}/>
                        </React.Fragment>,
                        <React.Fragment>
                            <Typography
                                variant="simple"
                                text="Раздел"/>
                            <Button
                                variant="icon"
                                text={<span
                                    className={sort === 'section' && direction === 'asc' ?
                                        'fa fa-sort-up' :
                                        'fa fa-sort-down'}>
							</span>}
                                onClick={sortNews(this)('section')}
                                className={sort === 'section' ?
                                    'active' :
                                    ''}/>
                        </React.Fragment>,
                        <React.Fragment>
                            <Typography
                                variant="simple"
                                text="Автор"/>
                            <Button
                                variant="icon"
                                text={<span
                                    className={sort === 'author' && direction === 'asc' ?
                                        'fa fa-sort-up' :
                                        'fa fa-sort-down'}>
							</span>}
                                onClick={sortNews(this)('author')}
                                className={sort === 'author' ?
                                    'active' :
                                    ''}/>
                        </React.Fragment>,
                        <React.Fragment>
                            <Typography
                                variant="simple"
                                text="Дата создания"/>
                            <Button
                                variant="icon"
                                text={<span
                                    className={sort === 'created_at' && direction === 'asc' ?
                                        'fa fa-sort-up' :
                                        'fa fa-sort-down'}>
							</span>}
                                onClick={sortNews(this)('created_at')}
                                className={sort === 'created_at' ?
                                    'active' :
                                    ''}/>
                        </React.Fragment>,
                        <React.Fragment>
                            <Typography
                                variant="simple"
                                text="Просмотры"/>
                            <Button
                                variant="icon"
                                text={<span
                                    className={sort === 'views' && direction === 'asc' ?
                                        'fa fa-sort-up' :
                                        'fa fa-sort-down'}>
							</span>}
                                onClick={sortNews(this)('views')}
                                className={sort === 'views' ?
                                    'active' :
                                    ''}/>
                        </React.Fragment>,
                        <React.Fragment>
                            <Typography
                                variant="simple"
                                text="Коментарии"/>
                            <Button
                                variant="icon"
                                text={<span
                                    className={sort === 'comments_count' && direction === 'asc' ?
                                        'fa fa-sort-up' :
                                        'fa fa-sort-down'}>
							</span>}
                                onClick={sortNews(this)('comments_count')}
                                className={sort === 'comments_count' ?
                                    'active' :
                                    ''}/>
                        </React.Fragment>,

                        <Typography
                            variant="simple"
                            text="Действия"/>
                    ]}/>

                    <tbody>
                    {data.map((row, i) => (
                        <TableRow
                            key={row.id}
                            columns={[
                                //<input type="checkbox"
                                //       className="row-news-table-checkbox"
                                //       onChange={selectOneRow(this)}
                                //       data-row-item-id={row.id}/>,
                                row.title,
                                row.category.title,
                                row.section && row.section.title,
                                row.creator && row.creator.email,
                                row.created_at,
                                row.comments_count,
                                row.views,
                                <React.Fragment>
                                    {!row.deleted_at &&<Link to={"/news/" + row.id}>
                                        <Button
                                            variant="icon"
                                            text={<i className="fa fa-edit"></i>}
                                        />
                                    </Link>}

                                    {row.deleted_at && <Button
                                        variant="icon"
                                        text={<i className="fa fa-refresh"></i>}
                                        onClick={() => restoreItem(this, row.id).then(() => {
                                            document.getElementById('news-data-fetch-submit').click()
                                        })}/>
                                    }
                                    {!row.deleted_at ?
                                        <Button
                                            variant="icon"
                                            text={<i className="fa fa-close"></i>}
                                            onClick={() => this.setState({
                                                prepareDeleteRowID: row.id
                                            })}/> :
                                        <Button
                                            variant="icon"
                                            text={<i className="fa fa-trash"></i>}
                                            onClick={() => this.setState({
                                                prepareDeleteForeverRowID: row.id
                                            })}/>}


                                </React.Fragment>
                            ]}/>
                    ))}
                    </tbody>
                </Table>

                {<div className={classes.pagePaginationButtons}>
                    <Pagination
                        limit={limit}
                        total={total}
                        page={page}
                        onClick={switchPage(this)}/>
                </div>}

                <Typography
                    text={`Записи: ${((page - 1) * limit) + 1} - ${page * limit > total ? total : page * limit} из ${total}`}
                    className={classes.pagePaginationInfo}/>

                <form
                    id="news-data-fetch-form"
                    onSubmit={submitForm(this)}>
                    <button
                        type="submit"
                        style={{display: 'none'}}
                        id="news-data-fetch-submit">
                    </button>
                </form>

                <input type="hidden"
                       name="sort_column"
                       form="news-data-fetch-form"
                       value={sort}/>
                <input type="hidden"
                       name="sort_direction"
                       form="news-data-fetch-form"
                       value={direction}/>
                <input type="hidden"
                       name="page"
                       form="news-data-fetch-form"
                       value={page}/>
                <input type="hidden"
                       name="limit"
                       form="news-data-fetch-form"
                       value={limit}/>

                {prepareDeleteRowID ?
                    <Dialog
                        title="Удаление пользователя"
                        onClose={() => this.setState({
                            prepareDeleteRowID: 0
                        })}
                        control={
                            <React.Fragment>
                                <Button
                                    variant="tab"
                                    text="OK"
                                    onClick={() => {
                                        deleteOneItem(this, prepareDeleteRowID)
                                            .then(() => {
                                                document.getElementById('news-data-fetch-submit').click()
                                            })
                                    }}/>
                                <Button
                                    variant="tab"
                                    text="Отмена"
                                    onClick={() => this.setState({
                                        prepareDeleteRowID: 0
                                    })}/>
                            </React.Fragment>
                        }>

                        <Typography
                            text={`Вы уверены, что хотите удалить пользователя с id ${prepareDeleteRowID}?`}/>
                    </Dialog> : ''}

                {prepareDeleteForeverRowID ?
                    <Dialog
                        title="Удаление пользователя"
                        onClose={() => this.setState({
                            prepareDeleteForeverRowID: 0
                        })}
                        control={
                            <React.Fragment>
                                <Button
                                    variant="tab"
                                    text="OK"
                                    onClick={() => {
                                        deleteForeverOneItem(this, prepareDeleteForeverRowID)
                                            .then(() => {
                                                document.getElementById('news-data-fetch-submit').click()
                                            })
                                    }}/>
                                <Button
                                    variant="tab"
                                    text="Отмена"
                                    onClick={() => this.setState({
                                        prepareDeleteForeverRowID: 0
                                    })}/>
                            </React.Fragment>
                        }>

                        <Typography
                            text={`Вы уверены, что хотите удалить пользователя с id ${prepareDeleteForeverRowID}?
							Это действие нельзя отменить!`}/>
                    </Dialog> : ''}


            </Panel>
            {!!catchedErrorMessage && <Alert text={catchedErrorMessage}/> }
        </React.Fragment>

    }
}

const mapStateToProps = (state) => ({
    catchedErrorMessage: state.newsListPage.catchedErrorMessage,
    dataLoadingFlag: state.newsListPage.dataLoadingFlag,
});

const mapDispatchToProps = (dispatch) => ({
    newsListPageLoading: bindActionCreators(newsListPageLoading, dispatch),
    newsListPageErrorMessage: bindActionCreators(newsListPageErrorMessage, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NewsListTable));