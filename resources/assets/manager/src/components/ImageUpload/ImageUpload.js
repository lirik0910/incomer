import React from 'react';
import withStyles from 'react-jss';

const styles = ({Palette: {color7}}) => ({
    h3: {
        marginLeft: 15
    },
    fileInput: {
        borderBottom: '4px solid #d3d3d3',
        borderRight: '4px solid #d3d3d3',
        borderTop: '1px solid #000',
        borderLeft: '1px solid #000',
        padding: '10px',
        margin: '15px',
        width: 'calc(100% - 48px)',
        cursor: 'pointer',
    },
    imgPreview: {
        textAlign: 'center',
        margin: '5px 15px',
        height: '200px',
        width: 'calc(100% - 24px)',
        borderLeft: '1px solid #808080',
        borderRight: '1px solid #808080',
        borderTop: '5px solid #808080',
        borderBottom: '5px solid #808080',
        '&>img':{
        maxWidth: '100%',
        height: '100%',

        }
    },
    previewText: {
        width: '100%',
        marginTop: '20px',
    },
    submitButton: {
        padding: '12px',
        marginLeft: '10px',
        background: '#fff',
        border: '4px solid #d3d3d3',
        borderRadius: '15px',
        fontWeight: '700',
        fontSize: '10pt',
        cursor: 'pointer',
    },
    'submitButton:hover': {
        background: '#efefef',
    },
    centerText: {
        textAlign: 'center',
        width: '500px',
    }
});

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {file: '',imagePreviewUrl: ''};
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file);
        this.props.onChange(file);
    }

    render() {
        const { classes, currentItem } = this.props;
        let {imagePreviewUrl} = this.state;
        let imagePreview = null;

        if (imagePreviewUrl || (currentItem && currentItem.url)) {
            imagePreview = (<img src={imagePreviewUrl || currentItem.url} />);
        } else {
            imagePreview = (<div className={classes.previewText}>Please select an Image for Preview</div>);
        }

        return (
            <div >
                <form onSubmit={(e)=>this._handleSubmit(e)}>
                    <input className={classes.fileInput}
                           type="file"
                           onChange={(e)=>this._handleImageChange(e)} />
                </form>
                <div className={classes.imgPreview}>
                    {imagePreview}
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(ImageUpload);