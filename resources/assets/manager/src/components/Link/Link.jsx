import React from 'react';
import withStyles from 'react-jss';
import { Link } from 'react-router-dom';

export default withStyles(({ Link }) => ({
	...Link
}))(({ 
	text, 
	variant = 'default',
	children = [],
	className = '', 
	classes, 
	theme,
	getRef = () => {},
	...properties 
}) => (
	<Link {...properties} ref={getRef}
		className={classes[variant] +' '+ className}>

		{text || children}
	</Link>
));