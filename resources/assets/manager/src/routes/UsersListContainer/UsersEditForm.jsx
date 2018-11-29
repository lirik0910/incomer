import React from 'react';
import withStyles from 'react-jss';

import Typography from "../../components/Typography/Typography";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";

const styles = () => ({});

class UsersListTable extends React.PureComponent {

    render() {

        return <form id="users-add-form">

            <Typography
                variant="label"
                text="Логин"/>
            <Input
                type="text"
                name="username"
                placeholder="Логин"
            />

            <Typography
                variant="label"
                text="Email"/>
            <Input
                type="text"
                name="email"
                required={true}
                placeholder="Email"
            />

            <Typography
                variant="label"
                text="Пароль"/>
            <Input
                type="text"
                name="password"
                required={true}
                placeholder="Пароль"
            />

            <Typography
                variant="label"
                text="Тип"/>
            <Select
                name="type"
                options={[
                    ['Пользователь', 'user'],
                    ['Редактор', 'manager'],
                    // ['Администратор', 'admin'],
                ]}
            />
        </form>
    }
}

export default withStyles(styles)(UsersListTable);