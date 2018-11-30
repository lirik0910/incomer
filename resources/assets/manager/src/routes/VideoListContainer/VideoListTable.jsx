import React from 'react';
import withStyles from 'react-jss';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    videoListPageErrorMessage,
    videoListPageLoading,
    videoListPageSelectedRowsIDsArray
} from 'actions/videoListPageActions.js';
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

import {deleteOneItem, editItem, sortUsers, submitForm, switchPage} from './logic';
import {defineQueryProps} from 'url.js';

const styles = () => ({
    root: {
        margin: 12,
        gridArea: 'video-table',
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

class VideoListTable extends React.PureComponent {

    state = {
        ...{...defineQueryProps(), limit: 10, page: 1},

        /**
         * Data on video who will be in the table
         * Данные по видеом, которые будут в таблице
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
        document.getElementById('video-data-fetch-submit').click();
    };

    render = () => {
        const {classes} = this.props;
        const {data = [], sort = '', direction = '', page = 0, limit = 20, total = 0, prepareDeleteRowID = 0, currentEditRowIndex, currentEditRowCreatedAt, prepareDeleteForeverRowID = 0} = this.state;
        const persons = this.props.persons && this.props.persons.map((i) => [i.name, i.id]);

        return <Panel className={classes.root}>
            <Table>
                <TableHeader columns={[
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
                            onClick={sortUsers(this)('title')}
                            className={sort === 'title' ?
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
                            row.created_at,
                            <React.Fragment>
                                <span style={{padding: 10}}>

                                {row.on_index ? <i className="fa fa-star"></i> : <i className="fa fa-star-o"></i>}
                                </span>
                                <Button
                                    variant="icon"
                                    text={<i className="fa fa-edit"></i>}
                                    onClick={() => this.setState({
                                        currentEditRowIndex: i
                                    })}/>
                                <Button
                                    variant="icon"
                                    text={<i className="fa fa-close"></i>}
                                    onClick={() => this.setState({
                                        prepareDeleteRowID: row.id
                                    })}/> :

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
                id="video-data-fetch-form"
                onSubmit={submitForm(this)}>
                <button
                    type="submit"
                    style={{display: 'none'}}
                    id="video-data-fetch-submit">
                </button>
            </form>

            <input type="hidden"
                   name="sort_column"
                   form="video-data-fetch-form"
                   value={sort}/>
            <input type="hidden"
                   name="sort_direction"
                   form="video-data-fetch-form"
                   value={direction}/>
            <input type="hidden"
                   name="page"
                   form="video-data-fetch-form"
                   value={page}/>
            <input type="hidden"
                   name="limit"
                   form="video-data-fetch-form"
                   value={limit}/>

            {prepareDeleteRowID ?
                <Dialog
                    title="Удаление видео"
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
                                            document.getElementById('video-data-fetch-submit').click()
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
                        text={`Вы уверены, что хотите удалить видео с id ${prepareDeleteRowID}?`}/>
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
                                    editItem(this, 'video-edit-form', data[currentEditRowIndex].id)
                                        .then(() => document.getElementById('video-data-fetch-submit').click());
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
                        id="video-edit-form">

                        <Typography
                            variant="label"
                            text="Название видео"/>
                        <Input
                            defaultValue={data[currentEditRowIndex].title}
                            type="text"
                            name="title"/>

                        <Typography
                            variant="label"
                            text="Ссылка"/>

                        <Input
                            defaultValue={data[currentEditRowIndex].link}
                            type="text"
                            name="link"/>

                        <input
                            defaultChecked={data[currentEditRowIndex].on_index}
                            type="checkbox"
                            name="on_index"/>

                        <Typography
                            variant="label"
                            text="На главной"/>
                    </form>

                </Dialog> : ''}
        </Panel>
    }
}

const mapStateToProps = (state) => ({
    selectedRowsIdsArray: selectedRowsIdsArraySelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    videoListPageErrorMessage: bindActionCreators(videoListPageErrorMessage, dispatch),
    videoListPageSelectedRowsIDsArray: bindActionCreators(videoListPageSelectedRowsIDsArray, dispatch),
    videoListPageLoading: bindActionCreators(videoListPageLoading, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(VideoListTable));