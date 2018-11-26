import React from 'react';
import withStyles from 'react-jss';
import LazyLoad from 'react-image-lazy-load';

import Typography from 'components/Typography';
import Button from 'components/Button';

export default withStyles(({Palette: {color7}}) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        padding: '8px 0',
        borderBottom: '1px solid ' + color7,
        '& i.fa-file': {
            width: 26,
            fontSize: 26,
            marginRight: 14,
            color: color7
        }
    },
    textContainer: {
        flexGrow: 3,
    },
    name: {
        display: 'block',
        // width: 'calc(100% - 100px)',
        fontSize: 16
    },
    title: {
        display: 'block',
        // width: '100%',
        marginLeft: 10,
        cursor: 'pointer',
    },
    image: {
        width: 100,
        cursor: 'pointer',
        display: 'block',
    }
}))(({
         classes, extension = '', id = false, name = '', url = '', title = '', description = '', onDelete = () => {}, onEdit = () => {
    }
     }) => (
    <div className={classes.root}
    >
        {/*<input type="checkbox"/>*/}

        {(() =>
                <React.Fragment >

                    <LazyLoad loaderImage
                              imageProps={{
                                  src: url,
                                  onClick:() => onEdit(id),
                                  title: title,
                                  className: classes.image
                              }}/>
                    <div className={classes.textContainer}>

                        <Typography text={title} className={classes.title}/>
                        <Typography variant='label' text={description} className={classes.title}/>
                    </div>

                </React.Fragment>


        )()}

        <Typography text={name} className={classes.name}/>
        <Button variant="icon"
                text={<i className="fa fa-edit"></i>}
                onClick={() => onEdit(id)}/>
        <Button variant="icon"
                text={<i className="fa fa-close"></i>}
                onClick={() => onDelete(id)}
                />
    </div>
));