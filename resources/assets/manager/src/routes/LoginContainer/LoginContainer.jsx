import React from 'react';
import withStyles from 'react-jss'

import Header from 'components/Header';
import Button from 'components/Button';
import Aside from 'components/Aside';
import Typography from 'components/Typography';
import Link from 'components/Link';
import Search from 'components/Search';
import Input from 'components/Input';
import Dialog from 'components/Dialog';
import Alert from 'components/Alert';


import {
    signIn,
} from './logic/index';

import moment from 'moment';
import {getItemFromQueryProps} from 'url.js';
import Panel from "../../components/Panel/Panel";

const styles = ({Global, Palette}) => ({
    '@global': {
        // ...Global,
        '#root': {
            // ...Global['#root'],
            display: 'grid',

        }
    },
    // primaryButtons: {
    //     right: 12,
    //     lineHeight: '30px',
    //     position: 'absolute',
    //     '& a': {
    //         marginLeft: 12
    //     }
    // },
    // asdieAppHeader: {
    //     display: 'flex',
    //     marginBottom: 12
    // },
    // control: {
    //     lineHeight: '48px',
    //     gridArea: 'control-elements',
    //     '& button, & a': {
    //         margin: '0 18px 0 0'
    //     },
    //     '& .fa': {
    //         margin: '0 6px 0 0'
    //     }
    // },
    container: {
        width: 'auto',
        // height: 'auto !important',
        margin: 'auto'
    },
    title: {
        gridArea: 'page-title'
    }
});

/**
 * Users list page
 * Страница пользователей
 * @extends React.PureComponent
 */
class LoginContainer extends React.PureComponent {

    state = {
        email: 'admin@admin.com',
        password: 'secret',
        catchedErrorMessage: '',
    };


    render = () => {
        const {catchedErrorMessage, email, password} = this.state;
        const {classes} = this.props;

        return <React.Fragment>

            <Panel className={classes.container}>

                <Typography
                    text="Вход"
                    variant="title"
                />
                <Input
                    value={email}
                    placeholder={'Email'}
                    onChange={(e) => {this.setState({email:  e.target.value})}}
                />
                <Input
                    type='password'
                    value={password}
                    placeholder={'Пароль'}
                    onChange={(e) => {this.setState({password:  e.target.value})}}
                />
                <Button
                    variant="tab"
                    text="Войти"
                    onClick={() => signIn({email, password}, this)}
                />

            </Panel>




            {catchedErrorMessage && <Alert
                text={catchedErrorMessage}/>}
        </React.Fragment>
    }
}

export default withStyles(styles)(LoginContainer);
