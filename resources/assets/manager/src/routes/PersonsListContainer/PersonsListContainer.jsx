import React from 'react';
import withStyles from 'react-jss';

import Header from 'components/Header';
import Button from 'components/Button';
import Typography from 'components/Typography';
import Alert from 'components/Alert';

import PersonsListTable from './PersonsListTable.jsx';
import {Link} from "react-router-dom";
import Tabs from "components/Tabs/Tabs";
// import Tabs from "../../components/Tabs/Tabs";
import Tab from "components/Tab/Tab";


const styles = ({Global, Palette}) => ({
    '@global': {
        ...Global,
        '#root': {
            ...Global['#root'],
            display: 'grid',
            gridTemplateAreas: `
				'header header'
				'page-title control-elements'
				'news-table news-filters'
			`,
            gridTemplateRows: '30px 50px auto',
            gridTemplateColumns: 'auto 352px'
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
    title: {
        gridArea: 'page-title'
    },
    tab: {
        marginTop: 5,
        display: 'inline-block',
    },
    activeTab: {
        borderBottomStyle: 'solid',
        borderBottom: 5,
        borderBottomColor: Palette['color5'],
        cursor: 'pointer'
    },
    tabs: {
        paddingLeft: 15,
    }
});


class PersonsListContainer extends React.PureComponent {

    state = {
        displayAlert: false,
        addNewItemFlag: false,
        tabIndex: 0,
    };

    render = () => {
        const {displayAlert, tabIndex} = this.state;
        const {classes, dataLoadingFlag} = this.props;

        const tabs = [
            {id: 2, title: 'Компании'},
            // {id: 1, title: 'Персоны'},
            // {id: 3, title: 'Крипта'},
        ];

        return <React.Fragment>


            <Header/>
            <div className={classes.tabs}>
                {tabs.map((type, index) => {
                    return (<React.Fragment key={type.id}>
                        <Typography

                            className={classes.tab + (tabIndex === index ? ' ' + classes.activeTab : '')}
                            onClick={() => this.setState({tabIndex: index})}
                            text={type.title}
                            variant="title"/>

                    </React.Fragment>)
                })}

            </div>

            <div className={classes.control}>
                <Button
                    variant="link"
                    color="secondary"
                    text={
                        <React.Fragment>
                            <Link to={`/persons/${tabs[tabIndex].id}/create`}>
                                <i className="fa fa-plus"></i>
                                Добавить компанию
                            </Link>
                        </React.Fragment>
                    }
                />

            </div>


            {tabs.map((type, index) => tabIndex === index ? <PersonsListTable key={type.id} type_id={type.id}/> : '')}

            {displayAlert ?
                <Alert text={displayAlert}/> : ''}
        </React.Fragment>
    }
}


export default withStyles(styles)(PersonsListContainer);