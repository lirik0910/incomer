import React from 'react';
import withStyles from 'react-jss';

import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { 
	dataLoadingFlagSelector,
	foldersListSelector,
	filesListSelector
} from './selectors.js';

import Header from 'components/Header';
import Button from 'components/Button';
import Aside from 'components/Aside';
import Typography from 'components/Typography';
import Link from 'components/Link';
import PageLoadingProcess from 'components/PageLoadingProcess';
import FoldersListManager from 'components/FoldersListManager';
import FilesListManager from 'components/FilesListManager';
import FolderListItem from 'components/FolderListItem';
import FileListItem from 'components/FileListItem';

const styles = ({ Global, Palette }) => ({
	'@global': { 
		...Global,
		'#root': {
			...Global['#root'],
			display: 'grid',
			gridTemplateAreas: `
				'header header'
				'page-title control-elements'
				'folders-list-manager files-list-manager'
			`,
			gridTemplateRows: '30px 50px auto',
			gridTemplateColumns: '50% 50%'
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
	}
});

class ManageMediaItemsContainer extends React.PureComponent {

	state = {
		displayAsideMenu: false
	}

	render = () => {
		const { displayAsideMenu } = this.state;
		const { classes, dataLoadingFlag, foldersList, filesList } = this.props;

		return <React.Fragment>
			{dataLoadingFlag && <PageLoadingProcess />}

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
				text="Files manager"
				variant="title" />

			<FoldersListManager>
				{foldersList.map((item, i) => (
					<FolderListItem key={i} {...item} />
				))}
			</FoldersListManager>
			
			<FilesListManager>
				{filesList.map((item, i) => (
					<FileListItem key={i} {...item} />
				))}
			</FilesListManager>
		</React.Fragment>
	}
}

const mapStateToProps = (state) => ({
	dataLoadingFlag: dataLoadingFlagSelector(state),
	foldersList: foldersListSelector(state),
	filesList: filesListSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ManageMediaItemsContainer));