import React from 'react';
import withStyles from 'react-jss'

import Header from 'components/Header';
import Button from 'components/Button';
import Aside from 'components/Aside';
import Typography from 'components/Typography';
import Link from 'components/Link';
import Search from 'components/Search';
import Input from 'components/Input';
import Dialog from 'components/Dialog';
import Alert from 'components/Alert';

import UsersListTable from './UsersListTable.jsx';
import UsersListFilters from './UsersListFilters.jsx';

import { 
	clearFilters, 
	deleteOneItem 
} from './logic/index';

import moment from 'moment';
import { getItemFromQueryProps } from 'url.js';

const styles = ({ Global, Palette }) => ({
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
	primaryButtons: {
		right: 12,
		lineHeight: '30px',
		position: 'absolute',
		'& a': {
			marginLeft: 12
		}
	},
	asdieAppHeader: {
		display: 'flex',
		marginBottom: 12
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
		prepareDeleteRow: {},
		displayAsideMenu: false,
		createdAtFilterValue: getItemFromQueryProps('created_at') || moment(),
		selectedRowsFlag: false,
		catchedErrorMessage: '',
		displayCopySeveralRows: false,
		displayDeleteSeveralRows: false

	}

	render = () => {
		const { displayAsideMenu, createdAtFilterValue, selectedRowsFlag, prepareDeleteRow, catchedErrorMessage, displayCopySeveralRows, displayDeleteSeveralRows } = this.state;
		const { classes } = this.props;

		return <React.Fragment>
			<Header>
				<Button
					text={
						<i className="fa fa-bars"></i>
					}
					variant="icon"
					onClick={() => this.setState({ 
						displayAsideMenu: true 
					})} />
				<Typography
					text="umanager" />

				<div className={classes.primaryButtons}>
					<Link to="/profile">
						<i className="fa fa-user"></i> profile
					</Link>
					<Link to="/settings">
						<i className="fa fa-gear"></i> settings
					</Link>
				</div>
			</Header>

			{displayAsideMenu && <Aside
				onClose={() => this.setState({ displayAsideMenu: false })}>

				<div className={classes.asdieAppHeader}>
					<Button
						variant="contrast"
						text={
							<i className="fa fa-bars"></i>
						}
						onClick={() => this.setState({ 
							displayAsideMenu: false 
						})} />
					<Typography variant="anti"
						text="umanager" />
				</div>

				<Link to="/dashboard" variant="anti">dashboard</Link>
				<Link to="/users" variant="anti">users</Link>
				<Link to="/pages" variant="anti">pages</Link>
				<Link to="/media" variant="anti">media</Link>
			</Aside>}

			<Typography
				text="Users"
				variant="title" />

			<div className={classes.control}>
				<Link to="/user">
					<i className="fa fa-user-plus"></i>
					add user
				</Link>

				<Button 
					variant="link"
					color="secondary"
					disabled={selectedRowsFlag ?
						false :
						true}
					text={
						<React.Fragment>
							<i className="fa fa-copy"></i>
							copy users
						</React.Fragment>
					}
					onClick={() => this.setState({
						displayCopySeveralRows: true
					})} />

				<Button 
					variant="link"
					color="secondary"
					disabled={selectedRowsFlag ?
						false :
						true}
					text={
						<React.Fragment>
							<i className="fa fa-close"></i>
							delete selected
						</React.Fragment>
					}
					onClick={() => this.setState({
						displayDeleteSeveralRows: true
					})} />
			</div>

			<UsersListTable
				deleteItems={(prepareDeleteRow = {}) => this.setState({ 
					prepareDeleteRow
				})}
				selectedRows={(selectedRowsFlag) => this.setState({
					selectedRowsFlag
				})}
				displayFetchErrorMessage={(catchedErrorMessage) => this.setState({
					catchedErrorMessage
				})} />

			<UsersListFilters>
				<Typography
					variant="label"
					text="Search users" />
				<Search
					inputProperties={{
						form: 'users-data-fetch-form'
					}}
					submitProperties={{
						form: 'users-data-fetch-form'
					}} />

				<Typography
					variant="label"
					text="Filter by sign up date" />
				<Input showTimeSelect
					variant="date"
					name="created_at"
					form="users-data-fetch-form"
					timeIntervals={10}
					dateFormat="YYYY-MM-DD LT"
					selected={createdAtFilterValue}
					onChange={(createdAtFilterValue) => this.setState({ createdAtFilterValue 
					}, () => {
						document.getElementById('users-data-fetch-submit').click();
					})} />
			
				<Button 
					variant="tab" text="Clear filters properties"
					onClick={clearFilters(this)} />
			</UsersListFilters>

			{prepareDeleteRow.id && <Dialog
				title="Delete item"
				onClose={() => {
					document.dispatchEvent(new CustomEvent('CloseDeleteDialog'));
				}}
				control={
					<React.Fragment>
						<Button
							variant="tab"
							text="OK"
							onClick={deleteOneItem(this, prepareDeleteRow.id)} />
						<Button
							variant="tab"
							text="Cancel"
							onClick={() => {
								document.dispatchEvent(new CustomEvent('CloseDeleteDialog'));
							}} />
					</React.Fragment>
				}>

				<Typography
					text={`Are you sure you want to delete item with id ${prepareDeleteRow.id}? 
						This action can influnce to stability of all application`} />
			</Dialog>}

			{displayCopySeveralRows && <Dialog
				title="Copy rows"
				onClose={() => this.setState({
					displayCopySeveralRows: false
				})}
				control={
					<React.Fragment>
						<Button
							variant="tab"
							text="OK"
							onClick={() => {
								document.dispatchEvent(new CustomEvent('CopySelectedItems'));
							}} />
						<Button
							variant="tab"
							text="Cancel"
							onClick={() => {
								document.dispatchEvent(new CustomEvent('CloseDeleteDialog'));
							}} />
					</React.Fragment>
				}>

				<Typography
					text="Are you sure you want to copy selected users?" />
			</Dialog>}

			{displayDeleteSeveralRows && <Dialog
				title="Delete rows"
				onClose={() => this.setState({
					displayDeleteSeveralRows: false
				})}
				control={
					<React.Fragment>
						<Button
							variant="tab"
							text="OK"
							onClick={() => {
								document.dispatchEvent(new CustomEvent('DeleteSelectedItems'));
							}} />
						<Button
							variant="tab"
							text="Cancel"
							onClick={() => this.setState({
								displayDeleteSeveralRows: false
							})} />
					</React.Fragment>
				}>

				<Typography
					text="Are you sure you want to delete selected users?" />
			</Dialog>}

			{catchedErrorMessage && <Alert 
				text={catchedErrorMessage} />}
		</React.Fragment>
	}
}

export default withStyles(styles)(UsersListContainer);
