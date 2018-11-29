import React from 'react';
import withStyles from 'react-jss'

import {connect} from 'react-redux';

import Button from 'components/Button';
import Typography from 'components/Typography';
import Input from 'components/Input';
import FieldDraftEditor from 'components/FieldDraftEditor';
import Alert from 'components/Alert';

import {newsListPageErrorMessage,} from 'actions/newsListPageActions';
import {changeDisplayFilesManagerAction} from 'actions/filesListActions.js';

import {
    createItem,
    editItem,
    fetchPersonTypes,
    fetchTags,
    fetchPerson,
    fetchData,
    fetchNewsWithPatterns
} from './logic/index';
import Select from "../../components/Select/Select";
import Panel from "../../components/Panel/Panel";

import MultiSelect from 'react-select';
import {bindActionCreators} from "redux";
import FilesManager from "../ManageMediaItemsContainer/FilesManager";
import {withRouter} from "react-router-dom";
import ImageSelect from "../../components/ImageSelect/ImageSelect";


const styles = ({Global, Palette}) => ({
    textEditor: {
        // maxWidth: '1330px',
        width: '100%',

        padding: 2,
        backgroundColor: '#fff',
        '& .rdw-editor-main': {
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#eee',
            padding: 20,
        }
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
    formContainer: {
        margin: 20,
    },
    multiselect: {
        borderRadius: 0,
        '&>div': {
            backgroundColor: Palette['color6'],
            borderRadius: 0,
        }
    },
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

class NewsEditContainer extends React.Component {

    state = {
        data: {
            name: '',
        },
        fields: [],
        categories: [],
        sections: [],
        type: {
            fields: [],
        },
        withPatterns: [],
        catchedErrorMessage: '',
        displayAlert: false,
    };

    componentDidMount() {
        fetchPersonTypes(this, this.props.type_id)
            .then(() => this.props.id ? fetchPerson(this, this.props.id) : null)
    }

    saveChanges = () => {
        const {data, fields} = this.state;
        const {type_id} = this.props;

        if (this.state.data.id) {
            editItem(this, this.state.data.id, {name: data.name, fields});
        } else {
            createItem(this, {name: data.name, fields, type_id});
        }
    };


    render = () => {
        const {
            data,
            type,
            fields,
        } = this.state;
        const {
            classes,
            displayFilesManagerFlag,
            catchedErrorMessage,
            changeDisplayFilesManagerAction
        } = this.props;


        return <React.Fragment>


            <Typography
                text="Редактирование"
                variant="title"/>

            <div className={classes.control}>
                <Button
                    variant="link"
                    color="secondary"
                    text={
                        <React.Fragment>
                            <i className="fa fa-floppy-o"></i>
                            Сохранить изменения
                        </React.Fragment>
                    }
                    onClick={this.saveChanges}/>

            </div>

            <div className={classes.formContainer}>

                <Panel>
                    {typeof data.name !== 'undefined' &&
                    <React.Fragment>

                        <Typography
                            variant="label"
                            text="Название"/>
                        <Input
                            type="text"
                            name="title"
                            defaultValue={data.name}
                            onChange={(e) => {
                                data.name = e.target.value;
                                this.setState({data})
                            }}
                        />
                    </React.Fragment>
                    }
                    {fields.map((field, index) => {
                        if (field.content_type === 'text')
                            return <React.Fragment key={index}>
                                <Typography
                                    variant="label"
                                    text={field.title}/>
                                <Input
                                    type="text"
                                    name="title"
                                    defaultValue={field.value}
                                    onChange={(e) => {
                                        fields[index].value = e.target.value;
                                        this.setState({fields})
                                    }}
                                />
                            </React.Fragment>
                        if (field.content_type === 'image')
                            console.log(field);
                        return <React.Fragment key={index}>
                            <Typography
                                variant="label"
                                text={field.title}/>
                            <ImageSelect
                                link={field.value}
                                onSelect={(img) => {
                                    fields[index].value = img.url;
                                    this.setState({fields})
                                }}
                            />
                        </React.Fragment>;


                    })}
                </Panel>

            </div>
            <div className={classes.formContainer}>
                <Panel>


                </Panel>

            </div>


            {!!catchedErrorMessage ?
                <Alert text={catchedErrorMessage}/> : ''}
        </React.Fragment>
    }
}

const mapStateToProps = (state) => ({
    catchedErrorMessage: state.newsListPage.catchedErrorMessage,
    // foldersList: foldersListSelector(state),
    // filesList: filesListSelector(state),
    displayFilesManagerFlag: state.filesList.displayFilesManagerFlag,
});

const mapDispatchToProps = (dispatch) => ({
    newsListPageErrorMessage: bindActionCreators(newsListPageErrorMessage, dispatch),
    changeDisplayFilesManagerAction: bindActionCreators(changeDisplayFilesManagerAction, dispatch)

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NewsEditContainer)));

