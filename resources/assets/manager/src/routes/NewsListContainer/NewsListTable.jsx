import React from 'react';
import withStyles from 'react-jss';

import Link from 'components/Link';
import Panel from 'components/Panel';
import Table from 'components/Table';
import TableHeader from 'components/TableHeader';
import TableRow from 'components/TableRow';
import Button from 'components/Button';
import PageLoadingProcess from 'components/PageLoadingProcess';
import Pagination from 'components/Pagination';
import Typography from 'components/Typography';

import { 
	submitForm,
	deleteSelectedRows, 
	copySelectedRows
} from './logic/index';

import httpfetch from 'httpfetch.js';
import { defineQueryProps } from 'url.js';

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
		...{ ...defineQueryProps(), limit: 10, page: 0 },
		
		/**
		 * Data on news who will be in the table
		 * Данные по пользователям, которые будут в таблице
		 * @type {Array}
		 */
		data: [
		// EXAMPLE OF ONE LINE OBJECT
		// ПРИМЕР ОБЪЕКТА ОДНОЙ СТРОКИ
		{
			id: 1,
			category: 'category',
			title: 'newstitle',
			author: 'name.surname@email.com',
			pub_date: 'pub_date',
			views_count: 37326,
			comments_count: 2332,
			created_at: '05-10-2018 13:47:28',
		}
		],
		total: 20,
		removeItemId: 0,
		dataLoadingFlag: false,
	};

	componentDidMount = () => {
		const { displayFetchErrorMessage = () => {} } = this.props;
		httpfetch('/news', 'GET', {}, window.location.search.substr(1))
			.then(({ data, total = 0 }) => this.setState({
				dataLoadingFlag: false,
				total,
				data
			}))
			.catch((err) => {
				displayFetchErrorMessage(err.message);
				setTimeout(() => {
					displayFetchErrorMessage('');
				}, 2600);
			});

		document.addEventListener('CloseDeleteDialog', this.closeDeleteDialog);
		document.addEventListener('CopySelectedItems', copySelectedRows(this));
		document.addEventListener('DeleteSelectedItems', deleteSelectedRows(this));
	}

	componentWillUnmount = () => {
		document.removeEventListener('CloseDeleteDialog', this.closeDeleteDialog);
		document.removeEventListener('CopySelectedItems', copySelectedRows(this));
		document.removeEventListener('DeleteSelectedItems', deleteSelectedRows(this));
	}

	selectedRowsIdsArray = [];

	render = () => {
		const { classes, deleteItems = () => {} } = this.props;
		const { data = [], sort = '', direction = '', dataLoadingFlag, page = 0, limit = 20, total = 0 } = this.state;

		return <Panel className={classes.root}>
			{dataLoadingFlag && <PageLoadingProcess />}

			<Table>
				<TableHeader columns={[
					<input type="checkbox"
						onChange={this.selectAllRows} />,
					<React.Fragment>
						<Typography 
							variant="simple"
							text="Title" />
						<Button
							variant="icon"
							text={<span 
								className={sort === 'title' && direction === 'asc' ?
									'fa fa-sort-up' : 
									'fa fa-sort-down'}>
							</span>}
							onClick={this.sortUsers('title')}
							className={sort === 'title' ?
								'active' :
								''} />
					</React.Fragment>,
					<React.Fragment>
						<Typography 
							variant="simple"
							text="Category" />
						<Button
							variant="icon"
							text={<span 
								className={sort === 'category' && direction === 'asc' ?
									'fa fa-sort-up' : 
									'fa fa-sort-down'}>
							</span>}
							onClick={this.sortUsers('category')}
							className={sort === 'category' ?
								'active' :
								''} />
					</React.Fragment>,
					<React.Fragment>
						<Typography 
							variant="simple"
							text="Email" />
						<Button
							variant="icon"
							text={<span 
								className={sort === 'email' && direction === 'asc' ?
									'fa fa-sort-up' : 
									'fa fa-sort-down'}>
							</span>}
							onClick={this.sortUsers('email')}
							className={sort === 'email' ?
								'active' :
								''} />
					</React.Fragment>,
					<React.Fragment>
						<Typography 
							variant="simple"
							text="Publication date" />
						<Button
							variant="icon"
							text={<span 
								className={sort === 'pub_date' && direction === 'asc' ?
									'fa fa-sort-up' : 
									'fa fa-sort-down'}>
							</span>}
							onClick={this.sortUsers('pub_date')}
							className={sort === 'pub_date' ?
								'active' :
								''} />
					</React.Fragment>,
					<React.Fragment>
						<Typography 
							variant="simple"
							text="Views" />
						<Button
							variant="icon"
							text={<span 
								className={sort === 'views' && direction === 'asc' ?
									'fa fa-sort-up' : 
									'fa fa-sort-down'}>
							</span>}
							onClick={this.sortUsers('views')}
							className={sort === 'views' ?
								'active' :
								''} />
					</React.Fragment>,
					<React.Fragment>
						<Typography 
							variant="simple"
							text="Comments" />
						<Button
							variant="icon"
							text={<span 
								className={sort === 'comments_count' && direction === 'asc' ?
									'fa fa-sort-up' : 
									'fa fa-sort-down'}>
							</span>}
							onClick={this.sortUsers('comments_count')}
							className={sort === 'comments_count' ?
								'active' :
								''} />
					</React.Fragment>,
					<React.Fragment>
						<Typography 
							variant="simple"
							text="Created at" />
						<Button
							variant="icon"
							text={<span 
								className={sort === 'created_at' && direction === 'asc' ?
									'fa fa-sort-up' : 
									'fa fa-sort-down'}>
							</span>}
							onClick={this.sortUsers('created_at')}
							className={sort === 'created_at' ?
								'active' :
								''} />
					</React.Fragment>,
					<Typography 
						variant="simple"
						text="Actions" />
				]} />

				<tbody>
				{data.map((row, i) => (
					<TableRow
						key={i}
						columns={[
							<input type="checkbox"
								className="row-news-table-checkbox"
								onChange={this.selectOneRow}
								data-row-item-id={row.id} />,
							row.title,
							row.category,
							row.author,
							row.pub_date,
							row.views_count,
							row.comments_count,
							row.created_at,
							<React.Fragment>
								<Link to={'/news/'+ row.id}>
									<i className="fa fa-edit"></i>
								</Link>

								<Button
									variant="icon"
									text={<i className="fa fa-close"></i>}
									onClick={() => this.setState({
										removeItemId: row.id
									}, () => deleteItems(row))} />
							</React.Fragment>
						]} />
				))}
				</tbody>
			</Table>

			{limit < total && <div className={classes.pagePaginationButtons}>
				<Pagination
					limit={limit}
					total={total}
					page={page}
					onClick={this.switchPage} />
			</div>}

			<Typography
				text={`Showing rows ${page} to ${limit - (limit - total)} of ${total}`}
				className={classes.pagePaginationInfo} />

			<form 
				id="newsnewsdata-fetch-form"
				onSubmit={submitForm(this)}>
				<button 
					type="submit"
					style={{ display: 'none' }}
					id="newsnewsdata-fetch-submit">
				</button>
			</form>

			<input type="hidden"
				name="sort_column"
				form="newsnewsdata-fetch-form"
				value={sort} />
			<input type="hidden"
				name="sort_direction"
				form="newsnewsdata-fetch-form"
				value={direction} />
			<input type="hidden"
				name="page"
				form="newsnewsdata-fetch-form"
				value={page} />
			<input type="hidden"
				name="limit"
				form="newsnewsdata-fetch-form"
				value={limit} />
		</Panel>
	}

	selectOneRow = (e) => {
		const { selectedRows } = this.props;
		let index = 0;

		(index = this.selectedRowsIdsArray.indexOf(e.target.dataset['rowItemId'])) > -1 ?
			this.selectedRowsIdsArray.splice(index, 1) : 
			this.selectedRowsIdsArray.push(e.target.dataset['rowItemId']);

		this.selectedRowsIdsArray.length > 0 ?
			selectedRows(true) :
			selectedRows(false);
	}

	/**
	 * Выделить все строки
	 * @param {Object} e
	 */
	selectAllRows = (e) => {
		const { selectedRows = () => {} } = this.props;
		const collections = document.getElementsByClassName('row-newsnewstable-checkbox');
		
		this.selectedRowsIdsArray = [];
		for (let i in collections) {
			collections[i].type && (() => {
				collections[i].checked = e.target.checked;
				e.target.checked && this.selectedRowsIdsArray.push(collections[i].dataset['rowItemId'])
			})();
		}
		selectedRows(e.target.checked);
	}

	/**
	 * Sort data by column
	 * Сортировка данных по определенной колонке
	 * @param {String} newSortColumn - Название колонки
	 * @param {String} newSortColumn - Column name
	 * @return {Function}
	 */
	sortUsers = (newSortColumn = '') => () => {
		const { direction, sort } = this.state;

		this.setState({
			sort: newSortColumn,
			direction: sort !== newSortColumn ? 'asc' : 
				direction === 'desc' ?
					'asc' :
					'desc'
		}, () => {
			document.getElementById('newsnewsdata-fetch-submit').click();
		});
	}

	/**
	 * Switch current table page for paggination
	 * @param {Number} page
	 * @param {Boolean} flag
	 * @return {Function}
	 */
	switchPage = (page = 0, flag = true) => (e) => {
		if (flag) {
			this.setState({ page }, () => {
				document.getElementById('news-data-fetch-submit').click();
			});
		}
	}

	closeDeleteDialog = () => {
		const { deleteItems = () => {} } = this.props;
		this.setState({ removeItemId: 0 }, () => deleteItems({}));
	}
}

export default withStyles(styles)(NewsListTable);
