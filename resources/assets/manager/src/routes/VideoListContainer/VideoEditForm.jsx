import React from 'react';
import withStyles from 'react-jss';

import Typography from "../../components/Typography/Typography";
import Input from "../../components/Input/Input";

const styles = () => ({});

class VideoEditForm extends React.PureComponent {

    render() {

        return <form id="video-add-form">

            <Typography
                variant="label"
                text="Название видео"/>
            <Input
                type="text"
                name="title"/>

            <Typography
                variant="label"
                text="Ссылка"/>

            <Input
                type="text"
                name="link"/>

            <input
                type="checkbox"
                name="on_index"/>

            <Typography
                variant="label"
                text="На главной"/>

        </form>
    }
}

export default withStyles(styles)(VideoEditForm);