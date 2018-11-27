import React from 'react';
import withStyles from 'react-jss';

import Panel from 'components/Panel';
import Button from 'components/Button';
import Typography from 'components/Typography';
import {createItem, editItem, fetchImage,} from 'routes/ManageMediaItemsContainer/logic';
import {filesListPageErrorMessage} from 'actions/filesListActions.js';
import Input from "../Input/Input";
import ImageUpload from "../ImageUpload/ImageUpload";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";

const styles = ({Palette: {color7}}) => ({
    root: {
        gridArea: 'folders-list-manager',
        width: 'calc(100% - 48px)',
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        margin: 12,
        '& > button': {
            marginRight: 12
        }
    },
    container:{
        width: '100%',
    },
    button: {
        fontSize: 24
    },
    search: {
        width: '100%',
        marginTop: 12,
        marginBottom: 12
    },
    list: {
        width: '100%',
        height: 'calc(100% - 24px)',
        overflowY: 'auto'
    },
    control: {
        width: '100%',
        borderBottom: '1px dashed ' + color7,
        '& > input[type="checkbox"]': {
            marginRight: 12
        }
    }
});

class FileEditManager extends React.Component {


    state = {
        currentItem: false,
        newItem: {
            title:'',
            description: '',
            path: '',
        },
    };

    componentDidUpdate(prevProps) {
        if (prevProps.editId !== this.props.editId)
            fetchImage(this, this.props.editId);
    }

    render = () => {
        const {classes, onEdit = () => {}, onCreate = () => {}, isSelectable, onSelect = () => {}} = this.props;
        let {currentItem, newItem} = this.state;


        return <Panel className={classes.root}>

            <div className={classes.container}>
                {currentItem && <React.Fragment>


                    <ImageUpload
                        currentItem={currentItem}
                        onChange={(image)=>{
                            // console.log(image);
                            currentItem.image = image;
                            this.setState({currentItem})
                        }}
                    />

                    <Typography
                        variant="label"
                        text="Путь"/>
                    <Input
                        type="text"
                        name="path"
                        readOnly={true}
                        value={currentItem.path}
                        onChange={(e) => {
                            currentItem.path= e.target.value;
                            this.setState({currentItem})
                        }}
                    />

                    <Typography
                        variant="label"
                        text="Название"/>
                    <Input
                        type="text"
                        name="title"
                        value={currentItem.title}
                        onChange={(e) => {
                            currentItem.title = e.target.value;
                            this.setState({currentItem})
                        }}
                    />

                    <Typography
                        variant="label"
                        text="Описание"/>
                    <Input
                        type="text"
                        name="description"
                        value={currentItem.description}
                        onChange={(e) => {
                            currentItem.description = e.target.value;
                            this.setState({currentItem})
                        }}
                    />


                    <Button variant="tab"
                            text={(<>Save</>)}
                            onClick={() => {
                                editItem(this, currentItem, currentItem.id).then(()=>{
                                    onEdit();
                                });
                            }}/>

                    {isSelectable && <Button variant="tab"
                            text={'Select'}
                            onClick={() => {
                                    onSelect(currentItem);
                            }}/>}

                </React.Fragment>}

                {!currentItem && <React.Fragment>

                    <ImageUpload
                        currentItem={newItem}
                        onChange={(image)=>{
                            newItem.image = image;
                            this.setState({newItem})
                        }}
                    />

                    <Typography
                        variant="label"
                        text="Путь"/>
                    <Input
                        type="text"
                        name="path"
                        value={newItem.path}
                        onChange={(e) => {
                            newItem.path= e.target.value;
                            this.setState({newItem})
                        }}
                    />

                    <Typography
                        variant="label"
                        text="Название"/>
                    <Input
                        type="text"
                        name="title"
                        value={newItem.title}
                        onChange={(e) => {
                            newItem.title = e.target.value;
                            this.setState({newItem})
                        }}
                    />

                    <Typography
                        variant="label"
                        text="Описание"/>
                    <Input
                        type="text"
                        name="description"
                        value={newItem.description}
                        onChange={(e) => {
                            newItem.description = e.target.value;
                            this.setState({newItem})
                        }}
                    />


                    <Button variant="tab"
                            text={'Create'}
                            onClick={() => {
                                createItem(this, newItem).then(()=>{
                                    onCreate();
                                });
                            }}/>
                </React.Fragment>}

            </div>
        </Panel>
    }
}

const mapStateToProps = (state) => ({
    catchedErrorMessage: state.filesList.catchedErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
    filesListPageErrorMessage: bindActionCreators(filesListPageErrorMessage, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(FileEditManager));