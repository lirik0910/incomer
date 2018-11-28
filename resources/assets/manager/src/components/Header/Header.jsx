import React from 'react';
import withStyles from 'react-jss';
import Panel from 'components/Panel';
import Button from "../Button/Button";
import Typography from "../Typography/Typography";
import Link from "../Link/Link";
import Aside from "../Aside/Aside";

class Header extends React.Component {

    state = {
        displayAsideMenu: false
    };

    render() {
        const {
            classes, children = [], onAsideOpen = () => {
            }
        } = this.props;
        const {displayAsideMenu} = this.state;

        return <React.Fragment>
            <Panel className={classes.root}>
                <Button
                    text={
                        <i className="fa fa-bars"></i>
                    }
                    variant="icon"
                    onClick={() => this.setState({displayAsideMenu: true})}/>
                <Typography
                    text="Incomer"/>

                <div className={classes.primaryButtons}>
                    <Button
                        variant="icon"
                        text={
                            <React.Fragment>
                                <Typography
                                    text="logout"/>
                            </React.Fragment>
                        }

                        onClick={() => {
                            localStorage.clear();
                            window.location.replace("/manager");
                        }}
                    />
                </div>


            </Panel>
            <Aside
                onClose={() => this.setState({displayAsideMenu: false})}
                visible={displayAsideMenu}/>
        </React.Fragment>

    }
}

export default withStyles(() => ({
    root: {
        padding: 0,
        gridArea: 'header',
        display: 'flex',
        alignItems: 'center'
    },
    primaryButtons: {
        right: 12,
        lineHeight: '30px',
        position: 'absolute',
        '& a': {
            marginLeft: 12
        }
    },
    asdieAppHeader: {
        display: 'flex',
        marginBottom: 12
    },
}))(Header);