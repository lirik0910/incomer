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
    fetchCategories,
    fetchSections,
    fetchTags,
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
        zIndex: 100,
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
        data: {},
        categories: [],
        sections: [],
        tags: [],
        withPatterns: [],
        catchedErrorMessage: '',
        displayAlert: false,
    };

    componentDidMount() {
        fetchCategories(this)
            .then(() => fetchSections(this))
            .then(() => fetchTags(this))
            .then(() => fetchNewsWithPatterns(this))
            .then(() => {
                if (!this.props.id) {
                    this.setState({
                        data: {
                            category_id: 1,
                            section_id: null,
                            title: '',
                            subtitle: '',
                            description: '',
                            introtext: '',
                            tags: [],
                            type: 'normal',
                            preview_pattern: null,
                            published: false,
                        }
                    });
                } else {
                    return fetchData(this.props.id, this);
                }
            });
    }

    saveChanges = () => {
        const fields = ['title', 'subtitle', 'category_id', 'published', 'introtext', 'description', 'preview_pattern', 'section_id', 'type', 'tags', 'top_preview_img', 'preview_img'];

        const data = {};
        fields.forEach((i) => data[i] = this.state.data[i]);

        if (this.state.data.id) {
            editItem(this, this.state.data.id, data);
        } else {
            createItem(this, data);
        }
    };

    selectImage = () => {
        const {changeDisplayFilesManagerAction} = this.props;

        changeDisplayFilesManagerAction(true);
        const self = this;
        return new Promise(function (resolve, reject) {
            self.resolveFunction = resolve;
            self.rejectFunction = reject;
        });
    };


    setSelectedImage = (image) => {
        const {changeDisplayFilesManagerAction} = this.props;
        changeDisplayFilesManagerAction(false);

        if(this.resolveFunction) this.resolveFunction({data: {link: image.url}});
    };


    render = () => {
        const {
            data,
            categories,
            sections,
            displayAlert,
            foldersList = [],
            filesList = [],
            tags = [],
            withPatterns = [],
        } = this.state;
        const {
            classes,
            displayFilesManagerFlag,
            catchedErrorMessage,
            changeDisplayFilesManagerAction
        } = this.props;

        const categOptions = [
            ['', null],
            ...categories.map((i) => [i.title, i.id])
        ];
        const sectionOptions = [
            ['', null],
            ...sections.filter(((i) => parseInt(i.category_id) === parseInt(data.category_id))).map((i) => [i.title, i.id])
        ];
        const tagsOptions = tags.map((i) => {
            return {label: i.value, ...i}
        });

        // !!!!!!   ОСТОРОЖНО - ЖУТКИЕ КОСТЫЛИ*   !!!!!!!
        // * некрасивые решения


        const newsTypeOptions = [
            ['Обычная', 'normal'],
            ['Важная', 'hot'],
            ['Главная', 'top'],
            ['Главная в разделе', 'category_top'],
        ];

        const topNewsPatterns = [
            ['Первая, большая, картинка слева', 'first.big_img_left'],
            ['Вторая, маленькая, картинка сверху', 'second.small_img_top'],
            ['Вторая, маленькая, картинка справа', 'second.small_img_right'],
            ['Третья, маленькая, картинка сверху', 'third.small_img_top'],
            ['Третья, маленькая, картинка справа', 'third.small_img_right'],
        ];

        const newsPreviewPatternsOptions = {
            1: {
                normal: [],
                hot: [],
                top: topNewsPatterns,
                category_top: []
            },
            2: {
                normal: [],
                hot: [],
                top: topNewsPatterns,
                category_top: [
                    ['Первая, большая, картинка слева', 'first.big_img_left'],
                    ['Вторая, большая, картинка слева', 'second.big_img_left']],
            },
            3: {
                normal: [],
                hot: [],
                top: topNewsPatterns,
                category_top: [
                    ['Первая, большая, картинка слева', 'first.big_img_left'],
                ],
            }
        };


        const previewOptions = [
            ['', null],
            ...data.category_id ? newsPreviewPatternsOptions[data.category_id][data.type] : []
        ];

        let currentPatternNews = '';
        withPatterns.forEach((cur) => {
            if (data.type != cur.type ||
                typeof data.preview_pattern !== 'string' ||
                typeof cur.preview_pattern !== 'string') return;

            const
                itemPreview = data.preview_pattern.split('.')[0],
                curPreview = cur.preview_pattern.split('.')[0];

            if (data.type === 'category_top') {
                if (itemPreview === curPreview &&
                    cur.category_id == data.category_id
                ) {
                    currentPatternNews = cur;
                }
            } else {
                if (itemPreview === curPreview)
                    currentPatternNews = cur;
            }
        });


        return <React.Fragment>


            <Typography
                text={this.props.id ?"Редактирование новости": "Создание новости"}
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

                {data.id && <Button
                    variant="link"
                    color="secondary"
                    text={
                        <a href={"/news/" + data.id + "?preview=1"} target="_blank">
                            <i className="fa fa-eye"></i>
                            Превью
                        </a>
                    }/>}

            </div>

            <div className={classes.formContainer}>

                <Panel>
                    <div>
                        <Typography
                            variant="label"
                            text="Заголовок"/>
                        {typeof data.title !== 'undefined' && <Input
                            type="text"
                            name="title"
                            defaultValue={data.title}
                            onChange={(e) => {
                                data.title = e.target.value;
                                this.setState({data})
                            }}
                        />}

                        <Typography
                            variant="label"
                            text="Подзаголовок"/>
                        {typeof data.subtitle !== 'undefined' && <Input
                            type="text"
                            name="subtitle"
                            defaultValue={data.subtitle}
                            onChange={(e) => {
                                data.subtitle = e.target.value;
                                this.setState({data})
                            }}
                        />}

                        <Typography
                            variant="label"
                            text="Тэги"/>
                        {data.tags && <MultiSelect
                            defaultValue={data.tags.map((i) => {
                                return {label: i.value, ...i}
                            })}
                            isMulti={true}
                            isSearchable={true}
                            className={classes.multiselect}
                            options={tagsOptions}
                            onChange={(tags) => {
                                data.tags = tags;
                                this.setState({data})
                            }}
                        />}

                        <Typography
                            variant="label"
                            text="Введение"/>

                        {typeof data.introtext !== 'undefined' &&
                        <div className={classes.textEditor}>
                            <FieldDraftEditor
                                selectImageCallback={this.selectImage}
                                defaultValue={data.introtext}
                                onChange={(e) => {
                                    data.introtext = e;
                                    this.setState({data})
                                }}
                            />
                        </div>}


                        <Typography
                            variant="label"
                            text="Контент"/>

                        {typeof data.description !== 'undefined' &&
                        <div className={classes.textEditor}>
                            <FieldDraftEditor
                                selectImageCallback={this.selectImage}
                                defaultValue={data.description}
                                onChange={(e) => {
                                    data.description = e;
                                    this.setState({data})
                                }}
                            />
                        </div>}


                    </div>

                </Panel>

            </div>
            <div className={classes.formContainer}>
                <Panel>
                    {typeof data.published !== 'undefined' && <div>
                        <input type="checkbox"
                               defaultChecked={data.published}
                               onChange={(e) => {
                                   data.published = !data.published;
                                   this.setState({data})
                               }}
                        />
                        <Typography
                            variant="label"
                            text="Опубликовано"/>

                    </div>}

                    <Typography
                        variant="label"
                        text="Категория"/>
                    {typeof data.category_id !== 'undefined' && <Select
                        defaultValue={data.category_id}
                        name="category_id"
                        options={categOptions}
                        onChange={(e) => {
                            data.category_id = e.target.value || null;
                            this.setState({data})
                        }
                        }
                    />}
                    {typeof data.section_id !== 'undefined' &&
                    <>
                        <Typography
                            variant="label"
                            text="Секция"/>
                        <Select
                            defaultValue={data.section_id}
                            name="section_id"
                            options={sectionOptions}
                            onChange={(e) => {
                                data.section_id = e.target.value;
                                this.setState({data})
                            }
                            }
                        />
                    </>}
                    {typeof data.type !== 'undefined' &&
                    <><Typography
                        variant="label"
                        text="Тип новости"/>
                        <Select
                            defaultValue={data.type}
                            name="type"
                            options={newsTypeOptions}
                            onChange={(e) => {
                                data.type = e.target.value;
                                this.setState({data})
                            }
                            }
                        />
                    </>}

                    {previewOptions && typeof data.preview_pattern !== 'undefined' &&
                    <React.Fragment>
                        <Typography
                            variant="label"
                            text="Паттерн"/>
                        <Select
                            defaultValue={data.preview_pattern}
                            name="preview_pattern"
                            options={previewOptions}
                            onChange={(e) => {
                                data.preview_pattern = e.target.value;
                                this.setState({data})
                            }}
                        />
                        {currentPatternNews &&
                        <Typography
                            variant="label"
                            text={'Текущая новость на этой позиции: ' + currentPatternNews.title}/>}
                    </React.Fragment>
                    }
                    <br/>

                    {(data.type === 'top' || data.type === 'category_top' ) && <React.Fragment>
                        <Typography
                            variant="label"
                            text='ТОП Превью картинка'/>
                        <ImageSelect
                            link={data.top_preview_img && data.top_preview_img.url}
                            onSelect={(img) => {
                                console.log('top_preview');
                                data.top_preview_img = {
                                    id: img.id,
                                    url: img.url,
                                    type: 'top_preview',
                                };
                                this.setState({data})
                            }}
                        />
                    </React.Fragment>}

                    <br/>
                    <React.Fragment>
                        <Typography
                            variant="label"
                            text='Превью картинка'/>
                        <ImageSelect
                            link={data.preview_img && data.preview_img.url}
                            onSelect={(img) => {
                                console.log('preview');
                                data.preview_img = {
                                    id: img.id,
                                    url: img.url,
                                    type: 'preview',
                                };
                                this.setState({data})
                            }}
                        />
                    </React.Fragment>

                </Panel>

            </div>


            {!!catchedErrorMessage ?
                <Alert text={catchedErrorMessage}/> : ''}
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
                            if(this.rejectFunction) this.rejectFunction();
                        }}
                        text={
                            <>
                                <i className="fa fa-close"></i>
                                Отмена
                            </>
                        }/>

                    <FilesManager
                        isSelectable={true}
                        onSelect={this.setSelectedImage}
                    />
                </Panel> : ''}
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

