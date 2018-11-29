import React from 'react';
import withStyles from 'react-jss';

import {connect} from 'react-redux';
import {filesListPageErrorMessage} from 'actions/filesListActions.js';
import {deleteItem, fetchImages,} from './logic';


import FilesListManager from 'components/FilesListManager';
import FileListItem from 'components/FileListItem';
import FileEditManager from "../../components/FileEditManager/FileEditManager";
import {bindActionCreators} from "redux";
import Alert from "../../components/Alert/Alert";
import Button from "../../components/Button/Button";

const styles = ({Global, Palette}) => ({});

class FilesManager extends React.Component {

    state = {
        displayAsideMenu: false,
        images: [],
        editId: false,
    };

    componentDidMount() {
        fetchImages(this);
    }

    render = () => {
        const {images, editId} = this.state;
        const {
            classes,
            catchedErrorMessage,
            isSelectable = false,
            onSelect = () => {},
            onClose = () => {},
        } = this.props;

        return <React.Fragment>


            <FilesListManager
                onCreate={() => {
                    console.log('create');
                    this.setState({editId: false})
                }}
                onSearch={(i) => {
                    fetchImages(this, {search: i})
                }}
            >
                {images.map((item, i) => (
                    <FileListItem
                        key={i}
                        {...item}
                        onEdit={(id) => this.setState({editId: id})}
                        onDelete={(id) => deleteItem(this, id).then(() => fetchImages(this))}
                    />
                ))}
            </FilesListManager
            >

            <FileEditManager
                isSelectable={isSelectable}
                editId={editId}
                onEdit={() => fetchImages(this)}
                onCreate={() => fetchImages(this)}
                onSelect={(img) =>{
                    onSelect(img)}}
            />
            {!!catchedErrorMessage && <Alert text={catchedErrorMessage}/>}

        </React.Fragment>
    }
}

const mapStateToProps = (state) => ({
    catchedErrorMessage: state.filesList.catchedErrorMessage,
    dataLoadingFlag: state.filesList.dataLoadingFlag,
    foldersList: state.filesList.foldersList,
    filesList: state.filesList.filesList
});

const mapDispatchToProps = (dispatch) => ({
    filesListPageErrorMessage: bindActionCreators(filesListPageErrorMessage, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(FilesManager));