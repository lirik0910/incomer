import React from 'react';
import withStyles from 'react-jss'

import {connect} from 'react-redux';

import Button from 'components/Button';
import Typography from 'components/Typography';

import {newsListPageErrorMessage,} from 'actions/newsListPageActions';
import {changeDisplayFilesManagerAction} from 'actions/filesListActions.js';

import {
    createItem,
    editItem,
    fetchCategories,
    fetchSections,
    fetchTags,
    fetchData,
    fetchNewsWithPatterns
} from 'routes/ManageMediaItemsContainer/logic/index';
import Panel from "../../components/Panel/Panel";

import {bindActionCreators} from "redux";
import FilesManager from "routes/ManageMediaItemsContainer/FilesManager";
import Input from "../Input/Input";
import ImageUpload from "../ImageUpload/ImageUpload";


const styles = ({Global, Palette}) => ({

    filesContainer: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        display: 'grid',
        gridTemplateAreas: `
				'header header'
				'page-title control-elements'
				'files-list-manager folders-list-manager'
			`,
        gridTemplateRows: '0px 40px auto',
        gridTemplateColumns: '50% 50%',
        backgroundColor: Palette['color8']
    }
});

class ImageSelect extends React.Component {


    state = {
        url: '',
    };

    componentDidMount() {

    }

    // selectImage = () => {
    //     const {changeDisplayFilesManagerAction} = this.props;
    //
    //     changeDisplayFilesManagerAction(true);
    //     const self = this;
    //     return new Promise(function (resolve, reject) {
    //         self.resolveFunction = resolve;
    //         self.rejectFunction = reject;
    //     });
    // };

    //
    // setSelectedImage = (image) => {
    //     const {changeDisplayFilesManagerAction} = this.props;
    //     changeDisplayFilesManagerAction(false);
    //
    //     this.resolveFunction({data: {link: image.url}});
    // };


    render = () => {
        const {url } = this.state;
        const {
            classes,
            displayFilesManagerFlag,
            changeDisplayFilesManagerAction,
            onSelect = () => {},
            link,
        } = this.props;


        return <React.Fragment>
            <div>
                <Button
                    variant="link"
                    color="secondary"
                    onClick={() => {
                        changeDisplayFilesManagerAction(true);
                    }}
                    text={
                        <>Выбрать изображение</>
                    }/>

                <div>
                    {url ? <img width='100' src={url} alt=""/> :
                        <img width='100' src={link} alt=""/>}
                </div>
            </div>
            {displayFilesManagerFlag ?
                <Panel className={classes.filesContainer}>

                    <Typography
                        text="Выберите изображение"
                        variant="title"/>
                    <Button
                        style={{float: 'right'}}
                        variant="link"
                        color="secondary"
                        onClick={() => {
                            changeDisplayFilesManagerAction(false);
                        }}
                        text={
                            <>
                                <i className="fa fa-close"></i>
                                Отмена
                            </>
                        }/>

                    <FilesManager
                        isSelectable={true}
                        onSelect={(image) => {
                            this.setState({url: image.url});
                            changeDisplayFilesManagerAction(false);
                            onSelect(image);
                        }}
                    />

                </Panel> : ''}
        </React.Fragment>
    }
}

const mapStateToProps = (state) => ({
    displayFilesManagerFlag: state.filesList.displayFilesManagerFlag,
});

const mapDispatchToProps = (dispatch) => ({
    changeDisplayFilesManagerAction: bindActionCreators(changeDisplayFilesManagerAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ImageSelect));

