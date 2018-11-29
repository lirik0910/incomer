import React from 'react';
import withStyles from 'react-jss';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    userListPageErrorMessage,
    userListPageLoading,
    userListPageSelectedRowsIDsArray
} from 'actions/usersListPageActions.js';
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
import moment from 'moment';
import {defineQueryProps} from 'url.js';

const styles = () => ({
    root: {
        margin: 12,
        gridArea: 'users-table',
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

class UsersListTable extends React.PureComponent {

    state = {
        ...{...defineQueryProps(), limit: 10, page: 1},

        /**
         * Data on users who will be in the table
         * Данные по пользователям, которые будут в таблице
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
        document.getElementById('users-data-fetch-submit').click();
    };

    render = () => {
        const {classes} = this.props;
        const {data = [], sort = '', direction = '', page = 0, limit = 20, total = 0, prepareDeleteRowID = 0, currentEditRowIndex, currentEditRowCreatedAt, prepareDeleteForeverRowID = 0} = this.state;

        return <Panel className={classes.root}>
            <Table>
                <TableHeader columns={[
                    //<input type="checkbox" onChange={selectAllRows(this)}/>,
                    <React.Fragment>
                        <Typography
                            variant="simple"
                            text="Логин"/>
                        <Button
                            variant="icon"
                            text={<span
                                className={sort === 'username' && direction === 'asc' ?
                                    'fa fa-sort-up' :
                                    'fa fa-sort-down'}>
							</span>}
                            onClick={sortUsers(this)('username')}
                            className={sort === 'username' ?
                                'active' :
                                ''}/>
                    </React.Fragment>,
                    <React.Fragment>
                        <Typography
                            variant="simple"
                            text="Имя"/>
                        <Button
                            variant="icon"
                            text={<span
                                className={sort === 'first_name' && direction === 'asc' ?
                                    'fa fa-sort-up' :
                                    'fa fa-sort-down'}>
							</span>}
                            onClick={sortUsers(this)('first_name')}
                            className={sort === 'first_name' ?
                                'active' :
                                ''}/>
                    </React.Fragment>,
                    <React.Fragment>
                        <Typography
                            variant="simple"
                            text="Фамилия"/>
                        <Button
                            variant="icon"
                            text={<span
                                className={sort === 'last_name' && direction === 'asc' ?
                                    'fa fa-sort-up' :
                                    'fa fa-sort-down'}>
							</span>}
                            onClick={sortUsers(this)('last_name')}
                            className={sort === 'last_name' ?
                                'active' :
                                ''}/>
                    </React.Fragment>,
                    <React.Fragment>
                        <Typography
                            variant="simple"
                            text="Email"/>
                        <Button
                            variant="icon"
                            text={<span
                                className={sort === 'email' && direction === 'asc' ?
                                    'fa fa-sort-up' :
                                    'fa fa-sort-down'}>
							</span>}
                            onClick={sortUsers(this)('email')}
                            className={sort === 'email' ?
                                'active' :
                                ''}/>
                    </React.Fragment>,
                    <React.Fragment>
                        <Typography
                            variant="simple"
                            text="Тип"/>
                        <Button
                            variant="icon"
                            text={<span
                                className={sort === 'type' && direction === 'asc' ?
                                    'fa fa-sort-up' :
                                    'fa fa-sort-down'}>
							</span>}
                            onClick={sortUsers(this)('type')}
                            className={sort === 'type' ?
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
                            onClick={sortUsers(this)('created_at')}
                            className={sort === 'created_at' ?
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
                            onClick={sortUsers(this)('comments_count')}
                            className={sort === 'comments_count' ?
                                'active' :
                                ''}/>
                    </React.Fragment>,
                    <React.Fragment>
                        <Typography
                            variant="simple"
                            text="Репосты"/>
                        <Button
                            variant="icon"
                            text={<span
                                className={sort === 'reposted_news_count' && direction === 'asc' ?
                                    'fa fa-sort-up' :
                                    'fa fa-sort-down'}>
							</span>}
                            onClick={sortUsers(this)('reposted_news_count')}
                            className={sort === 'reposted_news_count' ?
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
                            //       className="row-users-table-checkbox"
                            //       onChange={selectOneRow(this)}
                            //       data-row-item-id={row.id}/>,
                            row.username,
                            row.first_name,
                            row.last_name,
                            row.email,
                            row.type,
                            row.created_at,
                            row.comments_count,
                            row.reposted_news_count,
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
                                        document.getElementById('users-data-fetch-submit').click()
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
                id="users-data-fetch-form"
                onSubmit={submitForm(this)}>
                <button
                    type="submit"
                    style={{display: 'none'}}
                    id="users-data-fetch-submit">
                </button>
            </form>

            <input type="hidden"
                   name="sort_column"
                   form="users-data-fetch-form"
                   value={sort}/>
            <input type="hidden"
                   name="sort_direction"
                   form="users-data-fetch-form"
                   value={direction}/>
            <input type="hidden"
                   name="page"
                   form="users-data-fetch-form"
                   value={page}/>
            <input type="hidden"
                   name="limit"
                   form="users-data-fetch-form"
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
                                        .then(() => {document.getElementById('users-data-fetch-submit').click()})
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
                        text={`Вы уверены, что хотите удалить пользователя с id ${prepareDeleteRowID}?
							Это действие нельзя отменить!`}/>
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
                                        .then(() => {document.getElementById('users-data-fetch-submit').click()})
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
                                    editItem(this, 'users-edit-form', data[currentEditRowIndex].id)
                                        .then(() => document.getElementById('users-data-fetch-submit').click());
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
                        id="users-edit-form">

                        <Typography
                            variant="label"
                            text="Логин"/>
                        <Input
                            type="text"
                            name="username"
                            placeholder="Логин"
                            defaultValue={data[currentEditRowIndex].username}/>

                        <Typography
                            variant="label"
                            text="Имя"/>

                        <Input
                            type="text"
                            name="first_name"
                            placeholder="Имя"
                            defaultValue={data[currentEditRowIndex].first_name}/>

                        <Typography
                            variant="label"
                            text="Фамилия"/>
                        <Input
                            type="text"
                            name="last_name"
                            placeholder="Фамилия"
                            defaultValue={data[currentEditRowIndex].last_name}/>

                        <Typography
                            variant="label"
                            text="Фамилия"/>
                        <Input
                            type="text"
                            name="patronymic"
                            placeholder="Отчество"
                            defaultValue={data[currentEditRowIndex].patronymic}/>

                        <Typography
                            variant="label"
                            text="Email"/>
                        <Input
                            type="text"
                            name="email"
                            readOnly={true}
                            placeholder="Email"
                            defaultValue={data[currentEditRowIndex].email}/>

                        <Typography
                            variant="label"
                            text="Тип"/>
                        <Select
                            name="type"
                            options={[
                                ['Администратор', 'admin'],
                                ['Редактор', 'manager'],
                                ['Пользователь', 'user'],
                            ]}
                            defaultValue={data[currentEditRowIndex].type}/>

                        <Typography
                            variant="label"
                            text="Дата регистрации"/>
                        <Input
                            variant="date"
                            name="created_at"
                            readOnly={true}
                            timeIntervals={10}
                            dateFormat="YYYY-MM-DD LT"
                            selected={currentEditRowCreatedAt ?
                                moment(currentEditRowCreatedAt, 'YYYY-MM-DD LT') :
                                moment(data[currentEditRowIndex].created_at, 'YYYY-MM-DD LT')}
                        />


                        {/*<Typography*/}
                        {/*variant="label"*/}
                        {/*text="Comments count"/>*/}
                        {/*<Input*/}
                        {/*type="text"*/}
                        {/*name="comments_count"*/}
                        {/*placeholder="Comments count"*/}
                        {/*defaultValue={data[currentEditRowIndex].comments_count}/>*/}

                        {/*<Typography*/}
                        {/*variant="label"*/}
                        {/*text="Reposted news"/>*/}
                        {/*<Input*/}
                        {/*type="text"*/}
                        {/*name="reposted_news_count"*/}
                        {/*placeholder="Reposted news"*/}
                        {/*defaultValue={data[currentEditRowIndex].reposted_news_count}/>*/}
                    </form>

                </Dialog> : ''}
        </Panel>
    }
}

const mapStateToProps = (state) => ({
    selectedRowsIdsArray: selectedRowsIdsArraySelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    userListPageErrorMessage: bindActionCreators(userListPageErrorMessage, dispatch),
    userListPageSelectedRowsIDsArray: bindActionCreators(userListPageSelectedRowsIDsArray, dispatch),
    userListPageLoading: bindActionCreators(userListPageLoading, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UsersListTable));