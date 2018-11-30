import React from 'react';
import withStyles from 'react-jss';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    tagsListPageErrorMessage,
    tagsListPageLoading,
    tagsListPageSelectedRowsIDsArray
} from 'actions/tagsListPageActions.js';
import {selectedRowsIdsArraySelector} from 'selectors.js';

import Panel from 'components/Panel';
import Table from 'components/Table';
import TableHeader from 'components/TableHeader';
import TableRow from 'components/TableRow';
import Button from 'components/Button';
import Pagination from 'components/Pagination';
import Typography from 'components/Typography';
import Dialog from 'components/Dialog';
import Input from 'components/Input';
import Select from 'components/Select';

import {deleteOneItem, editItem, restoreItem, sortUsers, submitForm, switchPage} from './logic';
import {defineQueryProps} from 'url.js';

const styles = () => ({
    root: {
        margin: 12,
        gridArea: 'tags-table',
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

class RSSListTable extends React.PureComponent {

    state = {
        ...{...defineQueryProps(), limit: 10, page: 1},

        /**
         * Data on tags who will be in the table
         * Данные по новостим, которые будут в таблице
         * @type {Array}
         */
        data: [
            // EXAMPLE OF ONE LINE OBJECT
            // ПРИМЕР ОБЪЕКТА ОДНОЙ СТРОКИ
            // {
            //     id: 1,
            //     name: 'name',
            //     surname: 'surname',
            //     email: 'name.surname@email.com',
            //     role: 'manager',
            //     created_at: '2018-10-05 13:47:28',
            //     comments_count: 2332,
            //     reposted_news_count: 37326
            // }
        ],
        total: 20,
        prepareDeleteRowID: 0,
        prepareDeleteForeverRowID: 0,
        currentEditRowIndex: -1,
        currentEditRowCreatedAt: null
    };

    componentDidMount = () => {
        document.getElementById('rss-data-fetch-submit').click();
    };

    render = () => {
        const {classes} = this.props;
        const {data = [], sort = '', direction = '', page = 0, limit = 20, total = 0, prepareDeleteRowID = 0, currentEditRowIndex, currentEditRowCreatedAt, prepareDeleteForeverRowID = 0} = this.state;
        const persons = this.props.persons && this.props.persons.map((i) => [i.name, i.id]);

        return <Panel className={classes.root}>
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
                                className={sort === 'person' && direction === 'asc' ?
                                    'fa fa-sort-up' :
                                    'fa fa-sort-down'}>
							</span>}
                            onClick={sortUsers(this)('person')}
                            className={sort === 'person' ?
                                'active' :
                                ''}/>
                    </React.Fragment>,
                    <React.Fragment>
                        <Typography
                            variant="simple"
                            text="Компания"/>
                        <Button
                            variant="icon"
                            text={<span
                                className={sort === 'value' && direction === 'asc' ?
                                    'fa fa-sort-up' :
                                    'fa fa-sort-down'}>
							</span>}
                            onClick={sortUsers(this)('value')}
                            className={sort === 'value' ?
                                'active' :
                                ''}/>
                    </React.Fragment>,

                    <React.Fragment>
                        <Typography
                            variant="simple"
                            text="Дата публикации"/>
                        <Button
                            variant="icon"
                            text={<span
                                className={sort === 'pub_date' && direction === 'asc' ?
                                    'fa fa-sort-up' :
                                    'fa fa-sort-down'}>
							</span>}
                            onClick={sortUsers(this)('pub_date')}
                            className={sort === 'pub_date' ?
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
                        key={i}
                        columns={[
                            <a href={row.link} target="_blank">{row.title}</a>,
                            row.persons && row.persons[0] && row.persons[0].name,
                            row.pub_date,
                            <React.Fragment>


                                {!row.is_visible && <Button
                                    variant="icon"
                                    text={<i className="fa fa-eye-slash"></i>}
                                    onClick={() => restoreItem(this, row.id).then(() => {
                                        document.getElementById('rss-data-fetch-submit').click()
                                    })}/>
                                }
                                {row.is_visible && <Button
                                    variant="icon"
                                    text={<i className="fa fa-eye"></i>}
                                    onClick={() => {
                                        deleteOneItem(this, row.id)
                                            .then(() => {
                                                document.getElementById('rss-data-fetch-submit').click()
                                            })
                                    }
                                    }/>}

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
                id="tags-data-fetch-form"
                onSubmit={submitForm(this)}>
                <button
                    type="submit"
                    style={{display: 'none'}}
                    id="rss-data-fetch-submit">
                </button>
            </form>

            <input type="hidden"
                   name="sort_column"
                   form="tags-data-fetch-form"
                   value={sort}/>
            <input type="hidden"
                   name="sort_direction"
                   form="tags-data-fetch-form"
                   value={direction}/>
            <input type="hidden"
                   name="page"
                   form="tags-data-fetch-form"
                   value={page}/>
            <input type="hidden"
                   name="limit"
                   form="tags-data-fetch-form"
                   value={limit}/>

            {currentEditRowIndex > -1 ?
                <Dialog
                    title="Редактировать"
                    onClose={() => this.setState({
                        currentEditRowIndex: -1
                    })}
                    control={
                        <React.Fragment>
                            <Button
                                variant="tab"
                                text="OK"
                                onClick={(e) => {
                                    editItem(this, 'tags-edit-form', data[currentEditRowIndex].id)
                                        .then(() => document.getElementById('rss-data-fetch-submit').click());
                                }}/>
                            <Button
                                variant="tab"
                                text="Отмена"
                                onClick={() => this.setState({
                                    currentEditRowIndex: -1
                                })}/>
                        </React.Fragment>
                    }>
                    <form
                        id="tags-edit-form">

                        <Typography
                            variant="label"
                            text="Персона"/>

                        <Select
                            defaultValue={data[currentEditRowIndex].person_id}
                            name="person_id"
                            options={persons}
                        />

                        <Typography
                            variant="label"
                            text="Название тэга"/>
                        <Input
                            defaultValue={data[currentEditRowIndex].value}
                            type="text"
                            name="value"
                        />
                    </form>

                </Dialog> : ''}
        </Panel>
    }
}

const mapStateToProps = (state) => ({
    selectedRowsIdsArray: selectedRowsIdsArraySelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    tagsListPageErrorMessage: bindActionCreators(tagsListPageErrorMessage, dispatch),
    tagsListPageSelectedRowsIDsArray: bindActionCreators(tagsListPageSelectedRowsIDsArray, dispatch),
    tagsListPageLoading: bindActionCreators(tagsListPageLoading, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RSSListTable));