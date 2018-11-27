import React from 'react';
import withStyles from 'react-jss'

import Header from 'components/Header';
import Button from 'components/Button';
import Typography from 'components/Typography';
import Input from 'components/Input';
import FieldDraftEditor from 'components/FieldDraftEditor';
import Alert from 'components/Alert';


import {
    fetchData,
    fetchCategories,
    fetchSections,
    editItem
} from './logic/index';
import Select from "../../components/Select/Select";
import Panel from "../../components/Panel/Panel";


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
    }
});

class NewsEditContainer extends React.Component {

    state = {
        data: {},
        categories: [],
        sections: [],
        catchedErrorMessage: '',
        displayAlert: false,
    };

    componentDidMount() {
        fetchData(this.props.id, this);
        fetchCategories(this);
        fetchSections(this);
    }

    saveChanges = () => {
        const fields = ['title', 'subtitle', 'category_id', 'published', 'introtext', 'description', 'preview_pattern', 'section_id', 'type'];

        const data = {};
        fields.forEach((i) => data[i] = this.state.data[i]);

        editItem(this, this.state.data.id, data);
    };


    render = () => {
        const {catchedErrorMessage, data, categories, sections, displayAlert} = this.state;
        const {classes} = this.props;

        const categOptions = [['', null]].concat(categories.map((i) => [i.title, i.id]));
        const sectionOptions = [['', null]].concat(sections.map((i) => [i.title, i.id]));

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


        const previewOptions = data.category_id && newsPreviewPatternsOptions[data.category_id][data.type];
        console.log(previewOptions);


        return <React.Fragment>


            <Typography
                text="Редактирование новости"
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
                            text="Введение"/>

                        {data.introtext &&
                        <div className={classes.textEditor}>
                            <FieldDraftEditor
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

                        {data.description &&
                        <div className={classes.textEditor}>
                            <FieldDraftEditor
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
                            data.category_id = e.target.value;
                            this.setState({data})
                        }
                        }
                    />}

                    <Typography
                        variant="label"
                        text="Секция"/>
                    {typeof data.section_id !== 'undefined' && <Select
                        defaultValue={data.section_id}
                        name="section_id"
                        options={sectionOptions}
                        onChange={(e) => {
                            data.section_id = e.target.value;
                            this.setState({data})
                        }
                        }
                    />}
                    <Typography
                        variant="label"
                        text="Тип новости"/>
                    {typeof data.type !== 'undefined' && <Select
                        defaultValue={data.type}
                        name="type"
                        options={newsTypeOptions}
                        onChange={(e) => {
                            data.type = e.target.value;
                            this.setState({data})
                        }
                        }
                    />}

                    {previewOptions &&
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
                    </React.Fragment>}

                </Panel>

            </div>


            {displayAlert ?
                <Alert text={displayAlert}/> : ''}
        </React.Fragment>
    }
}

export default withStyles(styles)(NewsEditContainer);