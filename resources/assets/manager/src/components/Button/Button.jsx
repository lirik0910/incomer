import React from 'react';
import withStyles from 'react-jss';

export default withStyles(({ Button }) => ({
	...Button
}))(({ 
	text = 'button', 
	variant = 'default',
	className = '', 
	classes, 
	theme,
	getRef = () => {},
	...properties 
}) => (
	<button 
		{...properties}
		ref={getRef}
		className={classes[variant] +' '+ className}>

		{text}
	</button>
));