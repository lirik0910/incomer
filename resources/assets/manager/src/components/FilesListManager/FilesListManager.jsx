import React from 'react';
import withStyles from 'react-jss';

import Panel from 'components/Panel';
import Button from 'components/Button';
import Search from 'components/Search';
import Typography from 'components/Typography';

const styles = ({Palette: {color7}}) => ({
    root: {
        gridArea: 'files-list-manager',
        width: 'calc(100% - 48px)',
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        margin: 12,
        '& > button': {
            marginRight: 12
        }
    },
    search: {
        width: '100%',
        marginTop: 12,
        marginBottom: 12
    },
    list: {
        width: '100%',
        height: 'calc(100% - 24px)',
        overflowY: 'auto'
    },
    control: {
        width: '100%',
        borderBottom: '1px dashed ' + color7,
        '& > input[type="checkbox"]': {
            marginRight: 12
        }
    }
});

class FilesListManager extends React.PureComponent {
    render = () => {
        const {
            classes, children = [], onCreate = () => {
            }
        } = this.props;

        return <Panel className={classes.root}>
            <Button
                variant="tab"
                onClick={onCreate}
                text={<React.Fragment>
                    Create file <i className="fa fa-plus"></i>
                </React.Fragment>}
            />
            {/*<Button */}
            {/*variant="tab" */}
            {/*text={<React.Fragment>*/}
            {/*Delete selected <i className="fa fa-close"></i>*/}
            {/*</React.Fragment>} />*/}
            <Search className={classes.search}/>
            <div className={classes.control}>
                {/*<Typography text="Select all" /> */}
                {/*<input type="checkbox" />*/}
                <Typography text="Sort by name"/>
                <Button
                    variant="icon"
                    text={<i className="fa fa-sort-up"></i>}/>
            </div>
            <div className={classes.list}>
                {children}
            </div>
        </Panel>
    }
}

export default withStyles(styles)(FilesListManager);