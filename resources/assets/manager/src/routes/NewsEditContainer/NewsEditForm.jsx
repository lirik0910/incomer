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
} from './logic/index';
import Select from "../../components/Select/Select";


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
    }
});

class NewsEditContainer extends React.PureComponent {

    state = {
        data: {},
        categories: [],
        catchedErrorMessage: '',
    };

    componentDidMount() {
        fetchData(this.props.id, this);
    }


    render = () => {
        const {catchedErrorMessage, text, data} = this.state;
        const {classes} = this.props;

        console.log(data);

        return <React.Fragment>

            <Typography
                variant="label"
                text="Заголовок"/>
            <Input
                type="text"
                name="title"
                value={data.title}
            />

            <Typography
                variant="label"
                text="Описание"/>

            {data.introtext &&
            <div className={classes.textEditor}>
                <FieldDraftEditor
                    defaultValue={data.introtext}
                    onChange={(e) => {
                        let {data} = this.state;
                        data.v = e;
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
                        let {data} = this.state;
                        data.description = e;
                        this.setState({data})
                    }}
                />
            </div>}


        </React.Fragment>
    }
}

export default withStyles(styles)(NewsEditContainer);
