import React from 'react';
import withStyles from 'react-jss';
import Overlay from 'components/Overlay';
import Button from "../Button/Button";
import Link from "../Link/Link";


class Aside extends React.Component {

    state = {
        displayAsideMenu: false,
    };

    render() {
        const {
            side = 'left',
            variant = 'default',
            className = '',
            classes,
            visible,
            onClose = () => {},
        } = this.props;

        const {displayAsideMenu} = this.state;

        return visible ? <React.Fragment>
            <Overlay variant={variant}/>
            <div className={classes[variant] + ' ' + classes[side] + ' ' + className}>
                <div className={classes.asdieAppHeader}>
                    <Button
                        variant="contrast"
                        text={
                            <i className="fa fa-bars"></i>
                        }
                        onClick={onClose}/>
                    {/*<Typography variant="anti"/>*/}
                </div>

                {/*<Link to="/dashboard" variant="anti">dashboard</Link>*/}
                <Link to="/users" variant="anti">Пользователи</Link>
                <Link to="/news" variant="anti">Новости</Link>
                <Link to="/tags" variant="anti">Тэги</Link>
                {/*<Link to="/pages" variant="anti">pages</Link>*/}
                <Link to="/media" variant="anti">Медиа</Link>
                <Link to="/persons" variant="anti">Компании</Link>
                <Link to="/rss" variant="anti">RSS</Link>
            </div>
        </React.Fragment> : '';

    }

}

const styles = ({Aside}) => ({
    ...Aside,
    left: {left: 0},
    right: {right: 0}
});

export default withStyles(styles)(Aside);
