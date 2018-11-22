import React from 'react';
import LazyLoad from 'react-image-lazy-load';
import withStyles from 'react-jss';
import Logo from 'static/logo.png';

export default withStyles(() => ({
	root: {
		fontSize: 13,
		marginLeft: 18,
		marginRight: 8
	}
}))(({ text, classes }) => (
	<LazyLoad 
		loaderImage 
		imageProps={{ 
			src: Logo, 
			className: classes.root 
		}} />
));