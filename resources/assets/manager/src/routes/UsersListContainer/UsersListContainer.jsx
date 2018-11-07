import React from 'react';
import withStyles from 'react-jss'

import Header from 'components/Header';
import Button from 'components/Button';
import Aside from 'components/Aside';
import Typography from 'components/Typography';
import Link from 'components/Link';
// import Search from 'components/Search';

import UsersListTable from './UsersListTable.jsx';
import UsersListFilters from './UsersListFilters.jsx';

const styles = ({ Global, Palette }) => ({
	'@global': { 
		...Global,

		'#root': {
			display: 'grid',
			gridTemplateAreas: `
				'header header header header header header'
				'page-title page-title page-title page-title page-title page-title'
				'users-table users-table users-table users-table users-filters users-filters'
			`,
			gridTemplateRows: '30px 50px auto'
		}
	},

	title: {
		gridArea: 'page-title'
	},

	link: { 
		margin: 12, 
		display: 'block',
		color: Palette['default'],
		textDecoration: 'none',

		'&:hover': {
			color: Palette['hover']
		}
	},

	appTitle: {
		width: '82%'
	},

	auxLink: {
		margin: 12, 
		display: 'block',
		color: Palette['primary'],
		textDecoration: 'none',

		'&:hover': {
			color: Palette['aux']
		}
	}
});

class UsersListContainer extends React.PureComponent {

	state = {
		displayAsideMenu: false
	}

	render = () => {
		const { displayAsideMenu } = this.state;
		const { classes } = this.props;

		return <React.Fragment>
			<Header>
				<Button
					variant="min"
					color="primary"
					text={<i className="fa fa-bars"></i>}
					onClick={() => this.setState({ displayAsideMenu: true })} />
				<Typography
					text="umanager"
					color="primary"
					className={classes.appTitle} />

				<Link to="/profile"
					className={classes.auxLink}
					color="primary">
					<i className="fa fa-user"></i> profile
				</Link>
				<Link to="/settings"
					className={classes.auxLink}>
					<i className="fa fa-gear"></i> settings
				</Link>
			</Header>

			{displayAsideMenu && <Aside 
				onClose={() => this.setState({ displayAsideMenu: false })}>
				
				<Button
					variant="min"
					text={<i className="fa fa-bars"></i>}
					onClick={() => this.setState({ displayAsideMenu: false })} />
				<Typography
					text="umanager" />

				<Link to="/dashboard"
					className={classes.link}>dashboard</Link>
				<Link to="/users"
					className={classes.link}>users</Link>
				<Link to="/pages"
					className={classes.link}>pages</Link>
				<Link to="/media"
					className={classes.link}>media</Link>
			</Aside>}

			<Typography
				text="Users"
				color="primary"
				variant="title"
				className={classes.title} />

			<UsersListTable />

			<UsersListFilters>
				{/*<Search />*/}
			</UsersListFilters>
		</React.Fragment>
	}
}

export default withStyles(styles)(UsersListContainer);