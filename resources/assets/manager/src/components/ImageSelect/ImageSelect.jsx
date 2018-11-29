import React from 'react';
import withStyles from 'react-jss'

import Button from 'components/Button';
import Typography from 'components/Typography';

import {newsListPageErrorMessage,} from 'actions/newsListPageActions';
import {changeDisplayFilesManagerSelectAction} from 'actions/filesListActions.js';

import {
    createItem,
    editItem,
    fetchCategories,
    fetchSections,
    fetchTags,
    fetchData,
    fetchNewsWithPatterns
} from 'routes/ManageMediaItemsContainer/logic/index';
import Panel from "../../components/Panel/Panel";

import FilesManager from "routes/ManageMediaItemsContainer/FilesManager";


const styles = ({Global, Palette}) => ({

    filesContainer: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        display: 'grid',
        gridTemplateAreas: `
				'header header'
				'page-title control-elements'
				'files-list-manager folders-list-manager'
			`,
        gridTemplateRows: '0px 40px auto',
        gridTemplateColumns: '50% 50%',
        backgroundColor: Palette['color8']
    }
});

class ImageSelect extends React.Component {


    state = {
        url: '',
    };

    render = () => {
        const {url, is_open } = this.state;
        const {
            classes,
            onSelect = () => {},
            link,
        } = this.props;


        return <React.Fragment>
            <div>
                <Button
                    variant="link"
                    color="secondary"
                    onClick={() => {

                        this.setState({is_open: true});
                        // changeDisplayFilesManagerSelectAction(true);
                    }}
                    text={
                        <>Выбрать изображение</>
                    }/>

                <div>
                    {url ? <img width='100' src={url} alt=""/> :
                        <img width='100' src={link} alt=""/>}
                </div>
            </div>
            {is_open ?
                <Panel className={classes.filesContainer}>

                    <Typography
                        text="Выберите изображение"
                        variant="title"/>
                    <Button
                        style={{float: 'right'}}
                        variant="link"
                        color="secondary"
                        onClick={() => {
                            this.setState({is_open: false});

                        }}
                        text={
                            <>
                                <i className="fa fa-close"></i>
                                Отмена
                            </>
                        }/>

                    <FilesManager
                        isSelectable={true}
                        onSelect={(image) => {
                            console.log(image);
                            this.setState({url: image.url});
                            // changeDisplayFilesManagerSelectAction(false);
                            this.setState({is_open: false});

                            onSelect(image);
                        }}
                    />

                </Panel> : ''}
        </React.Fragment>
    }
}


export default withStyles(styles)(ImageSelect);

