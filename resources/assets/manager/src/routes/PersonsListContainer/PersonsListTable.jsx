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

class PersonsListTable extends React.PureComponent {

    static defaultProps = {
        type_id: 2,
    };

    state = {
        ...{...defineQueryProps(), limit: 10, page: 1, type_id: this.props.type_id},

        data: [],
        total: 20,
        prepareDeleteRowID: 0,
        currentEditRowIndex: -1,
        currentEditRowCreatedAt: null,
        prepareDeleteForeverRowID: 0,
    };

    componentDidMount = () => {
        document.getElementById('persons-data-fetch-submit').click();
    };

    render = () => {
        const {classes, dataLoadingFlag, catchedErrorMessage, type_id} = this.props;
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
                                text="Имя"/>
                            <Button
                                variant="icon"
                                text={<span
                                    className={sort === 'name' && direction === 'asc' ?
                                        'fa fa-sort-up' :
                                        'fa fa-sort-down'}>
							</span>}
                                onClick={sortNews(this)('name')}
                                className={sort === 'name' ?
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
                                row.name,
                                // row.category.title,
                                // row.section && row.section.title,
                                // row.creator && row.creator.email,
                                // row.created_at,
                                // row.comments_count,
                                // row.views,
                                <React.Fragment>
                                    <Link to={"/persons/" +type_id +'/' +row.id}>
                                        <Button
                                            variant="icon"
                                            text={<i className="fa fa-edit"></i>}
                                        />
                                    </Link>

                                    {row.deleted_at && <Button
                                        variant="icon"
                                        text={<i className="fa fa-refresh"></i>}
                                        onClick={() => restoreItem(this, row.id).then(() => {
                                            document.getElementById('persons-data-fetch-submit').click()
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
                        onClick={switchPage(this, this.props.type_id)}/>
                </div>}

                <Typography
                    text={`Записи: ${((page - 1) * limit) + 1} - ${page * limit > total ? total : page * limit} из ${total}`}
                    className={classes.pagePaginationInfo}/>

                <form
                    id="persons-data-fetch-form"
                    onSubmit={submitForm(this, this.props.type_id)}>
                    <button
                        type="submit"
                        style={{display: 'none'}}
                        id="persons-data-fetch-submit">
                    </button>
                </form>

                <input type="hidden"
                       name="sort_column"
                       form="persons-data-fetch-form"
                       value={sort}/>
                <input type="hidden"
                       name="sort_direction"
                       form="persons-data-fetch-form"
                       value={direction}/>
                <input type="hidden"
                       name="page"
                       form="persons-data-fetch-form"
                       value={page}/>
                <input type="hidden"
                       name="limit"
                       form="persons-data-fetch-form"
                       value={limit}/>

                {prepareDeleteRowID ?
                    <Dialog
                        title="Удаление персоналии"
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
                                                document.getElementById('persons-data-fetch-submit').click()
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
                            text={`Вы уверены, что хотите удалить персоналии с id ${prepareDeleteRowID}?`}/>
                    </Dialog> : ''}

                {prepareDeleteForeverRowID ?
                    <Dialog
                        title="Удаление персоналии"
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
                                                document.getElementById('persons-data-fetch-submit').click()
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
                            text={`Вы уверены, что хотите удалить персоналии с id ${prepareDeleteForeverRowID}?
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


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PersonsListTable));