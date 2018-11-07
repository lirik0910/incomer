import React from 'react';
import withStyles from 'react-jss';

import Panel from 'components/Panel';
import Table from 'components/Table';
import TableHeader from 'components/TableHeader';
import TableRow from 'components/TableRow';
import Button from 'components/Button';
import PageLoadingProcess from 'components/PageLoadingProcess';

import httpfetch from 'httpfetch.js';
import { defineQueryProps } from 'url.js';

const styles = () => ({
	root: {
		margin: 12,
		gridArea: 'users-table'
	}
});

class UsersListTable extends React.PureComponent {

	state = {
		...defineQueryProps(),
		date: [],
		total: 0,
		dataLoadingFlag: true,
		catchedErrorMessage: ''
	}

	componentDidMount = () => {
		httpfetch('https://jsonplaceholder.typicode.com/todos/1')
			.then(({ data, total = 0 }) => this.setState({
				dataLoadingFlag: false,
				total,
				data
			}))
			.catch((err) => this.setState({ 
				catchedErrorMessage: err.message 
			}));
	}

	render = () => {
		const { classes } = this.props;
		const { data = [], sort = '', direction = '', dataLoadingFlag, offset = 0, limit = 20 } = this.state;

		return <Panel className={classes.root}>
			{dataLoadingFlag && <PageLoadingProcess />}

			<Table className={classes.table}>
				<TableHeader columns={[
					<input type="checkbox" />,
					<React.Fragment>
						Name
						<Button
							variant="min"
							color="primary"
							text={<span 
								className={sort === 'name' && direction === 'asc' ?
									'fa fa-sort-up' : 
									'fa fa-sort-down'}>
							</span>}
							onClick={this.sortUsers('name')}
							className={sort === 'name' ?
								'active' :
								''} />
					</React.Fragment>,
					<React.Fragment>
						Surname
						<Button
							variant="min"
							color="primary"
							text={<span 
								className={sort === 'surname' && direction === 'asc' ?
									'fa fa-sort-up' : 
									'fa fa-sort-down'}>
							</span>}
							onClick={this.sortUsers('surname')}
							className={sort === 'surname' ?
								'active' :
								''} />
					</React.Fragment>,
					<React.Fragment>
						Email
						<Button
							variant="min"
							color="primary"
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
						Role
						<Button
							variant="min"
							color="primary"
							text={<span 
								className={sort === 'role' && direction === 'asc' ?
									'fa fa-sort-up' : 
									'fa fa-sort-down'}>
							</span>}
							onClick={this.sortUsers('role')}
							className={sort === 'role' ?
								'active' :
								''} />
					</React.Fragment>,
					<React.Fragment>
						Created at
						<Button
							variant="min"
							color="primary"
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
					<React.Fragment>
						Comments
						<Button
							variant="min"
							color="primary"
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
						Reposted news
						<Button
							variant="min"
							color="primary"
							text={<span 
								className={sort === 'reposted_news_count' && direction === 'asc' ?
									'fa fa-sort-up' : 
									'fa fa-sort-down'}>
							</span>}
							onClick={this.sortUsers('reposted_news_count')}
							className={sort === 'reposted_news_count' ?
								'active' :
								''} />
					</React.Fragment>,
					'Actions'
				]} />

				<tbody>
				{data.map((row, i) => (
					<TableRow
						key={i}
						columns={[
							<input type="checkbox" />,
							row.name,
							row.surname,
							row.email,
							row.role,
							row.created_at,
							row.comments_count,
							row.reposted_news_count
						]} />
				))}
				</tbody>
			</Table>
		</Panel>
	}

	sortUsers = (sort = '') => () => {
		const { direction } = this.state;

		this.setState({
			sort,
			direction: direction === 'desc' ?
				'asc' :
				'desc'
		});
	}
}

export default withStyles(styles)(UsersListTable);