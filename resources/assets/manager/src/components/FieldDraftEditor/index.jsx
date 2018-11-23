import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import FilesContainer from '../../routes/ManageMediaItemsContainer/ManageMediaItemsContainer.jsx';

import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';
import { 
	EditorState, 
	convertToRaw, 
	ContentState
	//convertFromHTML 
} from 'draft-js';
import htmlToDraft from 'html-to-draftjs';

import Image from './Image';
//import ColorPic from './ColorPic.jsx';

import styles from './styles.js';
import { withStyles } from '@material-ui/core/styles';

/**
 * Draft block
 * @extends PureComponent
 */
class FieldDraftEditor extends React.PureComponent {

	/**
	 * Props validators
	 */
	static propTypes = {
		classes: PropTypes.object.isRequired
	}

	/**
	 * Default properties
	 */
	static defaultProps = {
		data: '',
		defaultValue: '',
		name: 'richtext',
		onChange: (e) => {}
	}

	/**
	 * Component state
	 */
	state = {
		editorState: this.setDefaultHtml(),
		content: this.props.defaultValue ? this.props.defaultValue : '',
		openManager: false,
		url: ''
	}

	/**
	 * Set default html
	 */
	setDefaultHtml() {
		const { defaultValue } = this.props;
		let editorState,
			content = '';

		if (typeof defaultValue === 'string' && defaultValue.length > 0) {
			let blocksFromHTML = htmlToDraft(defaultValue);

			if (blocksFromHTML.contentBlocks !== '' && blocksFromHTML.contentBlocks !== null) {
				content = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks);
				editorState = EditorState.createWithContent(content);
			}
		}

		else {
			editorState = EditorState.createEmpty();
		}

		return editorState;
	}

	/**
	 * Edit editor textarea
	 */
	onEditorChange =  (editorState) => {
		const { onChange } = this.props;
		let content = draftToHtml(convertToRaw(editorState.getCurrentContent()));

		this.setState({ editorState });
		onChange(content);
	}



	/**
	 * Render component
	 */
	render() {
		const { classes, label, name } = this.props;
		let { editorState, content, openManager } = this.state;

		return <div className={classes.field}>
			{label && <Typography variant="caption" className={classes.label}>{label}</Typography>}

			<Editor 
				editorState={editorState}
				editorClassName={classes.content}
				toolbarClassName={classes.toolbar}
				onEditorStateChange={this.onEditorChange}
				toolbar={{
					image: { 
						urlEnabled: true,
						uploadEnabled: true,
						uploadCallback: (file) => {
							this.setState({ openManager: !openManager });
						},
						component: Image,
						alt: { present: true, mandatory: true }
					}
				}}  />

			{openManager && <Dialog fullScreen open={openManager}>
				<DialogTitle>Select file</DialogTitle>

				<DialogContent>
					<FilesContainer single={false} RootProps={{ style: { marginTop: 0 } }}
						onFileSelected={(url) => this.setState({ openManager: false }, () => 
							window.Base.dispatchEvent('AddDraftImage', { 'detail': url }, true))} />
					</DialogContent>

					<DialogActions>
						<Button onClick={(e) => this.setState({ openManager: false })} color="secondary">Close</Button>
					</DialogActions>
				</Dialog>}

			<input name={name} type="hidden" style={{ display: 'none' }} value={content} />
		</div>
	}
}

export default withStyles(styles)(FieldDraftEditor);