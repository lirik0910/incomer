import React from 'react';
import withStyles from 'react-jss';

import Typography from "../../components/Typography/Typography";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";

const styles = () => ({});

class RSSEditForm extends React.PureComponent {

    render() {
        let { persons } = this.props;

        persons = persons  && persons.map((i) => [i.name, i.id]);
        console.log(persons);

        return <form id="tags-add-form">

            <Typography
                variant="label"
                text="Персона"/>

            <Select
                name="person_id"
                options={persons}
            />

            <Typography
                variant="label"
                text="Название тэга"/>
            <Input
                type="text"
                name="value"
            />

        </form>
    }
}

export default withStyles(styles)(RSSEditForm);