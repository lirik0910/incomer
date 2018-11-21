import React from 'react';
import withStyles from 'react-jss';
import LazyLoad from 'react-image-lazy-load';

import Typography from 'components/Typography';
import Button from 'components/Button';

export default withStyles(({ Palette: { color7 } }) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		padding: '8px 0',
		borderBottom: '1px solid '+ color7,
		'& i.fa-file': {
			width: 26,
			fontSize: 26,
			marginRight: 14,
			color: color7
		}
	},
	name: {
		display: 'block',
		width: 'calc(100% - 150px)',
		fontSize: 16
	}
}))(({ classes, extension = '', name = '', path = '' }) => (
	<div className={classes.root}>
		<input type="checkbox" />
		
		{(() => {
			switch (extension) {
				case 'jpg':
				case 'jpeg':
				case 'png':
				case 'gif':
					return <LazyLoad loaderImage 
						imageProps={{ 
							src: path + name, 
							className: classes.image 
						}} />

				default:
					return <i className="fa fa-file"></i>

			}
		})()}

		<Typography text={name} className={classes.name} />
		<Button variant="icon"
			text={<i className="fa fa-arrows"></i>} />
		<Button variant="icon"
			text={<i className="fa fa-edit"></i>} />
		<Button variant="icon"
			text={<i className="fa fa-close"></i>} />
	</div>
));