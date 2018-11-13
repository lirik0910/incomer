import React from 'react';
import withStyles from 'react-jss';

export default withStyles(({ Typography }) => ({
	...Typography
}))(({ 
	text = 'text', 
	variant = 'default',
	className = '', 
	classes, 
	theme,
	getRef = () => {},
	...properties 
}) => (
	<span {...properties} ref={getRef}
		className={classes[variant] +' '+ className}>

		{text}
	</span>
));