import React from 'react';
import withStyles from 'react-jss';

import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { 
	dataLoadingFlagSelector,
	foldersListSelector,
	filesListSelector
} from './selectors.js';
import {
    fetchImages,
    deleteItem,
} from './logic';

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
import FileEditManager from "../../components/FileEditManager/FileEditManager";

const styles = ({ Global, Palette }) => ({
	'@global': { 
		...Global,
		'#root': {
			...Global['#root'],
			display: 'grid',
			gridTemplateAreas: `
				'header header'
				'page-title control-elements'
				'files-list-manager folders-list-manager '
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

class ManageMediaItemsContainer extends React.Component {

	state = {
		displayAsideMenu: false,
		images: [],
		editId: false,
	};

	componentDidMount() {
		fetchImages(this);
    }

    render = () => {
		const { displayAsideMenu, images, editId } = this.state;
		const { classes, dataLoadingFlag, foldersList, filesList } = this.props;

        console.log(images);
        return <React.Fragment>
			{dataLoadingFlag && <PageLoadingProcess />}

			<Header/>

			<Typography
				text="Files manager"
				variant="title" />

			<FilesListManager
                onCreate={()=>{
                	console.log('create');
                	this.setState({editId: false})}}
            >
				{images.map((item, i) => (
					<FileListItem
						key={i}
						{...item}
						onEdit={(id)=>this.setState({editId:id})}
						onDelete={(id)=>deleteItem(this, id).then(() => fetchImages(this))}
					/>
				))}
			</FilesListManager
			>

            <FileEditManager
				editId={editId}
				onEdit={()=>fetchImages(this)}
				onCreate={()=>fetchImages(this)}
			/>
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