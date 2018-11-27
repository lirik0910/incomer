import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {filesListSelector, foldersListSelector} from 'routes/ManageMediaItemsContainer/selectors.js';
import {changeDisplayFilesManagerAction} from 'actions/filesListActions.js';


import draftToHtml from 'draftjs-to-html';
import {Editor} from 'react-draft-wysiwyg';
import {ContentState, convertToRaw, EditorState} from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import Image from './Image';

import styles from './styles.js';


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
        onChange: (e) => {
        }
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
        const {defaultValue} = this.props;
        let editorState,
            content = '';

        if (typeof defaultValue === 'string' && defaultValue.length > 0) {
            let blocksFromHTML = htmlToDraft(defaultValue);

            if (blocksFromHTML.contentBlocks !== '' && blocksFromHTML.contentBlocks !== null) {
                content = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks);
                editorState = EditorState.createWithContent(content);
            }
        } else {
            editorState = EditorState.createEmpty();
        }

        return editorState;
    }

    /**
     * Edit editor textarea
     */
    onEditorChange = (editorState) => {
        const {onChange} = this.props;
        let content = draftToHtml(convertToRaw(editorState.getCurrentContent()));

        this.setState({editorState});
        onChange(content);
    }


    /**
     * Render component
     */
    render() {
        const {
            classes, label, name, foldersList, filesList, changeDisplayFilesManagerAction, selectImageCallback = () => {
            }
        } = this.props;
        let {editorState, content, openManager} = this.state;

        return <div className={classes.field}>

            <Editor
                editorState={editorState}
                editorClassName={classes.content}
                toolbarClassName={classes.toolbar}
                onEditorStateChange={this.onEditorChange}
                toolbar={{
                    image: {
                        previewImage: true,
                        urlEnabled: true,
                        uploadEnabled: true,
                        uploadCallback: selectImageCallback,
                        component: Image,
                        alt: {present: true, mandatory: false},
                    }
                }}/>
        </div>
    }
}

const mapStateToProps = (state) => ({
    foldersList: foldersListSelector(state),
    filesList: filesListSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    changeDisplayFilesManagerAction: bindActionCreators(changeDisplayFilesManagerAction, dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(FieldDraftEditor));