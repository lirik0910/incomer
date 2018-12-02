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

import {deleteForeverOneItem, deleteOneItem, editItem, restoreItem, sortUsers, submitForm, switchPage} from './logic';
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

class TagsListTable extends React.PureComponent {

    state = {
        ...{...defineQueryProps(), limit: 10, page: 1},

        /**
         * Data on tags who will be in the table
         * Данные по тэгам, которые будут в таблице
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
        document.getElementById('tags-data-fetch-submit').click();
    };

    render = () => {
        const {classes} = this.props;
        const {data = [], sort = '', direction = '', page = 0, limit = 20, total = 0, prepareDeleteRowID = 0, currentEditRowIndex, currentEditRowCreatedAt, prepareDeleteForeverRowID = 0} = this.state;
        const persons = this.props.persons  && this.props.persons.map((i) => [i.name, i.id]);

        return <Panel className={classes.root}>
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
                            text="Персона"/>
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

                    <Typography
                        variant="simple"
                        text="Действия"/>
                ]}/>

                <tbody>
                {data.map((row, i) => (
                    <TableRow
                        key={i}
                        columns={[
                            row.value,
                            row.person && row.person.name,
                            <React.Fragment>
                                <Button
                                    variant="icon"
                                    text={<i className="fa fa-edit"></i>}
                                    onClick={() => this.setState({
                                        currentEditRowIndex: i
                                    })}/>

                                {row.deleted_at && <Button
                                    variant="icon"
                                    text={<i className="fa fa-refresh"></i>}
                                    onClick={() => restoreItem(this, row.id).then(() => {
                                        document.getElementById('tags-data-fetch-submit').click()
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
                id="tags-data-fetch-form"
                onSubmit={submitForm(this)}>
                <button
                    type="submit"
                    style={{display: 'none'}}
                    id="tags-data-fetch-submit">
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

            {prepareDeleteRowID ?
                <Dialog
                    title="Удаление тэга"
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
                                        .then(() => {document.getElementById('tags-data-fetch-submit').click()})
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
                        text={`Вы уверены, что хотите удалить тэг с id ${prepareDeleteRowID}?`}/>
                </Dialog> : ''}

            {prepareDeleteForeverRowID ?
                <Dialog
                    title="Удаление тэга"
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
                                        .then(() => {document.getElementById('tags-data-fetch-submit').click()})
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
                        text={`Вы уверены, что хотите удалить тэг с id ${prepareDeleteForeverRowID}?
							Это действие нельзя отменить!`}/>
                </Dialog> : ''}

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
                                        .then(() => document.getElementById('tags-data-fetch-submit').click());
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TagsListTable));